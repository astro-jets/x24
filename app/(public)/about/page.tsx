'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, CustomEase);

const AboutUs = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const sections = gsap.utils.toArray<HTMLDivElement>(".section");

        // Animate images and text with advanced effects
        sections.forEach((section, i) => {
            const image = section.querySelector(".image");
            const text = section.querySelector(".text");

            gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 60%",
                    scrub: 1,
                },
            })
                .fromTo(
                    image,
                    { rotateX: -180, opacity: 0 },
                    { rotateX: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
                )
                .fromTo(
                    text,
                    { x: 100, opacity: 0 },
                    { x: 0, opacity: 1, delay: 1.5, duration: 2.5, ease: "expo.out" },
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
        <div ref={containerRef} className="bg-no-repeat bg-cover bg-[url('/images/x.jpg')] ">
            <div className=" backdrop-blur-lg bg-white/60 dark:bg-[#0f0f0fce] text-white overflow-hidden">
                <div className="header relative text-center py-16 px-8">
                    <h2 className="text-6xl font-extrabold mb-6">About StudioX</h2>
                    <p className="text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed">
                        A transformative platform where artistry and technology unite. StudioX is setting a new standard for the music experience.
                    </p>
                    <div className="absolute inset-0 pointer-events-none">
                        <svg
                            className="floating-icon w-16 h-16 fill-purple-500 opacity-70"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm1 17.93c-4.36-.46-7.74-4.07-7.93-8.5h2.02c.18 3.41 2.93 6.16 6.34 6.34v2.03zm6.92-6.42c-.43 2.35-2.32 4.23-4.67 4.67v-2.02c1.85-.2 3.3-1.65 3.5-3.5h2.02z" />
                        </svg>
                    </div>
                </div>

                {/* Section 1 */}
                <div className="section relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-24 px-8 md:px-20 lg:px-32">
                    <div className="image relative overflow-hidden rounded-2xl shadow-2xl">
                        <img
                            src="/images/posts/x1.jpg" // Replace with actual image path
                            alt="Immersive Experience"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <div className="text space-y-8">
                        <h3 className="text-4xl font-bold">A Visual Symphony</h3>
                        <p className="text-xl leading-relaxed">
                            Enjoy an immersive interface that redefines the music streaming experience. Your favorite sounds, now paired with stunning visuals.
                        </p>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="section relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-24 px-8 md:px-20 lg:px-32">
                    <div className="text space-y-8 order-last md:order-first">
                        <h3 className="text-4xl font-bold">Empowering Artists</h3>
                        <p className="text-xl leading-relaxed">
                            StudioX amplifies the voices of creatives worldwide, giving them tools to shine and connect with their audiences directly.
                        </p>
                    </div>
                    <div className="image relative overflow-hidden rounded-2xl shadow-2xl">
                        <img
                            src="/images/posts/x2.jpg" // Replace with actual image path
                            alt="Empowering Artists"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                </div>

                {/* Section 3 */}
                <div className="section relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-24 px-8 md:px-20 lg:px-32">
                    <div className="image relative overflow-hidden rounded-2xl shadow-2xl">
                        <img
                            src="/images/posts/x3.jpg" // Replace with actual image path
                            alt="Community of Listeners"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <div className="text space-y-8">
                        <h3 className="text-4xl font-bold">A Global Community</h3>
                        <p className="text-xl leading-relaxed">
                            Dive into a thriving community where music lovers and creators unite. Share your passion and discover new tunes together.
                        </p>
                    </div>
                </div>

                {/* Section 4 */}
                <div className="section relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-24 px-8 md:px-20 lg:px-32">
                    <div className="image relative overflow-hidden rounded-2xl shadow-2xl">
                        <img
                            src="/images/posts/x4.jpg" // Replace with actual image path
                            alt="Innovative Features"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <div className="text space-y-8">
                        <h3 className="text-4xl font-bold">Innovative Features</h3>
                        <p className="text-xl leading-relaxed">
                            Explore groundbreaking features that put you at the center of the music universe. Personalized recommendations, live performances, and more await you.
                        </p>
                    </div>
                </div>

                {/* Section 5 */}
                <div className="section relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-24 px-8 md:px-20 lg:px-32">
                    <div className="text space-y-8">
                        <h3 className="text-4xl font-bold">Future of Sound</h3>
                        <p className="text-xl leading-relaxed">
                            Step into the future with StudioX. Stay ahead with cutting-edge technology that evolves the way you experience music.
                        </p>
                    </div>
                    <div className="image relative overflow-hidden rounded-2xl shadow-2xl">
                        <img
                            src="/images/posts/x5.jpg" // Replace with actual image path
                            alt="Future of Sound"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                </div>

                <div className="relative py-16 text-center">
                    <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                        Discover what sets StudioX apart. Your journey in music starts here.
                    </p>
                    <div className="mt-8">
                        <button className="bg-purple-600 text-white py-3 px-8 rounded-full hover:bg-purple-700 shadow-xl transition">Join Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
