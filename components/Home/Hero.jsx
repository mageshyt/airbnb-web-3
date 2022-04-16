import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <div>
      <HeroContainer className=" flex items-center justify-center">
        <div className="heroInner text-white">
          <div className="inner w-96 mt-5  flex justify-items-start space-y-5 flex-col">
            {/* Heading */}
            <h1 className="text-5xl  description font-black">
              Olympian & Paralympian Online Experiences
            </h1>
            {/* Button */}
            <div className="btn-light flex items-center bg-gray-100 w-36 rounded-2xl">
              <button href="#" className="btn">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </HeroContainer>
    </div>
  );
};

export default Banner;
//----------------------------------------------------------------

const HeroContainer = styled.div`
  /* padding: 6rem 3rem; */
  height: 90vh;
  width: 100vw;
  background: url("./images/hero.jpg") no-repeat;
  background-position: center;
  background-size: cover;
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
  @media (max-width: 36rem) {
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
`;
