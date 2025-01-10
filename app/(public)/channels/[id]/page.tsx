'use client'
import { videosProps } from '@/types/video';
import React, { useEffect, useState } from 'react';

const YouTubeVideos = () => {
    const [videos, setVideos] = useState<videosProps>([]);

    useEffect(() => {
        async function fetchVideos() {
            const CHANNEL_ID = 'UChjZB_B5f76x3ZkrASt348Q';
            const endpoint = `https://www.googleapis.com/youtube/v3/search?key=${'AIzaSyCmav_D2l3_A0V5sjU43tY4r9Xebl3Uq3o'}&channelId=${CHANNEL_ID}&part=snippet&type=video&maxResults=5`;

            try {
                const response = await fetch(endpoint);
                const data = await response.json();
                console.log("Data => ", data)
                setVideos(data.items);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        }

        fetchVideos();
    }, []);

    return (
        <div>
            <h1>Latest Videos</h1>
            <div>
                {videos.map((video) => (
                    <div key={video.id.videoId}>
                        <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
                        <h3>{video.snippet.title}</h3>
                        <p>{new Date(video.snippet.publishedAt).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YouTubeVideos;
