import React from 'react'
import HeroImage from '../assets/Hero.webp'

const Music = () => {
  return (
    <>
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

      <section className="w-full bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            About KORASHE
          </h2>
          <p className="text-gray-700 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
    </>
  )
}

export default Music
