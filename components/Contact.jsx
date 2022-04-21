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
    <div
      data-aos="fade-up"
      className="contact-section mx-auto mb-20 px-4  md:max-w-7xl md:px-8 lg:px-9"
    >
      <p className="max-w-sm text-4xl font-bold leading-relaxed md:max-w-full md:text-6xl md:leading-relaxed">
        Let’s make something amazing together, Start by{' '}
        <span className="underline hover:cursor-pointer hover:text-gray-800 hover:opacity-40">
          <Link href="/contact-page">saying hello </Link>
        </span>
      </p>
    </div>
  )
}

export default Contact
