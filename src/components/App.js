import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { ethers } from 'ethers'

// Components
import Navigation from './Navigation';
import Tabs from './Tabs';
import Swap from './Swap';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import Charts from './Charts';
import GHPagesBanner from './GHPagesBanner';

import {
  loadProvider,
  loadNetwork,
  loadAccount,
  loadTokens,
  loadAMM
} from '../store/interactions'

function App() {

  const dispatch = useDispatch()

  const loadBlockchainData = async () => {
    try {
      // Initiate provider
      const provider = await loadProvider(dispatch)

      // Fetch current network's chainId (e.g. hardhat: 31337, kovan: 42)
      const chainId = await loadNetwork(provider, dispatch)

      // Reload page when network changes
      if (window.ethereum) {
        window.ethereum.on('chainChanged', () => {
          window.location.reload()
        })

        // Fetch current account from Metamask when changed
        window.ethereum.on('accountsChanged', async () => {
          await loadAccount(dispatch)
        })
      }

      // Initiate contracts
      await loadTokens(provider, chainId, dispatch)
      await loadAMM(provider, chainId, dispatch)
    } catch (err) {
      console.warn('Demo mode: contracts not deployed to this network', err)
    }
  }

  useEffect(() => {
    loadBlockchainData()
  }, []);

  return(
    <>
    <GHPagesBanner />
    <Container>
      <HashRouter>

        <Navigation />

        <hr />

        <Tabs />

        <Routes>
          <Route exact path="/" element={<Swap />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/charts" element={<Charts />} />
        </Routes>
      </HashRouter>
    </Container>
    </>
  )
}

export default App;
