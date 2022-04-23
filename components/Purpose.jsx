import { AiOutlineAim } from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Purpose() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div
      data-aos="fade-up"
      className="relative mx-auto mb-20 flex flex-col gap-3 px-4 pt-20 md:max-w-7xl md:flex-col md:px-8  lg:px-9"
    >
      <div className="purpose__title flex flex-col  md:w-2/6 ">
        <div className="purpose__title__icon ml-2">
          {/* <AiOutlineAim size={100} /> */}
          <img src="https://i.ibb.co/6wP59Mb/purpose.png" alt="purpose pics" />
        </div>
        <div className="purpose__title__heading text-3xl font-medium md:py-2 md:text-4xl">
          <h2>Our Purpose</h2>
        </div>
      </div>
      <div className="purpose__body mt-4 leading-8 md:w-4/6 md:text-lg md:leading-10 ">
        <p>
          To grow human capabilities for the best environment. We believe that
          the best environment is the state where people are highly and
          increasingly productive, so our core business is to creatively inspire
          Corporate and Individual productivity with arty expressions.
        </p>
      </div>
      <div
        // data-aos="fade-left"
        className="about-img absolute top-20 left-72 -z-10 mt-8 ml-auto h-auto w-3/5 opacity-0 md:right-6 md:max-w-xs md:opacity-40"
      >
        <img
          className=""
          src="https://i.ibb.co/x8HfYfH/design-thinking.png"
          alt=""
        />
      </div>
    </div>
    // https://i.ibb.co/yWhBy9Q/decorating.png
    // https://i.ibb.co/x8HfYfH/design-thinking.png
  )
}

export default Purpose
