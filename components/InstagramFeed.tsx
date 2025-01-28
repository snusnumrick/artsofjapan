'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface InstagramPost {
    id: string;
    media_url: string;
}

export function InstagramFeed({
                                  accessToken,
                                  accountType,
                                  className,
                                  fallbackImage
                              }: {
    accessToken: string;
    accountType: 'karate' | 'kokedamas';
    className?: string;
    fallbackImage: string;
}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [images, setImages] = useState<InstagramPost[]>([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchInstagramPosts() {
            try {
                const response = await fetch(
                    `https://graph.instagram.com/me/media?fields=id,media_url&access_token=${accessToken}`
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch Instagram posts');
                }
                const data = await response.json();
                setImages(data.data || []);
            } catch (error) {
                console.error('Error fetching Instagram posts:', error);
                setError(true);
            }
        }

        fetchInstagramPosts();
    }, [accessToken]);

    useEffect(() => {
        if (images.length > 0) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % images.length);
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [images]);

    if (error || images.length === 0) {
        return (
            <div className={className}>
                <Image
                    src={fallbackImage}
                    alt={`${accountType} fallback image`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 128px, 256px"
                    className="opacity-100"
                />
            </div>
        );
    }

    return (
        <div className={className}>
            <Image
                src={images[currentImageIndex]?.media_url || fallbackImage}
                alt={`${accountType} Instagram post`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 128px, 256px"
                className="opacity-100"
                onError={() => setError(true)}
            />
        </div>
    );
}