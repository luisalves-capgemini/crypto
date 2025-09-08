const inquirer = require('inquirer');
const axios = require('axios');

async function getCryptoPrice(symbol) {
  try {
    // Using CoinGecko API (no API key required)
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`;
    const response = await axios.get(url);
    if (response.data && response.data[symbol] && response.data[symbol].usd) {
      return response.data[symbol].usd;
    } else {
      throw new Error('Currency not found.');
    }
  } catch (error) {
    throw new Error('Failed to fetch price. ' + error.message);
  }
}

async function main() {
  const { currency } = await inquirer.prompt([
    {
      type: 'input',
      name: 'currency',
      message: 'Enter the cryptocurrency (e.g., bitcoin, ethereum):',
      validate: input => input ? true : 'Please enter a currency.'
    }
  ]);

  try {
    const price = await getCryptoPrice(currency.toLowerCase());
    console.log(`The current price of ${currency} is $${price} USD.`);
  } catch (err) {
    console.error(err.message);
  }
}

if (require.main === module) {
  main();
}

module.exports = { getCryptoPrice };
