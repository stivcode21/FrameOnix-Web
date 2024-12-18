const HeaderChildren = [
  {
    key: "children",
    type: "JSX",
    description:
      "Utiliza la propiedad 'children' si necesitas personalizar completamente el contenido del encabezado (header). Esto reiniciará el contenido, pero mantendrá estilos base para conservar la estructura general.",
  },
];

const HeaderId = [
  {
    key: "id",
    type: "string",
    description:
      "Este 'id' se utiliza para construir el path al que se redirige al hacer clic en el logo del header.",
  },
];

const HeaderContent = [
  {
    key: "content.img",
    type: "string",
    description: "Ruta del logo mostrado en el header.",
  },
  {
    key: "content.nav",
    type: "array",
    description:
      "Array con los nombres de las secciones de la navbar. Asegúrate de asignar los mismos IDs a las secciones correspondientes.",
  },
  {
    key: "content.icon",
    type: "JSX",
    description: "Componente o SVG para mostrar el icono en el header.",
  },
];

const HeaderStyles = [
  {
    key: "styles.header",
    type: "string",
    description:
      "Estilos para personalizar el contenedor principal del encabezado (header).",
  },
  {
    key: "styles.containerImg",
    type: "string",
    description:
      "Estilos para el contenedor que agrupa el logo, optimizando su diseño visual.",
  },
  {
    key: "styles.img",
    type: "string",
    description: "Estilos para modificar la apariencia de la imagen del logo.",
  },
  {
    key: "styles.nav",
    type: "string",
    description:
      "Estilos personalizados para los enlaces en la barra de navegación (navbar).",
  },
  {
    key: "styles.icon",
    type: "string",
    description:
      "Estilos para personalizar el contenedor de los iconos de la interfaz.",
  },
];

const MainContent = [
  {
    key: "content.h2",
    type: "string",
    description: "Texto del título principal de la sección (main).",
  },
  {
    key: "content.p",
    type: "string",
    description: "Texto principal que se mostrará en la sección (main).",
  },
  {
    key: "content.path",
    type: "string",
    description: "Enlace al que redirigirá el botón al hacer clic.",
  },
  {
    key: "content.button",
    type: "string",
    description: "Texto que se mostrará dentro del botón.",
  },
  {
    key: "content.video",
    type: "string",
    description: "URL de tipo 'embed' para mostrar un video en la sección.",
  },
  {
    key: "content.img",
    type: "string",
    description:
      "Enlace a la imagen a mostrar, si decides no incluir un video.",
  },
];

const MainStyles = [
  {
    key: "styles.main",
    type: "string",
    description: "Estilos para personalizar el contenedor principal.",
  },
  {
    key: "styles.containerDescription",
    type: "string",
    description: "Estilos para el contenedor que agrupa el h2, p y button.",
  },
  {
    key: "styles.h2",
    type: "string",
    description: "Estilos específicos para el elemento h2.",
  },
  {
    key: "styles.p",
    type: "string",
    description: "Estilos específicos para el elemento p.",
  },
  {
    key: "styles.button",
    type: "string",
    description: "Estilos específicos para el button.",
  },
  {
    key: "styles.containerMedia",
    type: "string",
    description: "Estilos para el contenedor de elementos multimedia.",
  },
  {
    key: "styles.img",
    type: "string",
    description: "Estilos específicos para la imagen.",
  },
];

const PostsContent = [
  {
    key: "content.h2",
    type: "string",
    description:
      "Texto que se usará como título de la sección de publicaciones (posts).",
  },
  {
    key: "content.posts",
    type: "array",
    description:
      "Array que contiene objetos con la información para crear cada publicación. Debe contener más de 1 elemento para renderizarse.",
  },
  {
    key: "posts._img",
    type: "string",
    description: "URL o ruta de la imagen que se mostrará en la publicación.",
  },
  {
    key: "posts._h3",
    type: "string",
    description: "Título de la publicación dentro del objeto.",
  },
  {
    key: "posts._p",
    type: "string",
    description: "Texto o descripción de la publicación.",
  },
  {
    key: "posts._path",
    type: "string",
    description:
      "Enlace al que redireccionará la publicación cuando se haga clic.",
  },
  {
    key: "posts._namePath",
    type: "string",
    description:
      "Texto que se mostrará como el nombre del enlace en la publicación.",
  },
];

const PostsStyles = [
  {
    key: "styles.posts",
    type: "string",
    description:
      "Estilos para personalizar el contenedor principal de las publicaciones (posts).",
  },
  {
    key: "styles.h2",
    type: "string",
    description:
      "Estilos para el texto del título principal de la sección de publicaciones.",
  },
  {
    key: "styles.grid",
    type: "string",
    description:
      "Estilos para la cuadrícula (grid) que organiza las publicaciones.",
  },
  {
    key: "styles.containerDescription",
    type: "string",
    description:
      "Estilos para el contenedor que agrupa el contenido de cada publicación.",
  },
  {
    key: "styles._img",
    type: "string",
    description:
      "Estilos para personalizar la apariencia de las imágenes de las publicaciones.",
  },
  {
    key: "styles._h3",
    type: "string",
    description: "Estilos para el título individual de cada publicación.",
  },
  {
    key: "styles._p",
    type: "string",
    description: "Estilos para el texto descriptivo de las publicaciones.",
  },
  {
    key: "styles._path",
    type: "string",
    description: "Estilos para los enlaces dentro de las publicaciones.",
  },
];

