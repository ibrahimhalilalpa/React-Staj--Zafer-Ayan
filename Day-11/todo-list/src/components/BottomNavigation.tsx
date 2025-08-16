import { LayoutGrid, Plus, SquareCheckBig, Timer, User } from "lucide-react";
import React from "react";

const BottomNavigation = () => {
    return (
        <div className="fixed bottom-0 w-full bg-white shadow-lg flex justify-around items-center py-4">
            {/* Sol ikonlar */}
            <button>
                <LayoutGrid className="text-slate-300 hover:text-blue-900 transition cursor-pointer" />
            </button>
            <button>
                <Timer className="text-slate-300 hover:text-blue-900 transition cursor-pointer" />
            </button>

            {/* Ortadaki yuvarlak buton */}
            <div className="relative -top-1">
                <button className="bg-blue-900 rounded-full p-4 hover:bg-blue-900 cursor-pointer ">
                    <Plus color="white" />
                </button>
            </div>

            {/* Sağ ikonlar */}
            <button>
                <SquareCheckBig className="text-slate-300 hover:text-blue-900 transition cursor-pointer" />
            </button>
            <button>
                <User className="text-slate-300 hover:text-blue-900 transition cursor-pointer" />
            </button>
        </div>
    );
};

export default BottomNavigation;
