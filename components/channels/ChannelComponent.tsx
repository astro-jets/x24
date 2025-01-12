"use client";
import { useEffect, useState } from "react";
import { videosProps } from "@/types/video";
import Image from "next/image";
import { BsBell, BsFire } from "react-icons/bs";
import { MdOutlineMovie } from "react-icons/md";
import Reels from "@/components/slider/reels/Reels";
import { BiCameraMovie } from "react-icons/bi";
import PodcastTags from "@/components/slider/podcastTags/PodcastTags";
import moment from "moment";
import he from "he";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const ChannelComponent = () => {
    const [videos, setVideos] = useState<videosProps>([]);
    useEffect(() => {
        async function fetchVideos() {
            const CHANNEL_ID = "UChjZB_B5f76x3ZkrASt348Q";
            const endpoint = `https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video&maxResults=5&order=date`;

            try {
                const response = await fetch(endpoint);
                const data = await response.json();
                console.log("Data => ", data);
                setVideos(data.items);
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        }
        fetchVideos();
    }, []);

    const coverImage = "/images/podcasts/mcast.jpg"; // Replace with actual cover image URL
    const podcastName = "Podcast Malawi"; // Dynamic podcast name
    return (
        <div className="bg-[#111] text-white min-h-screen">

            {
                videos.length > 0 ?
                    <>
                        {/* Header */}
                        <div className="sticky top-0 bg-[#222] flex items-center px-4 py-3 min-20 shadow-md z-99">
                            <h1 className="text-lg font-semibold">{podcastName}</h1>
                            <div className="ml-auto flex items-center space-x-4">
                                <button className="text-gray-400 hover:text-white"><BsFire color="red" size={20} /></button>
                                <button className="text-gray-400 hover:text-white"><BsBell color="white" size={20} /></button>
                            </div>
                        </div>
                        {/* Top Cover Section */}
                        <div className="relative h-80">
                            <Image
                                src={coverImage}
                                alt="Cover Image"
                                layout="fill"
                                objectFit="cover"
                                className="opacity-75"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
                                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
                                    <Image
                                        src={coverImage}
                                        alt="Profile Image"
                                        width={128}
                                        height={128}
                                        className="object-cover"
                                    />
                                </div>
                                <h1 className="text-2xl font-bold mt-4">{podcastName}</h1>
                            </div>
                        </div>

                        {/* Content */}
                        <main className="py-6 pb-20 space-y-8">


                            <PodcastTags />

                            {/* Reels Grid */}
                            <div className="space-y-4">
                                <div className="flex space-x-1 px-4">
                                    <BiCameraMovie
                                        className="animate-tilt transition-transform"
                                        size={24}
                                        color="white"
                                    />
                                    <h2 className="text-xl font-semibold">Reels</h2>
                                </div>
                                <Reels />
                            </div>

                            <div className="text-white px-4 w-full space-y-4">
                                <div className="flex items-center space-x-1">
                                    <MdOutlineMovie className="transition-all " size={24} color="white" />
                                    <h2 className="text-xl font-semibold">Videos</h2>
                                </div>
                                <div className="space-y-7">
                                    {videos.map((video, index) => (
                                        <div
                                            key={index}
                                            className="border border-gray-300 rounded-lg overflow-hidden"
                                        >
                                            {/* YouTube Video Embed */}
                                            <iframe
                                                width="100%"
                                                height="200"
                                                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                                title={video.snippet.title}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                            {/* Video Info */}
                                            <div className="p-2">
                                                <h3 className="text-lg font-medium">
                                                    {he.decode(video.snippet.title)}
                                                </h3>
                                                <p className="text-sm text-gray-400">
                                                    Published: {moment(video.snippet.publishedAt).fromNow()}
                                                </p>

                                                <p className="text-sm text-white">
                                                    {video.snippet.channelTitle}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </main>
                    </>
                    :
                    <div className="w-full min-h-screen bg-red-500 space-y-6 h-full flex flex-col items-center justify-center">
                        <div className="typewriter">
                            <h2 className="animate-pulse text-black dark:text-white text-title-lg">Network Trippin ...</h2>
                        </div>
                        <DotLottieReact
                            src="/lotties/network.lottie"
                            loop
                            autoplay
                        />
                    </div>
            }
        </div>
    );
}

export default ChannelComponent;