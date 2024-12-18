import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { useTranslation } from 'react-i18next';
import { sections } from "../data/dataSidebar";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const location = useLocation(); // Obtiene (ruta activa).
    const [activeSection, setActiveSection] = useState(location.pathname); //almacena la sección activa según la ruta.

    const { t } = useTranslation(); // uso de textos i18next.

    useEffect(() => {
        setActiveSection(location.pathname); // Actualiza la sección activa cuando cambia la ruta.
    }, [location.pathname]);

    const handleMenu = (id) => {
        setSidebarOpen(false); // Cierra la barra lateral.
        setActiveSection(id); // Establece la sección seleccionada como activa.
    };

    return (
        <aside className={`pt-2 py-2 pb-16 md:pb-4 overflow-y-auto h-full md:h-[93%] scroll-green duration-400 transition-all ease-in-out border-r border-r-[#2fd48432] ${sidebarOpen
            ? "fixed w-[65%] top-15 left-0 z-50 px-5 bg-[#0E1711] bg-opacity-[97%] h-full opacity-100 visible translate-x-0"
            : "hidden  opacity-0 invisible md:w-50 lg:w-60 md:block md:opacity-100 md:visible"
            }`} >
            <div className="flex justify-start items-center mt-5 mb-8 gap-x-1">
                <BookOpenIcon fill="#2fd484" className="w-8 h-8" />
                <h2 className="text-xl font-semibold">{t('sidebar.Title')}</h2>
            </div>
            <nav>
                {sections.map((section, index) => (
                    <div key={index} className="mb-6">
                        <h3 className="font-semibold pb-3 text-md">{t(`sidebar.${section.title}`)}</h3>
                        {/* recorre solo la section que tenga routes */}
                        {section.routes && (
                            <ul className="flex text-[15px] flex-col gap-y-1 border-l border-l-[#222]">
                                {section.routes.map((route) => (
                                    <li
                                        key={route.id} // Identificador único para cada ruta
                                        onClick={() => handleMenu(route.id)} // Marca la ruta activa y cierra el menú
                                        className={`cursor-pointer w-fit px-4 mr-4 hover:border-l transition-all ease-in-out 
                                        ${location.pathname === (route.id === "/doc" ? route.id : `/${route.id}`)
                                                ? "text-[#2fd484] border-l border-l-[#2fd484] hover:text-[#2fd484]" // Estilo activo
                                                : "text-[#aaa] border-l-[#666] hover:border-l-[#fff] hover:text-[#fff]" // Estilo inactivo
                                            }`}>
                                        <Link
                                            to={route.id === "/" ? "/" : `/${route.id}`} // Navegación a la ruta
                                            className="block w-full h-full">
                                            {t(`sidebar.${route.name}`)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {/* recorre solo la section que tenga subsections */}
                        {section.subSections &&
                            section.subSections.map((subSection, index) => (
                                <div key={index} className="mb-4 border-l border-l-[#333]">
                                    <h4 className="font-medium text-sm pb-2 pl-2">{t(`sidebar.${subSection.title}`)}</h4>
                                    <ul className="flex text-[14px] flex-col gap-y-1">
                                        {subSection.routes.map((route) => ( // Itera sobre las rutas de la sub-sección
                                            <li
                                                key={route.id} // Identificador único para cada ruta
                                                onClick={() => handleMenu(route.id)} // Marca la ruta activa y cierra el menú
                                                className={`cursor-pointer w-fit px-4 hover:border-l transition-all ease-in-out 
                                                ${location.pathname === `/${route.id}`
                                                        ? "text-[#2fd484] border-l border-l-[#2fd484] hover:text-[#2fd484]" // Estilo activo
                                                        : "text-[#aaa] border-l-[#666] hover:border-l-[#fff] hover:text-[#fff]" // Estilo inactivo
                                                    }`}>
                                                <Link to={`/${route.id}`} className="block w-full h-full">
                                                    {t(`sidebar.${route.name}`)}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                    </div>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
