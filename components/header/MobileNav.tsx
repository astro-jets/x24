"use client"

import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { FaMicrophone, FaTheaterMasks, FaUsers } from "react-icons/fa"
import { LiaUserAstronautSolid } from "react-icons/lia"
import { IoMdHeadset } from "react-icons/io"
import { BsCart, BsSoundwave, BsPeople } from "react-icons/bs";
import Player from "../player/player2";
import DarkModeSwitcher from "../themeMode/ThemeMode";
import { useAudioStore } from "@/app/stores/MusicStore";


const MobileNav = () => {
  const [showPlayer, setShowPlayer] = useState(false)
  const { audio } = useAudioStore();
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
      <nav className="relative flex flex-col w-screen max-h-screen overflow-hidden z-999">
        {/* Menu */}
        {isMenuOpen &&
          <div className={`mobile-menu fixed z-999 left-0  bottom-0 backdrop-blur-lg bg-[#ffffff9d] dark:bg-[#000000d0] w-screen h-screen overflow-hidden scroll-m-0   ${isMenuOpen ? 'show' : 'close'}`} id="navmenu">
            <div className="w-full grid grid-cols-3 mt-6 px-3">
              <div className="flex flex-col space-y-2 items-center">
                <div className=" w-12 h-12 flex items-center justify-center py-2 px-4 rounded-2xl bg-white dark:bg-gray-950 shadow-xl  shadow-[#ff00005e]">
                  <LiaUserAstronautSolid
                    size={20}
                    color="white"
                    className="fill-black dark:fill-white" />
                </div>
                <p className="text-black dark:text-white text-xs">Profile</p>
              </div>
              <Link href="/charts" className="flex flex-col space-y-2 items-center">
                <div className=" w-12 h-12 flex items-center justify-center py-2 px-4 rounded-2xl bg-white dark:bg-gray-950 shadow-xl  shadow-[#ff00005e]">
                  <IoMdHeadset
                    size={20}
                    color="white"
                    className="fill-black dark:fill-white" />
                </div>
                <p className="text-black dark:text-white text-xs">Charts</p>
              </Link>
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className=" w-15 h-12 flex items-center justify-start py-2 rounded-2xl bg-white dark:bg-gray-950 shadow-xl  shadow-[#ff00005e]">
                  <DarkModeSwitcher />
                </div>
                <p className="text-black dark:text-white text-xs">Theme</p>
              </div>
            </div>
            <ul className="navbar-nav ms-auto space-y-6">
              <li className="navbar-item" onClick={() => { setIsMenuOpen(false) }}>
                <Link href="/blogs" className="flex space-x-2 items-center text-black dark:text-white  py-2 px-4 rounded-lg w-4/5">
                  <BsPeople size={20} color="white" className="fill-black dark:fill-white" />
                  <p>Timeline</p>
                </Link>
              </li>
              <li className="navbar-item w-full" onClick={() => { setIsMenuOpen(false) }}>
                <Link href="/store" className="flex space-x-2 items-center text-black dark:text-white  py-2 px-4 rounded-lg w-4/5">
                  <BsCart size={20} color="white" className="fill-black dark:fill-white" />
                  <p className="">Store</p>
                </Link>
              </li>
              <li className="navbar-item" onClick={() => { setIsMenuOpen(false) }}>
                <Link href="/artists" className="flex space-x-2 items-center text-black dark:text-white  py-2 px-4 rounded-lg w-4/5">
                  <FaUsers size={20} color="white" className="fill-black dark:fill-white" />
                  <p>Artists</p>
                </Link>
              </li>
              <li className="navbar-item" onClick={() => { setIsMenuOpen(false) }}>
                <Link href="/events" className="flex space-x-2 items-center text-black dark:text-white  py-2 px-4 rounded-lg w-4/5">
                  <FaTheaterMasks size={20} color="white" className="fill-black dark:fill-white" />
                  <p>Events</p>
                </Link>
              </li>
              <li className="navbar-item" onClick={() => { setIsMenuOpen(false) }}>
                <Link href="/podcasts" className="flex space-x-2 items-center text-black dark:text-white  py-2 px-4 rounded-lg w-4/5">
                  <FaMicrophone size={20} color="white" className="fill-black dark:fill-white" />
                  <p>Podcasts</p>
                </Link>
              </li>
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
              <Link href={'/posts/'} className="text-white text-xs">Timeline</Link>
            </div>


            <div className={audio?.avatar ? "rotation flex flex-col space-y-1 items-center" : "hidden"}
              onClick={() => { setShowPlayer(!showPlayer) }}
            >
              <img src={audio?.avatar} className="w-12 h-12 rounded-full object-cover" />
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
        <div className={`${showPlayer ? " relative h-full  mobile-menu w-full flex justify-center" : "hidden"}`}>
          <div className={`bottom-[10vh] top-0 h-[90vh] md:bottom-[5vh] w-[95%] md:w-[65%] flex items-start justify-start md:items-center md:justify-center ${showPlayer ? 'fixed rotation' : 'hidden'}`}>
            <Player />
          </div>
        </div>
      </nav >

    </>
  );
};

export default MobileNav;
