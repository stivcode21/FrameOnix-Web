import React from 'react'
import NavLink from './Navlink';

const MenuOverlay = ({ links, onClose }) => {
    return (
        <ul className='flex flex-col py-4 items-end pr-10'>
            {links.map((link, index) => (
                <li key={index} onClick={onClose}>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
        </ul>
    );
};

export default MenuOverlay