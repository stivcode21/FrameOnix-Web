import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Header, Install, Sidebar, Main, Intro, Usage, Contribute } from "./components";
import OnixBlogv1 from "./components/routes/OnixBlogv1";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); //contrala el boton sidebar mobile
  const [showContainer, setShowContainer] = useState(true); // Controla la visibilidad del contenedor

  useEffect(() => {
    if (window.location.pathname !== "/") {
      setShowContainer(false); // Mostrar el contenedor completo si no está en la raíz
    } else {
      setShowContainer(true); // Mostrar Main si está en la raíz
    }
  }, [])

  return (
    <Router>
      <div className="h-screen flex flex-col scroll-smooth bg-[#000] overflow-hidden relative">
        <div className="w-full h-full -z-5 absolute bg-[url(https://img.freepik.com/foto-gratis/luces-neon-degradadas-abstractas_23-2149279163.jpg?ga=GA1.1.1028302612.1733019624&semt=ais_hybrid)] bg-no-repeat bg-cover opacity-20"></div>

        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} showContainer={showContainer} />
        {/* Mostrar el contenedor solo si showContainer es false */}
        {!showContainer ? (
          <div className="md:Container flex h-full mt-[56px] z-10">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className={`p-5 flex-1 overflow-y-auto h-[92%] md:h-[93%] scroll-green`}>
              <Routes>
                <Route path="/" element={<Navigate to="/doc" />} />
                <Route path="/doc" element={<Intro />} />
                <Route path="/install" element={<Install />} />
                <Route path="/usage" element={<Usage />} />
                <Route path="/contribute" element={<Contribute />} />
                <Route path="/onixBlogV1" element={<OnixBlogv1 />} />
              </Routes>
            </div>
          </div>
        ) : (
          <Routes> {/* Ruta inicial que muestra el componente Main */}
            <Route path="/" element={<Main setShowContainer={setShowContainer} sidebarOpen={sidebarOpen} />} />
          </Routes>
        )
        }
      </div>
    </Router>
  );
};

export default App;
