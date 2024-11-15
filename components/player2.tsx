"use client"
import { useEffect, useRef, useState } from 'react';
import { IoIosPause, IoIosPlayCircle, IoIosSkipBackward, IoIosSkipForward } from "react-icons/io";
import { FaDownload, FaHeart, FaShare, FaVideo } from 'react-icons/fa';
import Slider from "react-slider"
import { useAudio } from '@/context/AudioContext';

const Player = () => {
    const audioElement = useRef<HTMLAudioElement>(null);
    const { audio, nextTrack, prevTrack, playing, setPlaying } = useAudio();
    const [isOpen, setIsOpen] = useState(true)
    const [audioProgress, setAudioProgress] = useState(0);
    const [audioPlayer, setAP] = useState<HTMLAudioElement>();
    const [seeking, setSeeking] = useState(false);

    useEffect(() => {
        const audioTag = document.getElementById('mainAudio') as HTMLAudioElement;
        if (audioTag) {
            audioTag.src = audio.audio; // Assuming audio.audio is the current track's URL
            setAP(audioTag);
            if (playing) { audioPlayer?.play(); }
        }

    }, [audio]); // Make sure the audio element loads when the track changes

    useEffect(() => {
        if (audioPlayer) {
            // Define the event handler for the 'timeupdate' event
            const handleTimeUpdate = () => {
                if (!seeking) {  // Only update progress if we are not seeking
                    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
                    setAudioProgress(progress);
                }
            };

            audioPlayer.addEventListener('ended', nextTrack);

            // Add the 'ended' and 'timeupdate' event listeners
            audioPlayer.addEventListener('timeupdate', handleTimeUpdate);

            // Cleanup function to remove the 'ended' and 'timeupdate' event listeners
            return () => {
                // audio.removeEventListener('ended', handleAudioEnded);
                audioPlayer.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, [audio, seeking]);

    // Handle when the user manually changes the slider (seek position)
    const handleSeek = (value: number) => {
        if (audioPlayer?.currentTime) {
            setSeeking(true)
            const newTime = (value * audioPlayer.duration / 100);
            audioPlayer.currentTime = newTime;
            setAudioProgress(value);
        }
    };

    // Ensure seeking ends when the user is done with the slider
    const handleSliderMouseUp = () => {
        setSeeking(false);  // Mark seeking as false when the user stops interacting
    };



    const togglePlayPause = () => {
        if (playing) {
            setPlaying(false)
            audioPlayer?.pause()
        }
        else { audioPlayer?.play(); setPlaying(true); }
    };
    // 

    return (

        <div className={`flex flex-col w-full md:max-h-10 md:p-0 md:rounded-none  md:bg-[#ff3030] bg-white/40 h-full rounded-tl-3xl rounded-tr-3xl pb-  backdrop-blur-lg ${isOpen ? 'h-[120vh] py-4' : 'h-20'}`}>
            <div className={` md:hidden flex-col w-full h-[80%] pb-6 space-y-6 ${isOpen ? 'flex' : 'hidden'}`}>
                <div className="flex space-x-6 h-20 items-center">
                    <img src="/images/sting.jpg" className='w-20 h-20 rounded-full object-cover' alt="" />
                    <div className="flex flex-col ">
                        <p className='text-lg'>Sting Chizmo</p>
                        <div className="rounded-2xl shadow-3 bg-[#111] px-4 py-2">
                            <p className='text-red-500'> Follow +</p>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-6 ">
                    <p className='bg-[#111] items-center justify-center space-x-1 rounded-xl px-4 py-2 flex text-white'>
                        <span>Video</span>
                        <FaVideo color='red' size={20} />
                    </p>
                    <p className='bg-[#111] items-center justify-center h-10 w-10 rounded-full p-2 flex text-white'>
                        <FaHeart color='red' size={20} />
                    </p>
                    <p className='bg-[#111] items-center justify-center h-10 w-10 rounded-full p-2 flex text-white'>
                        <FaShare color='red' size={20} />
                    </p>
                    <p className='bg-[#111] items-center justify-center h-10 w-10 rounded-full p-2 flex text-white'>
                        <FaDownload color='red' size={20} />
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="w-11/12 h-40 text-center md:w-1/4">
                        <div className="lyric text-3xl"></div>
                    </div>
                </div>

            </div>
            <div className="w-full h-30 flex flex-col px-6 space-y-1  py-2 md:space-x-4 items-center md:flex-row md:h-20">
                {/* Audio Seek */}
                <div className="w-full h-full bmb-4 flex flex-col items-center justify-center">
                    <Slider
                        min={0}
                        max={100}
                        value={audioProgress}
                        onChange={handleSeek}
                        onAfterChange={handleSliderMouseUp} // Triggered after seeking is done
                        className="custom-slider" // You can add your custom class for styling
                    />
                </div>
                <div className="flex items-center  space-x-4 w-full md:hidden">
                    <img src={audio?.avatar} className="rounded-full object-cover h-15 w-15 cursor-pointer" onClick={() => { setIsOpen(!isOpen) }} alt="" />
                    <div className="flex flex-col justify-start text-white items-start">
                        <p className="text-lg">{audio?.artist}</p>
                        <p className="text-sm text-gray-200">{audio?.title}</p>
                    </div>


                    <div className="controls flex items-center space-x-6">
                        <IoIosSkipBackward color="white" className='cursor-pointer' size={20} onClick={() => { prevTrack() }} />
                        {
                            playing
                                ?
                                <IoIosPause className='cursor-pointer' color="red" size={40} onClick={togglePlayPause} />
                                :
                                <IoIosPlayCircle className='cursor-pointer' color="red" size={40} onClick={togglePlayPause} />
                        }
                        <IoIosSkipForward className='cursor-pointe' size={20}
                            color="white"
                            onClick={() => { nextTrack() }}
                        />
                    </div>
                </div>

                <audio id="mainAudio" ref={audioElement} preload='lazy' />
            </div>
        </div >
    );
}

export default Player;
