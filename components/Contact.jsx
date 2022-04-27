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
    <div className="relative mt-10 mb-10 py-8 md:mb-32">
      <div className="lets-image absolute top-0 h-full w-full sm:right-0 sm:max-w-screen-sm md:max-w-screen-md">
        <img src="../footer-img.png" alt="" />
      </div>
      <div
        data-aos="fade-up"
        className="contact-section relative mr-auto px-4 md:mt-14 md:max-w-4xl md:px-8 lg:px-16"
      >
        <p className="max-w-sm text-4xl  font-bold leading-relaxed md:max-w-full md:text-6xl md:leading-relaxed">
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
