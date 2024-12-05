import React from 'react'
import ReactMarkdown from 'react-markdown';
import TerminalBlock from '../utils/TerminalBlock';

const Install = () => {

    const markdown = `
  # Título
  - Lista
  - En Markdown
  **Texto en negrita**
  `;
    return (
        <>
            <section className='flex flex-col'>
                <h1 className='text-[#2fd484] text-sm mb-4'>
                    instalacion
                </h1>
                <h2 className='text-[27px] md:text-4xl font-bold'>Comience a utilizar FrameOnix</h2>
                <p className='mb-4 md:w-10/12 text-slate-300'>
                    Frameonix te ofrece layouts completamente personalizables en React. Funciona importando componentes predefinidos que mantienen una estructura sólida y adaptativa, permitiéndote modificar estilos y contenido con Props o clases Tailwind sin complicaciones.

                    Es intuitivo, adaptable y eficiente, diseñado para desarrolladores que buscan construir sitios web increíbles con facilidad y rapidez.
                </p>
                <div className='flex'>
                    <TerminalBlock
                        ifExist
                        title={"Terminal"}
                        command={`<div className="flex items-center space-x-2 pb-2">
</div>`} />
                </div>
            </section>
        </>
    )
}

export default Install