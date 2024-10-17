"use client"

import Loader from "@/components/loader/Loader";
import Player from "@/components/player/player";
import RightSideBar from "@/components/sidbebar/Sidebar";
import { AudioContext } from "@/context/AudioContext";
import { useContext, useState } from "react";
import { BsBell, BsCart, BsGear, BsHouse, BsList, BsSearch, BsSoundwave } from "react-icons/bs";
import GlasmorphicBlogPost from "./templates/BlogPostComponent";

const PostsPage = () => {
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
                    <div className=" bg-white dark:bg-[#000] h-full w-full md:w-[85%]  flex flex-col rounded-tl-[30px] rounded-bl-[30px]">
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
                        <div className="relative flex justify-around h-full w-full overflow-hidden py-20 md:py-10">
                            <div className="background-image">
                                <img className="h-full min-h-screen w-screen" src="/images/red.jpg" alt="Red background for Glasmorphism effect" />
                            </div>
                            <div className="backdrop-blur-lg md:bg-white/40  flex flex-col items-center space-y-10 w-full h-full  md:w-3/4 ">
                                <div className="p-4 space-y-4 flex flex-col h-full">
                                    <GlasmorphicBlogPost
                                        title="The Power of TypeScript"
                                        excerpt="Repudiandae tenetur dolorum est vero ullam, at nostrum dolore laboriosam repellendus labore laborum ducimus natus architecto. Exercitationem, neque quia et omnis magnam eos saepe at fugiat, ducimus, doloribus error obcaecati quae read more ..."
                                    // imageUrl="/images/x3.jpg"
                                    />

                                    <GlasmorphicBlogPost
                                        title="The Power of TypeScript"
                                        excerpt="Exercitationem, neque quia et omnis magnam eos saepe at fugiat, ducimus, doloribus error obcaecati quae read more ..."
                                        imageUrl="/images/x1.jpg"
                                    />
                                    <GlasmorphicBlogPost
                                        title="The Power of TypeScript"
                                        excerpt="Repudiandae tenetur dolorum est vero ullam, at nostrum dolore laboriosam repellendus labore laborum ducimus natus architecto. Exercitationem, neque quia et omnis magnam eos saepe at fugiat, ducimus, doloribus error obcaecati quae read more ..."
                                        imageUrl="/images/x2.jpg"
                                    />
                                    <GlasmorphicBlogPost
                                        title="The Power of TypeScript"
                                        excerpt="Repudiandae tenetur dolorum est vero ullam, at nostrum dolore laboriosam repellendus labore laborum ducimus natus architecto. Exercitationem, neque quia et omnis magnam eos saepe at fugiat, ducimus, doloribus error obcaecati quae read more ..."
                                        imageUrl="/images/x4.jpg"
                                    />
                                </div>


                            </div>
                            <RightSideBar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostsPage;