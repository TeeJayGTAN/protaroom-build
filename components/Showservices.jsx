import Link from 'next/link'
import React from 'react'
import {
  LazyLoadImage,
  LazyLoadComponent,
} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function Showservices() {
  return (
    <div className="px-4 mx-auto  mt-14 md:max-w-7xl md:px-8 lg:px-9">
      <div className="image-gallery md:h-full md:place-content-center">
        <Link href="/service-page">
          <div className="relative w-full h-full s-card grid-1">
            <div className="z-0 w-full h-full s-img">
              <LazyLoadImage
                placeholder={
                  <span className="w-full h-full bg-gray-100"></span>
                }
                className="w-full h-full"
                height={'100%'}
                width={'100%'}
                effect="blur"
                src="../int1.jpg"
                alt="pics"
              />
            </div>
            <div className="absolute bottom-0 left-0 z-10 w-full p-4 text-sm bg-white border-b-2 border-gray-300 s-title md:text-md">
              <h3>Interior and Experiential Design</h3>
            </div>
          </div>
        </Link>
        <Link href="/service-page">
          <div className="relative w-full h-full s-card grid-2">
            <div className="z-0 w-full h-full s-img">
              <LazyLoadImage
                placeholder={
                  <span className="w-full h-full bg-gray-100"></span>
                }
                className="w-full h-full"
                height={'100%'}
                width={'100%'}
                effect="blur"
                src="../art1.jpg"
                alt="pics"
              />
            </div>
            <div className="absolute bottom-0 left-0 z-10 w-full p-4 text-sm bg-white border-b-2 border-gray-300 s-title md:text-md">
              <h3>Artworks Design and Installation </h3>
            </div>
          </div>
        </Link>
        <Link href="/service-page">
          <div className="relative w-full h-full s-card grid-3">
            <div className="z-0 w-full h-full s-img">
              <LazyLoadImage
                placeholder={
                  <span className="w-full h-full bg-gray-100"></span>
                }
                className="w-full h-full"
                height={'100%'}
                width={'100%'}
                effect="blur"
                src="../dig1.jpg"
                alt="pics"
              />
            </div>
            <div className="absolute bottom-0 left-0 z-10 w-full p-4 text-sm bg-white border-b-2 border-gray-300 s-title md:text-md">
              <h3>Digital Design</h3>
            </div>
          </div>
        </Link>
        <Link href="/service-page">
          <div className="relative w-full h-full s-card grid-4">
            <div className="z-0 w-full h-full s-img">
              <LazyLoadImage
                placeholder={
                  <span className="w-full h-full bg-gray-100"></span>
                }
                className="w-full h-full"
                height={'100%'}
                width={'100%'}
                effect="blur"
                src="../pri1.jpg"
                alt="pics"
              />
            </div>
            <div className="absolute bottom-0 left-0 z-10 w-full p-4 text-sm bg-white border-b-2 border-gray-300 s-title md:text-md">
              <h3>Print Design</h3>
            </div>
          </div>
        </Link>
        <Link href="/service-page">
          <div className="relative w-full h-full s-card grid-5">
            <div className="z-0 w-full h-full s-img">
              <LazyLoadImage
                placeholder={
                  <span className="w-full h-full bg-gray-100"></span>
                }
                className="w-full h-full"
                height={'100%'}
                width={'100%'}
                effect="blur"
                src="../bra1.jpg"
                alt="pics"
              />
            </div>
            <div className="absolute bottom-0 left-0 z-10 w-full p-4 text-sm bg-white border-b-2 border-gray-300 s-title md:text-md">
              <h3>Brand</h3>
            </div>
          </div>
        </Link>
        <Link href="/service-page">
          <div className="relative w-full h-full s-card grid-6">
            <div className="z-0 w-full h-full s-img">
              <LazyLoadImage
                placeholder={
                  <span className="w-full h-full bg-gray-100"></span>
                }
                className="w-full h-full"
                height={'100%'}
                width={'100%'}
                effect="blur"
                src="../int4.jpg"
                alt="pics"
              />
            </div>
            <div className="absolute bottom-0 left-0 z-10 w-full p-4 text-sm bg-white border-b-2 border-gray-300 s-title md:text-md">
              <h3>Interior and Experiential Design</h3>
            </div>
          </div>
        </Link>
        <Link href="/service-page">
          <div className="relative w-full h-full s-card grid-7">
            <div className="z-0 w-full h-full s-img">
              <LazyLoadImage
                placeholder={
                  <span className="w-full h-full bg-gray-100"></span>
                }
                className="object-cover w-full h-full"
                height={'100%'}
                width={'100%'}
                effect="blur"
                src="../intbum.jpg"
                alt="pics"
              />
            </div>
            <div className="absolute bottom-0 left-0 z-10 w-full p-4 text-sm bg-white border-b-2 border-gray-300 s-title md:text-md">
              <h3>Interior and Experiential Design</h3>
            </div>
          </div>
        </Link>
        <Link href="/service-page">
          <div className="relative w-full h-full s-card grid-8">
            <div className="z-0 w-full h-full s-img">
              <LazyLoadImage
                placeholder={
                  <span className="w-full h-full bg-gray-100"></span>
                }
                className="w-full h-full"
                height={'100%'}
                width={'100%'}
                effect="blur"
                src="../int3.jpg"
                alt="pics"
              />
            </div>
            <div className="absolute bottom-0 left-0 z-10 w-full p-4 text-sm bg-white border-b-2 border-gray-300 s-title md:text-md">
              <h3>Interior and Experiential Design</h3>
            </div>
          </div>
        </Link>
        <Link href="/service-page">
          <div className="relative w-full h-full s-card grid-9">
            <div className="z-0 w-full h-full s-img">
              {/* <LazyLoadImage
                placeholder={
                  <span className="w-full h-full bg-gray-100"></span>
                }
                className="w-full h-full"
                height={'100%'}
                width={'100%'}
                effect="blur"
                src="../realmotiondesign.jpg"
                alt="pics"
              /> */}

              <LazyLoadComponent
                placeholder={
                  <span className="w-full h-full bg-gray-100"></span>
                }
                className="w-full h-full"
                height={'100%'}
                width={'100%'}
                effect="blur"
              >
                {/* <video width="320" height="240" autoplay loop>
                  <source src="../realmotiondesign.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
                <img src="../giphy.gif" alt="giphy" loading="lazy" />
              </LazyLoadComponent>
            </div>
            <div className="absolute bottom-0 left-0 z-10 w-full p-4 text-sm bg-white border-b-2 border-gray-300 s-title md:text-md">
              <h3>Motion Design</h3>
            </div>
          </div>
        </Link>
        <Link href="/service-page">
          <div className="relative w-full h-full s-card grid-10">
            <div className="z-0 w-full h-full s-img">
              <LazyLoadImage
                placeholder={
                  <span className="w-full h-full bg-gray-100"></span>
                }
                className="w-full h-full"
                height={'100%'}
                width={'100%'}
                effect="blur"
                src="../int5.jpg"
                alt="pics"
              />
            </div>
            <div className="absolute bottom-0 left-0 z-10 w-full p-4 text-sm bg-white border-b-2 border-gray-300 s-title md:text-md">
              <h3>Interior and Experiential Design</h3>
            </div>
          </div>
        </Link>
        <Link href="/service-page">
          <div className="relative w-full h-full s-card grid-11">
            <div className="z-0 w-full h-full s-img">
              <LazyLoadImage
                placeholder={
                  <span className="w-full h-full bg-gray-100"></span>
                }
                className="w-full h-full"
                height={'100%'}
                width={'100%'}
                effect="blur"
                src="../exp1.jpg"
                alt="pics"
              />
            </div>
            <div className="absolute bottom-0 left-0 z-10 w-full p-4 text-sm bg-white border-b-2 border-gray-300 s-title md:text-md">
              <h3>Experiential Design</h3>
            </div>
          </div>
        </Link>
        <Link href="/service-page">
          <div className="relative w-full h-full s-card grid-12">
            <div className="z-0 w-full h-full s-img">
              <LazyLoadImage
                placeholder={
                  <span className="w-full h-full bg-gray-100"></span>
                }
                className="w-full h-full"
                height={'100%'}
                width={'100%'}
                effect="blur"
                src="../art2.jpg"
                alt="pics"
              />
            </div>
            <div className="absolute bottom-0 left-0 z-10 w-full p-4 text-sm bg-white border-b-2 border-gray-300 s-title md:text-md">
              <h3>Artworks Design and Installation</h3>
            </div>
          </div>
        </Link>
        {/* <div className="relative w-full h-full s-card grid-7">
          <div className="z-0 w-full h-full s-img">
            <img className="w-full h-full" src="../digital1.jpg" alt="pics" />
          </div>
          <div className="absolute bottom-0 left-0 z-10 w-full py-4 text-sm bg-white border-b-2 border-gray-300 s-title md:text-md">
            <h3>Digital Design</h3>
          </div>
        </div>
        <div className="relative w-full h-full s-card grid-8">
          <div className="z-0 w-full h-full s-img">
            <img className="w-full h-full" src="../digital1.jpg" alt="pics" />
          </div>
          <div className="absolute bottom-0 left-0 z-10 w-full py-4 text-sm bg-white border-b-2 border-gray-300 s-title md:text-md">
            <h3>Digital Design</h3>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Showservices
