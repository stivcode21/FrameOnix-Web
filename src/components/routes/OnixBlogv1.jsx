import React from 'react'
import TableDoc from '../utils/TableDoc.jsx';
import { useTranslation } from 'react-i18next';
import TerminalBlock from '../utils/TerminalBlock.jsx';
import Footer from '../Footer';
import Note from '../utils/Note.jsx';
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
        <h1 className="text-3xl font-bold text-white">
          {t('onixBlogv1.title')}
        </h1>
        <p className="text-gray-300">
          {t('onixBlogv1.T-description')}
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
                command={`return (
    <OnixBlogv1
      headerProps={{
       id: "#Main"
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
                command={`return (
    <OnixBlogv1
      headerProps={{
        content: {
          img: "/frameonix.png", 
          navLiks: [
          {
            title: "About",
            path: "#About"
          },
          {
            title: "Blog",
            path: "#Blog"
          },],
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
                command={`return (
    <OnixBlogv1
      headerProps={{
        styles: {
          containerImg: { display: 'flex', justifyContent: 'center' },
          img: { borderRadius: '50%'' },
          nav: { gap: '20px', padding: '10px' },
          menuMobile: { backgroundColor: 'white', padding: '20px' }
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
            Ntext1={t('onixBlogv1.info1')}
            Nspan1={` Children, Id `}
            Ntext3={t('onixBlogv1.info2')}
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
                command={`return (
    <OnixBlogv1
      mainProps={{
        content: {
          title: "Section Main", 
          path: "https://www.stivcode.com/",
          video: "https://www.youtube.com/embed/video_id",
        },
      }}
    />);`} />} />
        </>
        {/* mainProps - styles */}
        <>
          <TableDoc
            subtitle="mainProps -> styles"
            Props={dataBlogv1.MainStyles}
            children={
              <TerminalBlock
                command={`return (
    <OnixBlogv1
      mainProps={{
        styles: {
          main: "{ flexDirection: 'row', justifyContent: 'space-around' }",
          title: "{ fontSize: '1rem', lineHeight: '1.5', color: '#666' }",
          containerMedia: { height: '500px', alignItems: 'flex-start' },
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
                command={`return (
    <OnixBlogv1
      postsProps={{
        content: {
          title: "Section Posts", 
          cards: [
           {
             img: "/frameonix.png", 
             _title: "frameonix",
             description: "hello world..."
             path: "description default"
             namePath: "Learn More"
            },
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
                command={`return (
    <OnixBlogv1
      postsProps={{
        styles: {
          title: { fontSize: '3rem', color: '#333' },
          grid: { gridTemplateColumns: 'repeat(2, 1fr)' },
          img: { borderRadius: '8px', objectFit: 'contain' },
          _title: { fontSize: '1.5rem'},
          description: { fontSize: '1rem'},
          path: { color: '#007BFF'},
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
                command={`return (
    <OnixBlogv1
      aboutProps={{
        content: {
          title: "About Me", 
          paragraphs: [
            { p: "Passionate about building solutions with code."},
            { p: "Always learning and tackling new challenges."}
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
                command={`return (
    <OnixBlogv1
      aboutProps={{
        styles: {
          section: { backgroundColor: 'lightblue', padding: '20px' },
          containerDescription: { border: '1px solid #ddd' },
          title:  { fontSize: '3rem', color: '#333' },
          p: { lineHeight: '1.6' },
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
                command={`return (
    <OnixBlogv1
      articleProps={{
        content: {
          title: "section articles",
          img: "/frameonix.png",
          _title: "default subtitle...",
          description: "Exploring trends and sharing insightful perspectives."
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
                command={`return (
    <OnixBlogv1
      articleProps={{
        styles: {
          article: { backgroundColor: 'white', padding: '20px' },
          containerDescription: { margin: '0 auto', maxWidth: '1200px' },
          title: { color: 'red', fontSize: '30px' },
          _title: { fontWeight: 'bold', textAlign: 'center' }
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
                command={`return (
    <OnixBlogv1
      contactProps={{
        content: {
          title: "section contact",
          icons: [
            { 
              icon: <webIcon/>,
              path: "/stivcode.com" 
            },
             { 
              icon: <Instagram/>,
              path: "/instagram.com/yourprofile" 
            }
          ],
          button: "Send Message"
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
                command={`return (
    <OnixBlogv1
      contactProps={{
        styles: {
          contact: { backgroundColor: '#f5f5f5', padding: '20px' },
          containerIcons: { justifyContent: 'center', gap: '20px' },
          title: { fontSize: '3rem', color: '#000' },
          form: { padding: '10px', borderRadius: '10px' }
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
                command={`return (
    <OnixBlogv1
      footerProps={{
        content: {
          description: "© text default...",
          img: "./logoFrameOnix"
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
                command={`return (
    <OnixBlogv1
      footerProps={{
        styles: {
          footer: { backgroundColor: 'blue', padding: '1rem' },
          description: { fontSize: '1rem', color: 'black' }
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