import { useEffect, useState } from "react";

const DynamicIndex = ({ sections }) => {
    const [activeSection, setActiveSection] = useState(""); // Guarda sección activa.

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id); // Actualiza sección visible.
                    }
                });
            },
            { threshold: 0.6 } // Define visibilidad mínima.
        );

        // Observa cada sección.
        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element); // Activa observador.
        });

        return () => {
            // Limpia observadores.
            sections.forEach(({ id }) => {
                const element = document.getElementById(id);
                if (element) observer.unobserve(element); // Detiene observador.
            });
        };
    }, [sections]);

    return (
        <aside className=""> {/* Índice lateral dinámico */}
            <h2 className="mb-8 px-2 text-sm text-[#2fd484]">
                EN ESTA PAGINA
            </h2>
            <ul className="flex flex-col gap-y-4 text-sm">
                {sections.map(({ id, title }) => (
                    <li key={id} className={activeSection === id ? "bg-[#2fd48411] px-2 py-1 rounded-l-xl" : "bg-transparent px-2 py-1"}>
                        {/* Resalta sección activa */}
                        <span className={activeSection === id ? "text-[#2fd484]" : "text-white"}>{title}</span> {/* Enlace a sección */}
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default DynamicIndex;
