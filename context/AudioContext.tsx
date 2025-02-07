"use client";

import { FC, ReactNode, createContext, useState, useContext } from "react";
import { Dispatch, SetStateAction } from "react";

export interface AudioContextType {
    audio: {
        title: string;
        artist: string;
        avatar: string;
        audio: string;
    };
    setAudio: Dispatch<
        SetStateAction<{
            artist: string;
            audio: string;
            avatar: string;
            title: string;
        }>
    >;
    playlist: Array<{ artist: string; audio: string; avatar: string; title: string }>;
    setPlaylist: Dispatch<SetStateAction<Array<{ artist: string; audio: string; avatar: string; title: string }>>>;
    playing: boolean;
    setPlaying: Dispatch<SetStateAction<boolean>>;
    nextTrack: () => void;
    prevTrack: () => void;
}

interface ProviderProps {
    children: ReactNode;
    initial?: { artist: string, audio: string, avatar: string, title: string };
    initialPlaylist?: Array<{ artist: string; audio: string; avatar: string; title: string }>;
    isPlaying?: boolean
}

export const AudioContext = createContext<AudioContextType>({
    audio: { artist: '', audio: '', avatar: '', title: '' },
    setAudio: () => { },
    playlist: [],
    setPlaylist: () => { },
    playing: false,
    setPlaying: () => { },
    nextTrack: () => { },
    prevTrack: () => { }
});

export const AudioContextProvider: FC<ProviderProps> = ({
    children,
    isPlaying = false,
    initial = { artist: '', audio: '', avatar: '', title: '' },
    initialPlaylist = []
}) => {
    const [playing, setPlaying] = useState(isPlaying);
    const [audio, setAudio] = useState(initial);
    const [playlist, setPlaylist] = useState(initialPlaylist);

    const nextTrack = () => {
        const currentIndex = playlist.findIndex(track => track.audio === audio.audio);
        const nextIndex = (currentIndex + 1) % playlist.length;
        setAudio(playlist[nextIndex]);
    };

    const prevTrack = () => {
        const currentIndex = playlist.findIndex(track => track.audio === audio.audio);
        const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
        setAudio(playlist[prevIndex]);
    };

    return (
        <AudioContext.Provider value={{ playing, setPlaying, audio, setAudio, playlist, setPlaylist, nextTrack, prevTrack }}>
            {children}
        </AudioContext.Provider>
    );
};

// Custom hook to use the AudioContext
export const useAudio = () => useContext(AudioContext);
