import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Purpose from '../components/Purpose'
import Value from '../components/Value'
import About from '../components/About'
import Services from '../components/Services'
import Story from '../components/Story'
import Blogs from '../components/Blogs'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
// import { sanityClient } from '../sanity'
import Bodyhomepage from '../components/Bodyhomepage'
import Showservices from '../components/Showservices'

export default function Home({ posts }) {
  console.log(posts)
  return (
    <div>
      <Head>
        <title>Protaroom</title>
        <link rel="icon" href="../favicon64.png" />
      </Head>
      <div className="hero-container relative">
        <Header />
        <Hero />
        <Showservices />
        {/* <Purpose />
        <Value /> */}
        {/* <Bodyhomepage /> */}
        {/* <About /> */}
        {/* <Services /> */}
        {/* <Story /> */}
        {/* <Blogs posts={posts} /> */}
        <Contact />
        <Footer />
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

// export const getServerSideProps = async () => {
//   const query = `*[_type == "post"] {
//     _id,
//     title,
//     mainImage,
//     description,
//     slug,
//     author -> {
//     name,
//     image
//   }
//   }`

//   const posts = await sanityClient.fetch(query)
//   return {
//     props: {
//       posts,
//     },
//   }
// }
