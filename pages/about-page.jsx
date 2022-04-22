import { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Header from '../components/Header'
import Link from 'next/link'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
} from 'react-icons/fa'
import Footer from '../components/Footer'

function about() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  const [display, setDisplay] = useState(false)
  const text = `Our proposition is unique, as we leverage on our depth of digital
              versatilities (from research to implementation) in creating an
              impressive experience for our clients, reflecting our deep
              conviction that great design cannot happen without understanding
              people, having passion, creative intelligence and above all personal
              assurance. We are a community of designers, with a cumulative work experience
              that span over a decade of creating bespoke creatives across several
              sectors. Our partners are all practicing designers, and whether
              working collaboratively or independently, innovating remarkable
              impressions and experiences.`
  return (
    <div className="overflow-hidden">
      <Header />
      <div
        data-aos="fade-left"
        className="relative mx-auto mb-24 mt-24 px-4 md:max-w-7xl md:px-8 lg:px-9"
      >
        <div className=" mb-10 text-4xl font-medium md:text-6xl">
          <h2>About Us</h2>
        </div>
        <div className="about-body-section w-full  overflow-hidden md:flex md:items-center md:justify-between">
          <div className="about__body flex flex-col gap-3 leading-relaxed md:max-w-screen-md md:items-center">
            <p className=" leading-8 md:text-lg md:leading-10">
              Welcome to Protaroom, an interdisciplinary design and recreation
              company with a human-centered approach to interior and
              experiential design. We strongly believe that the human experience
              must be the driving force behind every element of a design––from
              ideation to the qualities of interaction, expectation, and
              intention.
            </p>
            <p className=" leading-8 md:text-lg md:leading-10">
              Our work covers Interior design, Animation, Art, Illustration,
              Graphics, Identity Strategy and Positioning, Exhibitions and
              Installations, Brand, Business Architecture and Digital
              experiences
            </p>
            <p className=" leading-8 md:text-lg md:leading-10">
              {display ? text : ''}
            </p>
            <div className="readmore-btn mt-6 w-full text-left">
              <button
                className="md:w-39 btn-hire-us mt-3 w-2/6 rounded py-2 px-5 text-center text-white md:mt-0 md:w-1/6"
                onClick={() => setDisplay(!display)}
              >
                {display ? 'View Less' : 'View More'}
              </button>
            </div>
          </div>
          {/* <div className="about-img absolute -top-28 left-72 -z-10 mt-8 ml-auto h-auto w-3/5 opacity-50 md:right-6 md:max-w-sm md:opacity-90">
          <img src="https://i.ibb.co/52XGnzj/protaroom-icon-img.png" alt="" />
        </div> */}
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="relative mx-auto mb-20 flex flex-col gap-3 px-4 pt-0 md:max-w-7xl md:flex-col md:px-8  lg:px-9"
      >
        <div className="purpose__title flex flex-col  md:w-2/6 ">
          <div className="purpose__title__icon ml-2">
            {/* <AiOutlineAim size={100} /> */}
            <img
              src="https://i.ibb.co/6wP59Mb/purpose.png"
              alt="purpose pics"
            />
          </div>
          <div className="purpose__title__heading text-3xl font-medium md:py-2 md:text-4xl">
            <h2>Our Purpose</h2>
          </div>
        </div>
        <div className="purpose__body mt-4 leading-8 md:w-4/6 md:text-lg md:leading-10 ">
          <p>
            To grow human capabilities for the best environment. We believe that
            the best environment is the state where people are highly and
            increasingly productive, so our core business is to creatively
            inspire Corporate and Individual productivity with arty expressions.
          </p>
        </div>
        {/* <div className="about-img absolute -top-12 left-72 -z-10 mt-8 ml-auto h-auto w-3/5 opacity-50 md:right-6 md:max-w-sm md:opacity-90">
        <img src="https://i.ibb.co/52XGnzj/protaroom-icon-img.png" alt="" />
      </div> */}
      </div>
      <div data-aos="fade-up" className="value__section md:-mb-6">
        <div className="mx-auto  mb-14 px-4  md:max-w-7xl md:px-8 lg:px-9">
          <div className="value__title flex flex-col gap-3 md:w-2/6 ">
            <div className="value__title__icon ">
              <img src="https://i.ibb.co/gwMZ8Ng/value2.png" alt="pics" />
            </div>
            <div className="value__title__heading text-3xl font-medium md:text-4xl">
              <h2>
                Ou<span>r</span> Value<span>s</span>
              </h2>
            </div>
          </div>
          <div className="value__body mt-10 leading-8 md:w-4/6 md:text-lg md:leading-10 ">
            <p>
              With a Core Purpose of grow human capabilities for the best
              environment, we believe that the best environment is state, where
              people are highly and increasingly productive, so our Core
              Business is to creatively inspire Corporate and Individual
              productivity, with arty expressions
            </p>
          </div>
        </div>
        <div className="value__sub-section mx-auto justify-start  px-4  md:flex md:w-full md:max-w-7xl md:items-center md:justify-center md:gap-16  md:px-8 md:pb-12 lg:px-0">
          <div data-aos="fade-up" className="people mx-auto mb-20 md:max-w-sm ">
            <div className="people__title__heading text-2xl font-medium leading-relaxed md:text-3xl">
              <div className="people-icon">
                <img src="https://i.ibb.co/ZmVXJM5/people.png" alt="" />
              </div>
              <h3 className="">
                <span>P</span>eopl<span>e</span>
              </h3>
            </div>
            <div className="people__body mt-5 self-center md:max-w-xs">
              <p>
                {' '}
                Our care is deeply about people; our customers , our own people,
                and our partners, and the communities to which we belong.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="people mx-auto mb-20 md:max-w-sm ">
            <div className="people__title__heading text-2xl font-medium leading-relaxed md:text-3xl">
              <div className="people-icon">
                <img src="https://i.ibb.co/FHL8db8/result.png" alt="" />
              </div>
              <h3>
                <span>R</span>esul<span>t</span>
              </h3>
            </div>
            <div className="people__body mt-5 md:max-w-xs">
              <p>
                {' '}
                We have a result driven mindset that is rooted in our culture.
                This fuels our entire business activities
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="people mx-auto mb-20 md:max-w-sm ">
            <div className="people__title__heading text-2xl font-medium leading-relaxed md:text-3xl">
              <div className="people-icon">
                <img src="https://i.ibb.co/bLsrgqV/excellence.png" alt="" />
              </div>
              <h3>
                <span>E</span>xcellenc<span>e</span>
              </h3>
            </div>
            <div className="people__body mt-5 md:max-w-xs">
              <p>
                {' '}
                We are committed to excellence in all our deliveries, while
                creating a sustainable environment for future generation
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default about

{
  /* <div
        data-aos="fade-left"
        className="relative mx-auto mb-24 mt-24  overflow-hidden px-4  md:max-w-7xl md:px-8 lg:px-9"
      >
        <div className="about mb-8 text-3xl font-medium md:text-5xl">
          <h2>About Us</h2>
        </div>
        <div
          data-aos="fade-up"
          className="about-body-section relative grid w-full grid-cols-1 gap-12 rounded sm:grid-cols-1 md:grid-cols-2 md:place-content-end md:place-items-end"
        >
          <div className="about-img mt-8 h-auto w-full  max-w-xs overflow-hidden rounded sm:max-w-sm md:max-w-md">
            <img src="https://i.ibb.co/V2nGY7t/hero-art1.jpg" alt="" />
          </div>
          <div className="about__body md:text-md flex flex-col gap-3 leading-relaxed md:max-w-screen-md md:items-center md:leading-loose">
            <p>
              Welcome to Protaroom, an interdisciplinary design and recreation
              company with a human-centered approach to interior and
              experiential design. We strongly believe that the human experience
              must be the driving force behind every element of a design––from
              ideation to the qualities of interaction, expectation, and
              intention.
            </p>
            <p>
              Our work covers Interior design, Animation, Art, Illustration,
              Graphics, Identity Strategy and Positioning, Exhibitions and
              Installations, Brand, Business Architecture and Digital
              experiences
            </p>

            {/* <div className="readmore-btn mt-6 w-full text-left">
              <Link href="/contact-page">
                <button className="md:w-39 btn-hire-us mt-3 w-2/6 rounded py-2 px-5 text-center text-white md:mt-0 md:w-1/6">
                  View More
                </button>
              </Link>
            </div> */
}
{
  /* </div> */
}
{
  /*</div>
        <div
          data-aos="fade-up"
          className="about-body-section relative mt-14 grid w-full grid-cols-1 gap-12 rounded md:grid-cols-2 md:place-content-end md:place-items-end "
        >
          <div className="about-img ml-0 mt-8 h-auto w-full max-w-xs  overflow-hidden rounded  sm:max-w-sm md:max-w-md">
            <img src="https://i.ibb.co/V2nGY7t/hero-art1.jpg" alt="" />
          </div>
          <div className="about__body md:text-md flex flex-col gap-3  leading-relaxed md:max-w-screen-md md:items-center md:leading-loose">
            <p>
              Our proposition is unique, as we leverage on our depth of digital
              versatilities (from research to implementation) in creating an
              impressive experience for our clients, reflecting our deep
              conviction that great design cannot happen without understanding
              people, having passion, creative intelligence and above all
              personal assurance.
            </p>
            <p>
              We are a community of designers, with a cumulative work experience
              that span over a decade of creating bespoke creatives across
              several sectors. Our partners are all practicing designers, and
              whether working collaboratively or independently, innovating
              remarkable impressions and experiences.
            </p>
            {/* <div className="readmore-btn mt-6 w-full text-left">
              <Link href="/contact-page">
                <button className="md:w-39 btn-hire-us mt-3 w-2/6 rounded py-2 px-5 text-center text-white md:mt-0 md:w-1/6">
                  View More
                </button>
              </Link>
            </div> */
}
{
  /* </div>
        </div>
      </div> */
}
