import { channelDetailsProps, videosProps } from "@/types/video";
import React, { useEffect, useState } from "react";

const SingleChannelVideos = ({ channelId }: { channelId: string }) => {
    const [channelInfo, setChannelInfo] = useState<channelDetailsProps>();
    const [videos, setVideos] = useState<videosProps>([]);
    const [loading, setLoading] = useState(true);

    const API_KEY = process.env.NEXT_PUBLIC_YT_API; // Replace with your actual environment variable key

    useEffect(() => {
        const fetchChannelData = async () => {
            try {
                // Fetch channel details
                const channelEndpoint = `https://www.googleapis.com/youtube/v3/channels?key=${API_KEY}&id=${channelId}&part=snippet`;
                const channelResponse = await fetch(channelEndpoint);
                const channelData = await channelResponse.json();

                if (channelData.items && channelData.items.length > 0) {
                    setChannelInfo(channelData.items[0].snippet);
                }

                // Fetch channel videos
                const videosEndpoint = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet&type=video&maxResults=5`;
                const videosResponse = await fetch(videosEndpoint);
                const videosData = await videosResponse.json();

                // Fetch video statistics for each video
                if (videosData.items) {
                    const videoIds = videosData.items.map((video: { id: { videoId: any; }; }) => video.id.videoId).join(",");
                    const statsEndpoint = `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoIds}&part=statistics,snippet`;
                    const statsResponse = await fetch(statsEndpoint);
                    const statsData = await statsResponse.json();

                    // Combine snippet and statistics data
                    setVideos(statsData.items);
                }
            } catch (error) {
                console.error("Error fetching channel data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchChannelData();
    }, [channelId, API_KEY]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-black text-white min-h-screen p-4">
            {channelInfo && (
                <div className="flex flex-col items-center mb-8">
                    <img
                        src={channelInfo.snippet.thumbnails.high.url}
                        alt={channelInfo.snippet.title}
                        className="w-24 h-24 rounded-full"
                    />
                    <h1 className="text-xl font-bold mt-4">{channelInfo.snippet.title}</h1>
                    <p className="text-gray-400">{channelInfo.snippet.description}</p>
                </div>
            )}

            <div>
                <h2 className="text-lg font-semibold mb-4">Videos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {videos.map((video) => (
                        <div
                            key={video.id as unknown as string}
                            className="bg-gray-900 p-4 rounded-lg shadow-lg"
                        >
                            <iframe
                                width="100%"
                                height="180"
                                src={`https://www.youtube.com/embed/${video.id}`}
                                title={video.snippet.title}
                                frameBorder="0"
                                allowFullScreen
                            />
                            <h3 className="mt-2 text-sm font-semibold line-clamp-2">
                                {video.snippet.title}
                            </h3>
                            <p className="text-xs text-gray-400">
                                Views: {parseInt((channelInfo as channelDetailsProps).statistics.viewCount).toLocaleString()}
                            </p>
                            <p className="text-xs text-gray-400">
                                Published on:{" "}
                                {new Date(video.snippet.publishedAt).toLocaleDateString()}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default function ChannelPage() {
    // Example channel ID
    const channelId = "UChjZB_B5f76x3ZkrASt348Q";
    return <SingleChannelVideos channelId={channelId} />;
}
