import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import HomeHero from '../components/home/HomeHero'
import About from '../components/home/AboutUs'

export default function Home() {
  return (
    <div>
      <Layout>
        <HomeHero />
        <About />
      </Layout>
    </div>
  )
}
