"use client"

import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { FaComment, FaHeadphones, FaTicketAlt, FaUsers } from "react-icons/fa"
import { LiaUserAstronautSolid } from "react-icons/lia"
import { IoMdHeadset } from "react-icons/io"
import { BsCart, BsGear, BsSoundwave, BsPeople } from "react-icons/bs";
import { AudioContext } from "@/context/AudioContext";
import Player from "../player/player";
const MobileNav = () => {
  const [showPlayer, setShowPlayer] = useState(false)
  const { audio, setAudio } = useContext(AudioContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setShowPlayer(false);
    const links = document.querySelectorAll('.navbar-item');
    links.forEach(e => {
      e.addEventListener('click', () => {
        setIsMenuOpen(false);
      })
    })
  }, []);

  return (
    <>

      <nav className="relative flex flex-col w-screen max-h-screen overflow-hidden">
        {/* Menu */}
        {isMenuOpen &&
          <div className={`mobile-menu fixed z-999 left-0  bottom-0 backdrop-blur-lg bg-[#ffffff9d] dark:bg-[#000000d0] w-screen h-screen overflow-hidden scroll-m-0   ${isMenuOpen ? 'show' : 'close'}`} id="navmenu">
            <ul className="navbar-nav ms-auto space-y-6">
              <li className="navbar-item grid grid-cols-3 mb-4 gap-8">
                <div className="flex flex-col space-y-2 items-center">
                  <div className=" w-12 h-12 flex items-center justify-center py-2 px-4 rounded-2xl bg-white dark:bg-gray-950 shadow-xl  shadow-[#ff00005e]">
                    <LiaUserAstronautSolid size={20} color="white" />
                  </div>
                  <p className="text-blac dark:text-white text-xs">Profile</p>
                </div>
                <Link href="/store" className="flex flex-col space-y-2 items-center">
                  <div className=" w-12 h-12 flex items-center justify-center py-2 px-4 rounded-2xl bg-white dark:bg-gray-950 shadow-xl  shadow-[#ff00005e]">
                    <IoMdHeadset size={20} color="white" />
                  </div>
                  <p className="text-black dark:text-white text-xs">Playlist</p>
                </Link>

                <Link href="/store" className="flex flex-col space-y-2 items-center text-white">
                  <div className=" w-12 h-12 flex items-center justify-center py-2 px-4 rounded-2xl bg-white dark:bg-gray-950 shadow-xl  shadow-[#ff00005e]">
                    <BsGear size={20} color="white" />
                  </div>
                  <p className="text-black dark:text-white text-xs">settings</p>
                </Link>
              </li>
              <li className="navbar-item w-full" onClick={() => { setIsMenuOpen(false) }}>
                <Link href="/store" className="flex space-x-2 items-center text-white  py-2 px-4 rounded-lg w-4/5">
                  <BsCart size={20} color="white" />
                  <p className="">Store</p>
                </Link>
              </li>

              <li className="navbar-item" onClick={() => { setIsMenuOpen(false) }}>
                <Link href="/charts" className="flex space-x-2 items-center text-white  py-2 px-4 rounded-lg w-4/5">
                  <FaHeadphones size={20} color="white" />
                  <p>Charts</p>
                </Link>
              </li>

              <li className="navbar-item" onClick={() => { setIsMenuOpen(false) }}>
                <Link href="/artists" className="flex space-x-2 items-center text-white  py-2 px-4 rounded-lg w-4/5">
                  <FaUsers size={20} color="white" />
                  <p>Artists</p>
                </Link>
              </li>

              <li className="navbar-item" onClick={() => { setIsMenuOpen(false) }}>
                <Link href="/events" className="flex space-x-2 items-center text-white  py-2 px-4 rounded-lg w-4/5">
                  <FaTicketAlt size={20} color="white" />
                  <p>Events</p>
                </Link>
              </li>

              <li className="navbar-item" onClick={() => { setIsMenuOpen(false) }}>
                <Link href="/blogs" className="flex space-x-2 items-center text-white  py-2 px-4 rounded-lg w-4/5">
                  <FaComment size={20} color="white" />
                  <p>Blog</p>
                </Link>
              </li>

              {/* <div className="navbar-item hide-lg">
            <button className="rounded-lg text-white bg-red-500 w-1/2 flex items-center justify-center space-x-3 py-3">
              <BsDoorOpen size={20} color="white" />
              <p>Log In or Register</p>
            </button>
          </div> */}
            </ul>
          </div>
        }
        {/* Nabar */}
        < div className="w-full z-9999 flex justify-center items-center fixed bottom-1">
          <div className=" flex px-2 py-4 items-center justify-around backdrop-blur-lg shadow-sm shadow-red-500 md:bg-white/20   w-[98%] rounded-2xl h-15 ">

            <div className="flex flex-col space-y-1  items-center" onClick={() => { setIsMenuOpen(false) }}>
              <BsCart color="#fff" size={20} />
              <Link href={'/store'} className="text-white text-xs">Shop</Link>
            </div>

            <div className="flex flex-col space-y-1  items-center" onClick={() => { setIsMenuOpen(false) }}>
              <BsSoundwave color="#fff" size={20} />
              <Link href={'/'} className="text-white text-xs">Music</Link>
            </div>

            <div className="flex flex-col space-y-1  items-center" onClick={() => { setIsMenuOpen(false) }}>
              <BsPeople color="#fff" size={20} className="mobile-menu-icon" />
              <Link href={'/posts'} className="text-white text-xs">Timeline</Link>
            </div>


            <div className={audio.avatar ? "rotation flex flex-col space-y-1 items-center" : "hidden"}
              onClick={() => { setShowPlayer(!showPlayer) }}
            >
              <img src={audio.avatar} className="w-12 h-12 rounded-full object-cover" />
            </div>


            <div className="flex flex-col items-center">

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navmenu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className={`icon ${isMenuOpen ? 'active' : ''}`} id="toggle">
                  <div className="line line1"></div>
                  <div className="line line2"></div>
                  <div className="line line3"></div>
                </span>
              </button>
            </div>

            {/* <div className="indicator"></div> */}
          </div>
        </div>
        {/* Player */}
        <div className={`${showPlayer ? "mobile-menu w-full flex justify-center" : "hidden"}`}>
          <div className={`bottom-[8vh] h-[90vh] md:bottom-[5vh] w-[95%] md:w-[65%] flex items-start justify-start md:items-center md:justify-center ${showPlayer ? 'fixed rotation' : 'hidden'}`}>
            <Player />
          </div>
        </div>
      </nav >

    </>
  );
};

export default MobileNav;
