import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Home/Header'
import Banner from '../components/Home/Banner'
import Hero from '../components/Home/Hero'
import SmallCard from '../components/Home/SmallCard'
const Home: NextPage = () => {
  return (
    <div className="h-screen w-full ">
      <Head>
        <title>Airbnb web 3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section>
          <h1 className="pt-6 text-4xl font-bold text-[#fff]">
            Explore nearby
          </h1>
          <SmallCard />
          {/* Banner */}
          <section>
            <Banner />
          </section>
        </section>
      </main>
    </div>
  )
}

export default Home
