import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai'
import { BsFillStarFill } from 'react-icons/bs'
import { Button } from 'web3uikit'
const InfoCard = ({
  item: { location, img, title, description, price, star, total },
  BookRentals,
  startDate,
  endDate,
  idx,
  noOfGuests,
}) => {
  return (
    <div className="mb-3 flex flex-col items-center space-y-2 rounded-2xl bg-[#202020] p-4 lg:flex-row ">
      <div className="w-50  relative h-[200px] w-full  flex-shrink-0 md:h-52 md:w-80">
        <Image
          src={img}
          className="rounded-2xl"
          objectFit="cover"
          layout="fill"
        />
      </div>
      {/* hotel details */}
      <div className="flex flex-grow flex-col pl-5">
        {/* location */}
        <div className="flex items-center justify-between ">
          <p className="font-bold text-gray-300">{location}</p>
          <AiOutlineHeart className="ml-2 cursor-pointer text-2xl text-red-500" />
        </div>
        {/* title */}
        <h4 className="text-xl text-white">{title}</h4>
        {/* Description */}
        <p className=" flex-grow pt-2 text-sm text-gray-400">{description}</p>
        {/* Rating */}
        <div className="flex items-center  justify-between">
          <div className="flex space-x-2">
            <BsFillStarFill className="text-2xl text-red-500" />
            <p className="text-white">{star}</p>
          </div>
          {/* Price */}
          <div className="mr-3">
            <p className="pb-2 text-xl font-semibold lg:text-2xl">{price}</p>
            <Button
              onClick={() => BookRentals(startDate, endDate, idx, noOfGuests)}
              text="Stay Here"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard

//  location = { location }
//  img = { img }
//  title = { title }
//  description = { description }
//  price = { price }
//  star = { star }
//  total = { total }
