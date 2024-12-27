import React from 'react'
import { useTranslation } from 'react-i18next';
import TerminalBlock from '../utils/TerminalBlock.jsx';
import StepbyStep from '../utils/StepbyStep.jsx';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import Note from '../utils/Note.jsx';
import Footer from '../Footer';

const Examples = () => {

    const { t } = useTranslation();

    return (
        <>
            <section className='flex flex-col'>
                <h1 className='text-[#2fd484] text-sm mb-6'>
                    {t('sidebar.N-usage')}
                </h1>
                <h2 className='text-[27px] md:text-4xl font-bold mb-2'>{t('usage.title')}</h2>
                <p className='mb-14 lg:w-[75%] text-slate-100'>
                    {t('usage.T-p1')}
                </p>
                {/* contenedor uso general */}
                <div className='flex flex-col gap-y-20'>
                    <div className='flex w-full flex-col xl:flex-row gap-x-6'>
                        <StepbyStep
                            title={t('usage.Step-1_title')}
                            text1={t('usage.Step-1_p1')}
                            v2={true}
                        />
                        <TerminalBlock
                            command={`import { OnixBlogv1 } from "@stivcode/frameonix";

function App() {
  return (
    <OnixBlogv1 />
  );
}`} />
                    </div>

                    {/* contenedor info */}
                    <div className="Container flex flex-col gap-y-4 justify-center items-center my-10 px-6 py-10 bg-gradient-to-r  relative rounded-lg shadow-lg border border-[#555]">

                        <h2 className="text-center text-2xl lg:text-3xl font-extrabold uppercase text-slate-100 tracking-wide">
                            {t('usage.import1_title')}
                        </h2>
                        <div className="w-16 h-1 bg-[#2fd484] rounded-full"></div>
                        <p className="text-center lg:w-8/12 text-slate-300 leading-relaxed">
                            {t('usage.import1_p1')}
                        </p>
                        <p className='text-center lg:w-8/12 text-slate-300 leading-relaxed'>
                            {t('usage.import1_p2')} <span className='text-[#2fd484] font-semibold'>{` ${t('usage.import1_span1')} `}</span>{t('usage.import1_p3')}
                            <span className='text-[#2fd484] font-semibold'>{` 4 Props `}</span>{t('usage.import1_p4')}
                        </p>
                        <ul class="flex justify-evenly w-full">
                            <li>id</li>
                            <li><p>styles: <span className='text-[#2fd484] font-semibold'>{'{ }'}</span></p></li>
                            <li><p>content: <span className='text-[#2fd484] font-semibold'>{'{ }'}</span></p></li>
                            <li><p>children: <span className='text-[#2fd484] font-semibold'>{'( )'}</span> </p></li>
                        </ul>
                    </div>

                    {/* contenedor id */}
                    <div className='flex w-full flex-col xl:flex-row gap-x-6'>
                        <StepbyStep
                            title={'ID'}
                            text1={t('usage.Step-2_p1')}
                            v2={true}
                            children={(
                                <Note
                                    Ntext1={t('usage.Nota1')} />
                            )}
                        />
                        <TerminalBlock
                            command={`import { OnixBlogv1 } from "@stivcode/frameonix";

function App() {
    return (
        <OnixBlogv1
            mainProps={{
                id: "main"
            }}
        />
    )
}
`} />
                    </div>

                    {/* contenedor styles */}
                    <div className='flex w-full flex-col xl:flex-row gap-x-6'>
                        <StepbyStep
                            title={'STYLES'}
                            text1={t('usage.Step-3-p1')}
                            v2={true}
                            children={(
                                <div>
                                    <h2 className='text-lg font-semibold mt-4'>{t('usage.Step-3-subT')}</h2>
                                    <p className='text-sm text-slate-300 leading-6'>
                                        {t('usage.Step-3-p2')}
                                    </p>
                                </div>
                            )}
                        />
                        <TerminalBlock title={'App.jsx'} command={`function App() {

  return (
    <OnixBlogv1
      mainProps={{
        id: "main",
        styles: {
          main: "bg-gray-300",
          h2: "text-xl bold",
          button: "rounded-md",
        }
      }} />
  )
}
`} />
                    </div>

                    {/* contenedor content */}
                    <div className='flex w-full flex-col xl:flex-row gap-x-6'>
                        <StepbyStep
                            title={'CONTENT'}
                            text1={t('usage.Step-4-p1')}
                            children={(
                                <div>
                                    <h2 className='text-lg font-medium mt-4'>{t('usage.Step-4-subT')}</h2>
                                    <p className='text-sm text-slate-300 leading-6'>
                                        {t('usage.Step-4-p2')}
                                    </p>
                                </div>
                            )}
                            v2={true}
                        />
                        <TerminalBlock title={'App.jsx'} command={`return (
  <OnixBlogv1
    mainProps={{
      id: "main",
      content: {
        heading: "Descubre historias increíbles", 
        description: "Artículos que inspiran y educan.", 
        image: "https://example.com/blog-image.jpg", 
        buttonText: "Leer más",
      },
    }}
  />
);
`} />
                    </div>

                    {/* contenedor importante */}
                    <div className='lg:w-1/2 mx-auto relative'>
                        <div className='absolute w-6 h-6 top-2 left-2'>
                            <ExclamationTriangleIcon className='fill-[#2fd484]' />
                        </div>
                        <Note
                            Ntext1={t('usage.nota-2')} />
                    </div>

                    {/* contenedor children */}
                    <div className='flex w-full flex-col xl:flex-row gap-x-6'>
                        <StepbyStep
                            title={'CHILDREN'}
                            text1={t('usage.Step-5-p1')}
                            children={(
                                <div>
                                    <h2 className='text-lg font-semibold mt-4'>{t('usage.Step-5-subT')}</h2>
                                    <p className='text-sm text-slate-300 leading-6'>
                                        {t('usage.Step-5-p2')}
                                        <span className='font-medium text-[#2fd484]'>{` ( styles, content ) `}</span>
                                        {t('usage.Step-5-p3')}
                                    </p>
                                </div>
                            )}
                            v2={true}
                        />
                        <TerminalBlock title={'App.jsx'} command={`return (
  <OnixBlogv1
    mainProps={{
      children: (
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">Bienvenido</h1>
          <p className="text-gray-600">contenido</p>
          <button className="p-4 rounded">Leer más</button>
        </div>
      ),
    }}
  />
);
`} />
                    </div>

                    <div>
                        <p className='text-center lg:w-8/12 font-medium leading-relaxed mx-auto'>
                            {t('usage.text-footer')}
                        </p>
                    </div>

                </div>
                <Footer />
            </section>
        </>
    )
}

export default Examples