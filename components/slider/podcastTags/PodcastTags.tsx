"use client"
import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'


const OPTIONS: EmblaOptionsType = { align: 'start', loop: false }
const SLIDE_COUNT = 7
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function PodcastTags() {
    return (

        <div className="w-full h-full">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>


    )
}

export default PodcastTags;
