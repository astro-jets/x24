"use client"
import React, { useEffect, useState } from 'react';
import Loader from "@/components/loader/Loader";
import { BsBell, BsGear, BsPauseCircle, BsSearch, BsSoundwave } from "react-icons/bs";
import { FaCalendar, FaClock, FaTicketAlt } from 'react-icons/fa';

const Event = () => {
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
                    <div className=" bg-white dark:bg-[#000] w-full md:w-[85%]  flex flex-col rounded-tl-[30px] rounded-bl-[30px]">
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
                        <div className="flex justify-around h-full w-full overflow-hidden py-15 px-4 md:px-0 md:py-10">
                            <div className="flex flex-col items-center space-y-2 w-full">
                                <h1 className="text-center text-white text-4xl ">Event Name</h1>
                                <img src="/images/chizmo.jpg" className="w-[20rem] rounded-2xl h-[20rem]" alt="" />

                                <section className="w-full md:w-3/5 mt-3 mb-2 p-0">
                                    <div className="flex flex-col space-y-4 md:items-center">
                                        <div className="w-full text-center mb-2">
                                        </div>
                                        <div className="w-full flex flex-col space-y-6 items-center justify-center text-white">
                                            <div className="w-full flex justify-between">
                                                <div className="w-1/3 flex flex-col md:flex-row items-center space-x-3 text-center">
                                                    <FaCalendar color='white' size={20} />
                                                    <p>12 August</p>
                                                </div>
                                                <div className="w-1/3 flex  flex-col md:flex-row  items-center space-x-3 text-center">
                                                    <FaClock color='white' size={20} />
                                                    <p>20:00 CAT</p>
                                                </div>
                                                <div className="w-1/3 flex  flex-col md:flex-row  items-center space-x-3 text-center">
                                                    <FaClock color='white' size={20} />
                                                    <p>Kamuzu Stadium</p>
                                                </div>
                                            </div>
                                            <p className="w-full text-justify text-light">
                                                Event is going to take place at the kamuzu Stadium on 12. Tickets costs K30,000.
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dignissimos et consequuntur suscipit consequatur aut illum doloremque facilis ut quidem aperiam est at magni hic rem vel minima iste excepturi ipsum ea blanditiis, omnis labore iure. Consequuntur et sequi doloremque eum, ullam eius provident voluptates at blanditiis deserunt cumque fuga.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <div className="bg-[#131111] w-full md:w-1/2 rounded-2xl flex flex-col items-center">
                                    <form className="w-full flex flex-col items-center space-y-4 py-4" method='post' action='#'>
                                        <div className="p-2 w-full  text-white flex flex-col items-center">
                                            <h3 className="text-center text-white">PAYMENT DETAILS</h3>
                                            <div className="line my-3 w-full"></div>
                                            <div className="flex flex-col items-start w-3/4">
                                                <label
                                                    // for="fname"
                                                    className="col-sm-12 text-start text-light control-label col-form-label"
                                                >
                                                    Full Name
                                                </label>
                                                <div className="w-full">
                                                    <input
                                                        type="text"
                                                        className="w-full"
                                                        placeholder="Your Name "
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-start w-3/4">
                                                <label
                                                    className="col-sm-12 text-start text-light"
                                                >
                                                    Phone Number
                                                </label>
                                                <div className="w-full">
                                                    <input
                                                        type="text"
                                                        className="w-full"
                                                        placeholder="Phone Number"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-start w-3/4">
                                                <label
                                                    // for="lname"
                                                    className="col-sm-12 text-start text-light"
                                                >
                                                    Card Number
                                                </label>
                                                <div className="w-full">
                                                    <input
                                                        type="password"
                                                        className="w-full"
                                                        id="lname"
                                                        placeholder="Card Number"
                                                    // maxlength="8"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-start w-3/4">
                                                <label
                                                    // for="email1"
                                                    className="col-sm-12 text-start text-light"
                                                >
                                                    CVV
                                                </label>
                                                <div className="w-full">
                                                    <input
                                                        type="text"
                                                        className="w-full"
                                                        placeholder="CVV "
                                                    // maxlength="3"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <button className="px-2 py-3 text-white rounded-2xl w-3/5 bg-red-500 text-light col-11" type='button'>
                                            Buy Ticket
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Event;