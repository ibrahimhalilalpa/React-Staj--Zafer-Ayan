import { Search } from "lucide-react";

const SearchBar = () => {
    return (
        <div className="px-4 py-2 bg-[#e6effd]">
            <div className="flex bg-white rounded-full border border-gray-200 px-4 py-1 pr-1">
                <input
                    className="flex-1 px-1 outline-0"
                    placeholder="Search any Coffee"
                />
                <button className="rounded-full p-2 bg-[#1c61e7]">
                    <Search color="white" />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;