import NavLink from './utils/Navlink';
import MenuOverlay from './utils/MenuOverlay';
import { EllipsisVerticalIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from 'react';

const NavLinks = [ //matriz de enlaces para el componente NavLink
    {
        title: "Contribute",
        path: "#"
    },
    {
        title: "Contribute",
        path: "#about"
    },
]

const Navbar = ({ sidebarOpen, setSidebarOpen, showContainer }) => {
    const [NavbarOpen, setNavbarOpen] = useState(false);

    const handleMenuClose = () => {
        setNavbarOpen(false); // Cambia el estado para cerrar el menú
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 md:bg-transparent backdrop-blur-sm bg-opacity-80 transition-all ease-in-out duration-400 border-b border-b-[#2fd48432]
        ${NavbarOpen ? "bg-[#0E1711]" : "bg-transparent"}`}>
            <div className='Container flex flex-wrap items-center justify-between py-1'>
                <div className={`flex justify-center items-center`}>
                    <img src="/f.png" alt="img-logo" className='w-10 h-10' />
                    <h1 className='text-2xl pt-4 font-semibold -ml-3'>rameOni</h1>
                    <img src="/x.png" alt="img-logo" className='w-9 h-9 mt-1 ' />
                </div>

                {/* botones de navegacion en Mobile*/}
                <div className='mobile-menu md:hidden transition-all ease-in-out duration-700 flex gap-2'>
                    {
                        // boton Navbar
                        !NavbarOpen ?
                            (<button onClick={() => setNavbarOpen(true)}
                                className='flex items-center px-1 py-1 text-slate-200 transition-all ease-in-out group'>
                                <EllipsisVerticalIcon fill='#eee' className='h-7 w-7 group-hover:fill-[#2FD485]'></EllipsisVerticalIcon>
                            </button>)
                            :
                            (<button onClick={() => setNavbarOpen(false)}
                                className='flex items-center px-1 py-1 text-slate-200 transition-all ease-in-out group'>
                                <XMarkIcon fill='#eee' className='h-7 w-7 group-hover:fill-[#2FD485]'></XMarkIcon>
                            </button>)
                    }
                    {// boton sidebar

                        !sidebarOpen ?
                            (<button onClick={() => setSidebarOpen(true)}
                                className={`flex items-center px-2 py-1 border border-[#2fd48432] hover:border-[#2fd48498] transition-all ease-in-out
                                   ${showContainer ? "block" : "hidden"}`}>
                                <Bars3Icon className='h-6 w-6'></Bars3Icon>
                            </button>) :
                            (<button onClick={() => setSidebarOpen(false)}
                                className={`flex items-center px-2 py-1 border border-[#2fd48432] hover:border-[#2fd48498] transition-all ease-in-out
                                ${showContainer ? "block" : "hidden"}`}>
                                <XMarkIcon className='h-6 w-6'></XMarkIcon>
                            </button>)
                    }
                </div>
                {/* Menu de navegacion en desktop */}
                <div className='menu hidden md:flex md:w-auto' id='navbar'>
                    <ul className='flex md:flex-row md:space-x-2 mt-0'>
                        {
                            // Recorre el array NavLinks. 
                            NavLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                    <div className='w-7 h-7' >
                        <svg role="img" viewBox="0 0 24 24" fill='#eee' xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                    </div>
                </div>
            </div>
            {/* MenuOverlay mobile */}
            <div className={`transition-all ease-in-out duration-600 ${setNavbarOpen ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 invisible translate-y-30'}`}>
                {NavbarOpen ? <MenuOverlay links={NavLinks} onClose={handleMenuClose} /> : null}
            </div>
        </nav>
    )
}

export default Navbar