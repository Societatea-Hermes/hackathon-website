import axios from 'axios'

export default async function () {
  const sponsors = [
    {
      name: 'Sponsor 1',
      logo: 'sponsor1.png',
      websiteUrl: 'https://sponsor1.com',
      tier: 'gold',
    },
    {
      name: 'Sponsor 2',
      logo: 'sponsor2.png',
      websiteUrl: 'https://sponsor2.com',
      tier: 'silver',
    },
  ]

  // const sponsors = await axios.get('https://api.sponsors.com')

  return {
    sponsors,
  }
}
