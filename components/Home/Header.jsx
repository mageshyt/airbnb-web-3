import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

//* Icons
import { FcGlobe } from 'react-icons/fc'
// import { ConnectButton } from 'web3uikit'
import SearchBar from './Searchbar'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import SearchBar2 from './Searchbar2'
import { useRouter } from 'next/router'
import DatePickerComponent from './DatePicker'

const Header = ({ placeholder, isRetails }) => {
  const [colorChange, setColorChange] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const router = useRouter()
  const [search, setSearch] = useState('')
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
      isRetails={!!isRetails}
      className={
        colorChange
          ? ' center flex-col bg-[#121212] '
          : ' center relative flex-col '
      }
    >
      <header
        className={
          colorChange
            ? '  flex items-center  justify-between '
            : 'mt-[100px] flex  items-center justify-between'
        }
      >
        {/* Left */}
        <div
          className="logo mt-2 cursor-pointer"
          onClick={() => router.push('/')}
        >
          <img
            src="/images/airbnb-2-logo.svg"
            className="ml-3 h-16 w-16 xl:mb-2"
            alt="logo"
          />
        </div>

        {/* Middle */}
        {!colorChange && !isRetails ? (
          <div className="middle_section hidden items-center justify-evenly text-xl  text-gray-100  xl:flex ">
            <p className="🖖🏻 cursor-pointer px-4  ">Places to stay</p>
            <p className="😁 cursor-pointer px-4">Experiences</p>
            <p className="😇 cursor-pointer px-4">Online Experiences</p>
          </div>
        ) : (
          <div className="middle_section center h-[100px] w-full">
            <SearchBar2
              search={search}
              placeholder={placeholder}
              setSearch={setSearch}
            />
          </div>
        )}

        {/* right */}
        <div className="right__side hidden w-[470px] items-center justify-end  md:flex  ">
          {/* Become host container */}
          <div className=" flex items-center  space-x-2  text-gray-100  ">
            <div className="md:center hidden">
              <p className="  cursor-pointer  text-sm text-white">
                Become a host
              </p>
              <FcGlobe className=" h-10 w-10 animate-spin  " />
            </div>
            <div>{/* <ConnectButton /> */}</div>
          </div>
        </div>
      </header>
      {!colorChange && !isRetails && (
        <SearchBar2
          search={search}
          placeholder={placeholder}
          setSearch={setSearch}
        />
      )}
      {search.length > 1 && (
        <div className="z-20 col-span-3 mx-auto mt-2 flex h-10 flex-col rounded-xl  ">
          <DatePickerComponent search={search} />
        </div>
      )}
    </Container>
  )
}

export default Header

//----------------------------------------------------------------

const Container = styled.div`
  position: ${(props) => (props.isRetails ? 'relative' : 'fixed')};
  height: 100px;
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
    padding: 10px 0px;
  }
`
