import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Purpose from '../components/Purpose'
import Value from '../components/Value'
import About from '../components/About'
import Services from '../components/Services'
import Story from '../components/Story'

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
        <Purpose />
        <Value />
        <About />
        <Services />
        <Story />
      </div>
    </div>
  )
}

export default Home
