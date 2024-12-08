"use client"

import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'
import { FaTheaterMasks } from 'react-icons/fa'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const events = [
    {
      title: 'Tyler Show',
      avatar: '/images/e2.jpeg'
    },
    {
      title: 'Lake of Stars',
      avatar: '/images/e4.jpg'
    },
    {
      title: 'Sand Music Festival',
      avatar: '/images/e5.jpg'
    },
  ]
  return (
    <section className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container space-x-5 w-full">
          {
            events.map(event => (

              <div key={event.title} className="max-h-50 h-50 items-start justify-start min-w-45 flex flex-col relative cursor-pointer rounded-2xl overflow-hidden">
                <img
                  src={event.avatar}
                  key={event.avatar}
                  className=" w-full h-full object-cover"
                  alt=""
                />
                <div className="z-900 opacity-0 w-full h-full bg-[#000000a6] items-center justify-center hover:opacity-100 flex flex-col space-y-3 absolute top-0 left-0 right-0">
                  <p className="text-white">{event.title}</p>
                  <button className='flex px-2 py-3 items-center bg-red-500 rounded-2xl space-x-2'>
                    <Link href={'/event/22w123we3ww0wsde03aa3d7s8aaas63573'} className="text-white">View more</Link>
                  </button>
                </div>
              </div>
            ))
          }
          <Link href={'/events'} className="bg-[#333] w-full min-w-40 mx-4 rounded-lg overflow-hidden">
            <div className="relative flex items-center justify-center h-40">
              {/* Thumbnail Image */}
              <FaTheaterMasks fontWeight={20} size={60} color="white" />
            </div>
            <div className="p-2">
              <h3 className="text-sm text-center text-white font-medium">
                View All Events
              </h3>
            </div>
          </Link>
        </div>
      </div>

    </section>
  )
}

export default EmblaCarousel
