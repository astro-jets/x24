"use client"
import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'


const OPTIONS: EmblaOptionsType = { align: 'start', loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function EventsSlider() {
    return (

        <div className="w-full h-40 py-4 md:py-10">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>


    )
}

export default EventsSlider;
