import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpenIcon } from "@heroicons/react/24/solid";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const location = useLocation(); // Obtiene la ruta actual
    const [activeSection, setActiveSection] = useState(location.pathname); // Inicializa el estado con la ruta actual

    const sections = [
        { id: "/", name: "Presentación" },
        { id: "examples", name: "Ejemplos" },
        { id: "install", name: "Instalación" },
    ];

    useEffect(() => {
        setActiveSection(location.pathname); // Actualiza el estado cuando cambia la ruta
    }, [location.pathname]); // Solo se ejecuta cuando cambia la ruta

    const handleMenu = (id) => {
        setSidebarOpen(false); // Cambia el estado para cerrar el menú
        setActiveSection(id); // Actualiza la sección activa
    };

    return (
        <>
            <aside className={`pt-2 py-2  overflow-y-auto h-full scroll-green duration-400 z-50  transition-all ease-in-out
            ${sidebarOpen
                    ? 'fixed w-[65%] top-15 left-0 z-50 px-5 bg-[#0E1711] bg-opacity-[97%] h-full opacity-100 visible translate-x-0'
                    : "hidden md:w-64 md:block opacity-0 invisible md:opacity-100 md:visible"}`}>
                <div className="flex justify-start items-center mt-5 mb-8 gap-x-1">
                    <BookOpenIcon fill="#2fd484" className="w-9 h-9" />
                    <h2 className="text-xl font-bold">Documentation</h2>
                </div>
                <nav>
                    <h3 className="font-semibold pb-3 text-md">Getting Started</h3>
                    <ul className="flex text-[15px] flex-col gap-y-1 border-l border-l-[#222]">
                        {sections.map((section) => (
                            <li key={section.id}
                                onClick={() => handleMenu(section.id)}
                                className={`cursor-pointer w-fit px-4 mr-4 hover:border-l transition-all ease-in-out 
                                     ${location.pathname === (section.id === "/" ? section.id : `/${section.id}`)
                                        ? "text-[#2fd484] border-l border-l-[#2fd484] hover:text-[#2fd484]" // Color verde si está activo
                                        : "text-[#aaa] border-l-[#666] hover:border-l-[#fff] hover:text-[#fff]"}`}>
                                <Link to={section.id === "/" ? "/" : `/${section.id}`} className="block w-full h-full">{section.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
