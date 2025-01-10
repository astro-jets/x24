"use client";

import { create } from "zustand";

export interface Track {
    artist: string;
    audio: string;
    avatar: string;
    title: string;
}

export interface AudioState {
    audio: Track;
    queue: Track[];
    playing: boolean;
    setAudio: (track: Track) => void;
    setQueue: (queue: Track[]) => void;
    setPlaying: (playing: boolean) => void;
    nextTrack: () => void;
    prevTrack: () => void;
}

// Zustand store
export const useAudioStore = create<AudioState>((set, get) => ({
    audio: { artist: "", audio: "", avatar: "", title: "" },
    queue: [],
    playing: false,

    setAudio: (track) => set({ audio: track }),
    setQueue: (queue) => set({ queue }),
    setPlaying: (playing) => set({ playing }),

    nextTrack: () => {
        const { queue, audio } = get();
        const currentIndex = queue.findIndex((track) => track.audio === audio.audio);
        const nextIndex = (currentIndex + 1) % queue.length;
        set({ audio: queue[nextIndex] });
    },

    prevTrack: () => {
        const { queue, audio } = get();
        const currentIndex = queue.findIndex((track) => track.audio === audio.audio);
        const prevIndex = (currentIndex - 1 + queue.length) % queue.length;
        set({ audio: queue[prevIndex] });
    },
}));
