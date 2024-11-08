import { useEffect, useRef, useState } from 'react';
import { IoIosPause, IoIosPlayCircle, IoIosSkipBackward, IoIosSkipForward } from "react-icons/io";
import { FaDownload, FaHeart, FaShare, FaVideo } from 'react-icons/fa';
import { useAudio } from '@/context/AudioContext';

const Player = () => {
    const [playing, setPlaying] = useState(false);
    const audioElement = useRef(null);
    const { audio, nextTrack, prevTrack } = useAudio();
    const [isOpen, setIsOpen] = useState(true)
    const [audioProgress, setAudioProgress] = useState(0);
    const [audioPlayer, setAP] = useState<HTMLAudioElement>();
    const lyrics = [
        { time: 1, words: 'Ase LeuMas,' },
        { time: 7, words: 'Zawu zoba zoba Zawu (ey)' },
        { time: 9.6, words: 'Zaukape ine sindipanga' },
        { time: 12, words: 'Zaukape ine sindipanga' },
        { time: 14, words: 'Zauzoba sindipanga' },
        { time: 16, words: 'Zaukape ine sindipanga' },
        { time: 22, words: 'Zondipinga ine mmm mmm' },
        { time: 26, words: 'Zondiyenda mbali ine (eish)' },
        { time: 27.7, words: 'Ndikati mmm mmm, mmm-mmm (kuno ayi)' },
        { time: 31, words: 'mmm mmm, mmm-mmm (ine)' },
        { time: 34.3, words: 'mmm mmm, mmm-mmm (kuno ayi)' },
        { time: 40, words: 'Ngati isali trans ID ine mmm mmm' },
        { time: 45, words: 'Can you do me a favour ine mmm mmm' },
        { time: 50, words: 'Iwe cross yowuluka ine mmm mmm' },
        { time: 54, words: 'Zongobwela muli boys yokha yokha kuno mmm mmm' },
        { time: 57, words: 'Inu shasha naye ndi munthu' },
        { time: 59.5, words: 'Kaya local chicken bolani nkhuku' },
        { time: 62.2, words: 'Kumamwela ndi ma mmm mmm' },
        { time: 64.6, words: 'Macheza amakoma tili two two' },
        { time: 66.5, words: 'Zamijedu kuno mmm mmm (kuno ayi)' },
        { time: 70, words: 'zamabodza kuno mmm mmm' },
        { time: 72, words: 'zamaluzi pano mmm mmm' },
        { time: 75, words: 'Tiku chaser bag sizibukhu' },
        { time: 76.75, words: 'ay yay yay yay yay yay' },
        { time: 80, words: 'Zondipinga ine mmm mmm' },
        { time: 84, words: 'Zondiyenda mbali ine mmm mmm (eish)' },
        { time: 88.5, words: 'Boss zotipinga ife mmm mmm' },
        { time: 92, words: 'Inu, zotiyenda mbali ife' },
    ];

    function syncLyric(lyrics: { time: number }[], time: number): number | null {
        const scores: number[] = [];
        lyrics.forEach(lyric => {
            // get the gap or distance or we call it score
            const score = time - lyric.time;

            // only accept score with positive values
            if (score >= 0) scores.push(score);
        });
        if (scores.length == 0) return null;
        // get the smallest value from scores
        const closest = Math.min(...scores);
        // return the index of closest lyric
        return scores.indexOf(closest);
    }


    useEffect(() => {
        const ap = document.getElementById('mainAudio') as HTMLAudioElement;
        if (!audioPlayer) {
            setAP(ap);
        }
    });

    useEffect(() => {
        if (audio && audioPlayer) {
            // Auto-play the track when audio is loaded
            audioPlayer.play().then(() => {
                setPlaying(true); // Set the state to reflect that the audio is playing
            }).catch(error => {
                console.error('Audio playback failed:', error);
            });

            // Define the event handler for the 'timeupdate' event
            const handleTimeUpdate = () => {
                const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
                setAudioProgress(progress);
            };

            audioPlayer.addEventListener('ended', nextTrack);
            audioPlayer.addEventListener('timeupdate', handleTimeUpdate);

            return () => {
                // Cleanup event listeners when the component unmounts or `audio` changes
                audioPlayer.removeEventListener('ended', nextTrack);
                audioPlayer.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, [audio, audioPlayer]); // Depend on `audio` and `audioPlayer` so it runs when they change


    const togglePlayPause = () => {
        if (playing) {
            audioPlayer?.pause()
            setPlaying(false)
        }
        else { audioPlayer?.play(); setPlaying(true); }
    };





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

                <audio id="mainAudio" ref={audioElement} src={audio.audio} preload='lazy' ></audio>
            </div>
        </div >
    );
}

export default Player;