import Image from 'next/image'
import { useState } from 'react'
import HamburgerMenu from './HamburgerMenu'
import logo from '../public/assets/images/protaroom.PNG'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div>
      <header className="mx-auto flex w-full items-center  justify-between py-3 px-4 md:px-5 lg:px-9">
        <div className="header__logo z-50 mt-2 cursor-pointer">
          <img src={logo} width={125} height={42} alt="protaroomIcon" />
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
            isMenuOpen ? 'translate-x-0' : 'translate-x-full '
          } absolute  top-0 left-0 right-0 bottom-0 z-10 bg-white px-4 py-20 transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:bg-inherit md:py-1 `}
        >
          <ul className="nav__links md:text-sm-custom mt-28 flex h-2/5 flex-col items-start justify-evenly gap-8 text-lg font-medium  md:mt-0 md:flex-row  md:items-center">
            <li className="nav__link ">
              <a href="#">Cases</a>
            </li>
            <li className="nav__link">
              <a href="#">Services</a>
            </li>
            <li className="nav__link">
              <a href="#">About</a>
            </li>
            <li className="nav__link">
              <a href="#">Blog</a>
            </li>
            <li className="nav__link">
              <a href="#">Contact</a>
            </li>
            <button className="md:w-39 btn-hire-us mt-3 w-full rounded py-2 px-5 text-center text-white md:mt-0">
              Hire Us
            </button>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