const AboutContent = [
  {
    key: "content.h2",
    type: "string",
    description: "Texto que se usará como título de la sección About",
  },
  {
    key: "content.paragraphs",
    type: "array",
    description:
      "Array de strings que conformarán los parrafos de la sección About.",
  },
  {
    key: "content.img",
    type: "string",
    description: "URL o ruta de la imagen que se mostrará en la seccion About",
  },
];

const AboutStyles = [
  {
    key: "styles.containerDescription",
    type: "string",
    description: "Estilos para personalizar el contenedor principal.",
  },
  {
    key: "styles.h2",
    type: "string",
    description: "Estilos para personalizar el título de esta sección.",
  },
  {
    key: "styles.p",
    type: "string",
    description: "Estilos específicos para los párrafos de esta sección.",
  },
  {
    key: "styles.img",
    type: "string",
    description: "Estilos específicos para la imagen de esta sección.",
  },
];

const ArticleContent = [
  {
    key: "content.h2",
    type: "string",
    description:
      "Texto que se usará como título principal de la sección Article.",
  },
  {
    key: "content.p",
    type: "string",
    description:
      "Texto que servirá como descripción principal de la sección Article.",
  },
  {
    key: "content.img",
    type: "string",
    description:
      "URL o ruta de la imagen que se mostrará en la sección Article.",
  },
  {
    key: "content.articles",
    type: "array",
    description:
      "Array que contiene objetos con 'h3' y 'p' para definir subtítulos y descripciones relacionadas con la imagen.",
  },
  {
    key: "articles._h3",
    type: "string",
    description:
      "Texto que se usará como subtítulo dentro del contenido de artículos.",
  },
  {
    key: "articles._p",
    type: "string",
    description:
      "Texto que servirá como descripción dentro del contenido de artículos.",
  },
];

const ArticleStyles = [
  {
    key: "styles.article",
    type: "string",
    description: "Estilos para el contenedor principal de la sección Article.",
  },
  {
    key: "styles.containerDescription",
    type: "string",
    description:
      "Estilos para el contenedor del título y la descripción principal.",
  },
  {
    key: "styles.h2",
    type: "string",
    description: "Estilos específicos para el título principal (h2).",
  },
  {
    key: "styles.p",
    type: "string",
    description: "Estilos específicos para los párrafos principales.",
  },
  {
    key: "styles.img",
    type: "string",
    description: "Estilos para personalizar la imagen de la sección Article.",
  },
  {
    key: "styles.containerArticles",
    type: "string",
    description: "Estilos para el contenedor de los artículos secundarios.",
  },
  {
    key: "styles._h3",
    type: "string",
    description:
      "Estilos específicos para los subtítulos de los artículos (h3).",
  },
  {
    key: "styles._p",
    type: "string",
    description:
      "Estilos específicos para los párrafos de los artículos secundarios.",
  },
];

const ContactContent = [
  {
    key: "content.h2",
    type: "string",
    description: "Título de la sección de redes sociales.",
  },
  {
    key: "content.icons",
    type: "array",
    description:
      "Array con objetos que incluyen iconos (JSX) y enlaces (path).",
  },
  {
    key: "icons.path",
    type: "string",
    description: "URL de redirección asociada a cada icono.",
  },
  { key: "icons.icon", type: "JSX", description: "Icono o SVG a mostrar." },
  {
    key: "content.h3",
    type: "string",
    description: "Título para los campos de contacto.",
  },
  {
    key: "content.placeholderA",
    type: "string",
    description: "Placeholder para el primer input.",
  },
  {
    key: "content.placeholderB",
    type: "string",
    description: "Placeholder para el área de texto.",
  },
  {
    key: "content.button",
    type: "string",
    description: "Texto del botón de envío.",
  },
];

const ContactStyles = [
  {
    key: "styles.contact",
    type: "string",
    description: "Estilos del contenedor principal de la sección.",
  },
  {
    key: "styles.h2",
    type: "string",
    description: "Estilos para el título de redes sociales.",
  },
  {
    key: "styles.containerIcons",
    type: "string",
    description: "Estilos para el contenedor de los iconos.",
  },
  {
    key: "styles.icon",
    type: "string",
    description: "Estilos específicos para cada icono.",
  },
  {
    key: "styles.containerInputs",
    type: "string",
    description: "Estilos para el contenedor de los campos de contacto.",
  },
  {
    key: "styles.h3",
    type: "string",
    description: "Estilos para el título de los campos de contacto.",
  },
  {
    key: "styles.input",
    type: "string",
    description: "Estilos para el campo de input principal.",
  },
  {
    key: "styles.textArea",
    type: "string",
    description: "Estilos para el campo de área de texto.",
  },
  {
    key: "styles.button",
    type: "string",
    description: "Estilos para el botón de envío.",
  },
];

const FooterContent = [
  {
    key: "content.p",
    type: "string",
    description: "Texto mostrado como contenido principal en el footer.",
  },
  {
    key: "content.img",
    type: "string",
    description: "URL o ruta de la imagen del logo en el footer.",
  },
];

const FooterStyles = [
  {
    key: "styles.footer",
    type: "string",
    description: "Estilos del contenedor principal del footer.",
  },
  {
    key: "styles.containerDescription",
    type: "string",
    description: "Estilos para el contenedor de la descripción completa.",
  },
  {
    key: "styles.p",
    type: "string",
    description: "Estilos para el texto dentro del footer.",
  },
  {
    key: "styles.img",
    type: "string",
    description: "Estilos para la imagen del logo en el footer.",
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
