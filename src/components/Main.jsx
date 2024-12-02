import React from "react";

const Main = ({ setShowContainer, sidebarOpen }) => {
    const handleClick = () => {
        setShowContainer(true); // Muestra el contenedor principal
    };

    return (
        <div className={`flex justify-center items-center h-full ${sidebarOpen ? "z-0" : "block"}`}>
            <button
                onClick={handleClick}
                className="px-6 py-2 z-20 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
            >
                Ver Contenedor
            </button>
        </div>
    );
};

export default Main;
