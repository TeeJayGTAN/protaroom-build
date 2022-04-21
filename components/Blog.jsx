import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Blog() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div
      data-aos="fade-up"
      className="blog__posts transition-all-cm mb-10 flex flex-col items-center overflow-hidden rounded bg-gray-200 py-8 px-2 shadow-lg hover:cursor-pointer md:py-8 md:px-6"
    >
      <div className="blog__post-img pointer-events-none">
        <img
          className="rounded"
          src="https://i.ibb.co/jRNS3Hv/D3.jpg"
          alt="pics"
        />
      </div>
      <div className="blog__post-title  mt-5 text-lg  font-bold md:text-2xl">
        Art and Animation Trends 2022
      </div>
    </div>
  )
}

export default Blog
