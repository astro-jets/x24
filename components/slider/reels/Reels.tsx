"use client"
import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import { FaMicrophoneAlt } from 'react-icons/fa'


const OPTIONS: EmblaOptionsType = { align: 'start', loop: false }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function Reels() {
    return (

        <div className="w-full h-full py-2">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>


    )
}

export default Reels;
