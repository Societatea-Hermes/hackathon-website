// import axios from 'axios'

export default function () {
  const sponsors = [
    {
      name: 'cloudflight',
      logo: '/imgs/sponsors/cloudflight.png',
      websiteUrl: 'https://cloudflight.io',
      tier: 'powered_by',
    },
    {
      name: 'Flow Traders',
      logo: '/imgs/sponsors/flowtraders.png',
      websiteUrl: 'https://www.flowtraders.com/',
      tier: 'silver',
    },
    {
      name: 'GlobalLogic',
      logo: '/imgs/sponsors/globallogic.png',
      websiteUrl: 'https://www.globallogic.com/',
      tier: 'gold',
    },
    {
      name : '.msg',
      logo: '/imgs/sponsors/msg.png',
      websiteUrl: 'https://www.msg-systems.ro/en',
      tier: 'gold',
    },
    {
      name: 'Arobs',
      logo: '/imgs/sponsors/arobs.png',
      websiteUrl: 'https://www.arobs.com/',
      tier: 'bronze',
    }

  ]

  // const sponsors = await axios.get('https://apis.societatea-hermes.ro/v1/sponsors')

  return {
    sponsors,
  }
}
