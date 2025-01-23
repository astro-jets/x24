"use client"

import { channelDetailsProps } from '@/types/video';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const channelIds = [
    'UChjZB_B5f76x3ZkrASt348Q',
    'UCnPt6wUx9nmVcFWkV8fBUEg',
    'UC7BXdXFxVgMPKmBeDgx2QrQ',
];

export default function AllChannelVideos() {
    const [channels, setChannels] = useState<channelDetailsProps[]>([]);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        // This data fetching logic should be moved to the express server
        const fetchChannels = async () => {
            const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
            const fetchPromises = channelIds.map(async (channelId) => {
                const endpoint = `https://www.googleapis.com/youtube/v3/channels?key=${API_KEY}&id=${channelId}&part=snippet`;
                const response = await fetch(endpoint);
                return await response.json();
            });

            try {
                const allChannels = await Promise.all(fetchPromises);
                console.log("Channels => ", allChannels)
                setChannels(allChannels.flatMap((data) => data.items));
            } catch (error) {
                console.error('Error fetching channels:', error);
                setError(error);
            }
        };

        fetchChannels();
    }, []);

    if (error) return <div>Error fetching channels: {error.message}</div>;
    if (!channels.length) return <div>Loading...</div>;

    return (
        <div>
            <h1>All Channel Videos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {channels.map((channel, index) => (
                    <Link href={`/podcasts/${channel.id}`} key={index} className="border h-70 border-gray-300 rounded-lg overflow-hidden">
                        {/* YouTube Video Embed */}
                        <Image height={'350'} width={'350'} src={`${channel.snippet.thumbnails.high.url}`} className='h-60 w-full object-cover' alt='Podcast Avatar' />
                        {/* Video Info */}
                        <div className="p-2">
                            <h3 className="text-lg font-medium">{channel.snippet.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
