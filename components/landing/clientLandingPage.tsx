'use client'
import TopTenCharts from "@/components/charts/TopTen";
import Search from "@/components/search/Form";
import MobileSearchBar from "@/components/search/MobileSearchBar";
import RightSideBar from "@/components/sidbebar/Sidebar";
import ArtistsSlider from "@/components/slider/artists/Artists";
import EventsSlider from "@/components/slider/events/Events";
import PodcastSlider from "@/components/slider/podcasts/Podcasts";
import Slider from "@/components/slider/top/Slider";


import { BsBell, BsGear, BsPeople, BsSearch } from "react-icons/bs";
import { LiaRecordVinylSolid } from "react-icons/lia";
import { Track, useTracksStore } from "@/app/stores/TracksStore";
import { useEffect } from "react";

const ClientLandingPage = ({ tracks }: { tracks: Track[] }) => {
    const { setTracks } = useTracksStore();

    useEffect(() => {
        setTracks(tracks);
    }, [])

    return (
        <div className="w-full h-full bg-no-repeat bg-cover bg-[url('/images/x.jpg')] md:mt-0 p-0">
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
                <div className="relative bg-white/60 dark:bg-[#0f0f0fce] h-full pb-4 w-full md:w-[85%]  flex flex-col rounded-tl-[30px] rounded-bl-[30px]">
                    {/* Topbar */}
                    <div className="h-20 w-full hidden md:flex items-center justify-between space-x-6 px-4">
                        <p className="text-black dark:text-white text-sm w-1/3 pl-3 border-0 border-l-2 border-l-red-600">
                            Top Artists This Year
                        </p>
                        <MobileSearchBar />
                        <div className="flex justify-between items-center w-[12%]">
                            <BsGear size={20} color="white" />
                            <BsBell size={20} color="white" />
                            <img src="/images/cards/cards-01.png" className="w-10 h-10 object-cover rounded-full border-[1px] border-red-600" alt="" />
                        </div>
                    </div>

                    {/* main content */}
                    <div className="flex justify-around h-full w-full overflow-hidden md:py-10">
                        <Search />

                        <div className="flex flex-col items-center space-y-4 md:space-y-10 w-full h-full  md:w-3/4 ">
                            <div className="p-1">
                                <div className="w-full max-h-[50vh] rounded-2xl flex items-center justify-center overflow-hidden">
                                    <Slider />
                                </div>
                            </div>
                            <div className="flex flex-col space-y-6 h-full w-full">

                                <div className="w-full md:h-[42vh] flex py-2 flex-col items-start overflow-hidden">
                                    <h2 className="text-xl px-4 font-thin tracking-tight text-black dark:text-white">Trending Now</h2>
                                    <ArtistsSlider />
                                </div>

                                {/* Chart 1: Trending Songs */}
                                <TopTenCharts />

                                {/* Upcoming Events */}
                                <div className="flex flex-col h-65 w-full items-start">
                                    <EventsSlider />
                                </div>

                                {/* Chart 2: Top Albums */}
                                <div className="px-2 w-full h-full space-y-4">
                                    <div className="flex w-full items-center space-x-1">
                                        <LiaRecordVinylSolid size={25} className="fill-black dark:fill-white" />
                                        <h2 className="text-xl font-thin tracking-tight text-black dark:text-white">Top Albums</h2>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                        {Array.from({ length: 4 }).map((_, index) => (
                                            <div
                                                key={index}
                                                className=" shadow-[#222] shadow-4 dark:shadow-1 dark:bg-[#0f0f0fce] bg-[#fff]  p-1 rounded-lg hover:bg-gray-700 text-center"
                                            >
                                                {/* Album Cover */}
                                                <div className="w-full h-30 rounded-lg overflow-hidden">
                                                    <img
                                                        src={`/images/albumart/sok.jpg`}
                                                        alt="Album Art"
                                                        className="object-cover w-full h-full"
                                                    />
                                                </div>
                                                <h3 className="text-lg font-medium mt-2">Album {index + 1}</h3>
                                                <p className="text-gray-400 text-sm">Artist Name</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Featured Podcasts */}
                                <div className="flex flex-col h-70  w-full items-start">
                                    <PodcastSlider />
                                </div>

                                {/* Chart 3: Popular Artists */}
                                <div className="px-2 w-full h-full space-y-2">
                                    <div className="flex w-full items-center space-x-2">
                                        <BsPeople size={20} className="fill-black dark:fill-white" />
                                        <h2 className="text-xl font-thin tracking-tight text-black dark:text-white">Featured Artists</h2>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                        {Array.from({ length: 4 }).map((_, index) => (
                                            <div
                                                key={index}
                                                className=" shadow-[#222] shadow-4 dark:shadow-1 dark:bg-[#0f0f0f5b] bg-[#fff]  p-4 rounded-lg hover:bg-gray-700 text-center"
                                            >
                                                {/* Artist Image */}
                                                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
                                                    <img
                                                        src={`/images/albumart/sok.jpg`}
                                                        alt="Artist"
                                                        className="object-cover w-full h-full"
                                                    />
                                                </div>
                                                <h3 className="text-lg font-medium mt-2">Artist {index + 1}</h3>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="hidden lg:block">
                            {/* <RightSideBar /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientLandingPage;