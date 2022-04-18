import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
const Banner = () => {
  return (
    <Container className="   relative   py-16  shadow-lg">
      <div className="image relative h-96 min-w-[300px]  ">
        <Image
          src={`/images/banner.jpg`}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className=" center absolute top-[35%] left-[30%]  flex-col   rounded-xl">
        <p className="text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl 2xl:text-3xl">
          Not sure where to go ? Perfect
        </p>
        <span className="button-black mt-5  rounded-xl">
          <button className="rounded-xl   bg-gray-900 py-3 px-3 text-xl text-gray-300 ">
            I'm flexible
          </button>
        </span>
      </div>
    </Container>
  )
}

export default Banner

const Container = styled.div`
  height: 500px;

  .banner {
    height: 400px;
    width: 100%;
  }
  .button-black {
    transition: all 0.25s ease-in-out;
    background: #fff;
    :hover {
      border: 3px solid #121212;
      padding: 3px 3px;
    }
    :active {
      transform: scale(0.75);
    }
    button {
      :active {
        transform: scale(0.95);
      }
    }
  }
`
