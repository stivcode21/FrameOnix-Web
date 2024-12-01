import React from "react";

const MainContent = ({ activeSection, sidebarOpen }) => {
    return (
        <div className={`flex-1 px-5 py-2 overflow-y-auto h-screen scroll-green 
        ${sidebarOpen ? "hidden" : "md:block"}`}>
            {activeSection === "presentacion" && (
                <section>
                    <h1 className="text-3xl font-bold">Bienvenido a Mi Librería</h1>
                    <p className="mt-4 text-gray-300">
                        Aquí encontrarás componentes base para tus diseños web.
                    </p>
                    <h1 className="text-3xl font-bold">Bienvenido a Mi Librería</h1>
                    <p className="mt-4 text-gray-300">
                        Aquí encontrarás componentes base para tus diseños web.
                    </p>
                    <h1 className="text-3xl font-bold">Bienvenido a Mi Librería</h1>
                    <p className="mt-4 text-gray-300">
                        Aquí encontrarás componentes base para tus diseños web.
                    </p>
                    <h1 className="text-3xl font-bold">Bienvenido a Mi Librería</h1>
                    <p className="mt-4 text-gray-300">
                        Aquí encontrarás componentes base para tus diseños web.
                    </p>
                    <h1 className="text-3xl font-bold">Bienvenido a Mi Librería</h1>
                    <p className="mt-4 text-gray-300">
                        Aquí encontrarás componentes base para tus diseños web.
                    </p>
                    <h1 className="text-3xl font-bold">Bienvenido a Mi Librería</h1>
                    <p className="mt-4 text-gray-300">
                        Aquí encontrarás componentes base para tus diseños web.
                    </p>
                    <h1 className="text-3xl font-bold">Bienvenido a Mi Librería</h1>
                    <p className="mt-4 text-gray-300">
                        Aquí encontrarás componentes base para tus diseños web.
                    </p>
                    <h1 className="text-3xl font-bold">Bienvenido a Mi Librería</h1>
                    <p className="mt-4 text-gray-300">
                        Aquí encontrarás componentes base para tus diseños web.
                    </p>
                    <h1 className="text-3xl font-bold">Bienvenido a Mi Librería</h1>
                    <p className="mt-4 text-gray-300">
                        Aquí encontrarás componentes base para tus diseños web.
                    </p>
                    <h1 className="text-3xl font-bold">Bienvenido a Mi Librería</h1>
                    <p className="mt-4 text-gray-300">
                        Aquí encontrarás componentes base para tus diseños web.
                    </p>
                    <h1 className="text-3xl font-bold">Bienvenido a Mi Librería</h1>
                    <p className="mt-4 text-gray-300">
                        Aquí encontrarás componentes base para tus diseños web.
                    </p>
                    <h1 className="text-3xl font-bold">Bienvenido a Mi Librería</h1>
                    <p className="mt-4 text-gray-300">
                        Aquí encontrarás componentes base para tus diseños web.
                    </p>

                </section>
            )}
            {activeSection === "ejemplos" && (
                <section>
                    <h1 className="text-3xl font-bold">Ejemplos</h1>
                    <p className="mt-4 text-gray-300">Explora ejemplos prácticos de uso.</p>
                </section>
            )}
            {activeSection === "instalacion" && (
                <section>
                    <h1 className="text-3xl font-bold">Instalación</h1>
                    <p className="mt-4 text-gray-300">
                        Sigue estos pasos para instalar la librería:
                    </p>
                    <code className="block bg-gray-800 p-2 rounded mt-2">
                        npm install mi-libreria
                    </code>
                </section>
            )}
            {activeSection === "documentacion" && (
                <section>
                    <h1 className="text-3xl font-bold">Documentación</h1>
                    <p className="mt-4 text-gray-300">
                        Encuentra información detallada de cada componente.
                    </p>
                </section>
            )}
        </div>
    );
};

export default MainContent;
