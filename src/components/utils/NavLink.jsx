import { ArrowUpRightIcon } from "@heroicons/react/24/solid"
import { useTranslation } from 'react-i18next';

const NavLink = ({ href, title }) => {  // pasamos 2 parametros para href y el titulo
    const { t } = useTranslation();

    return (
        <div className="group">
            <a href={href} className='text-[#ccc] text-md hover:text-white flex items-center gap-1'>{t(`header.${title}`)}
                <span> <ArrowUpRightIcon fill='#ccc' className="h-5 w-5 group-hover:fill-[#2FD485] group-hover:-translate-y-0.5" /></span>
            </a>
        </div>
    )
}

export default NavLink