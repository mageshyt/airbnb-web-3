import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Header from '../components/Home/Header'
import Footer from '../components/Home/Footer'
import { useNotification } from 'web3uikit'
import InfoCard from '../components/Rentals/InfoCard'
import RentalsMap from '../components/Rentals/Map'
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis'
const rentals = ({ searchResults }) => {
  const router = useRouter()

  const { location, startDate, endDate, noOfGuests } = router.query

  //! moralis

  const { Moralis, account } = useMoralis()
  //! contract processor

  const contractProcessor = useWeb3ExecuteFunction()
  //! notification
  const dispatch = useNotification()
  // ! format the dates

  const formattedStartDate = new Date(startDate?.slice(0, 10))
    .toString()
    .slice(0, 10)

  const formattedEndDate = new Date(endDate?.slice(0, 10))
    .toString()
    .slice(0, 10)

  const range = `${formattedStartDate} - ${formattedEndDate}`

  // !To handle onSuccess transaction
  const handleSuccess = () => {
    dispatch({
      type: 'success',
      message: `Nice! You are going to ${location}!!`,
      title: 'Booking Succesful',
      position: 'topL',
    })
    console.log('success')
  }
  // !To handle onError transaction
  const handleError = (msg) => {
    dispatch({
      type: 'error',
      message: `${msg}`,
      title: 'Booking Failed',
      position: 'topL',
    })
  }

  const IsAccountExist = () => {
    console.log(' account exist', account)
    dispatch({
      type: 'error',
      message: `You need to connect your wallet to book a rental`,
      title: 'Not Connected',
      position: 'topL',
    })
  }

  const coordinates = []
  searchResults.forEach((item) => {
    coordinates.push({ lat: item?.lat, lng: item?.long })
  })

  //! handle BookRentals
  const bookRental = async function (start, end, id, dayPrice) {
    var arr = [start.slice(0, 10)]

    let options = {
      contractAddress: '0x44Aa635659CD06676f4989102acE6016F9D9A1Fb',
      functionName: 'addDatesBooked',
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
    if (account) {
      await contractProcessor.fetch({
        params: options,
        onSuccess: () => {
          handleSuccess()
        },
        onError: (error) => {
          const msg = error.message.toString().slice(195, 209)
          console.log(msg)
          if (msg == 'Already Booked') {
            handleError(msg)
          } else {
            handleError(error)
          }
        },
      })
    } else {
      IsAccountExist()
    }
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
                <InfoCard
                  startDate={startDate}
                  endDate={endDate}
                  BookRentals={bookRental}
                  key={index}
                  item={item}
                  idx={index}
                  noOfGuests={noOfGuests}
                />
              ))}
              {/* {console.log("-->", searchResults)} */}
            </div>
          </div>
          <div className="mt-[70px] mb-4 hidden  rounded-2xl bg-[#303030] p-4 xl:inline-flex xl:min-w-[800px]">
            <RentalsMap item={searchResults} cords={coordinates} />
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
