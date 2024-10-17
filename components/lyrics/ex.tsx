"use client"
import { FC, useEffect, useState } from 'react';

interface LyricsProps {
    lyrics: { time: number; words: string }[];
}

const LyricsDisplay: FC<LyricsProps> = ({ lyrics }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => {
                if (prevIndex < lyrics.length - 1) {
                    return prevIndex + 1;
                } else {
                    clearInterval(interval);
                    return prevIndex;
                }
            });
        }, lyrics[currentWordIndex].time * 1000);

        return () => clearInterval(interval);
    }, [currentWordIndex, lyrics]);

    return (
        <div>
            {lyrics.map((line, index) => (
                <span style={{ color: index === currentWordIndex ? 'red' : 'black' }}>
                    {line.words}{' '}
                </span>
            ))}
        </div>
    );
};

export default LyricsDisplay;