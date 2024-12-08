"use client"

import React, { useCallback, useContext } from 'react'
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
import Image from 'next/image'
import { BsArrowRightCircle } from 'react-icons/bs'

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
  const tags = ['Home', 'Videos', 'Reels', 'Community', 'Playlists', 'Search', 'Other'];

  return (
    <section className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container space-x-5 w-full pl-8">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-800 text-white text-sm px-3 py-1 rounded-2xl border border-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

    </section>
  )
}

export default EmblaCarousel
