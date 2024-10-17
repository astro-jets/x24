import { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { IoIosPause, IoIosPlayCircle, IoIosSkipBackward, IoIosSkipForward } from "react-icons/io";
import { FaDownload, FaHeart, FaShare, FaVideo } from 'react-icons/fa';
import { useAudio } from '@/context/AudioContext';

const Player = () => {
    const [playing, setPlaying] = useState(false);
    const waveformRef = useRef<HTMLDivElement | null>(null);
    const [waveSurfer, setWaveSurfer] = useState<WaveSurfer | null>(null);
    const { audio, nextTrack, prevTrack } = useAudio();
    const [indexTr, setIndexTr] = useState(0)
    const [isOpen, setIsOpen] = useState(true)
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



    // function parseLyric(lrc: string): { time: number; text: string }[] {
    //     // will match "[00:00.00] ooooh yeah!"
    //     // note: i use named capturing group
    //     const regex = /^\[(?<time>\d{2}:\d{2}(.\d{2})?)\](?<text>.*)/;

    //     // split lrc string to individual lines
    //     const lines = lrc.split("\n");

    //     const output: { time: number; text: string }[] = [];

    //     lines.forEach(line => {
    //         const match = line.match(regex);

    //         // if doesn't match, return.
    //         if (match == null) return;

    //         const { time, text } = match.groups as { time: string; text: string };

    //         output.push({
    //             time: parseTime(time),
    //             text: text.trim()
    //         });
    //     });

    //     // parse formated time
    //     // "03:24.73" => 204.73 (total time in seconds)
    //     function parseTime(time: string): number {
    //         const minsec = time.split(":");

    //         const min = parseInt(minsec[0]) * 60;
    //         const sec = parseFloat(minsec[1]);

    //         return min + sec;
    //     }

    //     return output;
    // }

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

    function secondsToHHMMSS(seconds: number): number {
        const wholeSeconds = Math.floor(seconds);
        const milliseconds = Math.round((seconds - wholeSeconds) * 1000);

        const minutes = Math.floor(wholeSeconds / 60);
        const remainingSeconds = wholeSeconds % 60;

        const formattedTime = Number(`${minutes.toString().padStart(2, '0')}.${remainingSeconds.toString().padStart(2, '0')}${milliseconds.toString().padStart(2, '0')}`);

        return formattedTime;
    }

    useEffect(() => {
        const ws = WaveSurfer.create({
            container: waveformRef.current ? waveformRef.current : '',
            waveColor: '#ccc',
            progressColor: 'red',
            backend: 'MediaElement',
            height: 25,
            normalize: true,
            barGap: 1,
            barRadius: 20,
            barHeight: 20,
            barWidth: 2
        });
        ws.load(audio?.audio as string);
        setWaveSurfer(ws)
        return () => {
            ws?.destroy();
        };
    }, []);

    useEffect(() => {
        waveSurfer?.load(audio?.audio as string)
        waveSurfer?.on('ready', function () {
            waveSurfer?.play();
            setPlaying(true);
        });

        waveSurfer?.on('error', function (err) {
            console.error(`WaveSurfer Error => ${err}`);
            // Display the error appropriately here
        });

        waveSurfer?.on('finish', function () {
            nextTrack();
        });
        const dom = {
            lyric: document.querySelector(".lyric") as HTMLElement,
        };

        waveSurfer?.on('timeupdate', function () {
            const time = waveSurfer.getCurrentTime();
            const index = syncLyric(lyrics, time);
            console.log("Lyrics => ", index)

            if (index == null) { return; }
            else {
                dom.lyric.innerHTML = lyrics ? lyrics[index].words : 'empty';
            }
        });
        console.log("Lyrics => ", lyrics)


    }, [audio]);

    const handlePlayPause = () => {
        if (playing) {
            waveSurfer?.pause();
            setPlaying(false);

        } else {
            waveSurfer?.play();
            setPlaying(true);
        }
    };

    return (

        <div className={`flex flex-col w-full  md:w-[95%] bg-white/40 h-full rounded-tl-3xl rounded-tr-3xl pb-  backdrop-blur-lg ${isOpen ? 'h-[120vh] py-4' : 'h-20'}`}>
            <div className={` flex-col w-full h-[80%] pb-6 space-y-6 ${isOpen ? 'flex' : 'hidden'}`}>
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
                <div className="flex items-center  space-x-4 w-full md:w-[45%]">
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
                                <IoIosPause className='cursor-pointer' color="red" size={40} onClick={handlePlayPause} />
                                :
                                <IoIosPlayCircle className='cursor-pointer' color="red" size={40} onClick={handlePlayPause} />
                        }
                        <IoIosSkipForward className='cursor-pointe' size={20}
                            color="white"
                            onClick={() => { nextTrack() }}
                        />
                    </div>
                </div>

                <div className="overflow-hidden w-full md:w-[45%] " ref={waveformRef} id='waveform'>
                </div>

                <div className="hidden md:flex w-[5%] text-white text-xs">
                    {waveSurfer?.getDuration()}
                </div>
            </div>
        </div >
    );
}

export default Player;
