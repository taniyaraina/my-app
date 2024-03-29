import react from 'react'
import Image from 'next/image'
import Button from '../atoms/Button'

const HomeHero = () => (
  <main className="lg:relative">
    <div className="mx-auto w-full max-w-7xl pb-12 px-6 md:py-28 md:px-20 md:text-center lg:py-36 lg:text-left">
      <div className="lg:w-1/2 lg:pr-20">
        <h1 className="max-w-full text-5xl md:text-7xl font-normal tracking-normal textSecondaryColor lg:text-7xl xl:text-7xl">
          <span className="block xl:inline">We create your space better</span>{' '}
        </h1>
        <p className="mx-auto mt-8 max-w-none text-base sm:text-xl md:mt-12 md:max-w-3xl">
          Our team creates comfortable spaces for our clients. We’ve been
          designing your everyday life and work through great ideas since 1999.
        </p>
        <Button textAlign>Get Started</Button>
      </div>
    </div>
    <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
      <Image
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/home-hero-image.png"
        alt=""
        height={750}
        width={705}
      />
    </div>
  </main>
)

export default HomeHero
