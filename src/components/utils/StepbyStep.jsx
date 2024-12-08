import React from 'react'
import { ChevronDoubleDownIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

const StepbyStep = ({ number, title, text1, text2, span1, span2, ifExist, v2, children }) => {
    return (
        <>
            <div className='relative pl-4 w-full'>
                <div className={`flex flex-col border-l h-full border-[#2fd48432] pb-8 xl:pb-0 ${v2 ? 'border-l-2 gap-y-1 border-[#2fd484] justify-center font-semibold' : 'gap-y-6'}`}>
                    <div className='flex gap-x-8 items-center pl-10'>
                        <div className={`absolute left-0 top-0 border-2 border-[#2fd484] px-2.5 py-1 font-bold rounded-md bg-[#0e4229] text-sm w-fit h-fit shadow-md
                            ${v2 && "hidden"}`}>
                            {number}
                        </div>
                        <h2 className={`font-medium mt-1 ${v2 && 'text-lg text-[#2fd484]'}`}>{title}</h2>
                    </div>
                    <p className={`ml-10  text-sm leading-6 text-slate-300 ${v2 ? 'font-normal' : 'font-thin'}`}>
                        {text1}
                        <span className={`font-medium`}>{span1}</span>
                        {text2}
                        <span className={`font-medium`}>{span2}</span>
                    </p>
                    <div className='ml-10 font-normal text-sm'>
                        {children}
                    </div>

                    <div className={`lg:w-4 lg:h-4 absolute -bottom-2 left-2
                       ${v2 && "hidden"}`}>
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