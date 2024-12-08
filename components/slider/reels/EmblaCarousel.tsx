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

              <div key={track.title} className="bg-[#333] w-full min-w-40 mx-4 rounded-lg overflow-hidden">
                <div className="relative h-40">
                  {/* Thumbnail Image */}
                  <Image
                    src={track.avatar}
                    alt="Video Thumbnail"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-sm font-medium">
                    Episode 139 | Krazie G Reflects on Music...
                  </h3>
                  <p className="text-xs text-gray-400">16k views • 4 days ago</p>
                </div>
              </div>
            ))
          }
          <div className="bg-[#333] w-full min-w-40 mx-4 rounded-lg overflow-hidden">
            <div className="relative flex items-center justify-center h-40">
              {/* Thumbnail Image */}
              <BsArrowRightCircle size={60} color='white' />
            </div>
            <div className="p-2">
              <h3 className="text-sm text-center font-medium">
                View All Reels
              </h3>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default EmblaCarousel
