import React from 'react'
import Image from 'next/image'
import Heading from '../atoms/Heading'
import Button from '../atoms/Button'
import Container from '../atoms/Container'

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
  <Container>
    <Heading>
      Our <span className="colorPrimary">Services</span>
    </Heading>
    <dl className="grid md:mt-16 grid-cols-1 gap-12 lg:grid lg:grid-cols-4">
      {features.map((feature) => (
        <div className="text-center" key={feature.name}>
          <dt className="flex flex-col">
            <div className="flex items-center justify-center min-h-mh">
              <div className="w-24 py-8 text-center">
                <Image
                  className=""
                  src={feature.image}
                  alt=""
                  width={95}
                  height={90}
                />
              </div>
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
    <Button>Free Consultation</Button>
  </Container>
)

export default Services
