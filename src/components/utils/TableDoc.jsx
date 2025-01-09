import React from "react";
import { useTranslation } from "react-i18next";

const TableDoc = ({ Props, children, title, subtitle }) => {

    const { t } = useTranslation();

    return (
        <div className="rounded-lg">
            {/* Título Principal */}
            <h1 className="text-3xl uppercase font-extrabold text-center text-[#2fd484] mb-10">
                {title}
            </h1>

            {/*Content Props */}
            <section>
                <h2 className="text-xl font-semibold text-[#2fd484] mb-2">{subtitle}</h2>
                <ul>
                    {Props.map((prop, index) => (
                        <li key={index}
                            className="w-full flex flex-col border-b border-[#1cbf8b33] py-4 gap-y-2" >
                            <div className="w-full flex justify-between lg:mb-0">
                                <div className="flex flex-col">
                                    <span className="text-gray-300 text-sm">
                                        <code className="bg-[#1cbf8b33] px-1 py-0.5 rounded text-[#fff]">{prop.key}</code>
                                    </span>
                                </div>
                                <div className="flex flex-col text-[#1cbf8b] text-sm font-semibold">{prop.type}</div>
                            </div>
                            <div className="flex flex-col lg:w-2/3 text-gray-300 text-[1rem] mb-1">
                                <p><span className="font-semibold text-[#1cbf8b]">{t('onixBlogv1._subtitle1')} </span>{t(prop?.description)}</p>
                            </div>
                            <div className="flex flex-col text-gray-300 text-xs pl-6 mt-1">
                                <p><span className="font-semibold text-[#1cbf8b]">{t('onixBlogv1._subtitle2')} </span><code className="bg-[#0C1C19] px-1 rounded py-1 text-[#fff] border border-[#333] leading-7">{t(prop?.example)}</code></p>
                            </div>
                        </li>
                    ))}
                </ul>
                {/* Área para Children */}
                <div className={`mt-6 mb-20`}>{children}</div>
            </section>
        </div >
    );
};

export default TableDoc;
