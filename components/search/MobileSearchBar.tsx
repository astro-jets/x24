"use client"
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
const MobileSearchBar = () => {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className="w-[30%] flex space-x-3 h-10 items-center">
            <BsSearch size={20} color="white" onClick={() => { setShowSearch(!showSearch) }} />
            {showSearch &&
                <input
                    type="text"
                    placeholder="search"
                    className="w-full bg-transparent outline-none text-white px-3 py-3border-b-red-500 border-b-[1px] border-b-red-500 border-0 placeholder:text-gray-700"
                />
            }

        </div>
    );
}

export default MobileSearchBar;