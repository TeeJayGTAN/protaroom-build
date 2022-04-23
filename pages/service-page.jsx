import Image from 'next/image'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Header from '../components/Header'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Head from 'next/head'

function service() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="relative">
      <Head>
        <title>Protaroom | Service </title>
        <link rel="icon" href="https://i.ibb.co/zZYvg9G/protaroomfavicon.png" />
      </Head>
      <Header />
      <div className="services md:flex-custom-md md:flex-custom-md-col-gap md:flex-custom-md-col mx-auto mt-20   mb-20 overflow-hidden px-4 font-medium md:max-w-7xl">
        <div
          data-aos="fade-up"
          className="services__title  md:mb-10-custom mb-12 text-3xl font-medium md:text-4xl"
        >
          <h2>Our Services</h2>
        </div>
        <div
          data-aos="fade-up"
          className="services__sections mx-auto mb-24 w-full max-w-md place-items-center overflow-hidden px-6 md:grid md:max-w-screen-md md:grid-cols-2 md:place-items-center md:gap-20 lg:max-w-screen-lg"
        >
          <div className="service__section-img-page">
            {/* <Image
              src="https://i.ibb.co/5r4Zq7s/96c8c78e6b1f64307f3ecaaf6ac5635c.jpg"
              width={450}
              height={350}
              alt=""
              className="overflow-hidden"
            /> */}{' '}
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              stopOnHover={false}
              swipeable
              emulateTouch
              // showArrows={false}
              // showIndicators={false}
              showStatus={false}
            >
              <div className=" rounded">
                <img
                  className="overflow-hidden rounded"
                  src="https://i.ibb.co/mCz9QBV/10.jpg"
                />
              </div>
              <div className=" rounded">
                <img
                  className="overflow-hidden rounded"
                  src="https://i.ibb.co/GdM4FSR/30.jpg"
                />
              </div>
              <div className=" rounded">
                <img
                  className="overflow-hidden rounded"
                  src="https://i.ibb.co/0GmRtZf/26.jpg"
                />
              </div>
            </Carousel>
            {/* https://i.ibb.co/sCKRL0s/34.jpg https://i.ibb.co/0YZY4Th/33.jpg
              https://i.ibb.co/tMcBpZp/28.jpg https://i.ibb.co/0GmRtZf/26.jpg
              https://i.ibb.co/WsY2Vqg/3.jpg https://i.ibb.co/zN2tjpf/29.jpg
              https://i.ibb.co/GdM4FSR/30.jpg https://i.ibb.co/Xj0VccD/32.jpg
              https://i.ibb.co/Bt20BnL/6.jpg https://i.ibb.co/mCz9QBV/10.jpg */}
          </div>
          <div className="services__section w-full rounded  px-0 ">
            <div className="">
              <div className="services__section-title mt-6 w-full text-2xl leading-relaxed  md:text-3xl ">
                <h3>Digital Designs</h3>
              </div>
              <div className="services__section-body mt-5 w-full md:max-w-md md:text-lg lg:leading-loose">
                <p>
                  Digital design is at the forefront of our core services. We
                  excel at creating digital products which convey value and fit
                  the needs of our clients. We aim to design intuitive digital
                  products that bring delight and help both businesses and users
                  reach their goals.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="services__sections mx-auto mb-24 w-full max-w-md place-items-center overflow-hidden px-6 md:grid md:max-w-screen-md md:grid-cols-2 md:place-items-center md:gap-20 lg:max-w-screen-lg"
        >
          <div className="service__section-img-page">
            {/* <Image
              src="https://i.ibb.co/5r4Zq7s/96c8c78e6b1f64307f3ecaaf6ac5635c.jpg"
              width={450}
              height={350}
              alt=""
              className="overflow-hidden"
            /> */}{' '}
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              stopOnHover={false}
              swipeable
              emulateTouch
              // showArrows={false}
              // showIndicators={false}
              showStatus={false}
            >
              <div className=" rounded">
                <img
                  className="overflow-hidden rounded"
                  src="https://i.ibb.co/mCz9QBV/10.jpg"
                />
              </div>
              <div className=" rounded">
                <img
                  className="overflow-hidden rounded"
                  src="https://i.ibb.co/GdM4FSR/30.jpg"
                />
              </div>
              <div className=" rounded">
                <img
                  className="overflow-hidden rounded"
                  src="https://i.ibb.co/0GmRtZf/26.jpg"
                />
              </div>
            </Carousel>
            {/* https://i.ibb.co/sCKRL0s/34.jpg https://i.ibb.co/0YZY4Th/33.jpg
              https://i.ibb.co/tMcBpZp/28.jpg https://i.ibb.co/0GmRtZf/26.jpg
              https://i.ibb.co/WsY2Vqg/3.jpg https://i.ibb.co/zN2tjpf/29.jpg
              https://i.ibb.co/GdM4FSR/30.jpg https://i.ibb.co/Xj0VccD/32.jpg
              https://i.ibb.co/Bt20BnL/6.jpg https://i.ibb.co/mCz9QBV/10.jpg */}
          </div>
          <div
            data-aos="fade-up"
            className="services__section w-full rounded  px-0 "
          >
            <div className="">
              <div className="services__section-title mt-6 w-full text-2xl leading-relaxed  md:text-3xl ">
                <h3>Interior & Experiential Design</h3>
              </div>
              <div className="services__section-body mt-5 w-full md:max-w-xl md:text-lg lg:leading-relaxed">
                <p>
                  Unique among design firms, Protaroom designs spaces that
                  respond to the needs of people and the environment. Our
                  designers are rooted in technical excellence, driven by
                  imagination, and focused on a solitary goal: to deliver
                  solutions that inspire clients and communities. As humans, we
                  spend a significant portion of our daily lives inside. We
                  believe our emotional and physical well-being is dramatically
                  impacted by the places where we live, work, and play.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="services__sections mx-auto mb-24 w-full max-w-md place-items-center overflow-hidden px-6 md:grid md:max-w-screen-md md:grid-cols-2 md:place-items-center md:gap-20 lg:max-w-screen-lg"
        >
          <div className="service__section-img-page">
            {/* <Image
              src="https://i.ibb.co/5r4Zq7s/96c8c78e6b1f64307f3ecaaf6ac5635c.jpg"
              width={450}
              height={350}
              alt=""
              className="overflow-hidden"
            /> */}{' '}
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              stopOnHover={false}
              swipeable
              emulateTouch
              // showArrows={false}
              // showIndicators={false}
              showStatus={false}
            >
              <div className=" rounded">
                <img
                  className="overflow-hidden rounded"
                  src="https://i.ibb.co/mCz9QBV/10.jpg"
                />
              </div>
              <div className=" rounded">
                <img
                  className="overflow-hidden rounded"
                  src="https://i.ibb.co/GdM4FSR/30.jpg"
                />
              </div>
              <div className=" rounded">
                <img
                  className="overflow-hidden rounded"
                  src="https://i.ibb.co/0GmRtZf/26.jpg"
                />
              </div>
            </Carousel>
            {/* https://i.ibb.co/sCKRL0s/34.jpg https://i.ibb.co/0YZY4Th/33.jpg
              https://i.ibb.co/tMcBpZp/28.jpg https://i.ibb.co/0GmRtZf/26.jpg
              https://i.ibb.co/WsY2Vqg/3.jpg https://i.ibb.co/zN2tjpf/29.jpg
              https://i.ibb.co/GdM4FSR/30.jpg https://i.ibb.co/Xj0VccD/32.jpg
              https://i.ibb.co/Bt20BnL/6.jpg https://i.ibb.co/mCz9QBV/10.jpg */}
          </div>
          <div className="services__section w-full rounded  px-0 ">
            <div className="">
              <div className="services__section-title mt-6 w-full text-2xl leading-relaxed  md:text-3xl ">
                <h3>Brand</h3>
              </div>
              <div className="services__section-body mt-5 w-full md:max-w-md md:text-lg lg:leading-loose">
                <p>
                  Protaroom assist client to convert their strategy into
                  results. We help our clients achieve their vision for a better
                  future and meet goals by leveraging design’s power to generate
                  innovative solutions that impact real transformation
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="services__sections mx-auto mb-24 w-full max-w-md place-items-center overflow-hidden px-6 md:grid md:max-w-screen-md md:grid-cols-2 md:place-items-center md:gap-20 lg:max-w-screen-lg"
        >
          <div className="service__section-img-page">
            {/* <Image
              src="https://i.ibb.co/5r4Zq7s/96c8c78e6b1f64307f3ecaaf6ac5635c.jpg"
              width={450}
              height={350}
              alt=""
              className="overflow-hidden"
            /> */}{' '}
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              stopOnHover={false}
              swipeable
              emulateTouch
              // showArrows={false}
              // showIndicators={false}
              showStatus={false}
            >
              <div className=" rounded">
                <img
                  className="overflow-hidden rounded"
                  src="https://i.ibb.co/mCz9QBV/10.jpg"
                />
              </div>
              <div className=" rounded">
                <img
                  className="overflow-hidden rounded"
                  src="https://i.ibb.co/GdM4FSR/30.jpg"
                />
              </div>
              <div className=" rounded">
                <img
                  className="overflow-hidden rounded"
                  src="https://i.ibb.co/0GmRtZf/26.jpg"
                />
              </div>
            </Carousel>
            {/* https://i.ibb.co/sCKRL0s/34.jpg https://i.ibb.co/0YZY4Th/33.jpg
              https://i.ibb.co/tMcBpZp/28.jpg https://i.ibb.co/0GmRtZf/26.jpg
              https://i.ibb.co/WsY2Vqg/3.jpg https://i.ibb.co/zN2tjpf/29.jpg
              https://i.ibb.co/GdM4FSR/30.jpg https://i.ibb.co/Xj0VccD/32.jpg
              https://i.ibb.co/Bt20BnL/6.jpg https://i.ibb.co/mCz9QBV/10.jpg */}
          </div>
          <div
            data-aos="fade-up"
            className="services__section w-full rounded  px-0 "
          >
            <div className="">
              <div className="services__section-title mt-6 w-full text-2xl leading-relaxed  md:text-3xl ">
                <h3>Print Designs</h3>
              </div>
              <div className="services__section-body mt-5 w-full md:max-w-md md:text-lg lg:leading-loose">
                <p>
                  We have an expertise in aligning your brand with the
                  promotional need it requires. Our services include Book design
                  , e-book design, campaigns, signage ,editorial design,
                  brochure , proposals and more
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="services__sections mx-auto mb-24 w-full max-w-md place-items-center overflow-hidden px-6 md:grid md:max-w-screen-md md:grid-cols-2 md:place-items-center md:gap-20 lg:max-w-screen-lg"
        >
          <div className="service__section-img-page">
            {/* <Image
              src="https://i.ibb.co/5r4Zq7s/96c8c78e6b1f64307f3ecaaf6ac5635c.jpg"
              width={450}
              height={350}
              alt=""
              className="overflow-hidden"
            /> */}{' '}
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              stopOnHover={false}
              swipeable
              emulateTouch
              // showArrows={false}
              // showIndicators={false}
              showStatus={false}
            >
              <div className=" rounded">
                <img
                  className="overflow-hidden rounded"
                  src="https://i.ibb.co/mCz9QBV/10.jpg"
                />
              </div>
              <div className=" rounded">
                <img
                  className="overflow-hidden rounded"
                  src="https://i.ibb.co/GdM4FSR/30.jpg"
                />
              </div>
              <div className=" rounded">
                <img
                  className="overflow-hidden rounded"
                  src="https://i.ibb.co/0GmRtZf/26.jpg"
                />
              </div>
            </Carousel>
            {/* https://i.ibb.co/sCKRL0s/34.jpg https://i.ibb.co/0YZY4Th/33.jpg
              https://i.ibb.co/tMcBpZp/28.jpg https://i.ibb.co/0GmRtZf/26.jpg
              https://i.ibb.co/WsY2Vqg/3.jpg https://i.ibb.co/zN2tjpf/29.jpg
              https://i.ibb.co/GdM4FSR/30.jpg https://i.ibb.co/Xj0VccD/32.jpg
              https://i.ibb.co/Bt20BnL/6.jpg https://i.ibb.co/mCz9QBV/10.jpg */}
          </div>
          <div className="services__section w-full rounded  px-0 ">
            <div className="">
              <div className="services__section-title mt-6 w-full text-2xl leading-relaxed  md:text-3xl ">
                <h3>Motion Graphics</h3>
              </div>
              <div className="services__section-body mt-5 w-full md:max-w-md md:text-lg lg:leading-loose">
                <p>
                  Motion videos are more engaging and interactive, we create
                  videos that allow individuals and corporate entities to
                  communicate their ideas in a short and efficient way,
                  promising exceptional conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="services__sections mx-auto mb-24 w-full max-w-md place-items-center px-6 md:grid md:max-w-screen-md md:grid-cols-2 md:place-items-center md:gap-20 lg:max-w-screen-lg"
        >
          <div className="service__section-img-page">
            {/* <Image
              src="https://i.ibb.co/5r4Zq7s/96c8c78e6b1f64307f3ecaaf6ac5635c.jpg"
              width={450}
              height={350}
              alt=""
              className="overflow-hidden"
            /> */}{' '}
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              stopOnHover={false}
              swipeable
              emulateTouch
              // showArrows={false}
              // showIndicators={false}
              showStatus={false}
            >
              <div className=" rounded">
                <img
                  className="overflow-hidden rounded"
                  src="https://i.ibb.co/mCz9QBV/10.jpg"
                />
              </div>
              <div className=" rounded">
                <img
                  className="overflow-hidden rounded"
                  src="https://i.ibb.co/GdM4FSR/30.jpg"
                />
              </div>
              <div className=" rounded">
                <img
                  className="overflow-hidden rounded"
                  src="https://i.ibb.co/0GmRtZf/26.jpg"
                />
              </div>
            </Carousel>
            {/* https://i.ibb.co/sCKRL0s/34.jpg https://i.ibb.co/0YZY4Th/33.jpg
              https://i.ibb.co/tMcBpZp/28.jpg https://i.ibb.co/0GmRtZf/26.jpg
              https://i.ibb.co/WsY2Vqg/3.jpg https://i.ibb.co/zN2tjpf/29.jpg
              https://i.ibb.co/GdM4FSR/30.jpg https://i.ibb.co/Xj0VccD/32.jpg
              https://i.ibb.co/Bt20BnL/6.jpg https://i.ibb.co/mCz9QBV/10.jpg */}
          </div>
          <div
            data-aos="fade-up"
            className="services__section w-full rounded  px-0 "
          >
            <div className="">
              <div className="services__section-title mt-6 w-full text-2xl leading-relaxed  md:text-3xl ">
                <h3>Artworks Design and Installation</h3>
              </div>
              <div className="services__section-body mt-5 w-full md:max-w-md md:text-lg lg:leading-loose">
                <p>
                  At Protaroom, we engage the beauty of art to elevate people
                  spaces, ranging from elegant canvass, paintings , sketches to
                  Abstract design , our singular desire is to inspire
                  productivity with aesthetics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default service
