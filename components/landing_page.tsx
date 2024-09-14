'use client'

import Link from 'next/link'
import Image from 'next/image'
import kokedamaPic from '/images/kokedamas.jpg'
import karatePic from '/images/karate.jpg'
import backgroundPic from '/images/ritsurin.jpg'

export function Landing_page() {
  return (
    <div
      className="relative min-h-screen flex flex-col bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundPic.src})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-white text-center px-4 pt-12 md:pt-16">
        Discover the Arts of Japan
      </h1>

      <div className="flex-grow relative">
        <Link
          href="https://www.instagram.com/greenegin.karate"
          passHref
          className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden cursor-pointer transition-transform hover:scale-105 animate-float-1 hover:shadow-lg hover:brightness-110"
          style={{ left: '10%', top: '20%' }}
          aria-label="Visit our Karate Instagram page"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={karatePic}
            alt="Karate"
            layout="fill"
            objectFit="cover"
          />
        </Link>
        <Link
          href="https://www.instagram.com/greenegin.kokedamas"
          passHref
          className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden cursor-pointer transition-transform hover:scale-105 animate-float-2 hover:shadow-lg hover:brightness-110"
          style={{ right: '15%', top: '30%' }}
          aria-label="Visit our Kokedamas Instagram page"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={kokedamaPic}
            alt="Kokedamas"
            layout="fill"
            objectFit="cover"
          />
        </Link>
      </div>
    </div>
  )
}