import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

//* Icons
import { FcGlobe } from 'react-icons/fc'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
import { ConnectButton } from 'web3uikit'
import SearchBar from './Searchbar'
const Header = () => {
  const [colorChange, setColorChange] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  useEffect(() => {
    if (scrollY >= 200) {
      setColorChange(true)
    } else {
      setColorChange(false)
    }
  }, [scrollY])
  // !------------------------------------------------------------------
  return (
    <Container
      className={
        colorChange ? 'scroll-color center   flex-col ' : 'center   flex-col  '
      }
    >
      <header
        className={
          colorChange
            ? '  flex items-center  justify-between '
            : 'flex items-center  justify-between lg:mt-28  lg:mb-10 xl:mt-28 xl:mb-10 2xl:mt-28  2xl:mb-10'
        }
      >
        {/* Left */}
        <div className="logo mt-2">
          <img
            src="/images/airbnb-2-logo.svg"
            className="ml-3 h-16 w-16 xl:mb-2"
            alt="logo"
          />
        </div>

        {/* Middle */}

        <div className="middle_section hidden items-center justify-evenly text-xl  text-gray-100  xl:flex ">
          <p className="🖖🏻 cursor-pointer px-4  ">Places to stay</p>
          <p className="😁 cursor-pointer px-4">Experiences</p>
          <p className="😇 cursor-pointer px-4">Online Experiences</p>
        </div>

        {/* right */}
        <div className="right__side flex  w-[370px] items-center justify-around space-x-2  ">
          {/* Become host container */}
          <p className=" cursor-pointer text-sm text-white">Become a host </p>
          <div className="hidden items-center text-gray-100 xl:inline-flex ">
            <FcGlobe className=" h-10 w-10 animate-spin  " />
          </div>
          {/* search container */}
          <div>
            <ConnectButton />
          </div>
        </div>
      </header>
      <SearchBar colorChange={colorChange} />
    </Container>
  )
}

export default Header

//----------------------------------------------------------------

const Container = styled.div`
  position: fixed;
  height: 80px;
  width: 100%;
  z-index: 100;
  header {
    width: 90%;
    .🖖🏻 {
      position: relative;
      ::after {
        content: '';
        position: absolute;
        height: 2px;
        background-color: #eee;
        bottom: -10px;
        left: 0px;
        right: 0px;
        transform: scaleX(0.2);
        /* visibility: hidden; */
      }
    }
    // second
    .😁,
    .😇 {
      position: relative;

      ::after {
        content: '';
        position: absolute;
        height: 2px;
        border-radius: 20px;
        background-color: #eee;
        bottom: -10px;
        left: 0px;
        right: 0px;
        transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform-origin: center;
        transform: scaleX(0);
        opacity: 0;
      }
      &:hover {
        ::after {
          transform: scaleX(0.2);
          opacity: 1;
        }
      }
    }
  }
  // !search
  .search {
    width: 650px;
    padding: 15px 0px;
  }
`
