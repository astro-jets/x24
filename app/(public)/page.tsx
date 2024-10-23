"use client"

import Loader from "@/components/loader/Loader";
import Search from "@/components/search/Form";
import RightSideBar from "@/components/sidbebar/Sidebar";
import ArtistsSlider from "@/components/slider/artists/Artists";
import EventsSlider from "@/components/slider/events/Events";
import Slider from "@/components/slider/top/Slider";
import { AudioContext } from "@/context/AudioContext";
import { useContext, useState } from "react";
import { BsBell, BsGear, BsSearch } from "react-icons/bs";

const LandingPage = () => {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <>
            <Loader />
            <div className="w-full h-full md:bg-[url('/images/x.jpg')] md:mt-0">
                <div className="md:backdrop-blur-lg md:bg-white/40  h-full w-full  flex flex-row justify-between ">
                    {/* Sidebar */}
                    <div className=" backdrop-blur-lg hidden md:flex flex-col space-y-8 py-4 px-4 w-[15%] h-screen ">
                        <p className="text-3xl font-bold text-white">Studio <span className="text-red-500">X</span></p>
                        <ul className="flex flex-col w-full items-center space-y-4">
                            <li className="text-red-500 py-2 text-center w-11/12 rounded-[30px] backdrop-blur-lg bg-[#ffffff1c]">
                                Browse</li>
                            <li className="text-gray-200 w-11/12">Songs</li>
                            <li className="text-gray-200 w-11/12">Albums</li>
                            <li className="text-gray-200 w-11/12">Artists</li>
                        </ul>

                    </div>
                    {/* Main */}
                    <div className="relative bg-white dark:bg-[#000] h-full pb-20 w-full md:w-[85%]  flex flex-col rounded-tl-[30px] rounded-bl-[30px]">
                        {/* Topbar */}
                        <div className="h-20 w-full hidden md:flex items-center justify-between space-x-6 px-4">
                            <p className="text-black dark:text-white text-sm w-1/3 pl-3 border-0 border-l-2 border-l-red-600">
                                Top Artists This Year
                            </p>
                            <div className="w-[30%] flex space-x-3 h-10 items-center">
                                <BsSearch size={20} color="white" onClick={() => { setShowSearch(!showSearch) }} />
                                {showSearch &&
                                    <input
                                        type="text"
                                        placeholder="search"
                                        className="w-full bg-transparent outline-none text-white px-3 py-3border-b-red-500 border-b-[1px] border-b-red-500 border-0 placeholder:text-gray-700"
                                    />
                                }

                            </div>
                            <div className="flex justify-between items-center w-[12%]">
                                <BsGear size={20} color="white" />
                                <BsBell size={20} color="white" />
                                <img src="/images/cards/cards-01.png" className="w-10 h-10 object-cover rounded-full border-[1px] border-red-600" alt="" />
                            </div>
                        </div>

                        {/* main content */}
                        <div className="flex justify-around h-full w-full overflow-hidden py-20 md:py-10">
                            <Search />

                            <div className="flex flex-col items-center space-y-4 md:space-y-10 w-full h-full  md:w-3/4 ">
                                <div className="p-1">
                                    <div className="w-full max-h-[50vh] rounded-2xl flex items-center justify-center overflow-hidden">
                                        <Slider />
                                    </div>
                                </div>
                                <div className="w-full md:h-[42vh] flex py-2 flex-col items-start overflow-hidden">
                                    <h1 className="text-red-400 px-4">Popular Artists</h1>
                                    <ArtistsSlider />
                                </div>
                                <div className="flex flex-col h-full w-full items-start">
                                    <h1 className="text-red-400 px-4">Events</h1>
                                    <EventsSlider />
                                </div>


                            </div>
                            <RightSideBar />
                        </div>

                        {/* <div className={`bottom-[5vh] md:bottom-[5vh] w-full md:w-[65%] flex items-start justify-start md:items-center md:justify-center ${audio.audio === '' ? 'hidden' : 'fixed'}`}>
                            <Player />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;