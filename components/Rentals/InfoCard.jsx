import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai'
import { BsFillStarFill } from 'react-icons/bs'
const InfoCard = ({
  item: { location, img, title, description, price, star, total },
}) => {
  return (
    <div className="grid-row-2 b mb-4 grid cursor-pointer rounded-2xl  bg-[#202020] py-7 px-2 pr-4 transition duration-200 ease-out hover:opacity-80  hover:shadow-lg md:flex  lg:flex xl:flex">
      <div className="w-50  relative h-[200px]  flex-shrink-0 md:h-52 md:w-80">
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
          <AiOutlineHeart className="ml-2 text-2xl text-red-500" />
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
            <p className="text-right font-extralight">{total}</p>
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
