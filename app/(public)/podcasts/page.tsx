import Loader from "@/components/loader/Loader";
import { channelDetailsProps } from "@/types/video";
import Image from "next/image";
import Link from "next/link";
import { BsCalendar } from "react-icons/bs";
import { FaMicrophoneAlt, FaTheaterMasks } from "react-icons/fa";


const Podcasts = async () => {
    const channelIds = [
        'UCv36EOUNAx2_l_5lmunaWNA',
        'UChjZB_B5f76x3ZkrASt348Q',
        'UCS_65yasWSBMLr5hPco3GxQ',
        'UCnPt6wUx9nmVcFWkV8fBUEg',
        'UC7BXdXFxVgMPKmBeDgx2QrQ',
        'UC1qC9CHrHw-m_xH73gRS0mw',
        'UCQ2bTOhnT-fttJV7PYXMFcA',
    ];

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
            return (allChannels.flatMap((data) => data.items));
        } catch (error) {
            console.error('Error fetching channels:', error);
            // setError(error);
        }
    }

    const channels = await fetchChannels();

    return (
        <>
            <Loader />
            <div className="w-full h-full bg-no-repeat bg-cover bg-[url('/images/x.jpg')] md:mt-0 p-0">
                <div className="w-full h-full backdrop-blur-lg bg-white/40 dark:bg-[#0f0f0f94] ">
                    <div className="h-full w-full mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <div className="flex w-full items-center space-x-2">
                            <FaMicrophoneAlt size={30} color="white" />
                            <h2 className="text-2xl font-bold tracking-tight text-white">Podcasts</h2>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {(channels as channelDetailsProps[]).map((channel, index) => (

                                <Link href={`/podcasts/${channel.id}`} key={index} className="group relative backdrop-blur-lg dark:bg-[#0f0f0f5b] bg-white/40 rounded-2xl p-2">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl  lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <Image height={'350'} width={'350'} src={`${channel.snippet.thumbnails.high.url}`} className="h-full w-full object-cover object-center lg:h-full lg:w-full" alt='Podcast Avatar' />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-white">
                                                {channel.snippet.title}

                                            </h3>
                                        </div>

                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Podcasts;