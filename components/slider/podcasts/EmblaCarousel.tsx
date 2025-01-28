"use client"

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { FaMicrophoneAlt } from 'react-icons/fa'
import Link from 'next/link'
import { channelDetailsProps } from '@/types/video'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
  channels: channelDetailsProps[]
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options, channels } = props
  const [emblaRef] = useEmblaCarousel(options);


  return (
    <section className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container py-4 space-x-5 w-full pl-8">
          {
            channels?.map(channel => (

              <Link href={`/podcasts/${channel.id}`} key={channel.id} className="group relative backdrop-blur-lg shadow-[#222] shadow-4 dark:shadow-1 dark:bg-[#0f0f0fce] bg-[#fff] rounded-2xl p-2 max-h-60 h-full min-w-45">
                <div className="aspect-h-1 h-40 aspect-w-1 w-full overflow-hidden rounded-2xl  lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img src={channel.snippet.thumbnails.high.url} alt="channel thumbnail"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-black dark:text-white">

                      <span aria-hidden="true" className="absolute inset-0"></span>
                      {channel.snippet.title}
                    </h3>
                  </div>

                </div>
              </Link>
            ))
          }
          <Link href={'/podcasts'} className="bg-[#333] w-full min-w-40 mx-4 rounded-lg overflow-hidden">
            <div className="relative flex items-center justify-center h-40">
              {/* Thumbnail Image */}
              <FaMicrophoneAlt fontWeight={20} size={60} color="white" />
            </div>
            <div className="p-2">
              <h3 className="text-sm text-center text-white font-medium">
                View All Podcasts
              </h3>
            </div>
          </Link>
        </div>
      </div>

    </section>
  )
}

export default EmblaCarousel
