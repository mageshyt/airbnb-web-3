import Head from 'next/head'
import Header from '../components/Home/Header'
import Banner from '../components/Home/Banner'
import Hero from '../components/Home/Hero'
import SmallCard from '../components/Home/SmallCard'
import MediumCads from '../components/Home/MediumCads'
import Footer from '../components/Home/Footer'
const Home = ({ exploreData, CardData }) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb web 3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Hero />
      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section>
          <h1 className="pt-6 text-4xl font-bold text-[#fff]">
            Explore nearby
          </h1>
          <SmallCard />
          {/* section-2 */}
          <section className="">
            <h2 className="py-8 text-4xl font-semibold text-white">
              Live Anywehre
            </h2>
            {/* render cards */}
            <div className="flex  space-x-3 overflow-scroll">
              {CardData?.map(({ img, title }) => (
                <MediumCads key={img} img={img} title={title} />
              ))}
            </div>
          </section>
          <Banner />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home

//! for small card
export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    //! get response from it and shore in json
    (response) => response.json()
  )
  //! for  large card with
  const CardData = await fetch('https://links.papareact.com/zp1').then(
    (response) => response.json()
  )
  return {
    // pass the data to the React
    props: {
      exploreData,
      CardData,
    },
  }
}
