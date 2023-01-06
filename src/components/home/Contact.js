import react from 'react'
import Container from '../atoms/Container'
import Heading from '../atoms/Heading'
import Button from '../atoms/Button'

const ContactUs = () => (
  <Container>
    <div className="columns-2">
      <div className="text-center">
        <Heading>Do you have</Heading>
        <Heading textColor>any question?</Heading>
      </div>
      <Button>Order a call</Button>
    </div>
  </Container>
)

export default ContactUs
