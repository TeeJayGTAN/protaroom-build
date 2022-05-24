import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Link from 'next/link'

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="relative py-8 mt-10 mb-10 md:mb-24">
      <div className="absolute top-0 hidden w-full h-full lets-image sm:right-0 sm:max-w-screen-sm md:block md:max-w-screen-md">
        <img className="" src="../footer-img.png" alt="" />
      </div>
      <div
        data-aos="fade-up"
        className="relative px-4 mr-auto contact-section md:mt-14 md:max-w-4xl md:px-8 lg:px-16"
      >
        <p className="max-w-sm text-4xl font-bold leading-relaxed md:max-w-full md:text-6xl md:leading-relaxed">
          Let’s make something amazing together, Start by{' '}
          <span className="underline hover:cursor-pointer hover:text-gray-800 hover:opacity-40">
            <Link href="/contact-page">saying hello </Link>
          </span>
        </p>
      </div>
    </div>
  )
}

export default Contact
