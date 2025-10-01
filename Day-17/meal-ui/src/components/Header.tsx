import { Bell } from 'lucide-react'
import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4'>
            <img src="https://i.pravatar.cc/400?img=26" alt="profile-img" className='w-12 h-12 rounded-xl border-4 border-white' />
            <div className='relative'>
                <Bell />
                <div className='absolute top-0 right-0 w-3 h-3 rounded-full bg-yellow-400' />
            </div>
        </div>
    )
}

export default Header