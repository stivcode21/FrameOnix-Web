import React from 'react'
import { ChevronDoubleDownIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

const StepbyStep = ({ number, title, text1, span1, span2, text2, ifExist }) => {
    return (
        <>
            <div className='relative pl-4 w-full'>
                <div className='flex flex-col gap-y-6 border-l h-full pb-8 border-[#2fd48432]'>
                    <div className='flex gap-x-8 items-center pl-10'>
                        <div className='absolute left-0 top-0 border-2 border-[#2fd484] px-2.5 py-1 font-bold rounded-md bg-[#0e4229] text-sm w-fit h-fit shadow-md'>
                            {number}
                        </div>
                        <h2 className='font-medium mt-1'>{title}</h2>
                    </div>
                    <p className='ml-10 font-thin text-sm text-slate-300 leading-6'>
                        {text1}
                        <span className={`font-medium`}>{span1}</span>
                        {text2}
                        <span className={`font-medium`}>{span2}</span>
                    </p>
                    <div className={`lg:w-4 lg:h-4 absolute -bottom-2 left-2`}>
                        {ifExist ?
                            <CheckCircleIcon fill='#2fd484aa' /> :
                            <ChevronDoubleDownIcon fill='#2fd48466' />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default StepbyStep