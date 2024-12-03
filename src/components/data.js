// Configuración de secciones con subcategorías
const sections = [
  {
    title: "Getting Started",
    routes: [
      { id: "/", name: "Introduction" },
      { id: "install", name: "Installation" },
      { id: "usage", name: "Usage" },
      { id: "contribute", name: "Contribute" },
    ],
  },
  {
    title: "Components",
    subSections: [
      {
        title: "Blog",
        routes: [{ id: "onixBlogV1", name: "OnixBlog v1" }],
      },
      {
        title: "Portfolio",
        routes: [{ id: "onixPortfolioV1", name: "OnixPortfolio v1" }],
      },
      {
        title: "E-commerce",
        routes: [{ id: "onixEcommerceV1", name: "OnixEcommerce v1" }],
      },
      {
        title: "Landing Page",
        routes: [{ id: "onixLandingPageV1", name: "OnixLandingPage v1" }],
      },
    ],
  },
  {
    title: "Customization",
    routes: [
      { id: "children", name: "Using Children" },
      { id: "props", name: "Using Props" },
      { id: "styling", name: "Using Styling" },
    ],
  },
  {
    title: "Use Cases",
    routes: [
      { id: "blogs", name: "Blogs and Articles" },
      { id: "portfolios", name: "Creative Portfolios" },
      { id: "ecommerce", name: "E-commerce Solutions" },
    ],
  },
];

export { sections };
