import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const MediumCads = ({ img, title }) => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      console.log('scroll')
      setLoading(true)
    }, 3000)
  }, [])
  return (
    <div className="transform cursor-pointer transition duration-150 ease-out hover:scale-105">
      {loading ? (
        <>
          <div className="  image-container relative h-80 w-80">
            <Image src={img} layout="fill" className="rounded-xl" />
            {/* Title */}
          </div>
          <h3 className=" mt-3 text-2xl text-white">{title}</h3>
        </>
      ) : (
        <div className="h-[400px] w-[400px] rounded-2xl ">
          <Skeleton
            height={500}
            borderRadius={'10px'}
            highlightColor="#504e5046"
            baseColor="#121212"
          />
        </div>
      )}
    </div>
  )
}

export default MediumCads
