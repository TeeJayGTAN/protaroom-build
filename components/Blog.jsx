import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { urlFor } from '../sanity'

function Blog({ post }) {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div
      data-aos="fade-up"
      className="blog__posts transition-all-cm mb-10 flex flex-col items-center overflow-hidden rounded bg-gray-200 py-8 px-2 shadow-lg hover:cursor-pointer md:py-8 md:px-6"
    >
      <div className="blog__post-img pointer-events-none">
        {/* {post.mainImage && ( */}
        <img
          className="rounded"
          src={urlFor(post.mainImage).url()}
          alt="pics"
        />
        {/* )} */}
      </div>
      <div className="blog__post-title  mt-5 text-lg  font-bold md:text-2xl">
        {post.title}
      </div>
    </div>
  )
}

export default Blog
