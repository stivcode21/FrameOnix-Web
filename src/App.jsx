import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Install, Sidebar, Main, Footer, Intro, Usage, Contribute } from "./components";
import i18n from "../public/i18n/i18n";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); //contrala el boton sidebar mobile
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
            <div className={`p-5 flex-1 overflow-y-auto h-[92%] md:h-[93%] scroll-green`}>
              <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/install" element={<Install />} />
                <Route path="/usage" element={<Usage />} />
                <Route path="/contribute" element={<Contribute />} />
              </Routes>

              <Footer />
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
