import React from 'react'

const Note = ({ nota, Ntext1, Ntext2, Nspan1 }) => {
    return (
        <>
            <p className='font-normal text-sm text-white leading-6 mt-4 bg-black rounded-lg bg-opacity-40 shadow-lg p-4 border border-[#2fd48433]'>
                <span className={`font-bold text-[#2fd484]`}>{nota}</span>
                {Ntext1}
                <span className={`font-bold text-[#2fd484]`}>{Nspan1}</span>
                {Ntext2}
            </p>
        </>
    )
}

export default Note