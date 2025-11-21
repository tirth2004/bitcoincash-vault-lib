# Bitcoin Cash Vault DApp

A WalletConnect-enabled DApp for Bitcoin Cash on Chipnet that implements a vault contract with dynamic funders and beneficiaries using Layla upgrade loops.

## Features

- **Dynamic Funders & Beneficiaries**: Add funders and beneficiaries dynamically using Layla upgrade loops
- **Vault Contract**: Secure vault with 30-block timeout mechanism
- **Funding**: Authorized funders can deposit BCH into the vault
- **Pinging**: Reset timeout by sending ping transactions
- **Recovery**: Beneficiaries can recover funds after timeout expires
- **WalletConnect Integration**: Connect wallets via WalletConnect protocol

## Project Structure

```
bitcoincash-vault-lib/
├── frontend/          # React + Vite + TypeScript frontend
├── backend/           # Node.js + Express backend
├── contracts/          # CashScript smart contracts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- CashScript compiler (cashc)
- Access to Bitcoin Cash Chipnet

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

3. Start development servers:

```bash
# Start backend
npm run dev:backend

# Start frontend (in another terminal)
npm run dev:frontend
```

## Development

### Contracts

Compile CashScript contracts:
```bash
npm run build:contracts
```

### Backend

The backend API server runs on `http://localhost:3001`

### Frontend

The frontend development server runs on `http://localhost:3000`

## Tech Stack

- **Frontend**: Vite + React + TypeScript
- **Backend**: Node.js + Express + TypeScript
- **Smart Contracts**: CashScript
- **Network**: Bitcoin Cash Chipnet
- **Protocol**: WalletConnect (to be integrated)

## License

MIT
