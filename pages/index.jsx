import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Purpose from '../components/Purpose'
import Value from '../components/Value'
import About from '../components/About'
import Services from '../components/Services'
import Story from '../components/Story'
import Blog from '../components/Blog'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

function Home() {
  return (
    <div>
      <Head>
        <title>Protaroom</title>
        <link rel="icon" href="https://i.ibb.co/zZYvg9G/protaroomfavicon.png" />
      </Head>
      <div className="hero-container relative">
        <Header />
        <Hero />
        <Purpose />
        <Value />
        <About />
        <Services />
        <Story />
        <Blog />
        {/* <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          stopOnHover={false}
          swipeable
          emulateTouch
          showArrows={false}
          showIndicators={false}
          showStatus={false}
        >
          <div>
            <img src="https://i.ibb.co/jRNS3Hv/D3.jpg" />
          </div>
          <div>
            <img src="https://i.ibb.co/L6JQxDC/T11.png" />
          </div>
          <div>
            <img src="https://i.ibb.co/5xwpGDr/B1-1.jpg" />
          </div>
        </Carousel> */}
      </div>
    </div>
  )
}

export default Home
