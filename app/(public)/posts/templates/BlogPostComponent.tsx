import { BiSolidComment } from "react-icons/bi";
import { BsFire } from "react-icons/bs";
import { FaCommentAlt, FaFire } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

interface BlogPostProps {
    title: string;
    excerpt: string;
    imageUrl?: string; // Optional image URL
    // Add any other blog post related properties here
}

const GlasmorphicBlogPost: React.FC<BlogPostProps> = ({ title, excerpt, imageUrl }) => {
    return (
        <div className="post">
            <div className="blogpost flex flex-col">
                {/* Avatar Section */}
                <div className="flex items-center py-1 space-x-2">
                    <div className="border border-red-500 rounded-full w-10 h-10 overflow-hidden flex items-center justify-center">
                        <img src="/images/clothes/bb.jpg" className="w-full h-full object-cover" alt="" />
                    </div>
                    <h1 className="text-white text-xl font-thin"> Astro Jets</h1>
                </div>
                <article className="glasmorphic-post h-full">
                    <div className="text-white flex flex-col w-full pb-4 items-center justify-center">
                        {imageUrl &&
                            <div className="h-60 overflow-hidden w-full p-0.5">
                                <img src={imageUrl} alt={title} className="image rounded-3xl w-full h-full object-cover" />
                            </div>
                        }
                        <div className="p-3">
                            <p className="text" >{excerpt}</p>
                        </div>
                        <div className="flex justify-between items-center w-3/6 h-14 overflow-hidden">
                            <div className="icon flex flex-col items-center">
                                <div className="rounded-2xl backdrop-blur-lg p-2 hover:bg-[#ff0000af] md:bg-white/40">
                                    <BsFire size={20} color="white" />
                                </div>
                                <p className="text-xs">5945</p>
                            </div>
                            <div className="icon flex flex-col items-center">
                                <div className="rounded-2xl backdrop-blur-lg p-2 md:bg-white/40">
                                    <FaCommentAlt size={20} color="white" />
                                </div>
                                <p className="text-xs">3410</p>
                            </div>
                            <div className="icon  flex flex-col items-center">
                                <div className="rounded-2xl backdrop-blur-lg p-2 md:bg-white/40">
                                    <IoMdShare size={20} color="white" />
                                </div>
                                <p className="text-xs">5945</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default GlasmorphicBlogPost;
