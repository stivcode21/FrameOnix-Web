const HeaderChildren = [
  {
    key: "children",
    type: "JSX",
    description: "onixBlogv1.header-children",
    example: "(<nav>Hello World<nav/>)",
  },
];

const HeaderId = [
  {
    key: "id",
    type: "string",
    description: "onixBlogv1.header-id",
    example: "#Main",
  },
];

const HeaderContent = [
  {
    key: "content.img",
    type: "string",
    description: "onixBlogv1.header-content_img",
    example: "'example.com/logo.png'",
  },
  {
    key: "content.navLinks",
    type: "array",
    description: "onixBlogv1.header-content_nav",
    example: "{title: 'About',path: '#About' }",
  },
];

const HeaderStyles = [
  {
    key: "styles.header",
    type: "object",
    description: "onixBlogv1.header-styles_header",
    example: "{ backgroundColor: 'blue', padding: '10px' }",
  },
  {
    key: "styles.containerImg",
    type: "object",
    description: "onixBlogv1.header-styles_containerImg",
    example: "{ display: 'flex', justifyContent: 'center' }",
  },
  {
    key: "styles.img",
    type: "object",
    description: "onixBlogv1.header-styles_img",
    example: "{ borderRadius: '50%', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }",
  },
  {
    key: "styles.nav",
    type: "object",
    description: "onixBlogv1.header-styles_nav",
    example: "{ gap: '20px', padding: '10px' }",
  },
  {
    key: "styles.button",
    type: "object",
    description: "onixBlogv1.header-styles_button",
    example:
      "{ backgroundColor: 'black', color: 'white', borderRadius: '8px' }",
  },
  {
    key: "styles.ul",
    type: "object",
    description: "onixBlogv1.header-styles_ul",
    example: "{ flexDirection: 'row', justifyContent: 'space-around' }",
  },
  {
    key: "styles.li",
    type: "object",
    description: "onixBlogv1.header-styles_li",
    example: "{ fontWeight: 'bold', textTransform: 'uppercase' }",
  },
  {
    key: "styles.menuDestok",
    type: "object",
    description: "onixBlogv1.header-styles_menuDestok",
    example: "{ display: 'block', margin: '0 auto' }",
  },
  {
    key: "styles.containerButtons",
    type: "object",
    description: "onixBlogv1.header-styles_containerButtons",
    example: "{ position: 'absolute', right: '10px' }",
  },
  {
    key: "styles.menuMobile",
    type: "object",
    description: "onixBlogv1.header-styles_menuMobile",
    example: "{ backgroundColor: 'white', padding: '20px' }",
  },
];

const MainContent = [
  {
    key: "content.title",
    type: "string",
    description: "onixBlogv1.main-content_title",
    example: '"Explore Our Blog"',
  },
  {
    key: "content.description",
    type: "string",
    description: "onixBlogv1.main-content_description",
    example:
      '"Discover the latest news, trends, and expert advice on our blog."',
  },
  {
    key: "content.path",
    type: "string",
    description: "onixBlogv1.main-content_path",
    example: '"Read More"',
  },
  {
    key: "content.button",
    type: "string",
    description: "onixBlogv1.main-content_button",
    example: '"submit"',
  },
  {
    key: "content.video",
    type: "string",
    description: "onixBlogv1.main-content_video",
    example: '"www.youtube.com/embed/dQw4w9WgXcQ"',
  },
  {
    key: "content.img",
    type: "string",
    description: "onixBlogv1.main-content_img",
    example: '"./public/logo.png"',
  },
];

