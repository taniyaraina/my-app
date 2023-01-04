import React from 'react'

const features = [
  {
    name: 'Interior Design',
    description:
      'Interior design services offer a vast variety of solutions for our clients’ homes and offices.',
    image: '/images/service-icon-1.png',
  },
  {
    name: 'Decorative Services',
    description:
      'Our professional decorators will be happy to help you change your house’s inner look.',
    image: '/images/service-icon-2.png',
  },
  {
    name: 'Space Planning',
    description:
      'We create better interior experiences through our space planning services.',
    image: '/images/service-icon-3.png',
  },
  {
    name: 'Project Management',
    description:
      'We provide proper project management as it’s one of the main success factors in interior design.',
    image: '/images/service-icon-4.png',
  },
]
const Services = () => (
  <div className="py-20 sm:py-24 lg:py-32">
    <div className="mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-20">
      <h2 className="text-4xl font-normal tracking-tight sm:text-5xl lg:text-5xl">
        Our <span className="pl-2 textPrimary">Services</span>
      </h2>
      <dl className="grid mt-16 grid-cols-1 gap-16 lg:grid lg:grid-cols-4">
        {features.map((feature) => (
          <div className="text-center" key={feature.name}>
            <dt className="flex flex-col items-center">
              <div className="w-24 py-8 text-center">
                <img className="" src={feature.image} alt="" />
              </div>
              <p className="py-4 uppercase text-lg font-semibold leading-8 tracking-tight textSecondaryColor">
                {feature.name}
              </p>
            </dt>
            <dd className="text-base leading-8 textLite">
              {feature.description}
            </dd>
          </div>
        ))}
      </dl>
      <div className="mt-12 borderColor sm:flex sm:justify-center lg:justify-center">
        <a
          href="#"
          className="border uppercase rounded-lg border px-8 py-3 text-base font-bold	md:py-4 md:px-10 md:text-lg"
        >
          Free Consultation
        </a>
      </div>
    </div>
  </div>
)

export default Services
