import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Value() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div data-aos="fade-up" className="value__section md:-mb-6">
      <div className="mx-auto  mb-14 px-4  md:max-w-7xl md:px-8 lg:px-9">
        <div className="value__title flex flex-col gap-3 md:w-2/6 ">
          <div className="value__title__icon ">
            <img src="https://i.ibb.co/gwMZ8Ng/value2.png" alt="pics" />
          </div>
          <div className="value__title__heading text-3xl font-medium md:text-4xl">
            <h2>
              Ou<span>r</span> Value<span>s</span>
            </h2>
          </div>
        </div>
        <div className="value__body mt-10 leading-8 md:w-4/6 md:text-lg md:leading-10 ">
          <p>
            With a Core Purpose of grow human capabilities for the best
            environment, we believe that the best environment is state, where
            people are highly and increasingly productive, so our Core Business
            is to creatively inspire Corporate and Individual productivity, with
            arty expressions
          </p>
        </div>
      </div>
      <div className="value__sub-section mx-auto justify-start  px-4  md:flex md:w-full md:max-w-7xl md:items-center md:justify-center md:gap-16  md:px-8 md:pb-12 lg:px-0">
        <div data-aos="fade-up" className="people mx-auto mb-20 md:max-w-sm ">
          <div className="people__title__heading text-2xl font-medium leading-relaxed md:text-3xl">
            <div className="people-icon">
              <img src="https://i.ibb.co/ZmVXJM5/people.png" alt="" />
            </div>
            <h3 className="">People</h3>
          </div>
          <div className="people__body mt-5 self-center md:max-w-xs">
            <p>
              {' '}
              Our care is deeply about people; our customers , our own people,
              and our partners, and the communities to which we belong.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="people mx-auto mb-20 md:max-w-sm ">
          <div className="people__title__heading text-2xl font-medium leading-relaxed md:text-3xl">
            <div className="people-icon">
              <img src="https://i.ibb.co/FHL8db8/result.png" alt="" />
            </div>
            <h3>Result</h3>
          </div>
          <div className="people__body mt-5 md:max-w-xs">
            <p>
              {' '}
              We have a result driven mindset that is rooted in our culture.
              This fuels our entire business activities
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="people mx-auto mb-20 md:max-w-sm ">
          <div className="people__title__heading text-2xl font-medium leading-relaxed md:text-3xl">
            <div className="people-icon">
              <img src="https://i.ibb.co/bLsrgqV/excellence.png" alt="" />
            </div>
            <h3>Excellence</h3>
          </div>
          <div className="people__body mt-5 md:max-w-xs">
            <p>
              {' '}
              We are committed to excellence in all our deliveries, while
              creating a sustainable environment for future generation
            </p>
          </div>
        </div>
      </div>
      <div
        // data-aos="fade-left"
        className="about-img absolute top-4 left-72 -z-10 mt-8 ml-auto h-auto w-3/5 opacity-0 sm:opacity-0 md:right-6 md:max-w-xs "
      >
        <img
          className="md:opacity-50"
          src="https://i.ibb.co/J21pLNQ/value.png"
          alt=""
        />
      </div>
    </div>
  )
}

export default Value
