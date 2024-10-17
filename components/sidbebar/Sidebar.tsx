"use client"
import { BsList, BsSoundwave } from "react-icons/bs";
import { BiSolidPlaylist } from "react-icons/bi";
import { AudioContext } from "@/context/AudioContext";
import { useContext, useEffect } from "react";
import { FaListAlt } from "react-icons/fa";

const RightSideBar = () => {
    const { audio, setAudio } = useContext(AudioContext)
    return (
        <div className="w-[23%] max-h-[88vh] overflow-hidden px-4 py-3 h-full shadow-xl dark:shadow-1 shadow-[#ccc]  bg-[#f5f4f4] dark:bg-[#111] rounded-3xl hidden md:flex flex-col space-y-6">
            <div className="flex  space-x-3">
                <BsSoundwave color="white" size={20} />
                <p className="text-black dark:text-white"> Now Playing</p>
            </div>
            <div className="flex flex-col space-y-3">
                <div className="rounded-3xl w-full  h-[15rem] overflow-hidden flex items-center">
                    <img src={audio.avatar} className="object-cover w-full h-full" alt="" />
                </div>
                <div className="flex w-full items-center justify-between pb-1">
                    <div className="flex-col space-y-1">
                        <p className="text-black dark:text-white text-lg font-bold">{audio.artist}</p>
                        <p className="text-gray-500 text-sm">{audio.title}</p>
                    </div>
                    <BiSolidPlaylist color="red" size={30} />
                </div>
            </div>
            <div className="w-full h-[1px] bg-[#222]"></div>
            <ul className="custom-scrollbar w-full flex flex-col space-y-3 overflow-x-hidden overflow-y-scroll">
                <li className="flex justify-around items-center">
                    <div className="w-[30%]">
                        <img src="/images/sok.jpg" className="w-15 h-15 rounded-lg object-cover" alt="" />
                    </div>
                    <div className="w-[50%] flex flex-col text-black dark:text-white">
                        <p>Chizmo</p>
                        <span className="text-xs">Soksera</span>

                    </div>
                    <div className="w-10">
                        <p className="text-black dark:text-gray-300 text-xs">2:22</p>
                    </div>
                </li>
                <li className="flex justify-around items-center">
                    <div className="w-[30%]">
                        <img src="/images/sok.jpg" className="w-15 h-15 rounded-lg object-cover" alt="" />
                    </div>
                    <div className="w-[50%] flex flex-col text-white">
                        <p>Chizmo</p>
                        <span className="text-xs">Soksera</span>

                    </div>
                    <div className="w-10">
                        <p className="text-gray-300 text-xs">2:22</p>
                    </div>
                </li>
                <li className="flex justify-around items-center">
                    <div className="w-[30%]">
                        <img src="/images/sok.jpg" className="w-15 h-15 rounded-lg object-cover" alt="" />
                    </div>
                    <div className="w-[50%] flex flex-col text-white">
                        <p>Chizmo</p>
                        <span className="text-xs">Soksera</span>

                    </div>
                    <div className="w-10">
                        <p className="text-gray-300 text-xs">2:22</p>
                    </div>
                </li>
                <li className="flex justify-around items-center">
                    <div className="w-[30%]">
                        <img src="/images/sok.jpg" className="w-15 h-15 rounded-lg object-cover" alt="" />
                    </div>
                    <div className="w-[50%] flex flex-col text-white">
                        <p>Chizmo</p>
                        <span className="text-xs">Soksera</span>

                    </div>
                    <div className="w-10">
                        <p className="text-gray-300 text-xs">2:22</p>
                    </div>
                </li>
                <li className="flex justify-around items-center">
                    <div className="w-[30%]">
                        <img src="/images/sok.jpg" className="w-15 h-15 rounded-lg object-cover" alt="" />
                    </div>
                    <div className="w-[50%] flex flex-col text-white">
                        <p>Chizmo</p>
                        <span className="text-xs">Soksera</span>

                    </div>
                    <div className="w-10">
                        <p className="text-gray-300 text-xs">2:22</p>
                    </div>
                </li>
                <li className="flex justify-around items-center">
                    <div className="w-[30%]">
                        <img src="/images/sok.jpg" className="w-15 h-15 rounded-lg object-cover" alt="" />
                    </div>
                    <div className="w-[50%] flex flex-col text-white">
                        <p>Chizmo</p>
                        <span className="text-xs">Soksera</span>

                    </div>
                    <div className="w-10">
                        <p className="text-gray-300 text-xs">2:22</p>
                    </div>
                </li>
                <li className="flex justify-around items-center">
                    <div className="w-[30%]">
                        <img src="/images/sok.jpg" className="w-15 h-15 rounded-lg object-cover" alt="" />
                    </div>
                    <div className="w-[50%] flex flex-col text-white">
                        <p>Chizmo</p>
                        <span className="text-xs">Soksera</span>

                    </div>
                    <div className="w-10">
                        <p className="text-gray-300 text-xs">2:22</p>
                    </div>
                </li>
                <li className="flex justify-around items-center">
                    <div className="w-[30%]">
                        <img src="/images/sok.jpg" className="w-15 h-15 rounded-lg object-cover" alt="" />
                    </div>
                    <div className="w-[50%] flex flex-col text-white">
                        <p>Chizmo</p>
                        <span className="text-xs">Soksera</span>

                    </div>
                    <div className="w-10">
                        <p className="text-gray-300 text-xs">2:22</p>
                    </div>
                </li>
                <li className="flex justify-around items-center">
                    <div className="w-[30%]">
                        <img src="/images/sok.jpg" className="w-15 h-15 rounded-lg object-cover" alt="" />
                    </div>
                    <div className="w-[50%] flex flex-col text-white">
                        <p>Chizmo</p>
                        <span className="text-xs">Soksera</span>

                    </div>
                    <div className="w-10">
                        <p className="text-gray-300 text-xs">2:22</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default RightSideBar;