'use client'

import { axiosInstance } from '@/app/api/tracks'
import { Track, useAudioStore } from '@/app/stores/MusicStore'
import { AudioContext } from '@/context/AudioContext'
import React, { useContext, useEffect, useState } from 'react'
import { BsPause, BsPlay } from 'react-icons/bs'

interface Charts {
    [key: string]: Track[]; // Optional, allows additional chart categories dynamically
}[]


const TopTenCharts = () => {
    const { audio, setAudio, playing, setQueue, setPlaying } = useAudioStore()
    const [tracks, setTracks] = useState<any[]>([])
    useEffect(() => {
        const fetchTracks = async () => {
            try {
                const res = await axiosInstance.get('/charts/');
                const charts = Object.values(res.data.charts).flat()
                console.log("Charts => ", charts)
                setTracks(charts);
            }
            catch { }
        }
        fetchTracks();
    }, [])

    return (
        <div className="px-4 w-full h-full space-y-4">
            <div className="flex w-full items-center space-x-2">
                {/* <FaTheaterMasks size={20} color="white" /> */}
                <h2 className="text-xl font-thin tracking-tight  text-black dark:text-white">Studio <span className="text-red-500">X</span> Top 100</h2>
            </div>
            <div className="space-y-4">
                {
                    tracks.length ?
                        tracks.map((track, index) => (
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
                                        setQueue(tracks);
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
                        ))
                        :
                        Array.from({ length: 4 }).map((_, index) => (
                            <div key={index}
                                className={`flex items-center  p-1 rounded-lg bg-slate-900`}>
                                {/* Album Art */}
                                <div className="w-16 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-slate-700 animate-pulse">
                                </div>

                                {/* Song Info */}
                                <div className="ml-4 flex-1 space-y-3">
                                    <h3 className="font-thin bg-slate-700 h-3 animate-pulse"></h3>
                                    <p className="bg-slate-700 animate-pulse h-3"></p>
                                </div>
                            </div>
                        ))
                }
            </div>
        </div>
    );
}

export default TopTenCharts;