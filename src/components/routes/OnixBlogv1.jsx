import React from 'react'
import TableDoc from '../utils/TableDoc';
import { useTranslation } from 'react-i18next';
import TerminalBlock from '../utils/TerminalBlock';
import Footer from '../Footer';
import Note from '../utils/Note';
import { dataBlogv1 } from '../../data/dataBlogv1';

const OnixBlogv1 = () => {

  const { t } = useTranslation();



  return (
    <>
      {/* Encabezado principal */}
      <p className="text-[#2fd484] text-sm mb-8">
        {t('sidebar.N-onixPortfolioV1')}
      </p>

      {/* Sección principal del encabezado */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white">OnixBlogv1 Documentation</h1>
        <p className="text-gray-300">
          A detailed guide to using the <span className="font-semibold">OnixBlogv1</span> component.
          Explore its props, structure, and examples.
        </p>
      </header>

      {/* container */}
      <main className='lg:Container'>
        {/*headerProps - id */}
        <>
          <TableDoc
            title="HeaderProps"
            subtitle="headerProps -> id"
            Props={dataBlogv1.HeaderId}
            children={
              <TerminalBlock
                title="Ejemplo"
                command={`return (
    <OnixBlogv1
      headerProps={{
       id: "#main"
      }}
    />);`} />} />
        </>
        {/*headerProps - content */}
        <>
          <TableDoc
            subtitle="headerProps -> content"
            Props={dataBlogv1.HeaderContent}
            children={
              <TerminalBlock
                title="Ejemplo"
                command={`return (
    <OnixBlogv1
      headerProps={{
        content: {
          img: "/frameonix.png", 
          nav: ["Main", "About", "Contact"],
          icon: (<Bars2Icon />),
        },
      }}
    />);`} />} />
        </>
        {/* headerProps - styles */}
        <>
          <TableDoc
            subtitle="headerProps -> styles"
            Props={dataBlogv1.HeaderStyles}
            children={
              <TerminalBlock
                title="Ejemplo"
                command={`return (
    <OnixBlogv1
      headerProps={{
        styles: {
          containerImg: "rounded-lg",
          img: "w-62 h-52",
          nav: "text-lg text-white hover:text-black",
          icon: "w-fit"
        },
      }}
    />);`} />} />
        </>
        {/* headerProps - children */}
        <>
          <TableDoc
            subtitle="headerProps -> children"
            ifExist
            Props={dataBlogv1.HeaderChildren}
            children={
              <TerminalBlock
                title="Ejemplo"
                command={`return (
    <OnixBlogv1
      children=(
        <nav className="flex justify-center gap-4">
          <a>hello</a>
          <a>world</a>
          <a>stivcode</a>
        </nav>
      )
    />);`} />} />
        </>
        <div className='lg:w-1/2 mx-auto mb-20'>
          <Note
            Ntext1={'A partir de esta sección, no se mencionarán las props '}
            Nspan1={` Children `}
            Ntext2={` ni `}
            Nspan2={` id `}
            Ntext3={'El prop (id) solo es necesario si cambias el contenido del header, y (children) sirve únicamente para reemplazar el contenido manteniendo la estructura base. Para evitar redundancias, no las incluiremos en las siguientes explicaciones.'}
          />
        </div>
        {/* mainProps - content */}
        <>
          <TableDoc
            title={'MainProps'}
            subtitle="mainProps -> content"
            Props={dataBlogv1.MainContent}
            children={
              <TerminalBlock
                title="Ejemplo"
                command={`return (
    <OnixBlogv1
      mainProps={{
        content: {
          h2: "Section Main", 
          path: "https://www.stivcode.com/",
          video: "https://www.youtube.com/embed/video_id",
        },
      }}
    />);`} />} />
        </>
        {/* headerProps - styles */}
        <>
          <TableDoc
            subtitle="mainProps -> styles"
            Props={dataBlogv1.MainStyles}
            children={
              <TerminalBlock
                title="Ejemplo"
                command={`return (
    <OnixBlogv1
      mainProps={{
        styles: {
          main: "bg-gray-300 px-8 rounded-lg",
          h2: "font-bold text-3xl",
          containerMedia: "rounded-lg ml-4",
        },
      }}
    />);`} />} />
        </>
        {/* postsProps - content */}
        <>
          <TableDoc
            title={'PostsProps'}
            subtitle="postProps -> content"
            Props={dataBlogv1.PostsContent}
            children={
              <TerminalBlock
                title="Ejemplo"
                command={`return (
    <OnixBlogv1
      postsProps={{
        content: {
          h3: "Section Posts", 
          posts: [
           {img: "/frameonix.png", h2: "frameonix", p: "hello world..."},
           {img: "/frameonix.png", h2: "stivcode", p: "example..."}
          ]
        },
      }}
    />);`} />} />
        </>
        {/* PostsProps - styles */}
        <>
          <TableDoc
            subtitle="postsProps -> styles"
            Props={dataBlogv1.PostsStyles}
            children={
              <TerminalBlock
                title="Ejemplo"
                command={`return (
    <OnixBlogv1
      postsProps={{
        styles: {
          h2: "text-3xl font-bold",
          containerDescription: "text-center text-lg",
          p: "text default...",
          path: "text-gray-500 hover:text-blue-500",
        },
      }}
    />);`} />} />
        </>
        {/* aboutProps - content */}
        <>
          <TableDoc
            title={'AboutProps'}
            subtitle="aboutProps -> content"
            Props={dataBlogv1.AboutContent}
            children={
              <TerminalBlock
                title="Ejemplo"
                command={`return (
    <OnixBlogv1
      aboutProps={{
        content: {
          h2: "About Me", 
          paragraphs: [
          "Passionate about building solutions with code."
          "Always learning and tackling new challenges."
          ]
        },
      }}
    />);`} />} />
        </>
        {/* aboutProps - styles */}
        <>
          <TableDoc
            subtitle="aboutProps -> styles"
            Props={dataBlogv1.AboutStyles}
            children={
              <TerminalBlock
                title="Ejemplo"
                command={`return (
    <OnixBlogv1
      aboutProps={{
        styles: {
          containerDescription: "text-center text-lg",
          h2: "text-3xl font-bold",
          p: "font-medium text-lg",
        },
      }}
    />);`} />} />
        </>
        {/* article - content */}
        <>
          <TableDoc
            title={'ArticleProps'}
            subtitle="articleProps -> content"
            Props={dataBlogv1.ArticleContent}
            children={
              <TerminalBlock
                title="Ejemplo"
                command={`return (
    <OnixBlogv1
      articleProps={{
        content: {
          h2: "section articles"
          articles: [
          { _h3: "description img"
            _p: "Exploring trends and sharing insightful perspectives." }
          ]
        },
      }}
    />);`} />} />
        </>
        {/* articleProps - styles */}
        <>
          <TableDoc
            subtitle="articleProps -> styles"
            Props={dataBlogv1.ArticleStyles}
            children={
              <TerminalBlock
                title="Ejemplo"
                command={`return (
    <OnixBlogv1
      articleProps={{
        styles: {
          article: "bg-gray-500 mx-auto"
          containerDescription: "text-center text-lg",
          h2: "text-3xl font-bold",
        },
      }}
    />);`} />} />
        </>
        {/* contactProps - content */}
        <>
          <TableDoc
            title={'ContactProps'}
            subtitle="contactProps -> content"
            Props={dataBlogv1.ContactContent}
            children={
              <TerminalBlock
                title="Ejemplo"
                command={`return (
    <OnixBlogv1
      contactProps={{
        content: {
          h2: "section contact"
          icons: [
          { path: "/stivcode.com" 
            icon: (<webIcon/>) }
          ]
        },
      }}
    />);`} />} />
        </>
        {/* contactProps - styles */}
        <>
          <TableDoc
            subtitle="contactProps -> styles"
            Props={dataBlogv1.ContactStyles}
            children={
              <TerminalBlock
                title="Ejemplo"
                command={`return (
    <OnixBlogv1
      contactProps={{
        styles: {
          contact: "bg-gray-500 mx-auto"
          containerIcons: "flex flex-col",
          h2: "text-xl font-semibold",
        },
      }}
    />);`} />} />
        </>
        {/* footerProps - content */}
        <>
          <TableDoc
            title={'FooterProps'}
            subtitle="footerProps -> content"
            Props={dataBlogv1.FooterContent}
            children={
              <TerminalBlock
                title="Ejemplo"
                command={`return (
    <OnixBlogv1
      footerProps={{
        content: {
          p: "© text default..."
          img: "/logoFrameOnix"
        },
      }}
    />);`} />} />
        </>
        {/* footerProps - styles */}
        <>
          <TableDoc
            subtitle="footerProps -> styles"
            Props={dataBlogv1.FooterStyles}
            children={
              <TerminalBlock
                title="Ejemplo"
                command={`return (
    <OnixBlogv1
      footerProps={{
        styles: {
          footer: "w-full h-34"
          p: "text-xs text-gray-500"
        },
      }}
    />);`} />} />
        </>

      </main>
      {/* Footer */}
      <Footer />
    </>
  )
}

export default OnixBlogv1