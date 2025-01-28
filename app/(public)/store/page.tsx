"use client"
import { useRef } from "react";
import Loader from "@/components/loader/Loader";

// Icons
import { BsMenuDown, BsShop } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, CustomEase);

const Store = () => {

    const containerRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        const items = gsap.utils.toArray<HTMLDivElement>(".shopItems");

        // Animate images and text with advanced effects
        items.forEach((item, i) => {
            const shopItem = item.querySelectorAll(".shopItem");

            gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 60%",
                    end: "bottom 80%",
                    scrub: 1,
                },
            })
                .fromTo(
                    shopItem,
                    { y: 5, opacity: 0.8, scale: 0.8 },
                    { y: 0, opacity: 1, scale: 1, duration: .4, ease: "power2.in" }
                )
        });


    }, []);
    return (
        <>
            <Loader />
            <div ref={containerRef} className=" w-full h-full bg-no-repeat bg-cover bg-[url('/images/x.jpg')] md:mt-0 p-0">
                <div className=" pb-20 w-full h-full backdrop-blur-lg bg-white/40 shadow-2 shadow-[#b1b0b0] dark:shadow-none dark:bg-[#0f0f0f94] ">
                    <div className="h-full w-full mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <div className="typewriter flex justify-center items-center w-[85%]">
                            <h2 className="text-2xl font-thin tracking-tight text-black border-black dark:border-white dark:dark:text-white">
                                Welcome to the shop ...
                            </h2>
                        </div>

                        <div className="shadow-2 shadow-[#b1b0b0] dark:shadow-none mt-4 w-30 justify-center items-center ml-auto flex space-x-2 relative backdrop-blur-lg dark:bg-[#0f0f0f5b] rounded-2xl p-1">
                            <div className="p-2 rounded-2xl backdrop-blur-lg dark:bg-[#0f0f0f5b]">
                                <BsShop size={15} color="red" />
                            </div>
                            <p className=" dark:text-white text-black font-light text-xl">Shops</p>
                            <FaAngleDown color="white" size={15} />
                        </div>


                        <div className="  h-full  mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {Array.from({ length: 12 }, (_, index) => (
                                <div className="shopItems h-[65vh] overflow-hidden">
                                    <div
                                        key={index}
                                        className="shopItem group relative backdrop-blur-lg dark:bg-[#0f0f0f5b] bg-white/40 shadow-2 rounded-2xl p-2"
                                    >
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl lg:h-80">
                                            <img
                                                src={`/images/clothes/c${index % 8 + 1}.jpg`}
                                                alt={`Basic Tee ${index + 1}`}
                                                className="h-full w-full object-cover lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <h3 className="text-sm dark:text-white text-black">
                                                Basic Tee {index + 1}
                                            </h3>
                                            <p className="text-sm font-medium text-red-500">$35</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Store;