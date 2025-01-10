"use client"
import { videosProps } from '@/types/video';
import { useEffect, useState } from 'react';

const channelIds = [
    'UChjZB_B5f76x3ZkrASt348Q',
    'UCXQsI92bJFx8VKTvddYTDUg',
    'UCmK_3N0XJag9UOAzxsKDAAw', // Add more channel IDs here
];

export default function AllChannelVideos() {
    const [videos, setVideos] = useState<videosProps>([]);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchVideos = async () => {
            const API_KEY = 'AIzaSyCmav_D2l3_A0V5sjU43tY4r9Xebl3Uq3o'
            const fetchPromises = channelIds.map(async (channelId) => {
                const endpoint = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet&type=video&maxResults=10`;
                const response = await fetch(endpoint);
                return await response.json();
            });

            try {
                const allVideos = await Promise.all(fetchPromises);
                console.log("Videos => ", allVideos)
                setVideos(allVideos.flatMap((data) => data.items));
            } catch (error) {
                console.error('Error fetching videos:', error);
                setError(error);
            }
        };

        fetchVideos();
    }, []);

    if (error) return <div>Error fetching videos: {error.message}</div>;
    if (!videos.length) return <div>Loading...</div>;

    return (
        <div>
            <h1>All Channel Videos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {videos.map((video, index) => (
                    <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
                        {/* YouTube Video Embed */}
                        <iframe
                            width="100%"
                            height="200"
                            src={`https://www.youtube.com/embed/${video.id.videoId}`}
                            title={video.snippet.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        {/* Video Info */}
                        <div className="p-2">
                            <h3 className="text-lg font-medium">{video.snippet.title}</h3>
                            <p className="text-sm text-gray-600">
                                Published on: {new Date(video.snippet.publishedAt).toDateString()}
                            </p>
                            <p className="text-sm text-gray-600">{video.snippet.channelTitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
