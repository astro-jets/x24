"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const Search = () => {
    const [search, setSearch] = useState("")
    const router = useRouter();

    const searchSong = (e: any) => {
        e.preventDefault()
        if (search.trim() !== '') {
            setSearch("")
            router.push(`/search/${search}`);
        }

    }
    return (
        <div className="search-bar md:hidden">
            <form>
                <input
                    type="text"
                    placeholder="search"
                    name="search"
                    className="search"
                    id="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <button type="submit" className="btn off" onClick={searchSong}>
                    <BsSearch color='black' size={20} />
                </button>

            </form>
        </div>
    );
}

export default Search;