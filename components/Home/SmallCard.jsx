import React from 'react'

import SmallCardInfo from '../../assets/smallCadsInfo'

import styled from 'styled-components'

function SmallCard() {
  return (
    <Container className=" mt-3 grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
      {SmallCardInfo.map((item, index) => (
        <div
          key={index}
          className="card bor m-2
           flex transform
            cursor-pointer items-center  space-x-4 rounded-2xl  transition
        duration-200 ease-out hover:scale-105 hover:shadow-2xl "
        >
          <img
            src={item.img}
            alt=""
            className="h-24 w-24 rounded-xl hover:scale-75"
          />

          {/* info */}
          <div className="card-info">
            <p className="text-xl font-bold text-gray-300">{item.title}</p>
            <p className="text-lg text-gray-300">{item.distance}</p>
          </div>
        </div>
      ))}
    </Container>
  )
}

export default SmallCard

//----------------------------------------------------------------
const Container = styled.div`
  .card {
    :hover {
      background-color: #1a1919;
      img {
        transform: scale(0.75);
      }
      .card-info {
        padding: 0 2.5rem 0 0.5rem;
      }
    }
  }
`
