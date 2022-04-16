import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import DatePickerComponent from './DatePicker'
const SearchBar = ({ colorChange }) => {
  const router = useRouter()
  //! track search
  const [search, setSearch] = React.useState('')

  //* set date on selection
  const [startDate, setStartDate] = useState(new Date())

  const [endDate, setEndDate] = useState(new Date())
  //* get no of guests
  const [noOfGuests, setNoOfGuests] = useState(1)
  //! selectionRange

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }
  const search_url = () => {
    router.push({
      pathname: '/rentals',
      query: {
        location: search,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    })
  }
  const resetInput = () => {
    setSearch('')
  }

  return (
    <div className="center flex-col ">
      {/* Search */}
      <div
        className={
          colorChange
            ? 'hidden '
            : 'search mr-32  hidden  items-center justify-between rounded-full bg-white shadow-xl lg:inline-flex'
        }
      >
        <div className="search__input center ml-16">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="h-full w-full bg-transparent text-2xl font-light text-gray-600 outline-none"
            placeholder="where are u going ?"
          />
        </div>
        <div className="  search__icon btn-red mr-5 cursor-pointer  rounded-full ">
          <div
            onClick={() => search_url}
            className="center transform
           rounded-full bg-red-400 py-3
            px-2   text-white transition duration-100 hover:scale-105 "
          >
            <AiOutlineSearch className="h-6 w-8 " />
            <p>Search</p>
          </div>
        </div>
      </div>
      <div className="center mr-[100px]">
        {search.length > 1 && (
          <div className="z-20 col-span-3 mx-auto mt-2 flex h-10 flex-col rounded-xl  ">
            <DatePickerComponent
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              selectionRange={selectionRange}
            />
            <div className="item-center mb-4 flex border-b bg-white p-2">
              <h2 className="flex-grow text-2xl font-semibold">
                Number of Gusts
              </h2>
              <FaUserAlt className="h-6" />
              <input
                value={noOfGuests}
                onChange={(e) => setNoOfGuests(e.target.value)}
                type="number"
                min={1}
                className="mb-1 w-12 pl-3 text-lg font-bold text-red-400 outline-none"
              />
            </div>
            {/* for button */}
            <div className="flex bg-white p-4">
              <button onClick={resetInput} className="flex-grow text-gray-600">
                Cancel
              </button>
              <button onClick={search_url} className="flex-grow text-red-400">
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchBar
