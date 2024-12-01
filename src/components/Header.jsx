import NavLink from './utils/Navlink';
import MenuOverlay from './utils/MenuOverlay';
import { EllipsisVerticalIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from 'react';

const NavLinks = [ //matriz de enlaces para el componente NavLink
    {
        title: "contribute your layout",
        path: "#"
    },
    {
        title: "About",
        path: "#about"
    },
]

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
    const [NavbarOpen, setNavbarOpen] = useState(false);

    const handleMenuClose = () => {
        setNavbarOpen(false); // Cambia el estado para cerrar el menú
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 md:bg-transparent backdrop-blur-sm bg-opacity-50 transition-all ease-in-out duration-400 border-b border-b-[#2fd48432]
        ${NavbarOpen ? "bg-[#050505]" : "bg-transparent"}`}>
            <div className='Container flex flex-wrap items-center justify-between py-1'>
                <div className={`flex justify-center items-center`}>
                    <img src="/f.png" alt="img-logo" className='w-10 h-10' />
                    <h1 className='text-2xl pt-4 font-semibold -ml-3'>rameOni</h1>
                    <img src="/x.png" alt="img-logo" className='w-9 h-9 mt-1 ' />
                </div>
                {/* Menu de navegacion en Mobile mediante botton */}
                <div className='mobile-menu md:hidden transition-all ease-in-out duration-700 flex gap-2'>
                    {
                        // si el menu no esta abierto, que boton muestra
                        !NavbarOpen ?
                            (<button onClick={() => setNavbarOpen(true)}
                                className='flex items-center px-2 py-1 text-slate-200 transition-all ease-in-out group'>
                                <EllipsisVerticalIcon fill='#eee' className='h-6 w-6 group-hover:fill-[#2FD485]'></EllipsisVerticalIcon>
                            </button>)
                            :
                            (<button onClick={() => setNavbarOpen(false)}
                                className='flex items-center px-2 py-1 text-slate-200 transition-all ease-in-out group'>
                                <XMarkIcon fill='#eee' className='h-6 w-6 group-hover:fill-[#2FD485]'></XMarkIcon>
                            </button>)
                    }
                    {
                        !sidebarOpen ?
                            (<button onClick={() => setSidebarOpen(true)}
                                className='flex items-center px-2 py-1 border border-[#2fd48432] hover:border-[#2fd48498] transition-all ease-in-out'>
                                <Bars3Icon className='h-6 w-6'></Bars3Icon>
                            </button>) :
                            (<button onClick={() => setSidebarOpen(false)}
                                className='flex items-center px-2 py-1 border border-[#2fd48432] hover:border-[#2fd48498] transition-all ease-in-out'>
                                <XMarkIcon className='h-6 w-6'></XMarkIcon>
                            </button>)
                    }
                </div>
                {/* Menu de navegacion en desktop */}
                <div className='menu hidden md:block md:w-auto' id='navbar'>
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