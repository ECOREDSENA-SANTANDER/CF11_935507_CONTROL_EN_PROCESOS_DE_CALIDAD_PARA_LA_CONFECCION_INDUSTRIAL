export default {
  global: {
    Name: 'Sostenibilidad en el proceso productivo de la confección',
    Description:
      'El componente gestión ambiental y sostenibilidad en el control de la confección industrial desarrolla las competencias necesarias para identificar, verificar y documentar el cumplimiento de los requisitos ambientales aplicables a los procesos de confección industrial, desde la normativa legal colombiana vigente hasta los estándares de sostenibilidad reconocidos en los mercados internacionales. A través de sus contenidos, el aprendiz adquiere las herramientas conceptuales y técnicas para integrar la gestión ambiental al sistema de control de calidad de la organización, contribuyendo a la competitividad sostenible del sector confección industrial colombiano.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
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
        titulo: 'Normativa ambiental en la confección industrial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto, componentes y conservación ambiental',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Aspectos, impactos y normatividad básica legal',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Medidas de manejo ambiental',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Normas técnicas y sellos de sostenibilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'ISO 14001 y normas técnicas del sector de la confección',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Sellos verdes y certificaciones ambientales: OEKO-TEX, GOTS y Bluesign',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Producción limpia y gestión de residuos textiles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Principios de producción limpia aplicados al control de la confección',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Reducción, gestión y reciclaje de residuos textiles',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Medición del impacto ambiental en procesos de confección',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Indicadores de impacto ambiental y ciclo de vida del producto (LCA)',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Huella hídrica, huella de carbono y reducción de emisiones',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Ahorro energético en procesos de confección industrial',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Sostenibilidad y economía circular en la confección',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Ecodiseño y economía circular aplicados a la confección',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Certificaciones de sostenibilidad Fair Trade y carbón neutral',
            hash: 't_5_2',
          },
        ],
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Aspecto ambiental',
      significado:
        'elemento de las actividades, productos o servicios de una organización que puede interactuar con el medio ambiente y generar efectos favorables o adversos.',
    },
    {
      termino: 'Bluesign',
      significado:
        'sistema de certificación para la industria textil que verifica el uso responsable de recursos, la gestión segura de sustancias químicas y la reducción de contaminantes durante los procesos productivos.',
    },
    {
      termino: 'Ciclo de vida del producto (LCA)',
      significado:
        'metodología que evalúa los impactos ambientales potenciales de un producto durante todas las etapas de su existencia, desde la extracción de materias primas hasta su disposición final.',
    },
    {
      termino: 'Ecodiseño',
      significado:
        'enfoque de diseño que incorpora criterios ambientales desde la concepción del producto para reducir sus impactos durante las diferentes etapas de su ciclo de vida.',
    },
    {
      termino: 'Economía circular',
      significado:
        'modelo productivo que busca mantener los productos y materiales en uso durante el mayor tiempo posible, mediante su reutilización, recuperación, reparación y reincorporación al ciclo productivo.',
    },
    {
      termino: 'GOTS (Global Organic Textile Standard)',
      significado:
        'estándar internacional que certifica productos textiles elaborados con fibras orgánicas y establece criterios ambientales y sociales para la cadena de suministro.',
    },
    {
      termino: 'Greenwashing',
      significado:
        'práctica mediante la cual una organización presenta afirmaciones ambientales engañosas o no sustentadas con evidencia suficiente para proyectar una imagen de mayor responsabilidad ambiental.',
    },
    {
      termino: 'Huella de carbono',
      significado:
        'cantidad total de emisiones de gases de efecto invernadero generadas directa o indirectamente por una organización, producto o proceso, expresadas generalmente en kg de CO₂ equivalente.',
    },
    {
      termino: 'Huella hídrica',
      significado:
        'indicador que representa el volumen de agua dulce utilizado o contaminado durante las diferentes etapas de producción de un bien o servicio.',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'alteración favorable o adversa del medio ambiente ocasionada total o parcialmente por los aspectos ambientales de una organización.',
    },
    {
      termino: 'ISO 14001:2015',
      significado:
        'norma internacional que establece los requisitos para implementar, mantener y mejorar un sistema de gestión ambiental en una organización.',
    },
    {
      termino: 'Medidas de manejo ambiental',
      significado:
        'acciones y procedimientos orientados a prevenir, mitigar, corregir o compensar los impactos ambientales derivados de una actividad productiva.',
    },
    {
      termino: 'OEKO-TEX Standard 100',
      significado:
        'sistema de certificación textil que verifica mediante ensayos de laboratorio que los componentes de un producto estén libres de sustancias nocivas para la salud humana.',
    },
    {
      termino: 'Producción más limpia',
      significado:
        'estrategia preventiva que busca aumentar la eficiencia en el uso de recursos y reducir los riesgos e impactos ambientales mediante la optimización continua de procesos, productos y servicios.',
    },
    {
      termino: 'Sistema de Gestión Ambiental (SGA)',
      significado:
        'conjunto de elementos y procesos mediante los cuales una organización establece su política ambiental, gestiona sus aspectos e impactos y mejora continuamente su desempeño ambiental.',
    },
  ],
  referencias: [
    {
      referencia:
        'Autoridad Nacional de Licencias Ambientales. (s. f.). Ley 99 de 1993: Ley de principios e instituciones ambientales.',
      link: '',
    },
    {
      referencia: 'Better Trail. (2025). Bluesign explicado.',
      link: '',
    },
    {
      referencia: 'Better Trail. (2025). ¿Qué tan sostenible es Patagonia?.',
      link: '',
    },
    {
      referencia:
        'Chico, D., Aldaya, M. M., & Garrido, A. (2013). Una evaluación de la huella hídrica de unos pantalones vaqueros: La influencia de las políticas agrícolas en la sostenibilidad de los productos de consumo. iAgua.',
      link: '',
    },
    {
      referencia:
        'Comisión Europea. (2009). Directiva 2009/125/CE del Parlamento Europeo y del Consejo, de 21 de octubre de 2009, por la que se instaura un marco para el establecimiento de requisitos de diseño ecológico aplicables a los productos relacionados con la energía. Diario Oficial de la Unión Europea.',
      link: '',
    },
    {
      referencia: 'Ecolife. (2025). ¿Qué tan sostenible es Eileen Fisher?.',
      link: '',
    },
    {
      referencia:
        'Eileen Fisher. (2022). Informe de Corporación de Beneficio 2022.',
      link: '',
    },
    {
      referencia:
        'Ellen MacArthur Foundation. (2017). Una nueva economía textil: Rediseñando el futuro de la moda.',
      link: '',
    },
    {
      referencia:
        'Fluence Corporation. (2020). La huella hídrica del jean azul.',
      link: '',
    },
    {
      referencia:
        'Global Standard gGmbH. (2023). Estándar Global de Textiles Orgánicos (GOTS), versión 7.0.',
      link: '',
    },
    {
      referencia:
        'Good On You. (2024). Eileen Fisher: Calificación de sostenibilidad.',
      link: '',
    },
    {
      referencia: 'Good On You. (2025). Pact: Calificación de sostenibilidad.',
      link: '',
    },
    {
      referencia:
        'Hoekstra, A. Y., Chapagain, A. K., Aldaya, M. M., & Mekonnen, M. M. (2011). Manual de evaluación de la huella hídrica: Estableciendo el estándar global. Earthscan.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación. (2015). NTC-ISO 14001:2015. Sistemas de gestión ambiental: Requisitos con orientación para su uso. ICONTEC.',
      link: '',
    },
    {
      referencia:
        'Lafayette Uniformes. (2022). Tecnología textil que cuida el planeta: Certificación OEKO-TEX STD 100.',
      link: '',
    },
    {
      referencia:
        "Levi Strauss & Co. (2015). El ciclo de vida de un jean: Comprendiendo el impacto ambiental de un par de jeans Levi's 501.",
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible de Colombia. (2005). Decreto 4741 de 2005, por el cual se reglamenta parcialmente la prevención y el manejo de los residuos o desechos peligrosos generados en el marco de la gestión integral. Diario Oficial n.º 46.137.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible de Colombia. (2015a). Decreto 1076 de 2015, por medio del cual se expide el Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible. Diario Oficial n.º 49.523.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible de Colombia. (2015b). Resolución 0631 de 2015, por la cual se establecen los parámetros y los valores límites máximos permisibles en los vertimientos puntuales a cuerpos de agua superficiales y a los sistemas de alcantarillado público y se dictan otras disposiciones. Diario Oficial n.º 49.486.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible de Colombia. (2018). Política Nacional para la Gestión Integral de Residuos Sólidos. Ministerio de Ambiente y Desarrollo Sostenible.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Minas y Energía de Colombia. (2022). Resolución 40156 de 2022, por la cual se adopta el Plan de Acción Indicativo del Programa de Uso Racional y Eficiente de Energía PAI-PROURE 2022-2030. Unidad de Planeación Minero Energética.',
      link: '',
    },
    {
      referencia:
        'Naciones Unidas, Departamento de Asuntos Económicos y Sociales. (s. f.). Protegiendo los ecosistemas e integridad de la marca: Ampliando el compromiso de Patagonia con el estándar Bluesign®.',
      link: '',
    },
    {
      referencia:
        'OEKO-TEX Association. (2024). STANDARD 100 by OEKO-TEX®: Criterios de prueba y valores límite.',
      link: '',
    },
    {
      referencia:
        'Organización Internacional de Normalización. (2006a). ISO 14040:2006. Gestión ambiental: Análisis del ciclo de vida: Principios y marco de referencia. ISO.',
      link: '',
    },
    {
      referencia:
        'Organización Internacional de Normalización. (2006b). ISO 14044:2006. Gestión ambiental: Análisis del ciclo de vida: Requisitos y directrices. ISO.',
      link: '',
    },
    {
      referencia:
        'Organización Internacional de Normalización. (2015). ISO 14001:2015. Sistemas de gestión ambiental: Requisitos con orientación para su uso. ISO.',
      link: '',
    },
    {
      referencia:
        'Pal, R., Garg, D., & Deswal, D. (2017). Huella hídrica de la industria del denim. En R. Paul (Ed.), Sostenibilidad en el denim (pp. 111-130). Woodhead Publishing/Elsevier.',
      link: '',
    },
    {
      referencia: 'Pact. (s. f.). Sostenibilidad certificada.',
      link: '',
    },
    {
      referencia:
        'Programa de las Naciones Unidas para el Medio Ambiente. (2021). Haciendo las paces con la naturaleza: Un plan científico para hacer frente a las emergencias del clima, la biodiversidad y la contaminación. UNEP.',
      link: '',
    },
    {
      referencia:
        'República de Colombia. (1993). Ley 99 de 1993, por la cual se crea el Ministerio del Medio Ambiente, se reordena el Sector Público encargado de la gestión y conservación del medio ambiente y los recursos naturales renovables, se organiza el Sistema Nacional Ambiental, SINA, y se dictan otras disposiciones. Diario Oficial n.º 41.146.',
      link: '',
    },
    {
      referencia:
        'República de Colombia. (2009). Ley 1333 de 2009, por la cual se establece el procedimiento sancionatorio ambiental y se dictan otras disposiciones. Diario Oficial n.º 47.417.',
      link: '',
    },
    {
      referencia:
        'República de Colombia. (2017). Ley 1844 de 2017, por medio de la cual se aprueba el "Acuerdo de París". Diario Oficial n.º 50.230.',
      link: '',
    },
    {
      referencia:
        'Secretaría del Senado de la República de Colombia. (2026). Ley 99 de 1993: Texto consolidado con modificaciones vigentes.',
      link: '',
    },
    {
      referencia:
        'Selfless Clothes. (s. f.). Pact: Informe de marca, sostenibilidad y ética.',
      link: '',
    },
    {
      referencia:
        'Selfless Clothes. (s. f.). Patagonia: Informe de marca, sostenibilidad y ética.',
      link: '',
    },
    {
      referencia:
        'World Resources Institute, & World Business Council for Sustainable Development. (2004). Protocolo de gases de efecto invernadero: Estándar corporativo de contabilidad y reporte (edición revisada). WRI/WBCSD.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar ',
          cargo: 'Experta temática ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejia Pinzon',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
}
