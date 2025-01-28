"use client"

import Loader from "@/components/loader/Loader";
import RightSideBar from "@/components/sidbebar/Sidebar";
import { useRef, useState } from "react";
import { BsBell, BsGear, BsSearch, } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from '@gsap/react'
import GlasmorphicBlogPost from "./templates/BlogPostComponent";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, CustomEase);

const PostsPage = () => {
    const [showSearch, setShowSearch] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const posts = gsap.utils.toArray<HTMLDivElement>(".post");

        // Animate images and text with advanced effects
        posts.forEach((post, i) => {
            const image = post.querySelector(".image");
            const text = post.querySelector(".text");
            const icon = post.querySelectorAll(".icon");
            const blogpost = post.querySelector(".blogpost");

            gsap.timeline({
                scrollTrigger: {
                    trigger: post,
                    start: "top 60%",
                    end: "bottom 90%",
                    scrub: 1,
                },
            })
                .fromTo(
                    blogpost,
                    { rotateX: -180, opacity: 0 },
                    { rotateX: 0, opacity: 1, duration: .8, ease: "power4.out" }
                )
                .fromTo(
                    image,
                    { rotateX: -80, opacity: 0 },
                    { rotateX: 0, opacity: 1, duration: 1, delay: .5, ease: "power2.out" }
                )
                .fromTo(
                    text,
                    { x: 100, opacity: 0 },
                    { x: 0, opacity: 1, delay: 1.5, duration: 2.5, ease: "expo.out" },
                    "-=1"
                )
                .fromTo(
                    icon,
                    { y: 100, opacity: 0.5 },
                    { y: 0, opacity: 1, duration: 1.2, stagger: 0.4, ease: "power4.inOut" },
                    "-=1"
                );
        });

        // Floating icons with 3D rotation
        gsap.to(".floating-icon", {
            motionPath: {
                path: [
                    { x: 0, y: 0 },
                    { x: 50, y: -30 },
                    { x: 0, y: -60 },
                    { x: -50, y: -30 },
                    { x: 0, y: 0 },
                ],
                autoRotate: true,
            },
            duration: 8,
            repeat: -1,
            ease: "power1.inOut",
        });

        // Header animation with parallax effect
        const header = containerRef.current?.querySelector(".header");
        if (header) {
            gsap.fromTo(
                header,
                { opacity: 0, scale: 0.8, y: -50 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 2,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: header,
                        start: "top center",
                    },
                }
            );
        }

    }, []);
    return (
        <>
            <Loader />
            <div ref={containerRef} className="w-full h-full bg-no-repeat bg-cover bg-[url('/images/x.jpg')] md:mt-0 p-0">
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
                        <div className="relative flex justify-around h-full w-full overflow-hidden ">
                            <div className="backdrop-blur-lg flex flex-col items-center space-y-10 w-full h-full  md:w-3/4 ">
                                <div className="p-4 space-y-4 flex flex-col h-full pb-16">
                                    <GlasmorphicBlogPost
                                        title="The Power of TypeScript"
                                        excerpt="Repudiandae tenetur dolorum est vero ullam, at nostrum dolore laboriosam repellendus labore laborum ducimus natus architecto. Exercitationem, neque quia et omnis magnam eos saepe at fugiat, ducimus, doloribus error obcaecati quae read more ..."
                                        imageUrl="/images/posts/x3.jpg"
                                    />

                                    <GlasmorphicBlogPost
                                        title="The Power of TypeScript"
                                        excerpt="Exercitationem, neque quia et omnis magnam eos saepe at fugiat, ducimus, doloribus error obcaecati quae read more ..."
                                        imageUrl="/images/posts/x1.jpg"
                                    />
                                    <GlasmorphicBlogPost
                                        title="The Power of TypeScript"
                                        excerpt="Repudiandae tenetur dolorum est vero ullam, at nostrum dolore laboriosam repellendus labore laborum ducimus natus architecto. Exercitationem, neque quia et omnis magnam eos saepe at fugiat, ducimus, doloribus error obcaecati quae read more ..."
                                        imageUrl="/images/posts/x2.jpg"
                                    />
                                    <GlasmorphicBlogPost
                                        title="The Power of TypeScript"
                                        excerpt="Repudiandae tenetur dolorum est vero ullam, at nostrum dolore laboriosam repellendus labore laborum ducimus natus architecto. Exercitationem, neque quia et omnis magnam eos saepe at fugiat, ducimus, doloribus error obcaecati quae read more ..."
                                        imageUrl="/images/posts/x4.jpg"
                                    />
                                </div>

                            </div>
                            {/* <RightSideBar /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostsPage;