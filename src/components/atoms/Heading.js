import react from 'react'

const Heading = ({ children, className, textColor, textCenter, ...props }) => (
  <h2
    className={`text-4xl mb-1 font-normal tracking-tight sm:text-5xl lg:text-5xl ${
      textColor ? 'colorPrimary' : ''
    } ${textCenter ? 'text-left md:text-center' : 'text-center md:text-left'}`}
  >
    {children}
  </h2>
)

export default Heading
