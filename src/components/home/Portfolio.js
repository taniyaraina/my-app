import react from 'react'
import Heading from '../atoms/Heading'
import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    href: '#',
    category: { name: 'All', href: '#' },
    imageUrl: '/images/portfolio-1.png',
  },
  {
    href: '#',
    category: { name: 'Comercial', href: '#' },
    imageUrl: '/images/portfolio-2.png',
  },
  {
    href: '#',
    category: { name: 'Residential', href: '#' },
    imageUrl: '/images/portfolio-3.png',
  },
  {
    href: '#',
    category: { name: 'Office', href: '#' },
    imageUrl: '/images/portfolio-4.png',
  },
  {
    href: '#',
    category: { name: 'Other', href: '#' },
    imageUrl: '/images/portfolio-5.png',
  },
  {
    href: '#',
    category: { href: '#' },
    imageUrl: '/images/portfolio-6.png',
  },
  {
    href: '#',
    category: { href: '#' },
    imageUrl: '/images/portfolio-7.png',
  },
  {
    href: '#',
    category: { href: '#' },
    imageUrl: '/images/portfolio-8.png',
  },
]

const Portfolio = () => (
  <div className="py-20 sm:py-24 lg:py-32 bgLight">
    <div className="mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-20">
      <Heading textCenter>
        Our <span className="textPrimary">Portfolio</span>
      </Heading>
      <div className="flex items-center justify-between uppercase pt-16">
        <div className="hidden space-x-9 lg:block">
          {posts &&
            posts.map((link) => (
              <Link legacyBehavior href={link.href} key={link.name}>
                <a className="text-base font-medium hover:text-primaryColor font-semibold	">
                  {link.category.name}
                </a>
              </Link>
            ))}
        </div>
        <div className="space-x-3">
          <a
            href="tel:+(303) 555-0105"
            className="inline-block py-2 px-4 text-base font-semibold"
          >
            View More{' '}
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-4">
        {posts &&
          posts.map((post) => (
            <div
              key={post.title}
              className="overflow-hidden rounded-br shadow-lg"
            >
              <Image
                className="w-full object-cover"
                src={post.imageUrl}
                alt=""
                width={270}
                height={320}
              />
            </div>
          ))}
      </div>
    </div>
  </div>
)

export default Portfolio
