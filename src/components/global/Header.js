import Link from 'next/link'
import styled from 'styled-components'

const navigation = [
  { name: 'Services', href: '/test' },
  { name: 'Portfolio', href: '/test' },
  { name: 'Pricing', href: '/test' },
]

const Section = styled.div`
  img {
    object-fit: none;
  }
  .image {
    position: relative;
    top: 4px;
    right: 7px;
  }
`

const Header = () => (
  <Section className="">
    <nav
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:pl-16 lg:pr-24"
      aria-label="Top"
    >
      <div className="flex w-full items-center justify-between border-b border-indigo-500 py-8 lg:border-none">
        <div className="flex items-center">
          <Link href="#">
            <span className="sr-only">Your Company</span>
            <img className="h-10 w-auto" src="/images/logo.png" alt="" />
          </Link>
          <div className="ml-10 hidden space-x-8 lg:block">
            {navigation.map((link) => (
              <Link legacyBehavior href={link.href} key={link.name}>
                <a className="text-base font-medium hover:text-indigo-50">
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="ml-10 space-x-4">
          <a
            href="tel:+(303) 555-0105"
            className="inline-block py-2 px-4 text-base font-medium"
          >
            (303) 555-0105
          </a>
          <span
            className="inline-block
              py-2 text-base font-medium
              "
          >
            {' '}
            EN
          </span>
          <a
            href="#"
            className="inline-block
              py-2
              "
          >
            <img className="image" src="/images/polygon.png" alt="" />
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
        {navigation.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-base font-medium text-white hover:text-indigo-50"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  </Section>
)
export default Header
