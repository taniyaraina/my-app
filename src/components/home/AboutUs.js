import React from 'react'
import Heading from '../atoms/Heading'

const About = () => (
  <div>
    <div className="bgLight">
      <div className="mx-auto max-w-7xl py-16 px-20 sm:py-20 sm:px-6 lg:flex lg:justify-around lg:px-20">
        <div className="max-w-xl w-1/2">
          <Heading>About</Heading>
          <Heading textColor>Studio</Heading>
        </div>
        <div className="w-8/12">
          <p className="text-base pb-10 leading-loose">
            Interiart is an award-winning architecture and interior design
            practice based in NYC. We work internationally on projects of
            residential & commercial interior design that require a creative
            approach. Our talented and experienced designers leverage their
            knowledge and expertise to create unique and comfortable interiors
            for you.
          </p>
          <p className="leading-loose">
            Our team knows that interior design can be stressful for the client
            and we do our best to make it as easy as possible. We listen to your
            needs, ideas, and inputs. And most importantly, we make it exciting
            and enjoyable for our clients.
          </p>
        </div>
      </div>
    </div>{' '}
  </div>
)

export default About
