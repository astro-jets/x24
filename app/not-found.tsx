'use client'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const NotFound = () => {
    return (
        <div className="w-full min-h-screen bg-no-repeat bg-cover bg-[url('/images/x.jpg')] md:mt-0 p-0">
            <div className="h-full min-h-screen py-4 w-full flex flex-col items-center  backdrop-blur-lg bg-[#0f0f0fce]" >
                <div className="typewriter flex justify-center items-center">
                    <h2 className="text-3xl font-thin tracking-tight text-white"> page not found</h2>
                </div>
                <div className="w-full min-h-[30rem]">
                    <DotLottieReact
                        src="/lotties/404.lottie"
                        loop
                        autoplay
                        width={'1000'}
                        height={'1000'}
                    />
                </div>
                <a href="/" className="w-2/4 py-2 text-white text-center bg-red-500 rounded-xl">Home</a>
            </div>
        </div>
    );
}

export default NotFound;