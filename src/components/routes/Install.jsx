import React from 'react'
import TerminalBlock from '../utils/TerminalBlock';
import StepbyStep from '../utils/StepbyStep';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';

const Install = () => {

    const { t } = useTranslation();

    return (
        <>
            <section className='flex flex-col'>
                <h1 className='text-[#2fd484] text-sm mb-6'>{t('sidebar.N-install')}</h1>
                <h2 className='text-[27px] md:text-4xl font-bold mb-4'>{t('install.title')}</h2>
                <p className='mb-4 lg:w-[75%] text-slate-300'>
                    {t('install.T-p1')}
                </p>
                <p className='lg:w-[75%] text-slate-300'>
                    {t('install.T-p2')}
                </p>
                <div className='relative my-10 bg-black bg-opacity-25 p-2 md:p-4 rounded-md xl:w-[75%]'>
                    <div className='absolute w-5 h-5 top-3 md:top-5 left-2 md:left-4'>
                        <ExclamationTriangleIcon className='fill-[#2fd484]' />
                    </div>
                    <p className='text-slate-300 text-sm leading-6 pr-4 lg:pr-10 text-justify ml-8 md:ml-8'>
                        {t('install.Import-p1')}
                        <span className='mx-2 font-semibold'>Node.js</span>
                        {t('install.Import-p2')}
                        <span className='px-2 font-semibold'>npm,</span>
                        {t('install.Import-p3')}
                        <code className='mx-2 px-2 py-1 rounded-md bg-[#424242] font-mono text-sm'>node -v</code>
                        {t('install.Import-p4')}
                        <a href='https://nodejs.org/en' target='_blank' className='mx-2 text-[#2fd484] hover:border-b border-b-[#2fd484]'>nodejs.org.</a>
                    </p>
                </div>

                <div className='flex flex-col gap-y-16 mt-8'>
                    <div className='flex w-full flex-col lg:flex-row lg:gap-x-2'>
                        <StepbyStep
                            number={1}
                            title={t('install.Step-1_title')}
                            text1={t('install.Step-1_p1')}
                            span1={' ` FrameOnix` '}
                            text2={t('install.Step-1_p2')} />
                        <TerminalBlock title={"Terminal"}
                            command={`npm install @stivcode/frameonix`} />
                    </div>
                    <div className='flex w-full flex-col lg:flex-row lg:gap-x-2'>
                        <StepbyStep
                            number={2}
                            title={t('install.Step-2_title')}
                            text1={t('install.Step-2_p1')}
                            span1={' ` tailwindcss` '}
                            text2={t('install.Step-2_p2')}
                            span2={' ` tailwind.config.js` '} />
                        <TerminalBlock title={"Terminal"}
                            command={`npm install -D tailwindcss
npx tailwindcss init`} />
                    </div>
                    <div className='flex w-full flex-col lg:flex-row lg:gap-x-2'>
                        <StepbyStep
                            number={3}
                            title={t('install.Step-3_title')}
                            text1={t('install.Step-3_p1')}
                            span1={' `tailwind.config.js` '}
                            text2={t('install.Step-3_p2')} />
                        <TerminalBlock title={"tailwind.config.js"}
                            command={`/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`} />
                    </div>
                    <div className='flex w-full flex-col lg:flex-row lg:gap-x-3'>
                        <StepbyStep
                            number={4}
                            title={t('install.Step-4_title')}
                            text1={t('install.Step-4_p1')}
                            span1={' `@tailwind` '}
                            text2={t('install.Step-4_p2')}
                        />
                        <TerminalBlock title={"index.css"}
                            command={`@tailwind base;
@tailwind components;
@tailwind utilities;`} />
                    </div>
                    <div className='flex w-full flex-col lg:flex-row lg:gap-x-4'>
                        <StepbyStep
                            number={5}
                            title={t('install.Step-5_title')}
                            text1={t('install.Step-5_p1')} />
                        <TerminalBlock title={"Terminal"}
                            command={`import OnixBlog from "@stivcode/frameonix";

export default function App() {
    return (
        <OnixBlog
            headerProps={{
                styles: {
                    header: "bg-blue-500 text-white p-4",
                },
                content: {
                    title: "My Custom Blog",
                    menu: ["Home", "Articles", "Contact"],
                },
            }}
        />
    );
}`} />
                    </div>
                    <div className='flex w-full flex-col lg:flex-row lg:gap-x-2'>
                        <StepbyStep
                            number={6}
                            title={t('install.Step-6_title')}
                            text1={t('install.Step-6_p1')}
                            span1={' ` npm run dev` '}
                            ifExist />

                        <TerminalBlock title={"Terminal"}
                            command={`npm run dev`} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Install