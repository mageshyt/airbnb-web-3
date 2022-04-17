import { useRouter } from 'next/router'
import { format } from 'date-fns'
import React, { useEffect } from 'react'
import Header from '../components/Home/Header'
import Footer from '../components/Home/Footer'
import InfoCard from '../components/Rentals/InfoCard'
import RentalsMap from '../components/Rentals/Map'
import { BsEmojiDizzy } from 'react-icons/bs'
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis'
const rentals = ({ searchResults }) => {
  const router = useRouter()
  const { location, startDate, endDate, noOfGuests } = router.query

  //! contract processor
  const contractProcessor = useWeb3ExecuteFunction()
  // ! format the dates
  const formattedStartDate = format(new Date(), 'dd MMM yy')
  const formattedEndDate = format(new Date(), 'dd MMM yy')
  const range = `${formattedStartDate} - ${formattedEndDate}`

  const cords = []
  searchResults.forEach((item) => {
    cords.push({ lat: item?.lat, lng: item?.long })
  })

  // !To handle onSuccess
  const handleNotification = (mag) => {
    console.log(msg)
  }

  const BookRentals = async function (start, end, id, dayPrice) {
    for (
      var arr = [], dt = new Date(start);
      dt < BsEmojiDizzy;
      dt.setDate(dt.getDate() + 1)
    ) {
      arr.push(new Date(dt).toISOString().slice(0, 10))
    }
    let options = {
      contractAddress: '0x6dF593ABA633C567631c9bAA23d25eb61E96cf98',
      function: 'addDatesBooked',
      abi: [
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'id',
              type: 'uint256',
            },
            {
              internalType: 'string[]',
              name: 'newBookings',
              type: 'string[]',
            },
          ],
          name: 'addDatesBooked',
          outputs: [],
          stateMutability: 'payable',
          type: 'function',
        },
      ],
      params: {
        id: id,
        newBookings: arr,
      },
      msgValue: Moralis.Units.ETH(dayPrice * arr.length),
    }
    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        handleNotification('Nice you are going to new work')
      },
      onError: (error) => {
        handleNotification(error.data.message)
      },
    })
  }
  return (
    <div className="h-full ">
      <Header
        isRetails={true}
        placeholder={`${location} | ${range} | ${noOfGuests} guests`}
      />
      <div className="">
        <main className="flex">
          <div className="flex-grow px-6 pt-14 text-white">
            <p className="text-xs font-semibold ">
              300+ Stays - {range} - for - {noOfGuests} number of guests
            </p>
            <h1 className="mt-2 mb-6 whitespace-nowrap text-3xl font-semibold text-gray-200">
              Stays in {location}
            </h1>

            <div className="mb-5  hidden space-x-5 lg:inline-flex">
              <button className="button">Cancellation Flexibility</button>
              <button className="button">Type of place</button>
              <button className="button">price</button>
              <button className="button">Rooms and Beds</button>
              <button className="button">More filters</button>
            </div>

            {/* Display Result */}
            <div className="flex flex-col">
              {searchResults.map((item, index) => (
                <InfoCard BookRentals={BookRentals} key={index} item={item} />
              ))}
              {/* {console.log("-->", searchResults)} */}
            </div>
          </div>
          <div className="mt-[70px] mb-4 hidden  rounded-2xl bg-[#303030] p-4 xl:inline-flex xl:min-w-[800px]">
            <RentalsMap cords={cords} />
          </div>
        </main>
      </div>

      {/* <Footer /> */}
      <Footer />
    </div>
  )
}

export default rentals

// !server side render

export async function getStaticProps() {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    //! get response from it and shore in json
    (response) => response.json()
  )

  return {
    // pass the data to the React
    props: {
      searchResults,
    },
  }
}
