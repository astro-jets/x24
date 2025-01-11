'use client'
import { useState } from "react";
import Loader from "@/components/loader/Loader";
import { BsBell, BsGear, BsSearch } from "react-icons/bs";

type ChartKey = "albums" | "songs" | "artists";

interface ChartDataItem {
    title: string;
    artist: string;
    streams: string;
}

const chartData: Record<ChartKey, ChartDataItem[]> = {
    albums: [
        { title: "Pet Sounds", artist: "The Beach Boys", streams: "8,198,872" },
        { title: "Revolver", artist: "The Beatles", streams: "7,801,301" },
        { title: "Highway 61 Revisited", artist: "Bob Dylan", streams: "3,386,102" },
        { title: "Rubber Soul", artist: "The Beatles", streams: "1,928,751" },
        { title: "What’s Going On", artist: "Marvin Gaye", streams: "998,863" },
    ],
    songs: [
        { title: "Imagine", artist: "John Lennon", streams: "9,421,872" },
        { title: "Bohemian Rhapsody", artist: "Queen", streams: "8,998,103" },
        { title: "Like a Rolling Stone", artist: "Bob Dylan", streams: "6,234,786" },
        { title: "Stairway to Heaven", artist: "Led Zeppelin", streams: "5,928,402" },
        { title: "Let It Be", artist: "The Beatles", streams: "4,128,943" },
    ],
    artists: [
        { title: "Imagine", artist: "John Lennon", streams: "9,421,872" },
        { title: "Bohemian Rhapsody", artist: "Queen", streams: "8,998,103" },
        { title: "Like a Rolling Stone", artist: "Bob Dylan", streams: "6,234,786" },
        { title: "Stairway to Heaven", artist: "Led Zeppelin", streams: "5,928,402" },
        { title: "Let It Be", artist: "The Beatles", streams: "4,128,943" },
    ],
};

export default function ChartsPage() {
    const [showSearch, setShowSearch] = useState(false);
    const [activeTab, setActiveTab] = useState<ChartKey>("albums");

    return (
        <>
            <Loader />
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
                    <div className="relative bg-white/60 dark:bg-[#0f0f0fce] h-full pb-4 w-full md:w-[85%]  flex flex-col md:rounded-tl-[30px] md:rounded-bl-[30px]">
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

                        <div className="w-full mx-auto min-h-screen shadow-md  overflow-hidden">
                            <div className="text-white text-center py-4">
                                <h1 className="text-xl font-semibold">Charts</h1>
                            </div>
                            <div className="flex justify-around bg-red-50 dark:bg-[#111] py-2 border-b">
                                <button
                                    className={`flex-1 py-2 text-sm font-medium ${activeTab === "albums" ? "text-red-500 border-b-2 border-red-500" : "text-gray-500 dark:text-white"
                                        }`}
                                    onClick={() => setActiveTab("albums")}
                                >
                                    Albums
                                </button>
                                <button
                                    className={`flex-1 py-2 text-sm font-medium ${activeTab === "songs" ? "text-red-500 border-b-2 border-red-500" : "text-gray-500 dark:text-white"
                                        }`}
                                    onClick={() => setActiveTab("songs")}
                                >
                                    Songs
                                </button>
                                <button
                                    className={`flex-1 py-2 text-sm font-medium ${activeTab === "artists" ? "text-red-500 border-b-2 border-red-500" : "text-gray-500 dark:text-white"
                                        }`}
                                    onClick={() => setActiveTab("artists")}
                                >
                                    Artists
                                </button>
                            </div>
                            <div className="p-4">
                                {chartData[activeTab].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between py-2 border-b last:border-b-0"
                                    >
                                        <div>
                                            <h3 className="text-md font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                                            <p className="text-sm text-gray-500 dark:text-white">{item.artist}</p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-800 dark:text-white">{item.streams} streams</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
}
