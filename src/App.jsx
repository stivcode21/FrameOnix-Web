import React, { useState } from "react";
import { Header, MainContent, Sidebar } from "./components";


const App = () => {
  const [activeSection, setActiveSection] = useState("presentacion");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="h-screen flex flex-col scroll-smooth bg-[#050505] overflow-hidden relative">
        <div className="w-full h-full -z-5 absolute bg-[url(https://img.freepik.com/foto-gratis/luces-neon-degradadas-abstractas_23-2149279163.jpg?ga=GA1.1.1028302612.1733019624&semt=ais_hybrid)] bg-no-repeat bg-cover opacity-20"></div>
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="md:Container flex h-full mt-[56px] z-10">
          <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <MainContent activeSection={activeSection} sidebarOpen={sidebarOpen} />
        </div>
      </div>
    </>
  );
};

export default App;
