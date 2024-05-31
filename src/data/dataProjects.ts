interface Project {
  id: string;
  title: string;
  description: string;
  moreInfo: string[];
  techs: string[];
  linkGithub : string;
  cantScreenshots: {
    cellphone: number;
    tablet: number;
    desktop: number;
  };
}

const dataProjects: Project[] = [
  {
    id: '1',
    title: 'BalanceApp 💰',
    description: 'Aplicación web tipo Wallet virtual para ingresar ingresos y egresos económicos con sistema de cuentas y base de datos.',
    moreInfo:[
      'Esta idea de proyecto está basada en un proyecto anterior en el que aprendí a hacer un sistema de usuarios con la base de datos MongoDB y un CRUD.',
      'Esta aplicación te permite registrarte y acceder con tus credenciales, con validaciones tanto en el frontend como en el backend. Una vez iniciada la sesión, te lleva al dashboard, donde puedes agregar ingresos y registrar gastos. El sistema de ingresos simula la acción de recibir dinero, permitiéndote especificar la cantidad y el título de la transacción. De manera similar, en el sistema de gastos puedes registrar tus egresos, indicando la cantidad y una breve descripción. Ambos sistemas cuentan con validaciones en el frontend y realizan el cálculo correspondiente para mantener actualizado el balance. Es importante destacar que esta aplicación es únicamente con fines prácticos y de aprendizaje, por lo que no es tan específica ni complicada como una aplicación financiera real.',
    ],
    techs: ['JavaScript', 'React', 'Tailwind', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
    linkGithub: 'https://github.com/Schugu/BalanceApp',
    cantScreenshots: {
      cellphone: 6,
      tablet: 0,
      desktop: 0,
    }
  },
  {
    id: '2',
    title: 'Star Wars Page 🌌🚀',
    description: 'Aplicación web con datos de las películas de Star Wars obtenidos de SWAPI.',
    moreInfo:[
      'La aplicación se conecta con SWAPI para obtener información sobre los 6 films de Star Wars. Se crea una landing page que permite la navegación entre las secciones de films y personajes. La página de films muestra el nombre, imagen genérica y número de episodio de cada film. Para la página de detalle del film, se muestra información adicional como el director y una lista de personajes relacionados. La página de personajes muestra el nombre, imagen genérica, color de ojos y género de cada personaje, con opciones de paginación o scroll infinito. Se implementan filtros por color de ojos y género que se aplican a todos los personajes. Finalmente, se crea una página de detalle del personaje que muestra información detallada, omitiendo propiedades con valores "n/a" o "unknown".',
      'La aplicación utiliza Tailwind CSS para los estilos y Next.js para el desarrollo web, cumpliendo con los requisitos establecidos. Se aprovecha la API proporcionada por Next.js y se ha desarrollado en JavaScript. La navegación entre páginas se realiza mediante el sistema de rutas del framework. La información de SWAPI se adapta a la vista requerida sin utilizar su librería. Además, la aplicación es responsive como un plus.'
    ],
    techs: ['JavaScript', 'Next.js', 'Tailwind'],
    linkGithub: 'https://github.com/Schugu/prueba-tecnica-neowyze',
    cantScreenshots: {
      cellphone: 6,
      tablet: 6,
      desktop: 6,
    }
  },
  {
    id: '3',
    title: 'Subscriptions Tracker 📋',
    description: 'Aplicación web para trackear subscripciones.',
    moreInfo:[
      'Esta idea de proyecto está inspirada en el video "Subscriptions Tracker - Suscripciones App - Streaming - React Js - JavaScript - ECMA6" de Black code. Aunque me guié por la idea presentada en el video, he desarrollado esta página a mi manera, añadiendo mis propios enfoques y personalizaciones.'
    ],
    techs: ['HTML', 'CSS', 'JavaScript', 'React'],
    linkGithub: 'https://github.com/Schugu/SubscriptionsTracker',
    cantScreenshots: {
      cellphone: 3,
      tablet: 2,
      desktop: 2,
    }
  },
  {
    id: '4',
    title: 'Braille Page 📖🧑‍🦯♿️',
    description: 'Página para aprender Braille.',
    moreInfo:[
      'Ofrece una introducción accesible y comprensible al sistema de lectura táctil Braille, permitiendo que aquellos que pueden ver adquieran conocimientos sobre este valioso método de comunicación. A través de recursos educativos y prácticos, esta página brinda la oportunidad de explorar y comprender el Braille, fomentando así la inclusión de las personas ciegas.'
    ],
    techs: ['HTML', 'CSS', 'JavaScript'],
    linkGithub: 'https://github.com/Schugu/BraillePage',
    cantScreenshots: {
      cellphone: 6,
      tablet: 4,
      desktop: 5,
    }
  },
];

export default dataProjects;
