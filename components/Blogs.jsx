import React from 'react'
import Blog from './Blog'
import Header from './Header'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Blogs() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="blog-section mx-auto mb-20 flex-col  px-4 md:max-w-7xl md:px-8 lg:px-9">
      <div
        data-aos="fade-up"
        className="blog-title about__title mb-12 text-3xl font-medium md:text-4xl"
      >
        <h2>Visit Our Blog</h2>
      </div>
      <div className="blogs md:grid-cm flex flex-col md:justify-between ">
        <Blog />
        <Blog />
        <Blog />
      </div>
      <div data-aos="fade-up" className="blog-btn w-full text-center">
        <button className="md:w-39 btn-hire-us mt-3 w-2/6 rounded py-2 px-5 text-center text-white md:mt-0 md:w-1/6">
          View More{' '}
        </button>
      </div>
    </div>
  )
}

export default Blogs
