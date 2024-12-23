'use client'

import { AudioContext } from '@/context/AudioContext'
import React, { useContext } from 'react'
import { BsPause, BsPlay } from 'react-icons/bs'


const TopTenCharts = () => {
    const { audio, setAudio, playing, setPlaylist, setPlaying } = useContext(AudioContext)


    const tracks = [
        {
            title: 'Man at the garden',
            artist: "Kendrick Lamar",
            avatar: "/images/gnx.jpg",
            audio: "/a6.mp3"
        },
        {
            title: 'Pride is the devil',
            artist: "J.Cole ft Lil Baby",
            avatar: "/images/offseason.jpg",
            audio: "/a7.mp3"
        },
        {
            title: 'Talk',
            artist: "Khalid",
            avatar: "/images/fs.jpg",
            audio: "/a5.mp3"
        },
        {
            title: 'Afana Ceez',
            artist: "kuno ayi",
            avatar: "/images/abale.jpg",
            audio: "/a3.mp3"
        },
    ];
    return (
        <div className="px-4 w-full h-full space-y-4">
            <div className="flex w-full items-center space-x-2">
                {/* <FaTheaterMasks size={20} color="white" /> */}
                <h2 className="text-xl font-thin tracking-tight  text-black dark:text-white">Studio <span className="text-red-500">X</span> Top 100</h2>
            </div>
            <div className="space-y-4">
                {tracks.map((track, index) => (
                    <div
                        key={index}
                        className={`flex items-center  p-1 rounded-lg lg:hover:bg-[#ff2424b6] duration-[900000]
                            ${audio.title == track.title ? 'bg-[#b80000ee]' : 'bg-[#111111b4]'}
                            ${audio.title == track.title && playing ? 'playing' : ''}
                            `}
                        onClick={() => {

                            if (audio.title == track.title) {
                                setPlaying(!playing);
                            } else {
                                setAudio(track);
                                setPlaylist(tracks);
                                setPlaying(true)
                            }
                        }}
                    >
                        {/* Album Art */}
                        <div className="w-16 h-14 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                                src={track.avatar}
                                alt="Album Art"
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Song Info */}
                        <div className="ml-4 flex-1">
                            <h3 className="font-thin text-black dark:text-white">{track.title}</h3>
                            <p className="text-gray-400 text-sm">{track.artist}</p>
                        </div>

                        {/* Play/Pause */}
                        <div className={`mx-3 ${audio.title == track.title ? 'inline' : 'hidden'}`}>
                            {
                                playing ? <BsPause color='#fff' size={20} /> : <BsPlay color='#fff' size={20} />
                            }

                        </div>

                        {/* Duration */}
                        <p className="text-gray-400 text-sm">3:45</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TopTenCharts;