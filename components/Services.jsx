function Services() {
  return (
    <div className="services md:flex-custom-md md:flex-custom-md-col md:flex-custom-md-col-gap  relative mx-auto mb-20 px-4 md:max-w-7xl md:px-8 lg:px-9">
      <div className="services__title about__title md:mb-10-custom mb-10 text-3xl font-medium md:text-4xl">
        <h2>Our Services</h2>
      </div>
      <div className="services__sections1  md:flex-custom-md md:w-full md:items-start md:justify-between">
        <div className="services__section md:flex-custom-md-w mb-10 md:mb-0">
          <div className="services__section-title text-2xl font-medium leading-relaxed md:text-3xl">
            <h3>Digital Designs</h3>
          </div>
          <div className="services__section-body mt-5 md:max-w-xs">
            <p>
              Digital design is at the forefront of our core services. We excel
              at creating digital products which convey value and fit the needs
              of our clients. We aim to design intuitive digital products that
              bring delight and help both businesses and users reach their
              goals.
            </p>
          </div>
        </div>
        <div className="services__section md:flex-custom-md-w mb-10 md:mb-0">
          <div className="services__section-title text-2xl font-medium leading-relaxed md:text-3xl">
            <h3>Interior & Experiential Design</h3>
          </div>
          <div className="services__section-body mt-5 md:max-w-xs">
            <p>
              Unique among design firms, Protaroom designs spaces that respond
              to the needs of people and the environment. Our designers are
              rooted in technical excellence, driven by imagination, and focused
              on a solitary goal: to deliver solutions that inspire clients and
              communities.
              {/* As humans, we spend a significant portion of our
              daily lives inside. We believe our emotional and physical
              well-being is dramatically impacted by the places where we live,
              work, and play. */}
            </p>
          </div>
        </div>
        <div className="services__section md:flex-custom-md-w mb-10 md:mb-0">
          <div className="services__section-title text-2xl font-medium leading-relaxed md:text-3xl">
            <h3>Brand</h3>
          </div>
          <div className="services__section-body mt-5 md:max-w-xs">
            <p>
              Protaroom assist client to convert their strategy into results. We
              help our clients achieve their vision for a better future and meet
              goals by leveraging design’s power to generate innovative
              solutions that impact real transformation
            </p>
          </div>
        </div>
      </div>
      <div className="services__sections2 md:flex-custom-md md:w-full md:items-start md:justify-between">
        <div className="services__section md:flex-custom-md-w mb-10 md:mb-0">
          <div className="services__section-title text-2xl font-medium leading-relaxed md:text-3xl">
            <h3>Print Designs</h3>
          </div>
          <div className="services__section-body mt-5 md:max-w-xs">
            <p>
              We have an expertise in aligning your brand with the promotional
              need it requires. Our services include Book design , e-book
              design, campaigns, signage ,editorial design, brochure , proposals
              and more
            </p>
          </div>
        </div>
        <div className="services__section md:flex-custom-md-w mb-10 md:mb-0">
          <div className="services__section-title text-2xl font-medium leading-relaxed md:text-3xl">
            <h3>Motion Graphics</h3>
          </div>
          <div className="services__section-body mt-5 md:max-w-xs">
            <p>
              Motion videos are more engaging and interactive, we create videos
              that allow individuals and corporate entities to communicate their
              ideas in a short and efficient way, promising exceptional
              conversions.
            </p>
          </div>
        </div>
        <div className="services__section md:flex-custom-md-w mb-10 md:mb-0">
          <div className="services__section-title text-2xl font-medium leading-relaxed md:text-3xl">
            <h3>Artworks Design and Installation</h3>
          </div>
          <div className="services__section-body mt-5 md:max-w-xs">
            <p>
              At Protaroom, we engage the beauty of art to elevate people
              spaces, ranging from elegant canvass, paintings , sketches to
              Abstract design , our singular desire is to inspire productivity
              with aesthetics.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
