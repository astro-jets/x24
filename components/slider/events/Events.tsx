"use client"
import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import { FaTheaterMasks } from 'react-icons/fa'


const OPTIONS: EmblaOptionsType = { align: 'start', loop: false }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function EventsSlider() {
    return (
        <div className="flex flex-col w-full h-full ">
            <div className="flex w-full items-center space-x-2 px-4">
                <FaTheaterMasks size={20} className='fill-black dark:fill-white' />
                <h2 className="text-xl font-thin tracking-tight text-black dark:text-white">Events</h2>
            </div>
            <div className="w-full h-40 py-4 md:py-10">
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>
        </div>


    )
}

export default EventsSlider;
