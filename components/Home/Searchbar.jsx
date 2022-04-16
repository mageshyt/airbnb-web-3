import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import DatePickerComponent from './DatePicker'
const SearchBar = ({ colorChange, placeholder }) => {
  const router = useRouter()
  //! track search
  const [search, setSearch] = React.useState('')

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
            placeholder={placeholder || 'where are u going ?'}
          />
        </div>
        <div className="  search__icon btn-red mr-5 cursor-pointer  rounded-full ">
          <div
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
          <div className=" col-span-3 mx-auto mt-2 flex h-10 flex-col rounded-xl  ">
            <DatePickerComponent search={search} />
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchBar
