import { useRouter } from 'next/router'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react'
import DatePickerComponent from './DatePicker'
const style = {
  wrapper:
    'bg-white md:border-2    font-bold h-[50px] p-4 flex items-center    rounded-full  w-[90%]  md:w-[50%]',
}
const SearchBar2 = ({ search, setSearch, placeholder }) => {
  const router = useRouter()
  //! track search
  return (
    <div className={style.wrapper}>
      <div className="center h-full w-full p-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={placeholder || 'Start your search'}
          className=" flex-grow bg-transparent pl-5 outline-none "
        />
      </div>
      <div className=" center hidden w-[40px]  cursor-pointer rounded-full bg-red-400 p-2  lg:block ">
        <AiOutlineSearch className=" rounded-full  text-2xl" />
      </div>
    </div>
  )
}

export default SearchBar2
