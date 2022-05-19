import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="bg-gray-100">
      <footer className=" mx-auto px-4 pt-10 pb-10 md:max-w-7xl md:px-8 lg:px-9">
        <div className="mb-5 md:flex md:w-full md:items-start md:justify-between">
          <div data-aos="fade-up" className="about md:w-4/12 md:max-w-lg">
            <div className=" mb-6 text-2xl font-medium md:text-3xl">
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
          <div className="footer-sections mt-10 flex items-start justify-between md:mt-0 md:w-8/12 md:max-w-lg">
            <div
              data-aos="fade-up"
              className="footer-section  md:-ml-28 md:max-w-sm "
            >
              <div className="footer-section-title mb-6 text-2xl font-medium md:text-3xl">
                <h2>Contact</h2>
              </div>
              <ul className="leading-loose">
                <li className="max-w-xs">
                  <b>Phone:</b> <a href="tel:+2348121053879">+2348121053879</a>
                </li>
                <li className="max-w-xs">
                  <b>Email:</b> <br />
                  <a className="underline" href="mailto:admin@protaroom.com">
                    admin@protaroom.com
                  </a>
                </li>
                <li className="max-w-xs">
                  <b>Address:</b> <br /> 12 Soso Street, Off District Avenue
                </li>
              </ul>
            </div>
            <div data-aos="fade-up" className="footer-section md:max-w-sm">
              <div className="footer-section-title mb-6 text-2xl font-medium md:text-3xl">
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

          <div className="socialLinks mb-0 flex items-center justify-center gap-10 pt-4 md:mt-0">
            <span className="">
              <a
                target="_blank"
                href="https://www.facebook.com/Protaroom-109300285088378/"
              >
                <FaFacebookF />
              </a>
            </span>

            <span className="">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/protaroom"
              >
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
