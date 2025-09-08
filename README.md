# Cryptocurrency Price Checker

A Node.js CLI application to check the current price of a cryptocurrency using the CoinGecko API.

## Features
- Prompts the user for a cryptocurrency (e.g., bitcoin, ethereum)
- Fetches the current price in USD
- Displays the price to the user
- Includes unit tests

## Requirements
- Node.js v16 or higher (Node 18+ recommended for best compatibility)

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the application:**
   ```sh
   node index.js
   ```
3. **Run tests:**
   ```sh
   npx jest
   ```

## Project Structure
- `index.js` - Main CLI application
- `__tests__/index.test.js` - Unit tests

## Pipeline
- Add your CI configuration (e.g., GitHub Actions) in `.github/workflows/` (see below for example)

## Example GitHub Actions Workflow
Create `.github/workflows/nodejs.yml`:
```yaml
name: Node.js CI

on:
  push:
    branches: [ developer ]
  pull_request:
    branches: [ developer ]

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [16.x, 18.x]
    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
      - run: npm install
      - run: npx jest
```

## License
MIT
