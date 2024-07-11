export default {
  global: {
    componenteFormativo:
      'Conceptos, tecnologías y arquitectura para el desarrollo web',
    descripcionCurso:
      'En este componente formativo se abordarán los conceptos relacionados con el funcionamiento de un sistema web, soportado por la arquitectura de internet. A continuación, se revisarán las tecnologías más importantes para el desarrollo web, tanto del lado del cliente como del servidor. Por último, se explorarán los conceptos básicos de una arquitectura orientada a servicios.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La internet y la web',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Fundamento de la internet',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Arquitectura web',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Introducción a las tecnologías para el desarrollo web',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tecnologías del <em>frontend</em>',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tecnologías del <em>back-end</em>',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Introducción a la arquitectura orientada a servicios',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228118_CF11_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'La internet y la web',
      referencia:
        'ThePRBridge. (2011, 13 octubre). Cómo funciona el internet [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=31LE0bPLrhM',
    },
    {
      tema: 'La internet y la web',
      referencia:
        'Aaron. (2009, 19 febrero). <em>How the internet Works in 5 Minutes</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7_LPdttKXPc',
    },
    {
      tema: 'Fundamento de la internet',
      referencia:
        'Saklar. (2017, 25 junio). Topologías de Red [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=awLJkNHBoms ',
    },
    {
      tema: 'Introducción a las tecnologías para el desarrollo web ',
      referencia:
        'Code War. (2020, 17 mayo). 2. <em>Frontend</em> y <em>backend</em>, en qué consisten, sus tecnologías, APIs - Aprende a programar sistemas web [Video]. YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rQX8D4dy1PM ',
    },
  ],
  glosario: [
    {
      termino: 'Arquitectura <em>software</em>',
      significado:
        'es una metodología que se refiere a la estructuración de un sistema <em>software</em> que, idealmente, se crea en etapas tempranas de la construcción del sistema. ',
    },
    {
      termino: 'Página web',
      significado:
        'es un documento que se puede mostrar en un navegador web como Firefox, Google Chrome, Microsoft Internet Explorer o Edge, o Safari de Apple. ',
    },
    {
      termino: 'Servidor web',
      significado:
        'es una colección o conjunto de páginas web que se agrupan y normalmente se conectan de varias maneras. Por lo regular se le conoce como "sitio web" o simplemente "sitio".',
    },
    {
      termino: 'Sitio web',
      significado:
        'conjunto de programas y rutinas que permiten a la computadora realizar determinadas tareas. ',
    },
    {
      termino: 'W3C',
      significado:
        'por sus siglas <em>World Wide Web Consortium</em>. Es una comunidad internacional que genera recomendaciones y estándares que aseguran el crecimiento de la WWW a largo plazo. ',
    },
    {
      termino: 'Web <em>push</em>',
      significado:
        'son notificaciones que el usuario recibe en su navegador (móvil o de escritorio) sin necesidad de tener una aplicación descargada en su equipo.',
    },
  ],
  referencias: [
    {
      referencia: 'Facebook. (2021). Facebook - Meld je an of registreer je.',
      link: '',
    },
    {
      referencia:
        'Fisher, S. (2021, 19 de mayo). ¿Qué es TCP/IP y cómo funciona? Avast Academy.',
      link: 'https://www.avast.com/es-es/c-what-is-tcp-ip ',
    },
    {
      referencia:
        'Ingenio Virtual. (2018a, 11 de febrero). Conceptos básicos sobre tecnologías de desarrollo web. ',
      link:
        'https://www.ingeniovirtual.com/conceptos-basicos-sobre-tecnologias-de-desarrollo-web/ ',
    },
    {
      referencia:
        'Juncosa, M. (2020, 6 de agosto). El modelo TCP/IP capa a capa. Aprende de Redes.',
      link: '',
    },
    {
      referencia:
        'Mistry, J. (2021, 29 de mayo). 8 best backend frameworks to use for web development 2021. Monocubed.',
      link: 'https://www.monocubed.com/best-backend-frameworks/ ',
    },
    {
      referencia:
        'Mozilla. (2021, 13 de mayo). How does the internet work? - Learn web development. MDN Web Docs.',
      link:
        'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_internet_work ',
    },
    {
      referencia:
        'Medium. (2021, 15 de marzo). Front end development trends that will be with us in 2021.',
      link:
        'https://productcoalition.com/front-end-development-trends-that-will-be-with-us-in-2021-a0ad023922ea ',
    },
    {
      referencia:
        'Ramos, R. (2020, 18 de noviembre). ¿Qué es JavaScript y para qué sirve? Agencia de Marketing Digital.',
      link: 'https://soyrafaramos.com/que-es-javascript-para-que-sirve/ ',
    },
    {
      referencia: 'RedHat. (2021). REST vs. SOAP.',
      link:
        'https://www.redhat.com/en/topics/integration/whats-the-difference-between-soap-rest ',
    },
    {
      referencia:
        'IBM. (2021, 7 de mayo). SOA (arquitectura orientada a servicios).',
      link: 'https://www.ibm.com/co-es/cloud/learn/soa ',
    },
    {
      referencia:
        'Tanenbaum, A. S., Wetherall, D. J., & Elizondo, A. V. R. (2012). Redes de computadoras. Pearson Educación. ',
      link: '',
    },
    {
      referencia:
        'Third Rock Techkno. (2021, 24 de marzo). Top 5 picks for backend development in 2021.',
      link:
        'https://www.thirdrocktechkno.com/blog/top-5-picks-for-backend-development-in-2021/ ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Santiago Muñoz de la Rosa ',
          cargo: 'Experto temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta ',
          cargo: 'Evaluadora Instruccional ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniela Muñoz Bedoya ',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez ',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles ',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
