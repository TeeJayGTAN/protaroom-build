import Link from 'next/link'
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function Showservices() {
  return (
    <div className=" mx-auto mt-14 px-4 md:max-w-7xl md:px-8 lg:px-9">
      <div className="image-gallery md:h-full md:place-content-center">
        <Link href="/service-page">
          <div className="s-card grid-1 relative h-full w-full">
            <div className="s-img  z-0 h-full w-full">
              <LazyLoadImage
                className="h-full w-full"
                height={'100%'}
                width={'100%'}
                effect="blur"
                src="../int1.jpg"
                alt="pics"
              />
            </div>
            <div className="s-title  md:text-md absolute bottom-0 left-0 z-10 w-full border-b-2 border-gray-300 bg-white py-4 text-sm">
              <h3>Interior and Experiential Design</h3>
            </div>
          </div>
        </Link>
        <Link href="/service-page">
          <div className="s-card grid-2 relative h-full w-full">
            <div className="s-img  z-0 h-full w-full">
              <LazyLoadImage
                className="h-full w-full"
                height={'100%'}
                width={'100%'}
                effect="blur"
                src="../art1.jpg"
                alt="pics"
              />
            </div>
            <div className="s-title  md:text-md absolute bottom-0 left-0 z-10 w-full border-b-2 border-gray-300 bg-white py-4 text-sm">
              <h3>Artworks Design and Installation </h3>
            </div>
          </div>
        </Link>
        <Link href="/service-page">
          <div className="s-card grid-3 relative h-full w-full">
            <div className="s-img  z-0 h-full w-full">
              <LazyLoadImage
                className="h-full w-full"
                height={'100%'}
                width={'100%'}
                effect="blur"
                src="../dig1.jpg"
                alt="pics"
              />
            </div>
            <div className="s-title  md:text-md absolute bottom-0 left-0 z-10 w-full border-b-2 border-gray-300 bg-white py-4 text-sm">
              <h3>Digital Design</h3>
            </div>
          </div>
        </Link>
        <Link href="/service-page">
          <div className="s-card grid-4 relative h-full w-full">
            <div className="s-img  z-0 h-full w-full">
              <LazyLoadImage
                className="h-full w-full"
                height={'100%'}
                width={'100%'}
                effect="blur"
                src="../pri1.jpg"
                alt="pics"
              />
            </div>
            <div className="s-title  md:text-md absolute bottom-0 left-0 z-10 w-full border-b-2 border-gray-300 bg-white py-4 text-sm">
              <h3>Print Design</h3>
            </div>
          </div>
        </Link>
        <Link href="/service-page">
          <div className="s-card grid-5 relative h-full w-full">
            <div className="s-img  z-0 h-full w-full">
              <LazyLoadImage
                className="h-full w-full"
                height={'100%'}
                width={'100%'}
                effect="blur"
                src="../bra1.jpg"
                alt="pics"
              />
            </div>
            <div className="s-title  md:text-md absolute bottom-0 left-0 z-10 w-full border-b-2 border-gray-300 bg-white py-4 text-sm">
              <h3>Brand</h3>
            </div>
          </div>
        </Link>
        <Link href="/service-page">
          <div className="s-card grid-6 relative h-full w-full">
            <div className="s-img  z-0 h-full w-full">
              <LazyLoadImage
                className="h-full w-full"
                height={'100%'}
                width={'100%'}
                effect="blur"
                src="../int4.jpg"
                alt="pics"
              />
            </div>
            <div className="s-title  md:text-md absolute bottom-0 left-0 z-10 w-full border-b-2 border-gray-300 bg-white py-4 text-sm">
              <h3>Interior and Experiential Design</h3>
            </div>
          </div>
        </Link>
        <Link href="/service-page">
          <div className="s-card grid-7 relative h-full w-full">
            <div className="s-img  z-0 h-full w-full">
              <LazyLoadImage
                className="h-full w-full object-cover"
                height={'100%'}
                width={'100%'}
                effect="blur"
                src="../intbum.jpg"
                alt="pics"
              />
            </div>
            <div className="s-title  md:text-md absolute bottom-0 left-0 z-10 w-full border-b-2 border-gray-300 bg-white py-4 text-sm">
              <h3>Interior and Experiential Design</h3>
            </div>
          </div>
        </Link>
        <Link href="/service-page">
          <div className="s-card grid-8 relative h-full w-full">
            <div className="s-img  z-0 h-full w-full">
              <LazyLoadImage
                className="h-full w-full"
                height={'100%'}
                width={'100%'}
                effect="blur"
                src="../int3.jpg"
                alt="pics"
              />
            </div>
            <div className="s-title  md:text-md absolute bottom-0 left-0 z-10 w-full border-b-2 border-gray-300 bg-white py-4 text-sm">
              <h3>Interior and Experiential Design</h3>
            </div>
          </div>
        </Link>
        <Link href="/service-page">
          <div className="s-card grid-9 relative h-full w-full">
            <div className="s-img  z-0 h-full w-full">
              <LazyLoadImage
                className="h-full w-full"
                height={'100%'}
                width={'100%'}
                effect="blur"
                src="../mot1.jpg"
                alt="pics"
              />
            </div>
            <div className="s-title  md:text-md absolute bottom-0 left-0 z-10 w-full border-b-2 border-gray-300 bg-white py-4 text-sm">
              <h3>Motion Design</h3>
            </div>
          </div>
        </Link>
        <Link href="/service-page">
          <div className="s-card grid-10 relative h-full w-full">
            <div className="s-img  z-0 h-full w-full">
              <LazyLoadImage
                className="h-full w-full"
                height={'100%'}
                width={'100%'}
                effect="blur"
                src="../int5.jpg"
                alt="pics"
              />
            </div>
            <div className="s-title  md:text-md absolute bottom-0 left-0 z-10 w-full border-b-2 border-gray-300 bg-white py-4 text-sm">
              <h3>Interior and Experiential Design</h3>
            </div>
          </div>
        </Link>
        <Link href="/service-page">
          <div className="s-card grid-11 relative h-full w-full">
            <div className="s-img  z-0 h-full w-full">
              <LazyLoadImage
                className="h-full w-full"
                height={'100%'}
                width={'100%'}
                effect="blur"
                src="../exp1.jpg"
                alt="pics"
              />
            </div>
            <div className="s-title  md:text-md absolute bottom-0 left-0 z-10 w-full border-b-2 border-gray-300 bg-white py-4 text-sm">
              <h3>Experiential Design</h3>
            </div>
          </div>
        </Link>
        <Link href="/service-page">
          <div className="s-card grid-12 relative h-full w-full">
            <div className="s-img  z-0 h-full w-full">
              <LazyLoadImage
                className="h-full w-full"
                height={'100%'}
                width={'100%'}
                effect="blur"
                src="../art2.jpg"
                alt="pics"
              />
            </div>
            <div className="s-title  md:text-md absolute bottom-0 left-0 z-10 w-full border-b-2 border-gray-300 bg-white py-4 text-sm">
              <h3>Artworks Design and Installation</h3>
            </div>
          </div>
        </Link>
        {/* <div className="s-card grid-7 relative h-full w-full">
          <div className="s-img  z-0 h-full w-full">
            <img className="h-full w-full" src="../digital1.jpg" alt="pics" />
          </div>
          <div className="s-title  md:text-md absolute bottom-0 left-0 z-10 w-full border-b-2 border-gray-300 bg-white py-4 text-sm">
            <h3>Digital Design</h3>
          </div>
        </div>
        <div className="s-card grid-8 relative h-full w-full">
          <div className="s-img  z-0 h-full w-full">
            <img className="h-full w-full" src="../digital1.jpg" alt="pics" />
          </div>
          <div className="s-title  md:text-md absolute bottom-0 left-0 z-10 w-full border-b-2 border-gray-300 bg-white py-4 text-sm">
            <h3>Digital Design</h3>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Showservices
