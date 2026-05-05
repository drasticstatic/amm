# CLAUDE.md — amm

**Status:** 🟡 On hold — DAppU class project, not currently active

---

## Security Rules (Non-Negotiable)

- **Never read, display, or reference `.env` files** — in any repo
- **Never read private keys, seed phrases, wallet files, mnemonic files, or keystore files**
- **Never read or expose API key files** (service accounts, Google credentials, exchange keys, etc.)
- **Never commit secrets** — warn and stop if staged
- If an example env file is needed, create it with placeholder values only (e.g. `API_KEY=your_api_key_here`)
- **Web3:** Never display wallet addresses or private keys from any secret file

---

## Context Rules

- Memory files live in `~/.claude/projects/.../memory/` — MEMORY.md auto-loaded each session
- AGENT-SYNC is private — never reference its contents in public-facing files
- Cross-repo privacy firewall: Alfred does not pass trading or divorce-custody data between repos without explicit instruction

---

## This Repo

**Purpose:** DAppU Automated Market Maker (AMM) class project — Solidity smart contract implementation.

**Status:** On hold. Christopher is not actively working on this repo.

**When Active:** Auggie leads code builds (Pine Script, Python, MCP servers). Fortuna provides trading context if relevant. Kavanah handles spec-driven orchestration.

---

## Active Work

Primary active repo: `trading-assistant` — Fortuna's domain for trading analysis, session reviews, and coaching documentation.

---

## Cross-Repo Rules

See `AGENT-SYNC/CROSS_REPO_RULES.md` in `trading-assistant` for full governance.
