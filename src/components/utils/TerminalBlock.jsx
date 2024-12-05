import React, { useState } from "react";
import { ClipboardDocumentListIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";

const TerminalBlock = ({ command, title, ifExist }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(command).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Mensaje temporal
        });
    };

    return (
        <div className="w-full bg-[#0E221E] border border-[#333] text-white rounded-lg font-mono text-sm shadow-md">
            {/* Header */}
            <div className="flex justify-between items-center h-12">
                <div className="flex justify-center items-center h-8 bg-[#0E221E] w-fit border-b border-b-[#2fd484]">
                    {
                        ifExist ? (
                            <p className="w-full px-4 text-[#2fd484]">{title}</p>
                        ) : (
                            <div className="px-4 h-8 flex justify-center items-center gap-x-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                        )
                    }
                </div>
                <div className="flex items-center justify-end h-8 w-full rounded-tl-md bg-[#042522] border border-[#55555590]">
                    {/* Botón de copiar */}
                    <button
                        onClick={handleCopy}
                        className="w-8 h-8 text-white p-1 text-xs rounded transition-all mr-1 md:mr-4">
                        {copied ? <ClipboardDocumentCheckIcon className='fill-[#2fd484]' /> : <ClipboardDocumentListIcon className='fill-[#aaa] hover:fill-[#2fd484]' />}
                    </button>
                </div>
            </div>

            {/* Contenido del comando */}
            <pre className="overflow-x-auto whitespace-pre-wrap p-4">
                <code>{command}</code>
            </pre>

        </div>
    );
};

export default TerminalBlock;
