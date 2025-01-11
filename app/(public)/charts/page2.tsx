import React from "react";

export default function MusicCharts() {
    return (
        <div className="bg-black text-white min-h-screen">
            {/* Header Section */}
            <header className="py-6 px-4 border-b border-gray-700">
                <h1 className="text-3xl font-bold">Music Charts</h1>
                <p className="text-gray-400 mt-1">Explore trending songs, albums, and artists</p>
            </header>


            {/* Charts Section */}
            <div className="space-y-10 px-4 py-8">
                {/* Chart 1: Trending Songs */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Trending Now</h2>
                    <div className="space-y-4">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div
                                key={index}
                                className="flex items-center bg-gray-800 p-4 rounded-lg hover:bg-gray-700"
                            >
                                {/* Album Art */}
                                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                    <img
                                        src={`https://via.placeholder.com/64?text=Album`}
                                        alt="Album Art"
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                {/* Song Info */}
                                <div className="ml-4 flex-1">
                                    <h3 className="text-lg font-medium">Song Title {index + 1}</h3>
                                    <p className="text-gray-400 text-sm">Artist Name</p>
                                </div>

                                {/* Duration */}
                                <p className="text-gray-400 text-sm">3:45</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chart 2: Top Albums */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Top Albums</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 text-center"
                            >
                                {/* Album Cover */}
                                <div className="w-full h-40 rounded-lg overflow-hidden">
                                    <img
                                        src={`https://via.placeholder.com/150?text=Album`}
                                        alt="Album Art"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <h3 className="text-lg font-medium mt-2">Album {index + 1}</h3>
                                <p className="text-gray-400 text-sm">Artist Name</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chart 3: Popular Artists */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Popular Artists</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 text-center"
                            >
                                {/* Artist Image */}
                                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
                                    <img
                                        src={`https://via.placeholder.com/64?text=Artist`}
                                        alt="Artist"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <h3 className="text-lg font-medium mt-2">Artist {index + 1}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
