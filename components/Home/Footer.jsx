import React from 'react'
import { footData } from '../../assets/FooterInfo'

const Footer = () => {
  return (
    <div className="grid  grid-cols-1 gap-y-10 bg-[#191919] py-14 px-32 md:grid-cols-2 lg:grid-cols-4">
      {footData.map((data, index) => {
        return (
          <div className="space-y-4">
            <span className="font-bold text-red-400">{data.title}</span>
            <div className=" cursor-pointer text-gray-300 ">
              {data.links.map((link, index) => {
                return <p className="hover:underline">{link}</p>
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Footer
