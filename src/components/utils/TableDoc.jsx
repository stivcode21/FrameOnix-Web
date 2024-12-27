import React from "react";
import { useTranslation } from "react-i18next";

const TableDoc = ({ Props, children, title, subtitle }) => {

    const { t } = useTranslation();

    return (
        <div className="rounded-lg">
            {/* Título Principal */}
            <h1 className="text-3xl uppercase font-semibold text-center text-[#2fd484] mb-10">
                {title}
            </h1>

            {/*Content Props */}
            <section>
                <h2 className="text-xl font-semibold text-[#2fd484] mb-2">{subtitle}</h2>
                <ul>
                    {Props.map((prop, index) => (
                        <li
                            key={index}
                            className="flex flex-col lg:flex-row justify-between lg:items-center border-b border-[#1cbf8b33] py-2 gap-y-2" >
                            <div className="flex justify-between w-full mb-1 lg:mb-0">
                                <div className="flex flex-col lg:w-1/2">
                                    <span className="text-gray-300 text-sm">
                                        <code className="bg-[#1cbf8b33] px-1 py-0.5 rounded text-[#fff]">{prop.key}</code>
                                    </span>
                                </div>
                                <div className="flex flex-col lg:w-1/2 text-[#1cbf8b] text-sm">{prop.type}</div>
                            </div>
                            <div className="flex flex-col lg:w-1/2 text-gray-300 text-sm">
                                {t(prop.description ?? "default_key")}
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
