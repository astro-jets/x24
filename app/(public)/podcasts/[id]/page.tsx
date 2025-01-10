"use client"
import Image from "next/image";
import { BsBell, BsFire } from "react-icons/bs";
import { MdOutlineMovie } from "react-icons/md";
import Loader from "@/components/loader/Loader";
import Reels from "@/components/slider/reels/Reels";
import { BiCameraMovie } from "react-icons/bi";
import PodcastTags from "@/components/slider/podcastTags/PodcastTags";
import { useEffect, useState } from "react";
import { videosProps } from "@/types/video";
import moment from 'moment'
export default function YouTubeChannel() {
    const [videos, setVideos] = useState<videosProps>([]);

    useEffect(() => {
        async function fetchVideos() {
            const CHANNEL_ID = 'UChjZB_B5f76x3ZkrASt348Q';
            const endpoint = `https://www.googleapis.com/youtube/v3/search?key=${'AIzaSyCmav_D2l3_A0V5sjU43tY4r9Xebl3Uq3o'}&channelId=${CHANNEL_ID}&part=snippet&type=video&maxResults=5`;

            try {
                const response = await fetch(endpoint);
                const data = await response.json();
                console.log("Data => ", data)
                setVideos(data.items);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        }
        fetchVideos();
    }, []);

    const coverImage = '/images/podcasts/mcast.jpg'; // Replace with actual cover image URL
    const profileImage = '/images/mcast.jpg'; // Replace with actual profile image URL

    return (
        <>
            <Loader />
            <div className="bg-[#111] text-white min-h-screen">
                {/* Header  */}
                <div className="sticky top-0 bg-[#222] flex items-center px-4 py-3 min-20 shadow-md z-99">
                    <h1 className="text-lg font-semibold">PODCAST MALAWI</h1>
                    <div className="ml-auto flex items-center space-x-4">
                        <button className="text-gray-400 hover:text-white">
                            <BsFire color="red" size={20} />
                        </button>
                        <button className="text-gray-400 hover:text-white">
                            <BsBell color="white" size={20} />
                        </button>
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
                        <h1 className="text-2xl font-bold mt-4">PODCAST MALAWI</h1>

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
                                size={24} color="white" />
                            <h2 className="text-xl font-semibold">
                                Reels
                            </h2>
                        </div>
                        <Reels />
                    </div>

                    <div className=" text-white px-4 w-full space-y-4">
                        <div className="flex items-center space-x-1">
                            <MdOutlineMovie className="transition-all " size={24} color="white" />
                            <h2 className="text-xl font-semibold">
                                Videos
                            </h2>
                        </div>
                        <div className="space-y-7">
                            {videos.map((video, index) => (
                                // <div key={index} className="flex gap-4 items-start bg-[#222] rounded-2xl p-1">
                                //     <div className="relative w-40 h-30">
                                //         <Image
                                //             src={video.snippet.thumbnails.high.url}
                                //             alt={video.snippet.title}
                                //             layout="fill"
                                //             objectFit="cover"
                                //             className="rounded-lg"
                                //         />
                                //     </div>
                                //     <div className="flex-1">
                                //         <h3 className="text-sm font-semibold line-clamp-2">{video.snippet.title}</h3>
                                //         <p className="text-xs text-gray-400">
                                //             300K • {moment(video.snippet.publishedAt).calendar()}
                                //         </p>
                                //     </div>
                                // </div>
                                <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
                                    {/* YouTube Video Embed */}
                                    <iframe
                                        width="100%"
                                        height="200"
                                        src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                        title={video.snippet.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                    {/* Video Info */}
                                    <div className="p-2">
                                        <h3 className="text-lg font-medium">{video.snippet.title}</h3>
                                        <p className="text-sm text-gray-600">
                                            Published on: {new Date(video.snippet.publishedAt).toDateString()}
                                        </p>
                                        <p className="text-sm text-gray-600">{video.snippet.channelTitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </main>
            </div>
        </>
    );
}
