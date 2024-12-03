import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { sections } from "./data";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState(location.pathname);



    useEffect(() => {
        setActiveSection(location.pathname);
    }, [location.pathname]);

    const handleMenu = (id) => {
        setSidebarOpen(false);
        setActiveSection(id);
    };

    return (
        <aside className={`pt-2 py-2 overflow-y-auto h-[91.98%] md:h-[93%] scroll-green duration-400 transition-all ease-in-out ${sidebarOpen
            ? "fixed w-[65%] top-15 left-0 z-50 px-5 bg-[#0E1711] bg-opacity-[97%] h-full opacity-100 visible translate-x-0"
            : "hidden  opacity-0 invisible md:w-64 md:block md:opacity-100 md:visible"
            }`} >
            <div className="flex justify-start items-center mt-5 mb-8 gap-x-1">
                <BookOpenIcon fill="#2fd484" className="w-9 h-9" />
                <h2 className="text-xl font-bold">Documentation</h2>
            </div>
            <nav>
                {sections.map((section, index) => (
                    <div key={index} className="mb-6">
                        <h3 className="font-semibold pb-3 text-md">{section.title}</h3>
                        {section.routes && (
                            <ul className="flex text-[15px] flex-col gap-y-1 border-l border-l-[#222]">
                                {section.routes.map((route) => (
                                    <li
                                        key={route.id}
                                        onClick={() => handleMenu(route.id)}
                                        className={`cursor-pointer w-fit px-4 mr-4 hover:border-l transition-all ease-in-out 
                                            ${location.pathname === (route.id === "/" ? route.id : `/${route.id}`)
                                                ? "text-[#2fd484] border-l border-l-[#2fd484] hover:text-[#2fd484]"
                                                : "text-[#aaa] border-l-[#666] hover:border-l-[#fff] hover:text-[#fff]"
                                            }`}>
                                        <Link to={route.id === "/" ? "/" : `/${route.id}`}
                                            className="block w-full h-full">
                                            {route.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {section.subSections &&
                            section.subSections.map((subSection, index) => (
                                <div key={index} className="mb-4 border-l border-l-[#333]">
                                    <h4 className="font-medium text-sm pb-2 pl-2">{subSection.title}</h4>
                                    <ul className="flex text-[14px] flex-col gap-y-1">
                                        {subSection.routes.map((route) => (
                                            <li
                                                key={route.id}
                                                onClick={() => handleMenu(route.id)}
                                                className={`cursor-pointer w-fit px-4 hover:border-l transition-all ease-in-out 
                                                    ${location.pathname === `/${route.id}`
                                                        ? "text-[#2fd484] border-l border-l-[#2fd484] hover:text-[#2fd484]"
                                                        : "text-[#aaa] border-l-[#666] hover:border-l-[#fff] hover:text-[#fff]"
                                                    }`}>
                                                <Link to={`/${route.id}`} className="block w-full h-full">
                                                    {route.name}
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
