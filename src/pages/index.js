import Head from 'next/head'
import Layout from '../components/Layout'
import HomeHero from '../components/home/HomeHero'
import About from '../components/home/AboutUs'
import Services from '../components/home/Services'

export default function Home() {
  return (
    <div>
      <Layout>
        <HomeHero />
        <About />
        <Services />
      </Layout>
    </div>
  )
}
