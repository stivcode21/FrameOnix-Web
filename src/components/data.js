// Configuración de secciones con subcategorías
const sections = [
  {
    title: "T-getting",
    routes: [
      { id: "/", name: "N-introduction" },
      { id: "install", name: "N-install" },
      { id: "usage", name: "N-usage" },
      { id: "contribute", name: "N-contribute" },
    ],
  },
  {
    title: "T-components",
    subSections: [
      {
        title: "ST-blog",
        routes: [{ id: "onixBlogV1", name: "N-OnixBlogv1" }],
      },
      {
        title: "ST-portfolio",
        routes: [{ id: "onixPortfolioV1", name: "N-onixPortfolioV1" }],
      },
      {
        title: "ST-ecommerce",
        routes: [{ id: "onixEcommerceV1", name: "N-onixEcommerceV1" }],
      },
      {
        title: "ST-landingPage",
        routes: [{ id: "onixLandingPageV1", name: "N-onixLandingPageV1" }],
      },
    ],
  },
  {
    title: "T-customization",
    routes: [
      { id: "children", name: "N-children" },
      { id: "props", name: "N-props" },
      { id: "styling", name: "N-styling" },
    ],
  },
  {
    title: "T-useCases",
    routes: [
      { id: "blogs", name: "N-blogs" },
      { id: "portfolios", name: "N-portfolios" },
      { id: "ecommerces", name: "N-ecommerces" },
    ],
  },
];

export { sections };
