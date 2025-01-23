'use client'

import Link from 'next/link'
import Image from 'next/image'
import kokedamaPic from '/images/kokedamas.jpg'
import karatePic from '/images/karate.jpg'
import backgroundPic from '/images/ritsurin.jpg'
import {Zen_Kaku_Gothic_New} from 'next/font/google'

const zenKaku = Zen_Kaku_Gothic_New({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
})

export function Landing_page() {
    return (
        <div className={`relative min-h-screen flex flex-col justify-between overflow-hidden ${zenKaku.className}`}>
            {/* Background image with muted effect */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{backgroundImage: `url(${backgroundPic.src})`}}
            />
            <div className="absolute inset-0 bg-black opacity-50"/>
            <div className="absolute inset-0 bg-white opacity-30"/>

            {/* Animated background shapes */}
            {/*<div className="absolute inset-0 overflow-hidden pointer-events-none">*/}
            {/*     Circles */}
            {/*    <div*/}
            {/*        className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-cream opacity-20 animate-float-slow"></div>*/}
            {/*    <div*/}
            {/*        className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-cream opacity-15 animate-float-slower"></div>*/}
            {/*    <div*/}
            {/*        className="absolute top-1/2 right-1/3 w-12 h-12 rounded-full bg-cream opacity-20 animate-pulse"></div>*/}

            {/*     Triangles */}
            {/*    <svg className="absolute top-1/3 left-1/3 w-20 h-20 animate-sway" viewBox="0 0 100 100">*/}
            {/*        <polygon points="50,15 100,100 0,100" fill="rgba(255,255,255,0.1)"/>*/}
            {/*    </svg>*/}
            {/*    <svg className="absolute bottom-1/4 right-1/3 w-16 h-16 animate-sway-delayed" viewBox="0 0 100 100">*/}
            {/*        <polygon points="50,0 100,100 0,100" fill="rgba(255,255,255,0.08)"/>*/}
            {/*    </svg>*/}

            {/*     Additional shapes */}
            {/*    <svg className="absolute top-1/6 left-2/3 w-16 h-16 animate-spin-slow" viewBox="0 0 100 100">*/}
            {/*        <rect x="25" y="25" width="50" height="50" fill="rgba(255,255,255,0.1)"*/}
            {/*              transform="rotate(45 50 50)"/>*/}
            {/*    </svg>*/}
            {/*    <svg className="absolute bottom-1/6 left-1/6 w-20 h-20 animate-bounce-slow" viewBox="0 0 100 100">*/}
            {/*        <circle cx="50" cy="50" r="40" fill="rgba(255,255,255,0.07)"/>*/}
            {/*    </svg>*/}
            {/*</div>*/}

            <div className={`relative z-10 text-center px-4 pt-12 md:pt-16 ${zenKaku.className}`}>
                <h1 className="text-5xl md:text-7xl font-bold text-cream tracking-wider">
                    Discover
                </h1>
                <h1 className="text-5xl md:text-7xl font-bold text-cream tracking-wider mt-4">
                    Arts of Japan
                </h1>
            </div>

            <div className="flex-grow relative z-10 w-full">
                <Link
                    href="https://www.instagram.com/greenegin.karate"
                    className="absolute w-32 h-32 md:w-64 md:h-64 rounded-full overflow-hidden cursor-pointer animate-float-complex-1"
                    style={{
                        left: '15%',
                        top: '35%',
                        animationDuration: '60s',
                        animationTimingFunction: 'ease-in-out',
                        animationIterationCount: 'infinite'
                    }}
                    aria-label="Discover Karate Lessons"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={karatePic}
                        alt="Karate"
                        fill
                        style={{objectFit: 'cover'}}
                        sizes="(max-width: 768px) 128px, 256px"
                    />
                    <div className="absolute inset-0 bg-cream/60"></div>
                </Link>
                <Link
                    href="https://www.instagram.com/greenegin.kokedamas"
                    className="absolute w-32 h-32 md:w-64 md:h-64 rounded-full overflow-hidden cursor-pointer animate-float-complex-2"
                    style={{
                        right: '20%',
                        bottom: '35%',
                        animationDuration: '70s',
                        animationTimingFunction: 'ease-in-out',
                        animationIterationCount: 'infinite'
                    }}
                    aria-label="Discover Handmade Kokedamas"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={kokedamaPic}
                        alt="Kokedamas"
                        fill
                        style={{objectFit: 'cover'}}
                        sizes="(max-width: 768px) 128px, 256px"
                    />
                    <div className="absolute inset-0 bg-cream/60"></div>
                </Link>
            </div>

            <div className={`relative z-10 text-center px-4 pb-12 md:pb-16 ${zenKaku.className}`}>
                <p className="text-cream text-lg md:text-xl opacity-80">
                    We are yet to establish our perfect web presence, meanwhile enjoy our Instagram profiles.
                </p>
            </div>
        </div>
    )
}