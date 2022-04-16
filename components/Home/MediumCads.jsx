import Image from 'next/image'
import React from 'react'

const MediumCads = ({ img, title }) => {
  return (
    <div className="transform cursor-pointer transition duration-150 ease-out hover:scale-105">
      <div className="  image-container relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-xl" />
        {/* Title */}
      </div>
      <h3 className=" mt-3 text-2xl text-white">{title}</h3>
    </div>
  )
}

export default MediumCads