const MainStyles = [
  {
    key: "styles.main",
    type: "object",
    description: "onixBlogv1.main-styles_main",
    example: "{ backgroundColor: 'lightgray', padding: '20px' }",
  },
  {
    key: "styles.containerDescription",
    type: "object",
    description: "onixBlogv1.main-styles_containerDescription",
    example: "{ gap: '10px', paddingRight: '20px' }",
  },
  {
    key: "styles.title",
    type: "object",
    description: "onixBlogv1.main-styles_title",
    example: "{ fontSize: '4rem', color: '#333' }",
  },
  {
    key: "styles.description",
    type: "object",
    description: "onixBlogv1.main-styles_description",
    example: "{ fontSize: '1rem', lineHeight: '1.5', color: '#666' }",
  },
  {
    key: "styles.button",
    type: "object",
    description: "onixBlogv1.main-styles_button",
    example: "{ background: '#007BFF', borderRadius: '12px', color: 'white' }",
  },
  {
    key: "styles.containerMedia",
    type: "object",
    description: "onixBlogv1.main-styles_containerMedia",
    example: "{ height: '500px', alignItems: 'flex-start' }",
  },
  {
    key: "styles.video",
    type: "object",
    description: "onixBlogv1.main-styles_video",
    example: "{ borderRadius: '16px', objectFit: 'contain' }",
  },
  {
    key: "styles.img",
    type: "object",
    description: "onixBlogv1.main-styles_img",
    example: "{ borderRadius: '16px', objectFit: 'cover' }",
  },
];

const PostsContent = [
  {
    key: "content.title",
    type: "string",
    description: "onixBlogv1.posts-content_title",
    example: '"Last Posts"',
  },
  {
    key: "content.cards",
    type: "array",
    description: "onixBlogv1.posts-content_posts",
    example: `cards: [
    {
      img: './src/frameonix',
      _title: 'Default Title',
      description: 'Lorem ipsum',
      path: 'frameonix.com',
      namePath: 'Link',
    }
  ]`,
  },
];

const PostsStyles = [
  {
    key: "styles.posts",
    type: "object",
    description: "onixBlogv1.posts-styles_posts",
    example: "{ display: 'grid', gap: '1rem' }",
  },
  {
    key: "styles.title",
    type: "object",
    description: "onixBlogv1.posts-styles_title",
    example: "{ fontSize: '3rem', color: '#333' }",
  },
  {
    key: "styles.grid",
    type: "object",
    description: "onixBlogv1.posts-styles_grid",
    example: "{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }",
  },
  {
    key: "styles.card",
    type: "object",
    description: "onixBlogv1.posts-styles_card",
    example:
      "{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', padding: '16px' }",
  },
  {
    key: "styles.img",
    type: "object",
    description: "onixBlogv1.posts-styles-img",
    example: "{ borderRadius: '8px', objectFit: 'contain' }",
  },
  {
    key: "styles._title",
    type: "object",
    description: "onixBlogv1.posts-styles-_title",
    example: "{ fontSize: '1.5rem', fontWeight: 'bold' }",
  },
  {
    key: "styles.description",
    type: "object",
    description: "onixBlogv1.posts-styles-description",
    example: "{ fontSize: '1rem', color: '#666' }",
  },
  {
    key: "styles.path",
    type: "object",
    description: "onixBlogv1.posts-styles-path",
    example: "{ color: '#007BFF', textDecoration: 'underline' }",
  },
];

const AboutContent = [
  {
    key: "content.title",
    type: "string",
    description: "onixBlogv1.about-content_title",
    example: '"About Me"',
  },
  {
    key: "content.img",
    type: "string",
    description: "onixBlogv1.about-content_img",
    example: '"./public/image.jpg"',
  },
  {
    key: "content.paragraphs",
    type: "array",
    description: "onixBlogv1.about-content_paragraphs",
    example: `paragraphs: [
  { p: "the first paragraph..." },
  { p: "second paragraph..." }
]`,
  },
];

