function About() {
  return (
    <div className="relative mx-auto mb-20  px-4 md:max-w-7xl md:px-8 lg:px-9">
      <div className="about__title mb-10 text-3xl font-medium md:text-4xl">
        <h2>About Us</h2>
      </div>
      <div className="about-body-section w-full  overflow-hidden md:flex md:items-center md:justify-between">
        <div className="about__body flex flex-col gap-3 leading-relaxed md:max-w-screen-md md:items-center">
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
          <p>
            Our proposition is unique, as we leverage on our depth of digital
            versatilities (from research to implementation) in creating an
            impressive experience for our clients, reflecting our deep
            conviction that great design cannot happen without understanding
            people, having passion, creative intelligence and above all personal
            assurance.
          </p>
          <p>
            We are a community of designers, with a cumulative work experience
            that span over a decade of creating bespoke creatives across several
            sectors. Our partners are all practicing designers, and whether
            working collaboratively or independently, innovating remarkable
            impressions and experiences.
          </p>
        </div>
        <div className="about-img absolute -top-28 left-72 -z-10 mt-8 ml-auto h-auto w-3/5 opacity-50 md:right-6 md:max-w-sm md:opacity-90">
          <img src="https://i.ibb.co/52XGnzj/protaroom-icon-img.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
