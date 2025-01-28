'use client'

import Link from 'next/link'
import { InstagramFeed } from './InstagramFeed'
import backgroundPic from '/images/ritsurin.jpg'
import karatePic from '/images/karate.jpg'
import kokedamasPic from '/images/kokedamas.jpg'
import {Zen_Kaku_Gothic_New} from 'next/font/google'

const zenKaku = Zen_Kaku_Gothic_New({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
})

export function Landing_page() {
    // You'll need to replace these with your actual Instagram access tokens
    const KARATE_ACCESS_TOKEN = process.env.NEXT_PUBLIC_INSTAGRAM_KARATE_TOKEN || '';
    const KOKEDAMAS_ACCESS_TOKEN = process.env.NEXT_PUBLIC_INSTAGRAM_KOKEDAMAS_TOKEN || '';

    return (
        <div className={`relative min-h-screen flex flex-col justify-between overflow-hidden ${zenKaku.className}`}>
            {/* Background image with muted effect */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{backgroundImage: `url(${backgroundPic.src})`}}
            />
            <div className="absolute inset-0 bg-black opacity-40"/>

             <div className={`relative z-10 text-center px-4 pt-12 md:pt-16 ${zenKaku.className}`}>
                <h1 className="text-5xl md:text-7xl font-bold text-cream tracking-wider">
                    Discover
                </h1>
                <h1 className="text-5xl md:text-7xl font-bold text-cream tracking-wider mt-4">
                    Arts of Japan
                </h1>
            </div>

            {/* Animated Instagram Feeds */}
            <div className="absolute inset-0 z-10">
                <Link
                    href="https://www.instagram.com/greenegin.karate"
                    className="absolute w-24 h-24 md:w-48 md:h-48 rounded-full overflow-hidden cursor-pointer animate-float-complex-1"
                    style={{
                        left: '10%',
                        top: '30%',
                        animationDuration: '60s',
                        animationTimingFunction: 'ease-in-out',
                        animationIterationCount: 'infinite'
                    }}
                    aria-label="Discover Karate Lessons"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <InstagramFeed
                        accessToken={KARATE_ACCESS_TOKEN}
                        accountType="karate"
                        className="w-full h-full"
                        fallbackImage={karatePic.src}
                    />
                    {/*<div className="absolute inset-0 bg-cream/60"></div>*/}
                </Link>

                <Link
                    href="https://www.instagram.com/greenegin.kokedamas"
                    className="absolute w-32 h-32 md:w-64 md:h-64 rounded-full overflow-hidden cursor-pointer animate-float-complex-2"
                    style={{
                        right: '10%',
                        bottom: '30%',
                        animationDuration: '70s',
                        animationTimingFunction: 'ease-in-out',
                        animationIterationCount: 'infinite'
                    }}
                    aria-label="Discover Handmade Kokedamas"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <InstagramFeed
                        accessToken={KOKEDAMAS_ACCESS_TOKEN}
                        accountType="kokedamas"
                        className="w-full h-full"
                        fallbackImage={kokedamasPic.src}
                    />
                    {/*<div className="absolute inset-0 bg-cream/60"></div>*/}
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