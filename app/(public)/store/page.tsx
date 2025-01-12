"use client"

import Loader from "@/components/loader/Loader";
import Link from "next/link";
import { BsMenuDown, BsShop } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";

const Store = () => {
    return (
        <>
            <Loader />
            <div className="w-full h-full bg-no-repeat bg-cover bg-[url('/images/clothes/x.jpg')] md:mt-0 p-0">
                <div className="w-full h-full backdrop-blur-lg bg-white/40 dark:bg-[#0f0f0f94] ">
                    <div className="h-full w-full mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <div className="typewriter flex justify-center items-center w-[85%]">
                            <h2 className="text-2xl font-thin tracking-tight text-black border-black dark:border-white dark:text-white">
                                Welcome to the shop ...
                            </h2>
                        </div>

                        <div className="mt-4 w-30 justify-center items-center ml-auto flex space-x-2 relative backdrop-blur-lg dark:bg-[#0f0f0f5b] rounded-2xl p-1">
                            <div className="p-2 rounded-2xl backdrop-blur-lg dark:bg-[#0f0f0f5b]">
                                <BsShop size={15} color="red" />
                            </div>
                            <p className="text-white font-light text-xl">Shops</p>
                            <FaAngleDown color="white" size={15} />
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            <div className="group relative backdrop-blur-lg dark:bg-[#0f0f0f5b] rounded-2xl p-2">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl  lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img src="images/clothes/c8.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-white">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0"></span>
                                                Basic Tee
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-400">Black</p>
                                    </div>
                                    <p className="text-sm font-medium text-red-500">$35</p>
                                </div>
                            </div>
                            <div className="group relative backdrop-blur-lg dark:bg-[#0f0f0f5b] bg-white/40 rounded-2xl p-2">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl  lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img src="images/clothes/c.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-white">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0"></span>
                                                Basic Tee
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">Black</p>
                                    </div>
                                    <p className="text-sm font-medium text-red-500">$35</p>
                                </div>
                            </div>
                            <div className="group relative backdrop-blur-lg dark:bg-[#0f0f0f5b] bg-white/40 rounded-2xl p-2">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl  lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img src="images/clothes/c2.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-white">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0"></span>
                                                Basic Tee
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">Black</p>
                                    </div>
                                    <p className="text-sm font-medium text-red-500">$35</p>
                                </div>
                            </div>
                            <div className="group relative backdrop-blur-lg dark:bg-[#0f0f0f5b] bg-white/40 rounded-2xl p-2">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl  lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img src="images/clothes/c3.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-white">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0"></span>
                                                Basic Tee
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">Black</p>
                                    </div>
                                    <p className="text-sm font-medium text-red-500">$35</p>
                                </div>
                            </div>
                            <div className="group relative backdrop-blur-lg dark:bg-[#0f0f0f5b] bg-white/40 rounded-2xl p-2">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl  lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img src="images/clothes/c9.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-white">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0"></span>
                                                Basic Tee
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">Black</p>
                                    </div>
                                    <p className="text-sm font-medium text-red-500">$35</p>
                                </div>
                            </div>
                            <div className="group relative backdrop-blur-lg dark:bg-[#0f0f0f5b] bg-white/40 rounded-2xl p-2">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl  lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img src="images/clothes/c10.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-white">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0"></span>
                                                Basic Tee
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">Black</p>
                                    </div>
                                    <p className="text-sm font-medium text-red-500">$35</p>
                                </div>
                            </div>
                            <div className="group relative backdrop-blur-lg dark:bg-[#0f0f0f5b] bg-white/40 rounded-2xl p-2">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl  lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img src="images/clothes/c4.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-white">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0"></span>
                                                Basic Tee
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">Black</p>
                                    </div>
                                    <p className="text-sm font-medium text-red-500">$35</p>
                                </div>
                            </div>
                            <div className="group relative backdrop-blur-lg dark:bg-[#0f0f0f5b] bg-white/40 rounded-2xl p-2">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl  lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img src="images/clothes/c5.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-white">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0"></span>
                                                Basic Tee
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">Black</p>
                                    </div>
                                    <p className="text-sm font-medium text-red-500">$35</p>
                                </div>
                            </div>
                            <div className="group relative backdrop-blur-lg dark:bg-[#0f0f0f5b] bg-white/40 rounded-2xl p-2">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl  lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img src="images/clothes/c6.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-white">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0"></span>
                                                Basic Tee
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">Black</p>
                                    </div>
                                    <p className="text-sm font-medium text-red-500">$35</p>
                                </div>
                            </div>
                            <div className="group relative backdrop-blur-lg dark:bg-[#0f0f0f5b] bg-white/40 rounded-2xl p-2">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl  lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img src="images/clothes/c7.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-white">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0"></span>
                                                Basic Tee
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">Black</p>
                                    </div>
                                    <p className="text-sm font-medium text-red-500">$35</p>
                                </div>
                            </div>

                            {/* <!-- More products... --> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Store;