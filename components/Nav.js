import React from 'react';
import request from '@/utils/requests';
import { useRouter } from "next/router";

const Nav = () => {
    const router = useRouter();
    return (
        <nav className='relative '>
            <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
                {Object.entries(request).map(([key, { title, url }]) => {
                    return (
                        <h2
                            key={key}
                            onClick={() => router.push(`/?genre=${key}`)}
                            className='cursor-pointer transition duration-100 hover:scale-125 hover:text-white last:pr-24'>
                            {title}
                        </h2>
                    )
                })}
            </div>
        </nav>
    )
}

export default Nav