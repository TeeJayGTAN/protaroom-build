import Image from 'next/image'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'
import ReactTypingEffect from 'react-typing-effect'
const words = [
  'are all about the gladness of people',
  'create experiential designs...',
]

function Hero() {
  return (
    <div className="hero mx-auto flex h-screen w-screen flex-col items-center justify-evenly py-3 px-4 font-bold md:px-8">
      <div className="hero-bg-img -z-50"></div>
      <div className="hero__title z-0 max-w-md self-start text-3xl leading-normal  md:max-w-screen-md md:px-5 md:text-4xl md:leading-normal lg:max-w-screen-lg lg:px-9 lg:text-5xl lg:leading-relaxed">
        <h1>
          We{' '}
          {/* We {`${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`} */}
          {
            <ReactTypingEffect
              text={words}
              speed="50"
              eraseSpeed="50"
              eraseDelay="2500"
              typingDelay="1800"
            />
          }
        </h1>
      </div>
      <div className="hero__categories  md:text-md z-0  flex w-full flex-col gap-3 self-start text-sm md:flex-row md:items-center md:justify-between md:gap-0 md:px-5 lg:-mt-10 lg:max-w-screen-lg lg:px-9 lg:font-medium">
        <span>
          <a href="#">Art and Animation</a>
        </span>
        <span>
          <a href="#">Branding</a>
        </span>
        <span>
          <a href="#">Digital Design</a>
        </span>
        <span>
          <a href="#">Interior Design</a>
        </span>
        <span>
          <a href="#">Motion Graphic</a>
        </span>
        <span>
          <a href="#">Print Design</a>
        </span>
      </div>
      <div className="hero__socialLinks z-0  flex w-full max-w-md flex-row justify-between self-start md:px-5 lg:px-9">
        <span>
          <a href="#">
            <FaFacebookF />
          </a>
        </span>
        <span>
          <a href="#">
            <FaPinterest />
          </a>
        </span>
        <span>
          <a href="#">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="#">
            <FaInstagram />
          </a>
        </span>
      </div>
    </div>
  )
}

export default Hero
