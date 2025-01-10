"use client"

import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AudioContext } from '@/context/AudioContext'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useAudioStore } from '@/app/stores/MusicStore'
import { axiosInstance } from '@/app/api/tracks'
type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

  const { audio, playing, setAudio, setQueue, setPlaying } = useAudioStore();
  const [tracks, setTracks] = useState<any[]>([])
  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const res = await axiosInstance.get('/tracks/');
        console.log("Axios => ", res)
        setTracks(res.data.tracks);
      }
      catch { }
    }
    fetchTracks();
  }, [])

  return (
    <section className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container space-x-5 w-full pl-8">
          {
            tracks.length ?
              tracks.map(track => (
                <Image loading='lazy' height={560} width={560} key={track.audio}
                  className={`w-25 h-25  md:w-45 md:h-45  cursor-pointer rounded-full ${audio.title == track.title && playing ? 'animate-rotating' : ''}`}
                  onClick={() => {

                    if (audio.title == track.title) {
                      setPlaying(!playing);
                    } else {
                      setAudio(track);
                      setQueue(tracks);
                      setPlaying(true)
                    }
                  }}
                  src={track.avatar} alt="" />
              ))
              :
              Array.from({ length: 4 }).map((_, index) => (
                <div className="min-w-30 min-h-30  md:w-45 md:h-45  bg-slate-900 rounded-full"></div>
              ))
          }
        </div>
      </div>

    </section>
  )
}

export default EmblaCarousel
