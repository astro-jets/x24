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
      title: 'Made on monday',
      avatar: "/images/mom.png",
      url: "/podcasts/1"
    },
    {
      title: 'Mac G Show',
      avatar: "/images/macg.jpg",
      url: "/podcasts/1"
    },
    {
      title: 'Mlw Podcast',
      avatar: "/images/mcast.jpg",
      url: "/podcasts/1"
    },
    {
      title: 'Jah Kev Show',
      avatar: "/images/jk.jpg",
      url: "/podcasts/1"
    }
  ]

  return (
    <section className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container space-x-5 w-full">
          {
            tracks.map(track => (

              <div key={track.title} className="group relative backdrop-blur-lg dark:bg-[#0f0f0f5b] bg-white/40 rounded-2xl p-2 max-h-70 h-70 min-w-45">
                <div className="aspect-h-1 h-40 aspect-w-1 w-full overflow-hidden rounded-2xl  lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img src={track.avatar} alt="Front of men&#039;s Event Name in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-white">
                      <a href={`${track.url}`}>
                        <span aria-hidden="true" className="absolute inset-0"></span>
                        {track.title}
                      </a>
                    </h3>
                  </div>

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
