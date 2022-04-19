import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'

function Footer() {
  return (
    <div className="bg-gray-200">
      <footer className=" mx-auto bg-gray-200 px-4 pt-20 pb-10 md:max-w-7xl md:px-8 lg:px-9">
        <div className="mb-5 md:flex md:w-full md:items-center md:justify-between">
          <div className="about md:w-4/12 md:max-w-md">
            <div className="about__title mb-10 text-3xl font-medium md:text-4xl">
              <h2>About Us</h2>
            </div>
            <div className="leading-relaxed">
              <p>
                We are a community of designers, with a cumulative work
                experience that span over a decade of creating bespoke creatives
                across several sectors. Our partners are all practicing
                designers, and whether working collaboratively or independently,
                innovating remarkable impressions and experiences.
              </p>
            </div>
          </div>
          <div className="footer-sections  mt-10 flex justify-between md:w-8/12 md:max-w-lg">
            <div className="footer-section md:max-w-sm">
              <div className="footer-section-title about__title mb-10 text-3xl font-medium md:text-4xl">
                <h2>Services</h2>
              </div>
              <ul className="leading-loose">
                <li>Art and Animation</li>
                <li>Art and Animation</li>
                <li>Art and Animation</li>
                <li>Art and Animation</li>
                <li>Art and Animation</li>
                <li>Art and Animation</li>
              </ul>
            </div>
            <div className="footer-section md:max-w-sm">
              <div className="footer-section-title about__title mb-10 text-3xl font-medium md:text-4xl">
                <h2>Quick Links</h2>
              </div>
              <ul className="leading-loose">
                <li>
                  {' '}
                  <a href="#">Home</a>
                </li>
                <li>
                  {' '}
                  <a href="#">About Us</a>
                </li>
                <li>
                  {' '}
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Blog </a>
                </li>
                <li>
                  <a href="#">Value Story </a>
                </li>
                {/* <li>Art and Animation</li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright border-t-2 border-t-gray-500 pt-4 text-center opacity-80 md:mt-10 md:flex md:items-center md:justify-between md:text-lg">
          <p className="">
            {' '}
            Copyright &copy; 2022 Protaroom. All Rights Reserved.
          </p>

          <div className="socialLinks mb-0 flex items-center justify-around gap-10 pt-4 md:mt-0">
            <span className="">
              <a href="#">
                <FaFacebookF />
              </a>
            </span>
            <span className="">
              <a href="#">
                <FaPinterest />
              </a>
            </span>
            <span className="">
              <a href="#">
                <FaLinkedinIn />
              </a>
            </span>
            <span className="">
              <a href="#">
                <FaInstagram />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
