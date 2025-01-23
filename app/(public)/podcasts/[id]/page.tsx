
import Loader from "@/components/loader/Loader";
import Head from "next/head"; // Import Head for SEO
import ChannelComponent from "@/components/channels/ChannelComponent";
import { channelDetailsProps, videosProps } from "@/types/video";
import { fetchPodcastVideos } from "@/services/videos";

export default async function YouTubeChannel({ params }: { params: { id: string } }) {
    const { id: channelId } = params;

    const coverImage = "/images/podcasts/mcast.jpg"; // Replace with actual cover image URL
    const podcastName = "Podcast Malawi"; // Dynamic podcast name
    const endpoint = `https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet&type=video&maxResults=5&order=date`;
    const response = await fetchPodcastVideos(endpoint)
    const videos: videosProps = response?.items;

    const fetchChannelDetails = async (channelId: string) => {
        try {
            const endpoint = `https://www.googleapis.com/youtube/v3/channels?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&id=${channelId}&part=snippet`;
            const response = await fetch(endpoint);

            if (!response.ok) {
                throw new Error(`Failed to fetch channel details: ${response.statusText}`);
            }

            const data = await response.json();
            return data?.items?.[0]; // Return the first channel details object
        } catch (error) {
            console.error("Error fetching channel details:", error);
            return null;
        }
    };

    const channelDetails: channelDetailsProps = await fetchChannelDetails(channelId);

    return (
        <>
            <Loader />
            <ChannelComponent channelId={channelId} podcastName={channelDetails.snippet.title} coverImage={channelDetails.snippet.thumbnails.high.url} videos={videos} />

        </>
    );
}