const AboutStyles = [
  {
    key: "styles.section",
    type: "object",
    description: "onixBlogv1.about-styles_section",
    example: "{ backgroundColor: 'lightblue', padding: '20px' }",
  },
  {
    key: "styles.containerDescription",
    type: "object",
    description: "onixBlogv1.about-styles_containerDescription",
    example: "{ padding: '10px', border: '1px solid #ddd' }",
  },
  {
    key: "styles.title",
    type: "object",
    description: "onixBlogv1.about-styles_title",
    example: "{ fontSize: '3rem', color: '#333' }",
  },
  {
    key: "styles.p",
    type: "object",
    description: "onixBlogv1.about-styles_p",
    example: "{ lineHeight: '1.6', color: '#666' }",
  },
  {
    key: "styles.img",
    type: "object",
    description: "onixBlogv1.about-styles_img",
    example: "{ borderRadius: '10px', height: '100%'' }",
  },
];

const ArticleContent = [
  {
    key: "content.title",
    type: "string",
    description: "onixBlogv1.article-content_title",
    example: '"Explore our latest articles"',
  },
  {
    key: "content.img",
    type: "string",
    description: "onixBlogv1.article-content_img",
    example: '"/example.jpg"',
  },
  {
    key: "content._title",
    type: "string",
    description: "onixBlogv1.article-content_h3",
    example: '"How to improve your programming skills"',
  },
  {
    key: "content.description",
    type: "string",
    description: "onixBlogv1.article-content_description",
    example: '"Default text for description..."',
  },
];

const ArticleStyles = [
  {
    key: "styles.article",
    type: "object",
    description: "onixBlogv1.article-styles_article",
    example: "{ backgroundColor: 'white', padding: '20px' }",
  },
  {
    key: "styles.containerDescription",
    type: "object",
    description: "onixBlogv1.article-styles_containerDescription",
    example: "{ margin: '0 auto', maxWidth: '1200px' }",
  },
  {
    key: "styles.title",
    type: "object",
    description: "onixBlogv1.article-styles_title",
    example: "{ color: 'red', fontSize: '30px' }",
  },
  {
    key: "styles.img",
    type: "object",
    description: "onixBlogv1.article-styles_img",
    example: "{ borderRadius: '10px', width: '100%' }",
  },
  {
    key: "styles.containerArticle",
    type: "object",
    description: "onixBlogv1.article-styles_containerArticle",
    example: "{ display: 'grid', gridTemplateColumns: '1fr 1fr' }",
  },
  {
    key: "styles._title",
    type: "object",
    description: "onixBlogv1.article-styles_h3",
    example: "{ fontWeight: 'bold', textAlign: 'center' }",
  },
  {
    key: "styles.description",
    type: "object",
    description: "onixBlogv1.article-styles_description",
    example: "{ lineHeight: '1.5', color: '#333' }",
  },
];

const ContactContent = [
  {
    key: "content.title",
    type: "string",
    description: "onixBlogv1.contact-content_title",
    example: '"Connect with Us"',
  },
  {
    key: "content.icons",
    type: "array",
    description: "onixBlogv1.contact-content_icons",
    example: `
    [
  { icon: <Facebook size={40} />, path: "https://facebook.com" },
  { icon: <Twitter size={40} />, path: "https://twitter.com" }
]
`,
  },
  {
    key: "content.facebook",
    type: "string",
    description: "onixBlogv1.contact-content_facebook",
    example: '"/facebook.com/yourpage"',
  },
  {
    key: "content.instagram",
    type: "string",
    description: "onixBlogv1.contact-content_instagram",
    example: '"/instagram.com/yourprofile"',
  },
  {
    key: "content.github",
    type: "string",
    description: "onixBlogv1.contact-content_github",
    example: '"/github.com/yourusername"',
  },
  {
    key: "content.twitter",
    type: "string",
    description: "onixBlogv1.contact-content_twitter",
    example: '"/twitter.com/yourprofile"',
  },
  {
    key: "content._title",
    type: "string",
    description: "onixBlogv1.contact-content_h3",
    example: '"Get in Touch"',
  },
  {
    key: "content.placeholderA",
    type: "string",
    description: "onixBlogv1.contact-content_placeholderA",
    example: '"last name"',
  },
  {
    key: "content.placeholderB",
    type: "string",
    description: "onixBlogv1.contact-content_placeholderB",
    example: '"Write your message here"',
  },
  {
    key: "content.button",
    type: "string",
    description: "onixBlogv1.contact-content_button",
    example: '"Send Message"',
  },
];

