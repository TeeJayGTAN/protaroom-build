import { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Header from '../components/Header'
import Link from 'next/link'
import Head from 'next/head'
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
    <div className="relative">
      <Head>
        <title>Protaroom | About </title>
        <link rel="icon" href="../favicon64.png" />
      </Head>
      <Header />
      <div className="mx-auto mb-16 mt-10 px-4 md:max-w-7xl md:px-8 lg:px-9">
        <div className="about-hero mb-20 rounded py-5" data-aos="fade-up">
          <div className="at text-4xl font-bold md:text-5xl">
            <h2>About</h2>
          </div>
          <div className="ab mt-5 flex flex-col gap-6 text-lg leading-loose">
            <p className="font-bold">Hello!</p>
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
            <p>
              Our proposition is unique, as we leverage on our depth of digital
              versatilities (from research to implementation) in creating an
              impressive experience for our clients, reflecting our deep
              conviction that great design cannot happen without understanding
              people, having passion, creative intelligence and above all
              personal assurance.
            </p>
          </div>
        </div>
        <div className="">
          <div
            data-aos="fade-up"
            className="purp mx-auto grid grid-cols-1 md:w-4/5 md:grid-cols-2 md:place-items-start"
          >
            <div className="text-3xl font-medium md:max-w-sm md:text-4xl md:leading-relaxed ">
              <h2>Core Purpose</h2>
            </div>
            <div className="purp-body mt-5 leading-7 md:leading-8">
              <p>
                To grow human capabilities for the best environment, we believe
                that the best environment is state, where people are highly and
                increasingly productive, so our Core Business is to creatively
                inspire Corporate and Individual productivity, with arty
                expressions.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="val mx-auto mt-10 grid grid-cols-1 md:w-4/5 md:grid-cols-2 md:place-items-start"
          >
            <div className="text-3xl font-medium md:max-w-sm md:text-4xl md:leading-relaxed">
              <h2>Core Values</h2>
            </div>
            <div className="val mt-5 leading-7 md:leading-8">
              <p>
                With a Core Purpose of grow human capabilities for the best
                environment, we believe that the best environment is state,
                where people are highly and increasingly productive, so our Core
                Business is to creatively inspire Corporate and Individual
                productivity, with arty expressions.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="bannerimg  my-8 h-[35vh]  md:h-[90vh]"
        >
          <img className="h-full w-full" src="../extrapic.jpg" alt="extrapic" />
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div
            data-aos="fade-up"
            className="people__title__heading  mb-8 md:mb-0 md:max-w-sm"
          >
            <div className="people-icon">
              <img src="https://i.ibb.co/ZmVXJM5/people.png" alt="" />
            </div>
            <h3 className="text-2xl font-medium md:text-3xl">People</h3>
            <div className="people__body mt-5 leading-relaxed  sm:max-w-xs">
              <p>
                {' '}
                Our care is deeply about people; our customers , our own people,
                and our partners, and the communities to which we belong.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="people__title__heading mb-8 md:mb-0 md:max-w-sm "
          >
            <div className="people-icon">
              <img src="https://i.ibb.co/FHL8db8/result.png" alt="" />
            </div>
            <h3 className="text-2xl font-medium md:text-3xl">Result</h3>
            <div className="people__body mt-5 leading-relaxed sm:max-w-xs">
              <p>
                {' '}
                We have a result driven mindset that is rooted in our culture.
                This fuels our entire business activities
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="people__title__heading md:max-w-sm"
          >
            <div className="people-icon">
              <img src="https://i.ibb.co/bLsrgqV/excellence.png" alt="" />
            </div>
            <h3 className="text-2xl font-medium  md:text-3xl">Excellence</h3>
            <div className="people__body mt-5 leading-relaxed sm:max-w-xs ">
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
