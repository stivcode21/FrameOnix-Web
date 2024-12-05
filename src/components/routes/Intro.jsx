import React from 'react'
import TerminalBlock from '../utils/TerminalBlock'

const Presentation = () => {
    return (
        <>
            <section className='h-screen w-full'>
                <h1 className='text-[#2fd484] text-sm mb-4'>
                    introduccion
                </h1>
                <h1 className="text-3xl font-bold">Bienvenido a Mi Librería</h1>
                <div className='flex flex-col md:flex-row w-full gap-8'>
                    <div className='w-full'>
                        <p className="mt-4 text-gray-300">
                            Aquí encontrarás componentes base para tus diseños web.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Presentation