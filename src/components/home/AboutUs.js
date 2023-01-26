import Container from '../atoms/Container'
import React from 'react'
import Heading from '../atoms/Heading'

const About = () => (
  <Container bgColor>
    <div className="md:grid md:grid-cols-2">
      <div className="max-w-xl w-1/2">
        <Heading>About</Heading>
        <Heading textColor>Studio</Heading>
      </div>
      <div className="pt-6 md:pt-0">
        <p className="text-base pb-10 leading-loose">
          Interiart is an award-winning architecture and interior design
          practice based in NYC. We work internationally on projects of
          residential & commercial interior design that require a creative
          approach. Our talented and experienced designers leverage their
          knowledge and expertise to create unique and comfortable interiors for
          you.
        </p>
        <p className="leading-loose">
          Our team knows that interior design can be stressful for the client
          and we do our best to make it as easy as possible. We listen to your
          needs, ideas, and inputs. And most importantly, we make it exciting
          and enjoyable for our clients.
        </p>
      </div>
    </div>
  </Container>
)

export default About
