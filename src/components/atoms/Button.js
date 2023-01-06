import react, { Children } from 'react'

const Button = ({ children, textAlign }) => (
  <div
    className={`mt-12 borderColor sm:flex sm:justify-center ${
      textAlign ? 'lg:justify-start' : 'lg:justify-center'
    }`}
  >
    <a
      href="#"
      className="border uppercase rounded-lg boldBorder px-8 py-3 text-base font-bold	md:py-4 md:px-10 md:text-lg"
    >
      {children}
    </a>
  </div>
)

export default Button
