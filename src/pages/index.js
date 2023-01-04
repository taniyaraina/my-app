import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import HomeHero from '../components/home/HomeHero'

export default function Home() {
  return (
    <div>
      <Layout>
        <HomeHero />
      </Layout>
    </div>
  )
}
