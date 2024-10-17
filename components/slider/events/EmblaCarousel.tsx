"use client"

import React, { useCallback, useContext } from 'react'
import { AudioContext } from '@/context/AudioContext'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { FaTicketAlt } from 'react-icons/fa'
import Link from 'next/link'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return
  }, [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)
  const tracks = [
    {
      title: 'Ghetto Anthem',
      artist: "Chizmo",
      avatar: "/images/chizmo.jpg",
      audio: "/a1.mp3"
    },
    {
      title: 'Curren$y',
      artist: "Bal Habour Brunch",
      avatar: "/images/sok.jpg",
      audio: "/a2.mp3"
    },
    {
      title: 'Afana Ceez',
      artist: "kuno ayi",
      avatar: "/images/abale.jpg",
      audio: "/a3.mp3"
    },
    {
      title: 'Obhebha',
      artist: "Mercah ft Namadingo",
      avatar: "/images/mlw.jpg",
      audio: "/a4.mp3"
    },
    {
      title: 'Ghetto Anthem',
      artist: "Chizmo",
      avatar: "/images/chizmo.jpg",
      audio: "/a1.mp3"
    },
    {
      title: 'Curren$y',
      artist: "Bal Habour Brunch",
      avatar: "/images/sok.jpg",
      audio: "/a2.mp3"
    },
    {
      title: 'Afana Ceez',
      artist: "kuno ayi",
      avatar: "/images/abale.jpg",
      audio: "/a3.mp3"
    },
    {
      title: 'Obhebha',
      artist: "Mercah ft Namadingo",
      avatar: "/images/mlw.jpg",
      audio: "/a4.mp3"
    },
  ]
  const { audio, setAudio } = useContext(AudioContext)

  return (
    <section className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container space-x-5 w-full">
          {
            tracks.map(track => (

              <div className="max-h-50 h-50 items-start justify-start min-w-45 flex flex-col relative cursor-pointer rounded-2xl overflow-hidden">
                <img
                  key={track.audio}
                  className=" w-full h-full object-cover"
                  onClick={() => { setAudio(track) }} src={track.avatar} alt=""
                />
                <div className="z-900 opacity-0 w-full h-full bg-[#000000a6] items-center justify-center hover:opacity-100 flex flex-col space-y-3 absolute top-0 left-0 right-0">
                  <p className="text-white">Event Name</p>
                  <button className='flex px-2 py-3 items-center bg-red-500 rounded-2xl space-x-2'>
                    <Link href={'/event/22w123we3ww0wsde03aa3d7s8aaas63573'} className="text-white">View more</Link>
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </section>
  )
}

export default EmblaCarousel
