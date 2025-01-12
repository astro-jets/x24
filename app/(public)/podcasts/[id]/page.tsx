
import Loader from "@/components/loader/Loader";
import Head from "next/head"; // Import Head for SEO
import ChannelComponent from "@/components/channels/ChannelComponent";

export default async function YouTubeChannel() {

    const coverImage = "/images/podcasts/mcast.jpg"; // Replace with actual cover image URL
    const podcastName = "Podcast Malawi"; // Dynamic podcast name
    const description = "Discover the best Malawian podcasts, featuring interviews, stories, and insights from the region.";
    const pageUrl = "https://xstudio.vercel.app/podcasts/pocast_malawi";
    const CHANNEL_ID = "UChjZB_B5f76x3ZkrASt348Q";
    const endpoint = `https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video&maxResults=5&order=date`;
    const response = await fetch(endpoint);
    const data = await response.json();
    const videos = data.items;

    return (
        <>
            <Head>
                <title>{podcastName} | Studio X</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={podcastName} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={coverImage} />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={podcastName} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={coverImage} />
            </Head>

            <Loader />
            <ChannelComponent podcastName={podcastName} coverImage={coverImage} videos={videos} />

        </>
    );
}
