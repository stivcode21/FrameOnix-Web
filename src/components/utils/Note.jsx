import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Note = ({ Nspan1, Ntext1, Ntext2, Ntext3, Nspan2 }) => {
    return (
        <>
            <div className='relative'>
                <div className='absolute w-6 h-6 -top-2 left-2'>
                    <ExclamationTriangleIcon className='fill-[#2fd484]' />
                </div>
                <p className='font-normal text-sm text-white leading-6 mt-4 bg-black rounded-lg bg-opacity-40 shadow-lg p-4 border border-[#2fd48433]'>
                    {Ntext1}
                    <span className={`font-bold text-[#2fd484]`}>{Nspan1}</span>
                    {Ntext2}
                    <span className={`font-bold text-[#2fd484]`}>{Nspan2}</span>
                    {Ntext3}
                </p>
            </div>
        </>
    )
}

export default Note