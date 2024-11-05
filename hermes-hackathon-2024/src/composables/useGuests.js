// import axios from 'axios'

export default function () {
  const guests = [
    {
      name: 'Nea Ion',
      picture: "/imgs/cet.jpg",
      title: 'Dr. Dr. Dr. Dr.',
      company: 'UBB',
    },
    {
      name: 'Nea GICA',
      picture: '/imgs/cet.jpg',
      title: 'Dr. Dr. Dr. Dr.',
      company: 'Cool Company',
    },
    {
      name: 'Nea GICA',
      picture: '/imgs/cet.jpg',
      title: 'Dr. Dr. Dr. Dr.',
      company: 'Cool Company',
    },
    {
      name: 'Nea GICA',
      picture: '/imgs/cet.jpg',
      title: 'Dr. Dr. Dr. Dr.',
      company: 'Cool Company',
    },
    {
      name: 'Nea GICA',
      picture: '/imgs/cet.jpg',
      title: 'Dr. Dr. Dr. Dr.',
      company: 'Cool Company',
    },
    {
      name: 'Nea GICA',
      picture: '/imgs/cet.jpg',
      title: 'Dr. Dr. Dr. Dr.',
      company: 'Cool Company',
    },
  ]

  // const sponsors = await axios.get('https://apis.societatea-hermes.ro/v1/guests')

  return {
    guests,
  }
}
