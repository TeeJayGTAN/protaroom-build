import Head from 'next/head'
import BlogPosts from '../components/BlogPosts'
import Footer from '../components/Footer'
import Header from '../components/Header'
// import Header from '../components/Header.jsx'

function blog() {
  return (
    <div className="">
      <Head>
        <title>Protaroom | Blog</title>
        <link rel="icon" href="https://i.ibb.co/zZYvg9G/protaroomfavicon.png" />
      </Head>
      <Header />
      <div className="mt-4 bg-gray-100 px-4 ">
        <div className="categories-nav mx-auto max-w-screen-md py-4  lg:max-w-screen-lg">
          <div className="category-items md:text-md grid grid-cols-3 place-items-start md:grid-cols-4 lg:grid-cols-7 lg:text-sm">
            <div className="category-item active my-5 cursor-pointer  rounded px-3 py-1">
              All
            </div>
            <div className="category-item my-5 cursor-pointer  rounded px-3 py-1">
              Art and Animation
            </div>
            <div className="category-item my-5 cursor-pointer  rounded px-3 py-1">
              Branding
            </div>
            <div className="category-item my-5 cursor-pointer  rounded px-3 py-1">
              Digital Design
            </div>
            <div className="category-item my-5 cursor-pointer  rounded px-3 py-1">
              Interior Design
            </div>
            <div className="category-item my-5 cursor-pointer  rounded px-3 py-1">
              Motion Design
            </div>
            <div className="category-item my-5 cursor-pointer  rounded px-3 py-1">
              Print Design
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 px-4">
        <BlogPosts />
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  )
}

export default blog
