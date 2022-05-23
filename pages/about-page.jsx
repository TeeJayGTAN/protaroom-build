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
      <div className="px-4 mx-auto mt-10 mb-16 md:max-w-7xl md:px-8 lg:px-9">
        <div className="py-5 mb-20 rounded about-hero" data-aos="fade-up">
          <div className="text-4xl font-bold at md:text-5xl">
            <h2>About</h2>
          </div>
          <div className="flex flex-col gap-6 mt-5 text-lg leading-loose ab">
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
            className="grid grid-cols-1 mx-auto purp md:w-4/5 md:grid-cols-2 md:place-items-start"
          >
            <div className="text-3xl font-medium md:max-w-sm md:text-4xl md:leading-relaxed ">
              <h2>Core Purpose</h2>
            </div>
            <div className="mt-5 leading-7 purp-body md:leading-8">
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
            className="grid grid-cols-1 mx-auto mt-10 val md:w-4/5 md:grid-cols-2 md:place-items-start"
          >
            <div className="text-3xl font-medium md:max-w-sm md:text-4xl md:leading-relaxed">
              <h2>Core Values</h2>
            </div>
            <div className="mt-5 leading-7 val md:leading-8">
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
        <div data-aos="fade-up" className="my-8 bannerimg h-fit">
          <img
            className="object-cover object-center w-full h-full"
            src="../extrapic.jpg"
            alt="extrapic"
          />
        </div>
        <div className="grid grid-cols-1 mt-16 sm:grid-cols-2 md:grid-cols-3">
          <div
            data-aos="fade-up"
            className="mb-8 people__title__heading md:mb-0 md:max-w-sm"
          >
            <div className="people-icon">
              <img
                src="https://i.ibb.co/ZmVXJM5/people.png"
                alt=""
                className="object-cover object-center"
              />
            </div>
            <h3 className="text-2xl font-medium md:text-3xl">People</h3>
            <div className="mt-5 leading-relaxed people__body sm:max-w-xs">
              <p>
                {' '}
                Our care is deeply about people; our customers , our own people,
                and our partners, and the communities to which we belong.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="mb-8 people__title__heading md:mb-0 md:max-w-sm "
          >
            <div className="people-icon">
              <img
                src="https://i.ibb.co/FHL8db8/result.png"
                alt=""
                className="object-cover object-center"
              />
            </div>
            <h3 className="text-2xl font-medium md:text-3xl">Result</h3>
            <div className="mt-5 leading-relaxed people__body sm:max-w-xs">
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
            <h3 className="text-2xl font-medium md:text-3xl">Excellence</h3>
            <div className="mt-5 leading-relaxed people__body sm:max-w-xs ">
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
        className="relative px-4 mx-auto mt-24 mb-24 overflow-hidden md:max-w-7xl md:px-8 lg:px-9"
      >
        <div className="mb-8 text-3xl font-medium about md:text-5xl">
          <h2>About Us</h2>
        </div>
        <div
          data-aos="fade-up"
          className="relative grid w-full grid-cols-1 gap-12 rounded about-body-section sm:grid-cols-1 md:grid-cols-2 md:place-content-end md:place-items-end"
        >
          <div className="w-full h-auto max-w-xs mt-8 overflow-hidden rounded about-img sm:max-w-sm md:max-w-md">
            <img src="https://i.ibb.co/V2nGY7t/hero-art1.jpg" alt="" />
          </div>
          <div className="flex flex-col gap-3 leading-relaxed about__body md:text-md md:max-w-screen-md md:items-center md:leading-loose">
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

            {/* <div className="w-full mt-6 text-left readmore-btn">
              <Link href="/contact-page">
                <button className="w-2/6 px-5 py-2 mt-3 text-center text-white rounded md:w-39 btn-hire-us md:mt-0 md:w-1/6">
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
          className="relative grid w-full grid-cols-1 gap-12 rounded about-body-section mt-14 md:grid-cols-2 md:place-content-end md:place-items-end "
        >
          <div className="w-full h-auto max-w-xs mt-8 ml-0 overflow-hidden rounded about-img sm:max-w-sm md:max-w-md">
            <img src="https://i.ibb.co/V2nGY7t/hero-art1.jpg" alt="" />
          </div>
          <div className="flex flex-col gap-3 leading-relaxed about__body md:text-md md:max-w-screen-md md:items-center md:leading-loose">
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
            {/* <div className="w-full mt-6 text-left readmore-btn">
              <Link href="/contact-page">
                <button className="w-2/6 px-5 py-2 mt-3 text-center text-white rounded md:w-39 btn-hire-us md:mt-0 md:w-1/6">
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
