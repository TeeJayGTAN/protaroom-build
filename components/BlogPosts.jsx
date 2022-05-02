import React from 'react'
import BlogPost from '../components/BlogPost'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { urlFor } from '../sanity'
import Link from 'next/link'

function BlogPosts({ posts }) {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div>
      {posts.map((post) => (
        <Link key={post._id} href={`/post/${post.slug.current}`}>
          <div data-aos="fade-up" className="">
            <div className="blogpostcard mb-10 max-w-screen-md hover:cursor-pointer hover:shadow-lg md:mx-auto md:flex md:items-center lg:max-w-screen-lg">
              <div className="blogpostcardimage overflow-hidden rounded md:w-4/6 lg:h-2/6 lg:w-2/6">
                <img className="" src={urlFor(post.mainImage).url()} alt="" />
              </div>
              <div className="info mt-4 flex flex-col gap-5 md:ml-6">
                <div className="some-title text-xl font-bold lg:text-3xl">
                  <h2> {post.title}</h2>
                </div>
                <div className="some-more-info flex flex-col text-xs font-medium md:flex-row md:gap-8">
                  <span className="hover:underline"> {post.categories}</span>
                  <span>{new Date(post._createdAt).toLocaleString()}</span>
                  <span>11 min read</span>
                </div>
                <div className="some-body">
                  {/* Here we talk about the amazing and popular web animation and
                  motion graphics trends that will catch your eye in the nearest
                  future... */}
                  {post.description}
                </div>
              </div>
            </div>
            <div className="line m mx-auto mb-10 h-0.5 w-full bg-gray-100 px-4"></div>
          </div>
        </Link>
      ))}
      <div data-aos="fade-up" className="">
        <div className="blogpostcard mb-10 max-w-screen-md hover:cursor-pointer hover:shadow-lg md:mx-auto md:flex md:items-center lg:max-w-screen-lg">
          <div className="blogpostcardimage overflow-hidden rounded md:w-4/6 lg:h-2/6 lg:w-3/6">
            <img
              className=" "
              src="https://i.ibb.co/V2nGY7t/hero-art1.jpg"
              alt=""
            />
          </div>
          <div className="info mt-4 flex flex-col gap-5 md:ml-6">
            <div className="some-title text-xl font-bold lg:text-3xl">
              <h2>Art and Animation Trends 2022</h2>
            </div>
            <div className="some-more-info flex flex-col text-xs font-medium md:flex-row md:gap-8">
              <span className="hover:underline">Art and Animation</span>
              <span>24 March</span>
              <span>11 min read</span>
            </div>
            <div className="some-body">
              Here we talk about the amazing and popular web animation and
              motion graphics trends that will catch your eye in the nearest
              future...
            </div>
          </div>
        </div>
        <div className="line m mx-auto mb-10 h-0.5 w-full bg-gray-100 px-4"></div>
      </div>
    </div>
  )
}

export default BlogPosts
