import React from 'react'
import { InboxArrowDownIcon, ClockIcon } from '@heroicons/react/24/solid'

const Footer = () => {
    return (
        <>
            <div className="mt-36 py-2 text-sm flex flex-col text-gray-400 gap-y-2">
                <div className='flex justify-between items-center' >
                    <ul className="flex gap-4">
                        <li>
                            <a
                                href="mailto:stivcode.com"
                                className="hover:text-white text-[#777] transition-colors flex gap-x-1 items-center" >
                                <InboxArrowDownIcon fill='#2FD48588' className='w-5 h-5' />
                                Contact
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/stivcode21/FrameOnix/commits/main/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white text-[#777] transition-colors flex gap-x-1 items-center" >
                                <ClockIcon fill='#2FD48588' className='w-5 h-5' />
                                View Changelog
                            </a>

                        </li>
                    </ul>
                    <p className="flex justify-end items-center gap-x-1 text-xs text-[#777] no-select">
                        Created by <span className="text-[#2fd484] text-sm">StivCode</span>
                    </p>
                </div>

                <div className='flex justify-between items-center no-select'>
                    <p className="text-[#777] text-xs ">
                        Current Version: <span className="text-[#2fd484] text-sm">v1.0.0</span>
                    </p>
                    <p className="text-xs text-[#777] no-select">
                        Open Source - Licensed under the{" "}
                        <span
                            className="text-[#2fd484]" >
                            MIT License
                        </span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer