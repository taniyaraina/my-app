import react from 'react'

const HomeHero = () => (
  <main className="lg:relative">
    <div className="mx-auto w-full max-w-7xl pt-10 pb-28 px-20 text-center lg:py-36 lg:text-left">
      <div className="lg:w-1/2 xl:pr-20">
        <h1 className="text-7xl	font-normal tracking-normal text-gray-900 sm:text-5xl md:text-7xl lg:text-5xl xl:text-7xl">
          <span className="block xl:inline">We create your space better</span>{' '}
        </h1>
        <p className="mx-auto mt-8 max-w-0 text-base sm:text-xl md:mt-12 md:max-w-3xl">
          Our team creates comfortable spaces for our clients. We’ve been
          designing your everyday life and work through great ideas since 1999.
        </p>
        <div className="mt-12 borderColor sm:flex sm:justify-center lg:justify-start">
          <a
            href="#"
            className="border uppercase rounded-lg border px-8 py-3 text-base font-bold	md:py-4 md:px-10 md:text-lg"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
    <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/home-hero-image.png"
        alt=""
      />
    </div>
  </main>
)

export default HomeHero
