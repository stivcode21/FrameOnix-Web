import React from 'react'
import Footer from '../Footer'
import { useTranslation } from 'react-i18next';

const Presentation = () => {

    const { t } = useTranslation();

    return (
        <>
            <section className='h-full w-full'>
                <h1 className='text-[#2fd484] text-sm'>
                    {t('sidebar.N-introduction')}
                </h1>
                {/* Titulo */}
                <div className="flex justify-center items-center gap-x-5 text-2xl font-semibold my-20">
                    <h1 className='mt-4'>{t('intro.title')}</h1>
                    <div className={`flex justify-center items-center no-select`}>
                        <img src="/f.png" alt="img-logo" className='w-11 h-11' />
                        <h1 className='text-3xl pt-4 font-semibold -ml-3'>rameOni</h1>
                        <img src="/x.png" alt="img-logo" className='w-11 h-11' />
                    </div>
                </div>
                <div>
                    <p className="mb-10 lg:w-[75%] text-slate-100">
                        {t('intro.T-p1')}
                    </p>
                </div>
                {/* contenido */}
                <div className='flex flex-col w-full gap-y-24'>
                    <div>
                        <h2 className='text-2xl font-semibold mb-1'>
                            {t('intro.subtitle1')}
                        </h2>
                        <p className="lg:w-[75%] text-slate-100">
                            {t('intro.S-p1')}<br /><br />

                            {t('intro.S-p2')}<br /><br />

                            {t('intro.S-p3')}<br />
                        </p>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-2xl font-semibold mb-4 text-center'>
                            {t('intro.subtitle2')}
                        </h2>
                        <p className='mb-6 lg:w-[75%]'>
                            {t('intro.S2-p1')}
                        </p>
                        <ul className='list-disc marker:text-[#2fd484] ml-5 lg:w-[45%] flex flex-col gap-4 text-slate-200'>
                            <li><span className='text-[#2fd484]'>{`${t('intro.2li-title1')} `}</span>{t('intro.2li-p1')}</li>
                            <li><span className='text-[#2fd484]'>{`${t('intro.2li-title2')} `}</span>{t('intro.2li-p2')}</li>
                            <li><span className='text-[#2fd484]'>{`${t('intro.2li-title3')} `}</span>{t('intro.2li-p3')}</li>
                            <li><span className='text-[#2fd484]'>{`${t('intro.2li-title4')} `}</span>{t('intro.2li-p4')}</li>
                        </ul>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-2xl font-semibold mb-4 text-center'>
                            {t('intro.subtitle3')}
                        </h2>
                        <p className='mb-6 lg:w-[75%]'>
                            {t('intro.S3-p1')}
                        </p>
                        <ul className='list-disc marker:text-[#2fd484] ml-5 lg:w-[45%] flex flex-col gap-4 text-slate-200'>
                            <li><span className='text-[#2fd484]'>{`${t('intro.3li-title1')} `}</span>{t('intro.3li-p1')}</li>
                            <li><span className='text-[#2fd484]'>{`${t('intro.3li-title2')} `}</span>{t('intro.3li-p2')}</li>
                            <li><span className='text-[#2fd484]'>{`${t('intro.3li-title3')} `}</span>{t('intro.3li-p3')}</li>
                        </ul>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-2xl font-semibold mb-4 text-center'>
                            {t('intro.subtitle4')}
                        </h2>
                        <ul className='list-decimal marker:text-[#2fd484] ml-5 lg:w-[45%] flex flex-col gap-4 text-slate-200'>
                            <li>{t('intro.4li-p1')}</li>
                            <li>{t('intro.4li-p2')}</li>
                            <li>{t('intro.4li-p3')}</li>
                            <li>{t('intro.4li-p4')}</li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h2 className='text-2xl font-semibold text-center mb-4'>
                            {t('intro.subtitle5')}
                        </h2>
                        <p className="lg:w-[75%] text-slate-100 text-justify">
                            {t('intro.5sub-p1')}<br />
                            {t('intro.5sub-p2')}
                        </p>
                    </div>
                    <div>
                        <p className='text-center lg:w-8/12 font-medium leading-relaxed mx-auto text-[#2fd484]'>
                            {t('intro.nota1')}
                        </p>
                    </div>

                </div>
                <Footer />
            </section>
        </>
    )
}

export default Presentation