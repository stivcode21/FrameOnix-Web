import React from "react";
import { useTranslation } from 'react-i18next';

const Main = ({ setShowContainer }) => {
    const handleClick = () => {
        setShowContainer(false); // Muestra el contenedor principal
    };

    const { t } = useTranslation();

    return (
        <div className={`Container flex flex-col gap-y-4 justify-center items-center h-full bg-[url(/bg-main.png)] bg-cover bg-center bg-no-repeat`}>
            <h1 className="text-center text-3xl md:text-5xl font-extrabold md:leading-[53px] tracking-wide uppercase">
                {t('main.title')}
            </h1>
            <div className="flex flex-col gap-y-4 items-center justify-center text-sm md:w-[85%] xl:w-[60%]">
                <h3 className="text-center text-[16px] text-slate-400">{t('main.subtitle1')}</h3>
                <div className="flex flex-col bg-[#0c1c19] border border-[#333] shadow-md p-4  rounded-lg font-mono ">
                    <div className="flex w-full gap-x-2">
                        <span className="text-[#2fd484]">{`<OnixBlogv1/>`}</span>
                        <p>{t('main.subtitle2')}</p>
                    </div>
                    <div className="flex w-full gap-x-2">
                        <span className="text-[#2fd484]">{`<OnixPortfoliov1/>`}</span>
                        <p>{t('main.subtitle3')}</p>
                    </div>
                </div>
                <button
                    onClick={handleClick}
                    className="px-6 py-2 z-20 rounded-lg  bg-[#2fd48432] hover:bg-[#2fd4847e] text-white border border-[#2fd484] transition-all ease-in-out shadow-xl">
                    {t('main.btn')}
                </button>
            </div>
        </div>
    );
};

export default Main;
