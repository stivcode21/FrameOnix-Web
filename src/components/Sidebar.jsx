import React from "react";

const Sidebar = ({ activeSection, setActiveSection, sidebarOpen, setSidebarOpen }) => {
    const sections = [
        { id: "presentacion", name: "Presentación" },
        { id: "ejemplos", name: "Ejemplos" },
        { id: "instalacion", name: "Instalación" },
        { id: "documentacion", name: "Documentación" },
        { id: "documentacion", name: "Documentación" },
        { id: "documentacion", name: "Documentación" },
        { id: "documentacion", name: "Documentación" },
        { id: "documentacion", name: "Documentación" },
        { id: "documentacion", name: "Documentación" },
        { id: "documentacion", name: "Documentación" },
        { id: "documentacion", name: "Documentación" },
        { id: "documentacion", name: "Documentación" },
        { id: "documentacion", name: "Documentación" },
        { id: "documentacion", name: "Documentación" },
        { id: "documentacion", name: "Documentación" },
        { id: "documentacion", name: "Documentación" },
        { id: "documentacion", name: "Documentación" },
        { id: "documentacion", name: "Documentación" },
        { id: "documentacion", name: "Documentación" },
        { id: "documentacion", name: "Documentación" },
        { id: "documentacion", name: "Documentación" },
        { id: "documentacion", name: "Documentación" },
        { id: "documentacion", name: "Documentación" },

    ];

    const handleMenu = (sectionId) => {
        setSidebarOpen(false); // Cambia el estado para cerrar el menú
        setActiveSection(sectionId);
    };

    return (
        <>
            <aside className={`pt-2 py-2 overflow-y-auto scroll-green ${sidebarOpen ? "w-full" : "hidden md:w-64 md:block"}`}>
                <h2 className="text-2xl font-bold mb-2 Container md:w-full">Mi Librería</h2>
                <nav className="Container md:w-full">
                    <ul>
                        {sections.map((section) => (
                            <li
                                key={section.id}
                                onClick={() => handleMenu(section.id)}
                                className={`cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-700 transition-all ease-out 
                                    ${activeSection === section.id ? "bg-[#2fd484bb]" : ""}`}>
                                {section.name}
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
