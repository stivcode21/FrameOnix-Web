import React, { useState } from "react";
import { Examples, Header, Install, Presentation, Sidebar, Main } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showContainer, setShowContainer] = useState(false); // Controla la visibilidad del contenedor

  return (
    <Router>
      <div className="h-screen flex flex-col scroll-smooth bg-[#050505] overflow-hidden relative">
        <div className="w-full h-full -z-5 absolute bg-[url(https://img.freepik.com/foto-gratis/luces-neon-degradadas-abstractas_23-2149279163.jpg?ga=GA1.1.1028302612.1733019624&semt=ais_hybrid)] bg-no-repeat bg-cover opacity-20"></div>
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} showContainer={showContainer} />

        {/* Mostrar el contenedor solo si showContainer es true */}
        {showContainer && (
          <div className="md:Container flex h-full mt-[56px] z-10">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className={`flex-1 px-5 py-2 overflow-y-auto h-full scroll-green
               ${sidebarOpen ? "block" : "md:block"}`}>
              <Routes>
                <Route path="/" element={<Presentation />} />
                <Route path="/examples" element={<Examples />} />
                <Route path="/install" element={<Install />} />
              </Routes>
            </div>
          </div>
        )}

        {/* Ruta inicial que muestra el componente Main */}
        <Routes>
          <Route path="/" element={<Main setShowContainer={setShowContainer} sidebarOpen={sidebarOpen} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
