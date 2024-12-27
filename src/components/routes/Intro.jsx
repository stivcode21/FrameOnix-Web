import React from 'react'
import Footer from '../Footer'
import { useTranslation } from 'react-i18next';
import DynamicIndex from '../utils/DynamicIndex.jsx';

const Presentation = () => {

    const sections = [
        { id: 'overview', title: 'Overview' },
        { id: 'que-es', title: 'Que es FrameOnix' },
        { id: 'elegir', title: 'Porque elegir FrameOnix' },
        { id: 'para-quien', title: 'Para quien es FrameOnix' },
        { id: 'que-encontraras', title: 'descripcion documentacion' },
        { id: 'opensource', title: 'open source' }
    ];

    const { t } = useTranslation();

    return (
        <>
            <section className='h-full w-full'>
                {/* flex container */}
                <div className='flex gap-x-10'>
                    <div className='flex-1'>
                        <h1 id='overview' className='text-[#2fd484] text-sm'>
                            {t('sidebar.N-introduction')}
                        </h1>
                        {/* logo */}
                        <div className="w-full flex justify-center items-center gap-x-5 text-2xl font-semibold my-14">
                            <div className={`no-select`}>
                                <img src="/frameonix.png" alt="img-logo" className='Container w-7/12' />
                            </div>
                        </div>
                        <div>
                            <p className="mb-16 text-slate-100 text-lg">
                                {t('intro.T-p1')}<br /><br />
                                {t('intro.T-p2')}
                            </p>
                        </div>
                        {/* flex content */}
                        <div className='flex flex-col w-full gap-y-24 text-lg'>
                            {/* que es frameonix */}
                            <div>
                                <h2 className='text-2xl lg:text-3xl font-semibold mb-2'>
                                    {t('intro.subtitle1')}
                                </h2>
                                <p id='que-es' className=" text-slate-100">
                                    {t('intro.S-p1')}<br /><br />

                                    {t('intro.S-p2')}<br /><br />

                                    {t('intro.S-p3')}
                                </p>
                            </div>
                            {/* porque elegir frameonix */}
                            <div id='elegir' className='flex flex-col justify-center'>
                                <h2 className='text-2xl lg:text-3xl font-semibold mb-4 text-center'>
                                    {t('intro.subtitle2')}
                                </h2>
                                <p className='mb-6'>
                                    {t('intro.S2-p1')}
                                </p>
                                <ul className='list-disc marker:text-[#2fd484] ml-5 lg:w-[70%] flex flex-col gap-4 text-slate-200'>
                                    <li><span className='text-[#2fd484]'>{`${t('intro.2li-title1')} `}</span>{t('intro.2li-p1')}</li>
                                    <li><span className='text-[#2fd484]'>{`${t('intro.2li-title2')} `}</span>{t('intro.2li-p2')}</li>
                                    <li><span className='text-[#2fd484]'>{`${t('intro.2li-title3')} `}</span>{t('intro.2li-p3')}</li>
                                    <li><span className='text-[#2fd484]'>{`${t('intro.2li-title4')} `}</span>{t('intro.2li-p4')}</li>
                                </ul>
                            </div>
                            {/* para quien es frameonix */}
                            <div className='flex flex-col justify-center'>
                                <h2 className='text-2xl lg:text-3xl font-semibold mb-6 text-center'>
                                    {t('intro.subtitle3')}
                                </h2>
                                <p id='para-quien' className='mb-2'>
                                    {t('intro.S3-p1')}
                                </p>
                                <ul className='list-disc marker:text-[#2fd484] ml-5 lg:w-[70%] flex flex-col gap-4 text-slate-200'>
                                    <li><span className='text-[#2fd484]'>{`${t('intro.3li-title1')} `}</span>{t('intro.3li-p1')}</li>
                                    <li><span className='text-[#2fd484]'>{`${t('intro.3li-title2')} `}</span>{t('intro.3li-p2')}</li>
                                    <li><span className='text-[#2fd484]'>{`${t('intro.3li-title3')} `}</span>{t('intro.3li-p3')}</li>
                                </ul>
                            </div>
                            {/* que encontraras documentacion */}
                            <div className='flex flex-col justify-center'>
                                <h2 id='que-encontraras' className='text-2xl lg:text-3xl font-semibold mb-6 text-center'>
                                    {t('intro.subtitle4')}
                                </h2>
                                <ul id='container' className='list-decimal marker:text-[#2fd484] lg:w-[70%] ml-5 flex flex-col gap-6 text-slate-200'>
                                    <li>{t('intro.4li-p1')}</li>
                                    <li>{t('intro.4li-p2')}</li>
                                    <li>{t('intro.4li-p3')}</li>
                                    <li>{t('intro.4li-p4')}</li>
                                </ul>
                            </div>
                            {/* proyecto open source */}
                            <div className='flex flex-col items-center justify-center'>
                                <h2 className='text-2xl lg:text-3xl font-semibold text-center mb-4'>
                                    {t('intro.subtitle5')}
                                </h2>
                                <p id='opensource' className=" text-slate-100 text-justify">
                                    {t('intro.5sub-p1')}<br /><br />
                                    {t('intro.5sub-p2')}
                                </p>
                            </div>
                            {/* mensaje footer */}
                            <div>
                                <p className='text-center lg:w-8/12 font-medium leading-relaxed mx-auto text-[#2fd484]'>
                                    {t('intro.nota1')}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='hidden lg:block w-52 relative '>
                        <div className="w-60 fixed -z-10">
                            <DynamicIndex sections={sections} />
                        </div>
                    </div>

                </div>
                <Footer />
            </section>
        </>
    )
}

export default Presentation