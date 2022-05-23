import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Head from 'next/head'
function story() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="relative">
      <Head>
        <title>Protaroom | Value Story </title>
        <link rel="icon" href="../favicon64.png" />
      </Head>
      <Header />
      <div className="relative px-4 mx-auto mb-32 story mt-14 md:max-w-7xl md:px-8 lg:px-9">
        <div className="relative flex flex-col-reverse mx-auto text-white overlaystory lg:block">
          <div className="z-50 rounded val-story-bg-img"></div>
          <div className="rounded pt-cm -z-10">
            <div
              data-aos="fade-up"
              className="pl-5 mt-5 mb-5 text-4xl font-bold story__title md:mb-10-custom md:pt-5 md:pl-10 md:text-5xl"
            >
              <h2>Our Value Story</h2>
            </div>
            <div
              data-aos="fade-up"
              className="p-5 leading-8 story__body md:pl-10 md:text-lg md:leading-10 lg:w-4/6"
            >
              <p>
                Behind every bespoke design that we construct lies an innovative
                design process. We prioritise understanding our client’s
                requirements and follow structured steps so that we deliver a
                design that is fully-functional and effectively represents you.
                As part of this, we consider a wide range of factors including
                planning and analysis. Here’s how we carry out our innovative
                design process:
              </p>
            </div>
          </div>
        </div>
        <div className="design-process md:mx-auto">
          <div
            data-aos="fade-up"
            className="relative mt-40 stage md:mt-16 md:flex md:max-w-5xl"
          >
            <div className="absolute top-0 right-0 flex items-center justify-center w-20 h-20 text-3xl text-center border rounded-full shadow-lg number md:-top-8">
              01
            </div>
            <div className="mx-auto stage-icon stage-icon1 md:w-2/6 md:justify-self-start md:border-r-0 md:pr-12">
              <img src="https://i.ibb.co/NmXN2VJ/brief.png" alt="bulb" />
            </div>
            <div className="stage-content md:self-center ">
              <div className="text-2xl font-bold leading-relaxed stage-title md:text-3xl">
                <h3>Brief</h3>
              </div>
              <div className="mt-5 stage-body md:max-w-sm">
                <p>
                  We have a conviction that great design cannot happen with
                  understanding its audience, so we start our work by analyzing
                  the needs of our clients categorically. By focusing on clear,
                  strategic pain point, we create designs that stand out and
                  connect with people.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="relative mt-10 stage md:mt-24 md:flex md:max-w-5xl "
          >
            <div className="absolute top-0 right-0 flex items-center justify-center w-20 h-20 text-3xl text-center border rounded-full shadow-lg number md:-top-8">
              02
            </div>
            <div className="mx-auto stage-icon md:w-2/6 md:justify-self-start md:border-r-0 md:pr-12">
              <img src="https://i.ibb.co/9Y150tH/research.png" alt="bulb" />
            </div>
            <div className="stage-content md:self-center ">
              <div className="text-2xl font-bold leading-relaxed stage-title md:text-3xl">
                <h3>Research</h3>
              </div>
              <div className="mt-5 stage-body md:max-w-sm">
                <p>
                  Our research procedure forms an integral part of our work
                  culture. We take the time uncover the intangible attitudes,
                  behaviors, and motivation; we help our clients to define their
                  most compelling truths.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            className="relative mt-10 stage md:mt-24 md:flex md:max-w-5xl "
          >
            <div className="absolute top-0 right-0 flex items-center justify-center w-20 h-20 text-3xl text-center border rounded-full shadow-lg number md:-top-8">
              03
            </div>
            <div className="mx-auto stage-icon md:w-2/6 md:justify-self-start md:border-r-0 md:pr-12">
              <img src="https://i.ibb.co/std6ybL/idea.png" alt="bulb" />
            </div>
            <div className="stage-content md:self-center ">
              <div className="text-2xl font-bold leading-relaxed stage-title md:text-3xl">
                <h3>Ideation</h3>
              </div>
              <div className="mt-5 stage-body md:max-w-sm">
                <p>
                  We believe great design comes alive with instinct. At this
                  point , the insight we generated from research is transformed
                  into a digital prototype, our approach to design ensures that
                  all of work is informed by aligning the client’s purpose with
                  other strategic factors, enabling output that is functional
                  and sightly.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="relative mt-10 stage md:mt-24 md:flex md:max-w-5xl "
          >
            <div className="absolute top-0 right-0 flex items-center justify-center w-20 h-20 text-3xl text-center border rounded-full shadow-lg number md:-top-8">
              04
            </div>
            <div className="mx-auto stage-icon md:w-2/6 md:justify-self-start md:border-r-0 md:pr-12">
              <img src="https://i.ibb.co/tPyyQWZ/design.png" alt="bulb" />
            </div>
            <div className="stage-content md:self-center ">
              <div className="text-2xl font-bold leading-relaxed stage-title md:text-3xl">
                <h3>Design</h3>
              </div>
              <div className="mt-5 stage-body md:max-w-sm">
                <p>
                  Our designs are so much more than a visual identity. Working
                  closely with our clients, we assist them to consistently
                  communicate their essence across channels and platforms
                  creatively. By developing products, templates, and documents
                  we inform all aspects of design.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            className="relative mt-10 stage md:mt-24 md:flex md:max-w-5xl "
          >
            <div className="absolute top-0 right-0 flex items-center justify-center w-20 h-20 text-3xl text-center border rounded-full shadow-lg number md:-top-8">
              05
            </div>
            <div className="mx-auto stage-icon md:w-2/6 md:justify-self-start md:border-r-0 md:pr-12">
              <img src="https://i.ibb.co/bF4WV4d/delivery.png" alt="bulb" />
            </div>
            <div className="stage-content md:self-center ">
              <div className="text-2xl font-bold leading-relaxed stage-title md:text-3xl">
                <h3>Delivery</h3>
              </div>
              <div className="mt-5 stage-body md:max-w-sm">
                <p>
                  Excellence , being a core value to us , characterizes our
                  results. Our delivery starts when our client is glad and
                  continues as we partner with them over long periods to ensure
                  they remain fresh and relevant.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="absolute w-3/5 h-auto mt-8 ml-auto about-img -top-28 left-72 -z-20 opacity-90 md:right-6 md:max-w-sm md:opacity-70">
          <img src="https://i.ibb.co/52XGnzj/protaroom-icon-img.png" alt="" />
        </div> */}
      </div>
      <Footer />
    </div>
  )
}

export default story
