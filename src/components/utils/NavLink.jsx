import { ArrowUpRightIcon } from "@heroicons/react/24/solid"

const NavLink = ({ href, title }) => {  // pasamos 2 parametros para href y el titulo
    return (
        <div className="group">
            <a href={href} className='text-gray-200 hover:text-white flex items-center gap-1'>{title}
                <span> <ArrowUpRightIcon fill='#eee' className="h-5 w-5 group-hover:fill-[#2FD485] group-hover:-translate-y-0.5" /></span>
            </a>
        </div>
    )
}

export default NavLink