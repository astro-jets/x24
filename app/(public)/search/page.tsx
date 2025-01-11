'use client'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const NotFound = () => {
    return (
        <div className="w-full h-screen bg-no-repeat bg-cover bg-[url('/images/x.jpg')] md:mt-0 p-0">
            <div className="h-screen w-full flex flex-col items-center justify-center backdrop-blur-lg bg-white/60 dark:bg-[#0f0f0fce]" >
                <DotLottieReact
                    src="/lotties/404.lottie"
                    loop
                    autoplay
                />
            </div>
        </div>
    );
}

export default NotFound;