"use client"
import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'


const OPTIONS: EmblaOptionsType = { align: 'start', loop: true }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function ArtistsSlider() {
    return (

        <div className="w-full py-4">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>


    )
}

export default ArtistsSlider;
