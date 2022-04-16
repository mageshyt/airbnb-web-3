import React from 'react'
import { FcGlobe } from 'react-icons/fc'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
const SearchBar = ({colorChange}) => {
  return (
    <div>
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
            type="text"
            className="h-full text-2xl font-light text-gray-600 outline-none"
            placeholder="where are u going ?"
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
    </div>
  )
}

export default SearchBar;