import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Bodyhomepage() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="mx-auto mb-16 mt-10 px-4 md:max-w-7xl md:px-8 lg:px-9">
      <div className="">
        <div
          data-aos="fade-up"
          className="purp grid grid-cols-1 md:grid-cols-2 md:place-items-start"
        >
          <div className="text-3xl font-medium md:max-w-sm md:text-4xl md:leading-relaxed ">
            <h2>What is Our Purpose?</h2>
          </div>
          <div className="purp-body mt-5 leading-7 md:leading-8">
            <p>
              To grow human capabilities for the best environment, we believe
              that the best environment is state, where people are highly and
              increasingly productive, so our Core Business is to creatively
              inspire Corporate and Individual productivity, with arty
              expressions.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="val mt-10 grid grid-cols-1 md:grid-cols-2 md:place-items-start"
        >
          <div className="text-3xl font-medium md:max-w-sm md:text-4xl md:leading-relaxed">
            <h2>What are Our Values?</h2>
          </div>
          <div className="val mt-5 leading-7 md:leading-8">
            <p>
              With a Core Purpose of grow human capabilities for the best
              environment, we believe that the best environment is state, where
              people are highly and increasingly productive, so our Core
              Business is to creatively inspire Corporate and Individual
              productivity, with arty expressions.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div
          data-aos="fade-up"
          className="people__title__heading  mb-8 md:mb-0 md:max-w-sm"
        >
          <div className="people-icon">
            <img src="https://i.ibb.co/ZmVXJM5/people.png" alt="" />
          </div>
          <h3 className="text-2xl font-medium md:text-3xl">People</h3>
          <div className="people__body mt-5 leading-relaxed  sm:max-w-xs">
            <p>
              {' '}
              Our care is deeply about people; our customers , our own people,
              and our partners, and the communities to which we belong.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="people__title__heading mb-8 md:mb-0 md:max-w-sm "
        >
          <div className="people-icon">
            <img src="https://i.ibb.co/FHL8db8/result.png" alt="" />
          </div>
          <h3 className="text-2xl font-medium md:text-3xl">Result</h3>
          <div className="people__body mt-5 leading-relaxed sm:max-w-xs">
            <p>
              {' '}
              We have a result driven mindset that is rooted in our culture.
              This fuels our entire business activities
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="people__title__heading md:max-w-sm">
          <div className="people-icon">
            <img src="https://i.ibb.co/bLsrgqV/excellence.png" alt="" />
          </div>
          <h3 className="text-2xl font-medium  md:text-3xl">Excellence</h3>
          <div className="people__body mt-5 leading-relaxed sm:max-w-xs ">
            <p>
              {' '}
              We are committed to excellence in all our deliveries, while
              creating a sustainable environment for future generation
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bodyhomepage
