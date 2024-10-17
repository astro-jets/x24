import { FC, useState, useEffect } from 'react';

interface LyricsProps {
    lyrics: string[];
}

const LyricsDisplay: FC<LyricsProps> = ({ lyrics }) => {
    const [currentLine, setCurrentLine] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLine((prevLine) => (prevLine + 1) % lyrics.length);
        }, 3000); // Change line every 3 seconds

        return () => clearInterval(interval);
    }, [lyrics]);

    return (
        <div>
            <p>{lyrics[currentLine]}</p>
        </div>
    );
};

export default LyricsDisplay;
