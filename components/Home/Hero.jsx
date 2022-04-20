import React from 'react'
import styled from 'styled-components'

const Banner = () => {
  return (
    <div>
      <HeroContainer className=" hero-container flex items-center justify-center xl:relative">
        <img
          src="/images/hero.jpg"
          className="hidden h-[90vh] w-[100vw] object-cover sm:block"
        />
        <div className="heroInner left-[100px]  text-white sm:absolute">
          <div className="inner z-40 mt-5 flex  w-96 flex-col justify-items-start space-y-5">
            {/* Heading */}
            <h1 className="description  text-5xl font-black">
              Olympian & Paralympian Online Experiences
            </h1>
            {/* Button */}
            <div className="btn-light flex w-36 cursor-pointer items-center rounded-2xl bg-gray-100 ">
              <span className=" btn">Explore Now</span>
            </div>
          </div>
        </div>
      </HeroContainer>
    </div>
  )
}

export default Banner
//----------------------------------------------------------------

const HeroContainer = styled.div`
  height: 90vh;
  width: 100vw;
  .heroInner {
    height: 300px;
    width: 90%;
    h1 {
      line-height: 50px;
    }
  }


`
