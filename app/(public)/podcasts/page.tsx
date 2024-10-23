import Loader from "@/components/loader/Loader";
import Link from "next/link";
import { BsCalendar } from "react-icons/bs";
import { FaMicrophoneAlt, FaTheaterMasks } from "react-icons/fa";

const Podcasts = () => {
    return (
        <>
            <Loader />
            <div className="w-full h-full bg-no-repeat bg-cover bg-[url('/images/x.jpg')] md:mt-0 p-0">
                <div className="w-full h-full backdrop-blur-lg bg-white/40 dark:bg-[#0f0f0f94] ">
                    <div className="h-full w-full mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <div className="flex w-full items-center space-x-2">
                            <FaMicrophoneAlt size={30} color="white" />
                            <h2 className="text-2xl font-bold tracking-tight text-white">Podcasts</h2>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                            <div className="group relative backdrop-blur-lg dark:bg-[#0f0f0f5b] bg-white/40 rounded-2xl p-2">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl  lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img src="images/mcast.jpg" alt="Front of men&#039;s Event Name in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-white">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0"></span>
                                                Malawi Podcast
                                            </a>
                                        </h3>
                                    </div>

                                </div>
                            </div>
                            <div className="group relative backdrop-blur-lg dark:bg-[#0f0f0f5b] rounded-2xl p-2">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl  lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img src="images/mom.png" alt="Front of men&#039;s Event Name in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-white">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0"></span>
                                                Made on Monday
                                            </a>
                                        </h3>
                                    </div>

                                </div>
                            </div>
                            <div className="group relative backdrop-blur-lg dark:bg-[#0f0f0f5b] bg-white/40 rounded-2xl p-2">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl  lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img src="images/bb.jpg" alt="Front of men&#039;s Event Name in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-white">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0"></span>
                                                Born & Bread
                                            </a>
                                        </h3>
                                    </div>

                                </div>
                            </div>
                            <div className="group relative backdrop-blur-lg dark:bg-[#0f0f0f5b] bg-white/40 rounded-2xl p-2">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl  lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img src="images/e3.jpg" alt="Front of men&#039;s Event Name in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-white">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0"></span>
                                                Gospel Cast
                                            </a>
                                        </h3>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Podcasts;