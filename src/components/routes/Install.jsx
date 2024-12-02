import React from 'react'

const Install = () => {
    return (
        <>
            <section>
                <h1 className="text-3xl font-bold">Instalación</h1>
                <p className="mt-4 text-gray-300">
                    Sigue estos pasos para instalar la librería:
                </p>
                <code className="block bg-gray-800 p-2 rounded mt-2">
                    npm install mi-libreria
                </code>
            </section>
        </>
    )
}

export default Install