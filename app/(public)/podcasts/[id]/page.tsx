
import Loader from "@/components/loader/Loader";
import Head from "next/head"; // Import Head for SEO
import ChannelComponent from "./channelComponent";

export default function YouTubeChannel() {

    const coverImage = "/images/podcasts/mcast.jpg"; // Replace with actual cover image URL
    const podcastName = "Podcast Malawi"; // Dynamic podcast name
    const description = "Discover the best Malawian podcasts, featuring interviews, stories, and insights from the region.";
    const pageUrl = "https://xstudio.vercel.app/podcasts/pocast_malawi"; // Replace with actual page URL

    return (
        <>
            <Head>
                {/* Primary SEO Meta Tags */}
                <title>{podcastName} | Studio X</title>
                <meta name="description" content={description} />

                {/* Open Graph / Facebook Meta Tags */}
                <meta property="og:title" content={podcastName} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={coverImage} />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:type" content="website" />
                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={podcastName} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={coverImage} />
            </Head>

            <Loader />
            <ChannelComponent />

        </>
    );
}
