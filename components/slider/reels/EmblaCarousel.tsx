"use client"

import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { BsArrowRightCircle } from 'react-icons/bs'
import { videosProps } from '@/types/video'
import moment from 'moment'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
  channelId: string
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options, channelId } = props
  const [emblaRef] = useEmblaCarousel(options);
  const [reels, setReels] = useState<videosProps>([]);
  useEffect(() => {
    async function fetchReels() {
      const endpoint = `https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet&type=video&maxResults=15&order=date&videoDuration=short`;

      try {
        const response = await fetch(endpoint);
        const data = await response.json();

        // Filter for titles containing "Shorts" or similar
        const videos = data.items.filter((video: { snippet: { title: string } }) =>
          video.snippet.title.toLowerCase().includes("short")
        );
        setReels(videos);
      } catch (error) {
        console.error('Error fetching reels:', error);
      }
    }
    fetchReels();
  }, []);


  return (
    <section className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container space-x-5 w-full pl-8">
          {
            reels.map(reel => (

              <div key={reel.id.videoId} className="bg-[#333] w-full min-w-50 mx-4 rounded-lg overflow-hidden">
                <div className="relative min-h-30">
                  <iframe
                    width="100%"
                    height="360" // Taller frame for vertical videos
                    src={`https://www.youtube.com/embed/${reel.id.videoId}`}
                    // frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))
          }
          <div className="bg-[#333] w-full min-w-50 mx-4 rounded-lg overflow-hidden">
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
