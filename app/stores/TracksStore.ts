"use client";

import { create } from "zustand";

export interface Track {
  artist: string;
  audio: string;
  avatar: string;
  title: string;
}

export interface TracksState {
  tracks: Track[];
  setTracks: (tracks: Track[]) => void;
}

// Zustand store
export const useTracksStore = create<TracksState>((set, get) => ({
  tracks: [],
  setTracks: (tracks) => set({ tracks }),
}));
