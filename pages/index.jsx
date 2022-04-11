import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'

function Home() {
  return (
    <div>
      <Head>
        <title>Protaroom</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="hero-container relative">
        <Header />
        <Hero />
      </div>
    </div>
  )
}

export default Home
