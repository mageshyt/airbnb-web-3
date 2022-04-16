import React from 'react'
import styled from 'styled-components'

const Banner = () => {
  return (
    <div>
      <HeroContainer className=" flex items-center justify-center xl:relative">
        <img
          src="/images/hero.jpg"
          className="hidden h-[90vh] w-[100vw] object-cover sm:block"
        />
        <div className="heroInner left-[100px]  text-white sm:absolute">
          <div className="inner mt-5 flex  w-96 flex-col justify-items-start space-y-5">
            {/* Heading */}
            <h1 className="description  text-5xl font-black">
              Olympian & Paralympian Online Experiences
            </h1>
            {/* Button */}
            <div className="btn-light flex w-36 items-center rounded-2xl bg-gray-100">
              <button href="#" className="btn">
                Explore Now
              </button>
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
  /* padding: 6rem 3rem; */
  height: 90vh;
  width: 100vw;
  /* background: url("./images/hero.jpg") no-repeat;
  background-position: center;
  background-size: cover; */
  .heroInner {
    height: 300px;
    width: 90%;
    h1 {
      line-height: 50px;
    }
  }
  //button
  .btn-light {
    transition: all 0.1s ease-in;
    :hover {
      padding: 1.5px 1.5px;
    }
    :active {
      transform: scale(0.9);
    }
  }
  .btn {
    /* padding: px 5px; */
    transition: all 0.1s ease-in;
    :hover {
      border: 3px solid #121212;
    }
    :active {
      transform: scale(0.9);
    }
  }
  @media (max-width: 38rem) {
    background: url(images/hero-sm.jpg);
    background-position: center, bottom left;
    background-size: cover, cover;
    align-items: flex-start;
    padding-top: 7.5rem;
    height: 75vh;
    max-height: 720px;

    .inner {
      .description {
        font-size: 24px;
      }
      align-items: center;
      width: 100%;
      h1 {
        font-size: 25px;
      }
    }
  }
`
