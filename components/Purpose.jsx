import { AiOutlineAim } from 'react-icons/ai'

function Purpose() {
  return (
    <div className="relative mx-auto mb-20 flex flex-col gap-3 px-4 pt-20 md:max-w-7xl md:flex-col md:px-8  lg:px-9">
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
      {/* <div className="about-img absolute -top-12 left-72 -z-10 mt-8 ml-auto h-auto w-3/5 opacity-50 md:right-6 md:max-w-sm md:opacity-90">
        <img src="https://i.ibb.co/52XGnzj/protaroom-icon-img.png" alt="" />
      </div> */}
    </div>
  )
}

export default Purpose
