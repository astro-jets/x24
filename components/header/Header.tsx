"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { BsCart, BsDoorOpen, BsGear } from "react-icons/bs"
import { FaComment, FaHeadphones, FaTicketAlt, FaUsers } from "react-icons/fa"
import { LiaUserAstronautSolid } from "react-icons/lia"
import { IoMdHeadset } from "react-icons/io"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
    const links = document.querySelectorAll('.navbar-item');
    links.forEach(e => {
      e.addEventListener('click', () => {
        setIsMenuOpen(false);
      })
    })
  }, []);

  return (
    <header className="bg-white dark:bg-black z-9999 md:hidden">
      <nav className="flex flex-col">
        <div className="flex justify-between items-center px-6 py-3">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="navbar-brand">
            <h1 className="text-black dark:text-white text-2xl">
              Studio <span className="text-red-500">X</span>
            </h1>
          </Link>
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
        <div className={`absolute left-0 top-14 backdrop-blur-lg bg-[#ffffff9d] dark:bg-[#000000d0] w-screen h-screen   ${isMenuOpen ? 'show' : 'hidden'}`} id="navmenu">
          <ul className="navbar-nav ms-auto space-y-6">
            <li className="navbar-item grid grid-cols-3 mb-4 gap-8">
              <Link href="/store" className="flex flex-col space-y-2 items-center">
                <div className=" w-12 h-12 flex items-center justify-center py-2 px-4 rounded-2xl bg-white dark:bg-gray-950 shadow-xl  shadow-[#ff00005e]">
                  <LiaUserAstronautSolid size={20} color="white" />
                </div>
                <p className="text-blac dark:text-white text-xs">Profile</p>
              </Link>
              <Link href="/store" className="flex flex-col space-y-2 items-center">
                <div className=" w-12 h-12 flex items-center justify-center py-2 px-4 rounded-2xl bg-white dark:bg-gray-950 shadow-xl  shadow-[#ff00005e]">
                  <IoMdHeadset size={20} color="white" />
                </div>
                <p className="text-black dark:text-white text-xs">Playlist</p>
              </Link>

              <Link href="/store" className="flex flex-col space-y-2 items-center text-white">
                <div className=" w-12 h-12 flex items-center justify-center py-2 px-4 rounded-2xl bg-white dark:bg-gray-950 shadow-xl  shadow-[#ff00005e]">
                  <BsGear size={30} color="white" />
                </div>
                <p className="text-black dark:text-white text-xs">settings</p>
              </Link>
            </li>
            <li className="navbar-item w-full">
              <Link href="/store" className="flex space-x-2 items-center text-white  py-2 px-4 rounded-lg w-4/5">
                <BsCart size={20} color="white" />
                <p className="">Store</p>
              </Link>
            </li>

            <li className="navbar-item">
              <Link href="/charts" className="flex space-x-2 items-center text-white  py-2 px-4 rounded-lg w-4/5">
                <FaHeadphones size={20} color="white" />
                <p>Charts</p>
              </Link>
            </li>

            <li className="navbar-item">
              <Link href="/artists" className="flex space-x-2 items-center text-white  py-2 px-4 rounded-lg w-4/5">
                <FaUsers size={20} color="white" />
                <p>Artists</p>
              </Link>
            </li>

            <li className="navbar-item">
              <Link href="/events" className="flex space-x-2 items-center text-white  py-2 px-4 rounded-lg w-4/5">
                <FaTicketAlt size={20} color="white" />
                <p>Events</p>
              </Link>
            </li>

            <li className="navbar-item">
              <Link href="/blogs" className="flex space-x-2 items-center text-white  py-2 px-4 rounded-lg w-4/5">
                <FaComment size={20} color="white" />
                <p>Blog</p>
              </Link>
            </li>

            <div className="navbar-item hide-lg">
              <button className="rounded-lg text-white bg-red-500 w-1/2 flex items-center justify-center space-x-3 py-3">
                <BsDoorOpen size={20} color="white" />
                <p>Log In or Register</p>
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
