import Head from 'next/head'
import { useEffect, useState } from 'react'
import BlogPosts from '../components/BlogPosts'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Aos from 'aos'
import 'aos/dist/aos.css'

// import Navigation from 'react-sticky-nav'
// import { css, jsx } from '@emotion/core'
// import Header from '../components/Header.jsx'

import { sanityClient } from '../sanity'
import Link from 'next/link'

export default function blog({ posts }) {
  const [isBlogClicked, setIsBlogClicked] = useState(false)
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="relative">
      <Head>
        <title>Protaroom | Blog</title>
        <link rel="icon" href="../favicon2.png" />
      </Head>

      <Header />

      <div data-aos="zoom-in" className="mt-4 bg-gray-100 px-4 ">
        <div className="categories-nav mx-auto max-w-screen-md py-4  lg:max-w-screen-lg">
          <div className="category-items md:text-md grid grid-cols-3 place-items-start md:grid-cols-4 lg:grid-cols-7 lg:text-sm">
            <div
              className={`category-item my-5 cursor-pointer  rounded px-3 py-1`}
            >
              All
            </div>
            <div
              className={`category-item my-5 cursor-pointer  rounded px-3 py-1`}
            >
              Artworks Design
            </div>
            <div
              className={`category-item my-5 cursor-pointer  rounded px-3 py-1`}
            >
              Branding
            </div>
            <div
              className={`category-item my-5 cursor-pointer  rounded px-3 py-1`}
            >
              Digital Design
            </div>
            <div
              className={`category-item my-5 cursor-pointer  rounded px-3 py-1`}
            >
              Interior Design
            </div>
            <div
              className={`category-item my-5 cursor-pointer  rounded px-3 py-1`}
            >
              Motion Design
            </div>
            <div
              className={`category-item my-5 cursor-pointer  rounded px-3 py-1`}
            >
              Print Design
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 px-4">
        <BlogPosts posts={posts} />
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  )
}
export const getServerSideProps = async () => {
  const query = `*[_type == "post"] {
    _id,
    title,
    mainImage,
    description,
    slug,
    author -> {
    name,
    image
  }
  }`

  const posts = await sanityClient.fetch(query)
  return {
    props: {
      posts,
    },
  }
}
