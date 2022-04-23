import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
// import logo from '../public/assets/images/logo.svg'

import HamburgerMenu from './HamburgerMenu'
// import logo from '../public/assets/images/protaroom.PNG'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="">
      <header
        className={`mx-auto flex w-full items-center  justify-between py-3 px-4 md:px-5 lg:px-9`}
      >
        <div className="header__logo z-50 mt-2 cursor-pointer">
          <Link href="/">
            <img
              src="https://i.ibb.co/VT3Skrb/protaroomlogo.png"
              // src={}
              width={127}
              height={42}
              alt="protaroomIcon"
            />
          </Link>
        </div>
        <div
          className="header__menu z-50 cursor-pointer md:hidden "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* {console.log(isMenuOpen)} */}
          <HamburgerMenu isMenuOpen={isMenuOpen} />
        </div>
        <nav
          className={`${
            isMenuOpen ? 'translate-x-0 ' : 'translate-x-full'
          } absolute top-0  left-0 right-0 bottom-0 z-10 min-h-fit bg-white px-4 py-20 transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:bg-inherit md:py-1 `}
        >
          <ul className="nav__links md:text-sm-custom my-10 flex  flex-col items-start justify-evenly gap-10 text-lg font-medium sm:h-1/5  md:my-0 md:mt-0  md:flex-row md:items-center">
            <li className="nav__link min-w-fit">
              <Link href="/story-page" className="">
                Value Story
              </Link>
            </li>
            <li className="nav__link min-w-fit">
              <Link href="/service-page">Services</Link>
            </li>
            <li className="nav__link min-w-fit">
              <Link href="/about-page">About</Link>
            </li>
            <li className="nav__link min-w-fit">
              <Link href="/blog-page">Blog</Link>
            </li>
            <li className="nav__link min-w-fit">
              <Link href="/contact-page">Contact</Link>
            </li>
            <Link href="/contact-page">
              <button className="md:w-39 btn-hire-us mt-3 w-full rounded py-2 px-5 text-center text-white md:mt-0">
                Hire Us
              </button>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
