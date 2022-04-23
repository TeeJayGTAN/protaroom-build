import Image from 'next/image'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
// import { Carousel } from 'react-responsive-carousel'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

function Services(props) {
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //     slidesToSlide: 3, // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     slidesToSlide: 2, // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // }
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className=" -mt-48 mb-24 w-full bg-gray-100  py-8 md:mt-28 ">
      <div
        data-aos="zoom-in"
        className="services-section mx-auto   overflow-hidden  px-4 font-medium md:max-w-7xl"
      >
        <div className="title-s md:mb-10-custom mb-6 text-3xl font-medium md:text-4xl">
          <h2>Our Services</h2>
        </div>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          // className="mx-auto w-screen"
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass="carouselItem"
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 1,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
          // partialVisible={false}
        >
          <div className="card w-96  cursor-pointer rounded-lg ">
            <div className="card-pic h-60 overflow-hidden ">
              <img
                className="w-full transition-transform duration-500"
                src="https://i.ibb.co/mCz9QBV/10.jpg"
                alt=""
              />
            </div>
            <div className="card-body h-24 bg-white p-6 font-bold md:text-lg">
              <span>Digital Design</span>
            </div>
          </div>
          <div className="card  w-96  cursor-pointer rounded-lg ">
            <div className="card-pic h-60 overflow-hidden ">
              <img
                className="w-full transition-transform duration-500"
                src="https://i.ibb.co/mCz9QBV/10.jpg"
                alt=""
              />
            </div>
            <div className="card-body h-24 bg-white p-6 font-bold md:text-lg">
              <span>Motion Design</span>
            </div>
          </div>
          <div className="card  w-96  cursor-pointer rounded-lg ">
            <div className="card-pic h-60 overflow-hidden ">
              <img
                className="w-full transition-transform duration-500"
                src="https://i.ibb.co/mCz9QBV/10.jpg"
                alt=""
              />
            </div>
            <div className="card-body h-24 bg-white p-6 font-bold md:text-lg ">
              <span>Interior and Experiential Design</span>
            </div>
          </div>
          <div className="card  w-96 cursor-pointer rounded-lg  ">
            <div className="card-pic h-60 overflow-hidden ">
              <img
                className="w-full transition-transform duration-500"
                src="https://i.ibb.co/mCz9QBV/10.jpg"
                alt=""
              />
            </div>
            <div className="card-body h-24 bg-white p-6 font-bold md:text-lg">
              <span>Special Design</span>
            </div>
          </div>
          <div className="card w-96  cursor-pointer rounded-lg  ">
            <div className="card-pic h-60 overflow-hidden ">
              <img
                className="w-full transition-transform duration-500"
                src="https://i.ibb.co/mCz9QBV/10.jpg"
                alt=""
              />
            </div>
            <div className="card-body h-24 bg-white p-6 font-bold md:text-lg">
              <span>Great Design</span>
            </div>
          </div>
          <div className="card  w-96 cursor-pointer rounded-lg  ">
            <div className="card-pic h-60 overflow-hidden ">
              <img
                className="w-full transition-transform duration-500"
                src="https://i.ibb.co/mCz9QBV/10.jpg"
                alt=""
              />
            </div>
            <div className="card-body h-24 bg-white p-6 font-bold md:text-lg">
              <span>Work Design</span>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Services

// <div className="services md:flex-custom-md md:flex-custom-md-col-gap md:flex-custom-md-col mx-auto mt-20   mb-20 overflow-hidden px-4 font-medium md:max-w-7xl">
//   <div
//     data-aos="fade-up"
//     className="services__title  md:mb-10-custom mb-12 text-3xl font-medium md:text-4xl"
//   >
//     <h2>Our Services</h2>
//   </div>
//   <div
//     data-aos="fade-up"
//     className="services__sections mx-auto mb-24 w-full max-w-md place-items-center overflow-hidden px-6 md:grid md:max-w-screen-md md:grid-cols-2 md:place-items-center md:gap-20 lg:max-w-screen-lg"
//   >
//     <div className="service__section-img-page">
//       {/* <Image
//           src="https://i.ibb.co/5r4Zq7s/96c8c78e6b1f64307f3ecaaf6ac5635c.jpg"
//           width={450}
//           height={350}
//           alt=""
//           className="overflow-hidden"
//         /> */}{' '}
//       <Carousel
//         autoPlay
//         infiniteLoop
//         showThumbs={false}
//         stopOnHover={false}
//         swipeable
//         emulateTouch
//         // showArrows={false}
//         // showIndicators={false}
//         showStatus={false}
//       >
//         <div className=" rounded">
//           <img
//             className="overflow-hidden rounded"
//             src="https://i.ibb.co/mCz9QBV/10.jpg"
//           />
//         </div>
//         <div className=" rounded">
//           <img
//             className="overflow-hidden rounded"
//             src="https://i.ibb.co/GdM4FSR/30.jpg"
//           />
//         </div>
//         <div className=" rounded">
//           <img
//             className="overflow-hidden rounded"
//             src="https://i.ibb.co/0GmRtZf/26.jpg"
//           />
//         </div>
//       </Carousel>
//       {/* https://i.ibb.co/sCKRL0s/34.jpg https://i.ibb.co/0YZY4Th/33.jpg
//           https://i.ibb.co/tMcBpZp/28.jpg https://i.ibb.co/0GmRtZf/26.jpg
//           https://i.ibb.co/WsY2Vqg/3.jpg https://i.ibb.co/zN2tjpf/29.jpg
//           https://i.ibb.co/GdM4FSR/30.jpg https://i.ibb.co/Xj0VccD/32.jpg
//           https://i.ibb.co/Bt20BnL/6.jpg https://i.ibb.co/mCz9QBV/10.jpg */}
//     </div>
//     <div className="services__section w-full rounded  px-0 ">
//       <div className="">
//         <div className="services__section-title mt-6 w-full text-2xl leading-relaxed  md:text-3xl ">
//           <h3>Digital Designs</h3>
//         </div>
//         <div className="services__section-body mt-5 w-full md:max-w-md md:text-lg lg:leading-loose">
//           <p>
//             Digital design is at the forefront of our core services. We
//             excel at creating digital products which convey value and fit
//             the needs of our clients. We aim to design intuitive digital
//             products that bring delight and help both businesses and users
//             reach their goals.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div
//     data-aos="fade-up"
//     className="services__sections mx-auto mb-24 w-full max-w-md place-items-center overflow-hidden px-6 md:grid md:max-w-screen-md md:grid-cols-2 md:place-items-center md:gap-20 lg:max-w-screen-lg"
//   >
//     <div className="service__section-img-page">
//       {/* <Image
//           src="https://i.ibb.co/5r4Zq7s/96c8c78e6b1f64307f3ecaaf6ac5635c.jpg"
//           width={450}
//           height={350}
//           alt=""
//           className="overflow-hidden"
//         /> */}{' '}
//       <Carousel
//         autoPlay
//         infiniteLoop
//         showThumbs={false}
//         stopOnHover={false}
//         swipeable
//         emulateTouch
//         // showArrows={false}
//         // showIndicators={false}
//         showStatus={false}
//       >
//         <div className=" rounded">
//           <img
//             className="overflow-hidden rounded"
//             src="https://i.ibb.co/mCz9QBV/10.jpg"
//           />
//         </div>
//         <div className=" rounded">
//           <img
//             className="overflow-hidden rounded"
//             src="https://i.ibb.co/GdM4FSR/30.jpg"
//           />
//         </div>
//         <div className=" rounded">
//           <img
//             className="overflow-hidden rounded"
//             src="https://i.ibb.co/0GmRtZf/26.jpg"
//           />
//         </div>
//       </Carousel>
//       {/* https://i.ibb.co/sCKRL0s/34.jpg https://i.ibb.co/0YZY4Th/33.jpg
//           https://i.ibb.co/tMcBpZp/28.jpg https://i.ibb.co/0GmRtZf/26.jpg
//           https://i.ibb.co/WsY2Vqg/3.jpg https://i.ibb.co/zN2tjpf/29.jpg
//           https://i.ibb.co/GdM4FSR/30.jpg https://i.ibb.co/Xj0VccD/32.jpg
//           https://i.ibb.co/Bt20BnL/6.jpg https://i.ibb.co/mCz9QBV/10.jpg */}
//     </div>
//     <div
//       data-aos="fade-up"
//       className="services__section w-full rounded  px-0 "
//     >
//       <div className="">
//         <div className="services__section-title mt-6 w-full text-2xl leading-relaxed  md:text-3xl ">
//           <h3>Interior & Experiential Design</h3>
//         </div>
//         <div className="services__section-body mt-5 w-full md:max-w-xl md:text-lg lg:leading-relaxed">
//           <p>
//             Unique among design firms, Protaroom designs spaces that respond
//             to the needs of people and the environment. Our designers are
//             rooted in technical excellence, driven by imagination, and
//             focused on a solitary goal: to deliver solutions that inspire
//             clients and communities. As humans, we spend a significant
//             portion of our daily lives inside. We believe our emotional and
//             physical well-being is dramatically impacted by the places where
//             we live, work, and play.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div
//     data-aos="fade-up"
//     className="services__sections mx-auto mb-24 w-full max-w-md place-items-center overflow-hidden px-6 md:grid md:max-w-screen-md md:grid-cols-2 md:place-items-center md:gap-20 lg:max-w-screen-lg"
//   >
//     <div className="service__section-img-page">
//       {/* <Image
//           src="https://i.ibb.co/5r4Zq7s/96c8c78e6b1f64307f3ecaaf6ac5635c.jpg"
//           width={450}
//           height={350}
//           alt=""
//           className="overflow-hidden"
//         /> */}{' '}
//       <Carousel
//         autoPlay
//         infiniteLoop
//         showThumbs={false}
//         stopOnHover={false}
//         swipeable
//         emulateTouch
//         // showArrows={false}
//         // showIndicators={false}
//         showStatus={false}
//       >
//         <div className=" rounded">
//           <img
//             className="overflow-hidden rounded"
//             src="https://i.ibb.co/mCz9QBV/10.jpg"
//           />
//         </div>
//         <div className=" rounded">
//           <img
//             className="overflow-hidden rounded"
//             src="https://i.ibb.co/GdM4FSR/30.jpg"
//           />
//         </div>
//         <div className=" rounded">
//           <img
//             className="overflow-hidden rounded"
//             src="https://i.ibb.co/0GmRtZf/26.jpg"
//           />
//         </div>
//       </Carousel>
//       {/* https://i.ibb.co/sCKRL0s/34.jpg https://i.ibb.co/0YZY4Th/33.jpg
//           https://i.ibb.co/tMcBpZp/28.jpg https://i.ibb.co/0GmRtZf/26.jpg
//           https://i.ibb.co/WsY2Vqg/3.jpg https://i.ibb.co/zN2tjpf/29.jpg
//           https://i.ibb.co/GdM4FSR/30.jpg https://i.ibb.co/Xj0VccD/32.jpg
//           https://i.ibb.co/Bt20BnL/6.jpg https://i.ibb.co/mCz9QBV/10.jpg */}
//     </div>
//     <div className="services__section w-full rounded  px-0 ">
//       <div className="">
//         <div className="services__section-title mt-6 w-full text-2xl leading-relaxed  md:text-3xl ">
//           <h3>Brand</h3>
//         </div>
//         <div className="services__section-body mt-5 w-full md:max-w-md md:text-lg lg:leading-loose">
//           <p>
//             Protaroom assist client to convert their strategy into results.
//             We help our clients achieve their vision for a better future and
//             meet goals by leveraging design’s power to generate innovative
//             solutions that impact real transformation
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div
//     data-aos="fade-up"
//     className="services__sections mx-auto mb-24 w-full max-w-md place-items-center overflow-hidden px-6 md:grid md:max-w-screen-md md:grid-cols-2 md:place-items-center md:gap-20 lg:max-w-screen-lg"
//   >
//     <div className="service__section-img-page">
//       {/* <Image
//           src="https://i.ibb.co/5r4Zq7s/96c8c78e6b1f64307f3ecaaf6ac5635c.jpg"
//           width={450}
//           height={350}
//           alt=""
//           className="overflow-hidden"
//         /> */}{' '}
//       <Carousel
//         autoPlay
//         infiniteLoop
//         showThumbs={false}
//         stopOnHover={false}
//         swipeable
//         emulateTouch
//         // showArrows={false}
//         // showIndicators={false}
//         showStatus={false}
//       >
//         <div className=" rounded">
//           <img
//             className="overflow-hidden rounded"
//             src="https://i.ibb.co/mCz9QBV/10.jpg"
//           />
//         </div>
//         <div className=" rounded">
//           <img
//             className="overflow-hidden rounded"
//             src="https://i.ibb.co/GdM4FSR/30.jpg"
//           />
//         </div>
//         <div className=" rounded">
//           <img
//             className="overflow-hidden rounded"
//             src="https://i.ibb.co/0GmRtZf/26.jpg"
//           />
//         </div>
//       </Carousel>
//       {/* https://i.ibb.co/sCKRL0s/34.jpg https://i.ibb.co/0YZY4Th/33.jpg
//           https://i.ibb.co/tMcBpZp/28.jpg https://i.ibb.co/0GmRtZf/26.jpg
//           https://i.ibb.co/WsY2Vqg/3.jpg https://i.ibb.co/zN2tjpf/29.jpg
//           https://i.ibb.co/GdM4FSR/30.jpg https://i.ibb.co/Xj0VccD/32.jpg
//           https://i.ibb.co/Bt20BnL/6.jpg https://i.ibb.co/mCz9QBV/10.jpg */}
//     </div>
//     <div
//       data-aos="fade-up"
//       className="services__section w-full rounded  px-0 "
//     >
//       <div className="">
//         <div className="services__section-title mt-6 w-full text-2xl leading-relaxed  md:text-3xl ">
//           <h3>Print Designs</h3>
//         </div>
//         <div className="services__section-body mt-5 w-full md:max-w-md md:text-lg lg:leading-loose">
//           <p>
//             We have an expertise in aligning your brand with the promotional
//             need it requires. Our services include Book design , e-book
//             design, campaigns, signage ,editorial design, brochure ,
//             proposals and more
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div
//     data-aos="fade-up"
//     className="services__sections mx-auto mb-24 w-full max-w-md place-items-center overflow-hidden px-6 md:grid md:max-w-screen-md md:grid-cols-2 md:place-items-center md:gap-20 lg:max-w-screen-lg"
//   >
//     <div className="service__section-img-page">
//       {/* <Image
//           src="https://i.ibb.co/5r4Zq7s/96c8c78e6b1f64307f3ecaaf6ac5635c.jpg"
//           width={450}
//           height={350}
//           alt=""
//           className="overflow-hidden"
//         /> */}{' '}
//       <Carousel
//         autoPlay
//         infiniteLoop
//         showThumbs={false}
//         stopOnHover={false}
//         swipeable
//         emulateTouch
//         // showArrows={false}
//         // showIndicators={false}
//         showStatus={false}
//       >
//         <div className=" rounded">
//           <img
//             className="overflow-hidden rounded"
//             src="https://i.ibb.co/mCz9QBV/10.jpg"
//           />
//         </div>
//         <div className=" rounded">
//           <img
//             className="overflow-hidden rounded"
//             src="https://i.ibb.co/GdM4FSR/30.jpg"
//           />
//         </div>
//         <div className=" rounded">
//           <img
//             className="overflow-hidden rounded"
//             src="https://i.ibb.co/0GmRtZf/26.jpg"
//           />
//         </div>
//       </Carousel>
//       {/* https://i.ibb.co/sCKRL0s/34.jpg https://i.ibb.co/0YZY4Th/33.jpg
//           https://i.ibb.co/tMcBpZp/28.jpg https://i.ibb.co/0GmRtZf/26.jpg
//           https://i.ibb.co/WsY2Vqg/3.jpg https://i.ibb.co/zN2tjpf/29.jpg
//           https://i.ibb.co/GdM4FSR/30.jpg https://i.ibb.co/Xj0VccD/32.jpg
//           https://i.ibb.co/Bt20BnL/6.jpg https://i.ibb.co/mCz9QBV/10.jpg */}
//     </div>
//     <div className="services__section w-full rounded  px-0 ">
//       <div className="">
//         <div className="services__section-title mt-6 w-full text-2xl leading-relaxed  md:text-3xl ">
//           <h3>Motion Graphics</h3>
//         </div>
//         <div className="services__section-body mt-5 w-full md:max-w-md md:text-lg lg:leading-loose">
//           <p>
//             Motion videos are more engaging and interactive, we create
//             videos that allow individuals and corporate entities to
//             communicate their ideas in a short and efficient way, promising
//             exceptional conversions.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div
//     data-aos="fade-up"
//     className="services__sections mx-auto mb-24 w-full max-w-md place-items-center px-6 md:grid md:max-w-screen-md md:grid-cols-2 md:place-items-center md:gap-20 lg:max-w-screen-lg"
//   >
//     <div className="service__section-img-page">
//       {/* <Image
//           src="https://i.ibb.co/5r4Zq7s/96c8c78e6b1f64307f3ecaaf6ac5635c.jpg"
//           width={450}
//           height={350}
//           alt=""
//           className="overflow-hidden"
//         /> */}{' '}
//       <Carousel
//         autoPlay
//         infiniteLoop
//         showThumbs={false}
//         stopOnHover={false}
//         swipeable
//         emulateTouch
//         // showArrows={false}
//         // showIndicators={false}
//         showStatus={false}
//       >
//         <div className=" rounded">
//           <img
//             className="overflow-hidden rounded"
//             src="https://i.ibb.co/mCz9QBV/10.jpg"
//           />
//         </div>
//         <div className=" rounded">
//           <img
//             className="overflow-hidden rounded"
//             src="https://i.ibb.co/GdM4FSR/30.jpg"
//           />
//         </div>
//         <div className=" rounded">
//           <img
//             className="overflow-hidden rounded"
//             src="https://i.ibb.co/0GmRtZf/26.jpg"
//           />
//         </div>
//       </Carousel>
//       {/* https://i.ibb.co/sCKRL0s/34.jpg https://i.ibb.co/0YZY4Th/33.jpg
//           https://i.ibb.co/tMcBpZp/28.jpg https://i.ibb.co/0GmRtZf/26.jpg
//           https://i.ibb.co/WsY2Vqg/3.jpg https://i.ibb.co/zN2tjpf/29.jpg
//           https://i.ibb.co/GdM4FSR/30.jpg https://i.ibb.co/Xj0VccD/32.jpg
//           https://i.ibb.co/Bt20BnL/6.jpg https://i.ibb.co/mCz9QBV/10.jpg */}
//     </div>
//     <div
//       data-aos="fade-up"
//       className="services__section w-full rounded  px-0 "
//     >
//       <div className="">
//         <div className="services__section-title mt-6 w-full text-2xl leading-relaxed  md:text-3xl ">
//           <h3>Artworks Design and Installation</h3>
//         </div>
//         <div className="services__section-body mt-5 w-full md:max-w-md md:text-lg lg:leading-loose">
//           <p>
//             At Protaroom, we engage the beauty of art to elevate people
//             spaces, ranging from elegant canvass, paintings , sketches to
//             Abstract design , our singular desire is to inspire productivity
//             with aesthetics.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

{
  /* ;
        <div className="cards sm flex  w-full gap-5">
          <div className="card cursor-pointer overflow-hidden rounded-lg sm:max-w-sm">
            <div className="card-pic h-60 overflow-hidden ">
              <img
                className="w-full transition-transform duration-500"
                src="https://i.ibb.co/mCz9QBV/10.jpg"
                alt=""
              />
            </div>
            <div className="card-body h-24 bg-white p-6 font-bold md:text-lg">
              <span>Digital Design</span>
            </div>
          </div>
          <div className="card  cursor-pointer overflow-hidden rounded-lg sm:max-w-sm">
            <div className="card-pic h-60 overflow-hidden ">
              <img
                className="w-full transition-transform duration-500"
                src="https://i.ibb.co/mCz9QBV/10.jpg"
                alt=""
              />
            </div>
            <div className="card-body h-24 bg-white p-6 font-bold md:text-lg">
              <span>Digital Design</span>
            </div>
          </div>
          <div className="card cursor-pointer overflow-hidden rounded-lg sm:max-w-sm">
            <div className="card-pic h-60 overflow-hidden ">
              <img
                className="w-full transition-transform duration-500"
                src="https://i.ibb.co/mCz9QBV/10.jpg"
                alt=""
              />
            </div>
            <div className="card-body h-24 bg-white p-6 font-bold md:text-lg">
              <span>Digital Design</span>
            </div>
          </div>
          <div className="card  cursor-pointer overflow-hidden rounded-lg  ">
            <div className="card-pic h-60 overflow-hidden ">
              <img
                className="w-full transition-transform duration-500"
                src="https://i.ibb.co/mCz9QBV/10.jpg"
                alt=""
              />
            </div>
            <div className="card-body h-24 bg-white p-6 font-bold md:text-lg">
              <span>Digital Design</span>
            </div>
          </div>
          <div className="card cursor-pointer overflow-hidden rounded-lg ">
            <div className="card-pic h-60 overflow-hidden ">
              <img
                className="w-full transition-transform duration-500"
                src="https://i.ibb.co/mCz9QBV/10.jpg"
                alt=""
              />
            </div>
            <div className="card-body h-24 bg-white p-6 font-bold md:text-lg">
              <span>Digital Design</span>
            </div>
          </div>
          <div className="card cursor-pointer overflow-hidden rounded-lg ">
            <div className="card-pic h-60 overflow-hidden ">
              <img
                className="w-full transition-transform duration-500"
                src="https://i.ibb.co/mCz9QBV/10.jpg"
                alt=""
              />
            </div>
            <div className="card-body h-24 bg-white p-6 font-bold md:text-lg">
              <span>Digital Design</span>
            </div>
          </div>
        </div>
        <div className="arrows absolute top-52 flex w-full justify-between text-5xl">
          <div className="arrow-left absolute -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xl hover:cursor-pointer hover:opacity-90 md:h-14 md:w-14">
            <IoIosArrowBack
              style={{ color: '#ff8000', width: '32px' }}
              className="md:w-10"
            />
          </div>
          <div className="arrow-right absolute  right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xl hover:cursor-pointer hover:opacity-90 md:h-14 md:w-14">
            <IoIosArrowForward
              style={{ color: '#ff8000', width: '32px' }}
              className="md:w-10"
            />
          </div>
  </div>*/
}
