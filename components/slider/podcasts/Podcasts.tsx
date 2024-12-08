"use client"
import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import { FaMicrophoneAlt } from 'react-icons/fa'


const OPTIONS: EmblaOptionsType = { align: 'start', loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function PodcastSlider() {
    return (
        <div className="flex flex-col w-full h-full mt-20">
            <div className="flex w-full items-center space-x-2">
                <FaMicrophoneAlt size={20} color="white" />
                <h2 className="text-xl font-bold tracking-tight text-white">Podcasts</h2>
            </div>
            <div className="w-full h-40 py-4 md:py-10">
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>
        </div>


    )
}

export default PodcastSlider;