const ContactStyles = [
  {
    key: "styles.contact",
    type: "object",
    description: "onixBlogv1.contact-styles_contact",
    example: "{ backgroundColor: '#f5f5f5', padding: '20px' }",
  },
  {
    key: "styles.containerContent",
    type: "object",
    description: "onixBlogv1.contact-styles_containerContent",
    example: "{ flexDirection: 'column', gap: '40px' }",
  },
  {
    key: "styles.title",
    type: "object",
    description: "onixBlogv1.contact-styles_title",
    example: "{ fontSize: '3rem', color: '#000' }",
  },
  {
    key: "styles.containerIcons",
    type: "object",
    description: "onixBlogv1.contact-styles_containerIcons",
    example: "{ justifyContent: 'center', gap: '20px' }",
  },
  {
    key: "styles.icon",
    type: "object",
    description: "onixBlogv1.contact-styles_icon",
    example: "{ width: '50px', height: '50px', backgroundColor: '#ccc' }",
  },
  {
    key: "styles.form",
    type: "object",
    description: "onixBlogv1.contact-styles_form",
    example: "{ padding: '10px', borderRadius: '10px' }",
  },
  {
    key: "styles._title",
    type: "object",
    description: "onixBlogv1.contact-styles_h3",
    example: "{ fontSize: '1.8rem', fontWeight: '600' }",
  },
  {
    key: "styles.input",
    type: "object",
    description: "onixBlogv1.contact-styles_input",
    example: "{ borderColor: '#ddd', padding: '10px' }",
  },
  {
    key: "styles.textArea",
    type: "object",
    description: "onixBlogv1.contact-styles_textArea",
    example: "{ height: '120px', borderRadius: '5px' }",
  },
  {
    key: "styles.button",
    type: "object",
    description: "onixBlogv1.contact-styles_button",
    example: "{ backgroundColor: '#007bff', color: '#fff' }",
  },
];

const FooterContent = [
  {
    key: "content.description",
    type: "string",
    description: "onixBlogv1.footer-content_description",
    example: '"© 2025 My Project. All rights reserved."',
  },
  {
    key: "content.img",
    type: "string",
    description: "onixBlogv1.footer-content_img",
    example: '"/example.com/logo.png"',
  },
];

const FooterStyles = [
  {
    key: "styles.footer",
    type: "string",
    description: "onixBlogv1.footer-styles_footer",
    example: "{ backgroundColor: 'blue', padding: '1rem' }",
  },
  {
    key: "styles.containerDescription",
    type: "string",
    description: "onixBlogv1.footer-styles_containerDescription",
    example: "{ display: 'flex', justifyContent: 'center'}",
  },
  {
    key: "styles.description",
    type: "string",
    description: "onixBlogv1.footer-styles_description",
    example: "{ fontSize: '1rem', color: 'black' }",
  },
  {
    key: "styles.img",
    type: "string",
    description: "onixBlogv1.footer-styles_img",
    example: "{ borderRadius: '1rem', width: '4rem', height: '4rem' }",
  },
];

const dataBlogv1 = {
  HeaderId,
  HeaderContent,
  HeaderStyles,
  HeaderChildren,
  MainContent,
  MainStyles,
  PostsContent,
  PostsStyles,
  AboutContent,
  AboutStyles,
  ArticleContent,
  ArticleStyles,
  ContactContent,
  ContactStyles,
  FooterContent,
  FooterStyles,
};

export { dataBlogv1 };
