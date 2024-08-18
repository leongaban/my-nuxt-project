import { $fetch } from 'ofetch'

interface CryptoData {
  symbol: string
  name: string
  price: string
}

export async function fetchCryptoCoins(): Promise<CryptoData[]> {
  try {
    const response = await $fetch<CryptoData[]>(
      'https://66c18b6ff83fffcb58798df6.mockapi.io/api/v1/crypto'
    )
    return response
  } catch (error) {
    console.error('Error fetching crypto coins:', error)
    throw error
  }
}
