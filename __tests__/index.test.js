const { getCryptoPrice } = require('../index');
const axios = require('axios');

jest.mock('axios');

describe('getCryptoPrice', () => {
  it('returns the price for a valid currency', async () => {
    axios.get.mockResolvedValue({ data: { bitcoin: { usd: 12345 } } });
    const price = await getCryptoPrice('bitcoin');
    expect(price).toBe(12345);
  });

  it('throws an error for an invalid currency', async () => {
    axios.get.mockResolvedValue({ data: {} });
    await expect(getCryptoPrice('notacoin')).rejects.toThrow('Currency not found.');
  });

  it('throws an error if the API call fails', async () => {
    axios.get.mockRejectedValue(new Error('Network error'));
    await expect(getCryptoPrice('bitcoin')).rejects.toThrow('Failed to fetch price.');
  });
});
