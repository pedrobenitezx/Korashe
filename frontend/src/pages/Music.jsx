import React from 'react'
import HeroImage from '../assets/Hero.webp'

const Music = () => {
  return (
    <section className="relative w-full h-[50rem] flex items-center justify-center">
      <div className="absolute z-1">
        <img src={HeroImage} alt="Hero" className="w-full h-full object-cover" />
      </div>
      <div className="absolute z-0">
        <h1 className="text-white font-bold text-4xl md:text-6xl lg:text-8xl">
          KORASHE
        </h1>
      </div>
    </section>
  )
}

export default Music
