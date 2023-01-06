import Head from 'next/head'
import Layout from '../components/Layout'
import HomeHero from '../components/home/HomeHero'
import About from '../components/home/AboutUs'
import Services from '../components/home/Services'
import Portfolio from '../components/home/Portfolio'
import Pricing from '../components/home/Pricing'
import Testimonials from '../components/home/Testimonials'
import ContactUs from '../components/home/Contact'

export default function Home() {
  return (
    <div>
      <Layout>
        <HomeHero />
        <About />
        <Services />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <ContactUs />
      </Layout>
    </div>
  )
}
