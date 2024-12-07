import Image from "next/image";
import { BsBell, BsFire } from "react-icons/bs";
import Loader from "@/components/loader/Loader";

export default function YouTubeChannel() {
    const videos = [
        {
            thumbnail: '/images/x3.jpg', // Replace with actual thumbnail URLs
            title: 'Episode 139 | Janta Reflects on Music, Warge...',
            views: '16K views',
            date: '4 days ago',
            duration: '2:01:04',
        },
        {
            thumbnail: '/images/x1.jpg',
            title: "HIT 'O' MISS EP58 | Nyokase Madise on...",
            views: '15K views',
            date: '8 days ago',
            duration: '1:33:10',
        },
        {
            thumbnail: '/images/x2.jpg',
            title: 'Episode 138 | Lomwe on Beef with Tay Grin...',
            views: '12K views',
            date: '11 days ago',
            duration: '1:37:21',
        },
    ];
    const coverImage = '/images/mcast.jpg'; // Replace with actual cover image URL
    const profileImage = '/images/mcast.jpg'; // Replace with actual profile image URL
    const tags = ['Home', 'Videos', 'Reels', 'Community'];
    return (
        <>
            <Loader />
            <div className="bg-[#111] text-white min-h-screen">
                {/* Header  */}
                <div className="sticky top-0 bg-[#222] flex items-center px-4 py-3 min-20 shadow-md">
                    <h1 className="text-lg font-semibold">PODCAST MALAWI</h1>
                    <div className="ml-auto flex items-center space-x-4">
                        <button className="text-gray-400 hover:text-white">
                            <BsFire color="white" size={20} />
                        </button>
                        <button className="text-gray-400 hover:text-white">
                            <BsBell color="white" size={20} />
                        </button>
                    </div>
                </div>
                {/* Top Cover Section */}
                <div className="relative h-80">
                    <Image
                        src={coverImage}
                        alt="Cover Image"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-75"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
                            <Image
                                src={profileImage}
                                alt="Profile Image"
                                width={128}
                                height={128}
                                className="object-cover"
                            />
                        </div>
                        <h1 className="text-2xl font-bold mt-4">PODCAST MALAWI</h1>

                    </div>
                </div>
                {/* Content */}
                <main className="px-4 py-6 space-y-6">

                    <div className="flex gap-2 mt-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-gray-800 text-white text-sm px-3 py-1 rounded-2xl border border-gray-600"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    {/* Reels Grid */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Reels</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {/* Video Card */}
                            <div className="bg-[#333] rounded-lg overflow-hidden">
                                <div className="relative h-40">
                                    {/* Thumbnail Image */}
                                    <Image
                                        src="/images/abale.jpg" // Replace with your thumbnail image
                                        alt="Video Thumbnail"
                                        layout="fill"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-2">
                                    <h3 className="text-sm font-medium">
                                        Episode 139 | Krazie G Reflects on Music...
                                    </h3>
                                    <p className="text-xs text-gray-400">16k views • 4 days ago</p>
                                </div>
                            </div>

                            {/* Add more video cards */}
                            <div className="bg-[#333] rounded-lg overflow-hidden">
                                <div className="relative h-40">
                                    <Image
                                        src="/images/x4.jpg" // Replace with your thumbnail image
                                        alt="Video Thumbnail"
                                        layout="fill"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-2">
                                    <h3 className="text-sm font-medium">
                                        Episode 135 | MultiChoice Panel...
                                    </h3>
                                    <p className="text-xs text-gray-400">7.1k views • 1 week ago</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" text-white p-4">
                        <h2 className="text-xl font-bold mb-4">Videos</h2>
                        <div className="space-y-7">
                            {videos.map((video, index) => (
                                <div key={index} className="flex gap-4 items-start bg-[#222] rounded-2xl p-1">
                                    <div className="relative w-40 h-24">
                                        <Image
                                            src={video.thumbnail}
                                            alt={video.title}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-lg"
                                        />
                                        <span className="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white text-xs px-1 py-0.5 rounded">
                                            {video.duration}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-semibold line-clamp-2">{video.title}</h3>
                                        <p className="text-xs text-gray-400">
                                            {video.views} • {video.date}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
