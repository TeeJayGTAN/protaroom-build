import { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  const [display, setDisplay] = useState(false)
  const text = `Our proposition is unique, as we leverage on our depth of digital
            versatilities (from research to implementation) in creating an
            impressive experience for our clients, reflecting our deep
            conviction that great design cannot happen without understanding
            people, having passion, creative intelligence and above all personal
            assurance. We are a community of designers, with a cumulative work experience
            that span over a decade of creating bespoke creatives across several
            sectors. Our partners are all practicing designers, and whether
            working collaboratively or independently, innovating remarkable
            impressions and experiences.`
  return (
    <div
      data-aos="fade-left"
      className="relative mx-auto  px-4 md:max-w-7xl md:px-8 lg:px-9"
    >
      <div className="mb-10 text-3xl font-medium md:text-4xl">
        <h2>About Us</h2>
      </div>
      {/* purpose__body mt-4 leading-8 md:w-4/6 md:text-lg md:leading-10  */}
      <div className="about-body-section w-full  overflow-hidden md:flex md:items-center md:justify-between">
        <div className="about__body flex flex-col gap-3 leading-normal md:w-4/6 md:max-w-screen-md  md:items-center  md:text-lg md:leading-relaxed">
          <p>
            Welcome to Protaroom, an interdisciplinary design and recreation
            company with a human-centered approach to interior and experiential
            design. We strongly believe that the human experience must be the
            driving force behind every element of a design––from ideation to the
            qualities of interaction, expectation, and intention.
          </p>
          <p>
            Our work covers Interior design, Animation, Art, Illustration,
            Graphics, Identity Strategy and Positioning, Exhibitions and
            Installations, Brand, Business Architecture and Digital experiences
          </p>
          <p>{display ? text : ''}</p>
          <div className="readmore-btn mt-6 w-full text-left">
            <button
              className=" btn-hire-us mt-3 w-2/6 rounded py-2 px-5 text-center text-white md:mt-0 md:w-2/6"
              onClick={() => setDisplay(!display)}
            >
              {display ? 'View Less' : 'View More'}
            </button>
          </div>
        </div>
        <div
          // data-aos="zoom-in"
          className="about-img sm:max-w-xs-cm -top-4 left-72 -z-10 mt-8 ml-auto h-auto w-3/5  opacity-0 md:absolute md:right-6 md:h-auto md:max-w-sm md:opacity-100"
        >
          <img
            className="overflow-hidden rounded "
            src="https://i.ibb.co/jRNS3Hv/D3.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default About
