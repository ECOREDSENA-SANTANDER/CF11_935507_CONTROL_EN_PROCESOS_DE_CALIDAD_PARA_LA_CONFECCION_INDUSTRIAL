<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Normas técnicas y sellos de sostenibilidad
    
    .bloque-texto-g.bg-color-1.btgbr-top.p-3.p-sm-4.p-md-5(data-aos='fade')
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las normas técnicas internacionales y los sellos de sostenibilidad han dejado de operar como elementos diferenciadores de adopción voluntaria en el sector confección; en la actualidad constituyen requisitos de acceso a las principales cadenas de valor globales, cuyos compradores exigen a sus proveedores evidencia documental, trazable y verificable de conformidad antes de formalizar vínculos comerciales. En el contexto colombiano, donde las exportaciones de confección se dirigen principalmente a mercados de América del Norte y Europa, el dominio técnico de estos sistemas normativos, entendido como el conocimiento de su alcance de certificación, sus criterios de evaluación por proceso y producto, y sus procedimientos de auditoría de tercera parte, se integra al sistema de gestión de calidad como una competencia operativa que sustenta la conformidad documental exigida a lo largo del ciclo productivo.


    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 ISO 14001 y normas técnicas del sector de la confección

    .row.justify-content-center.mb-5(data-aos='fade')
      .col-lg-4.mb-4.mb-lg-0
        .bg-color-1.p-4.h-100.d-flex.flex-column.align-items-center.justify-content-center
          p.mb-0 Fue publicada por la Organización Internacional de Normalización en su tercera edición en septiembre de 2015 y adoptada en Colombia por el Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC) bajo la denominación NTC-ISO 14001:2015. 
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/2.svg', alt='')
      .col-lg-4
        img.w-85x.mb-3.d-none.d-lg-block(src='@/assets/curso/temas/t2/3.svg', alt='')
        p.mb-0 La norma específica los requisitos para que una organización establezca, implemente, mantenga y mejore continuamente un sistema de gestión ambiental (SGA), con el fin de mejorar su desempeño ambiental y gestionar sus obligaciones de cumplimiento.

    p.mb-4 La estructura de ISO 14001:2015 sigue el modelo de alto nivel #[em High Level Structure] (HLS), el cual aporta dos ventajas concretas para las empresas de confección:

    .row.justify-content-center.mb-4(data-aos='fade')
      .col-lg-10
        .tarjeta--container.row
          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-4
              .col-5.col-md-5.col-lg-4
                img(src='@/assets/curso/temas/t2/tarj1-1.svg', alt='')
            p.mb-0 Coherencia estructural con otras normas de sistemas de gestión, en particular con ISO 9001:2015 sobre calidad, dado que ambas comparten esquema de cláusulas, terminología y ciclo de mejora continua PHVA.
          .col-md.tarjeta.color-secundario.p-5
            .row.justify-content-center.mb-4
              .col-5.col-md-5.col-lg-4
                img(src='@/assets/curso/temas/t2/tarj1-2.svg', alt='')
            p.mb-0 Integración operativa del sistema de gestión ambiental con el sistema de gestión de calidad ya existente, lo que reduce la duplicación de procedimientos, registros y auditorías en las organizaciones que cuentan con certificación ISO 9001.

    p.mb-4 Esta alineación resulta especialmente relevante en plantas de confección de mediana escala, donde la gestión de dos sistemas normativos independientes representaría una carga documental y administrativa difícilmente sostenible sin una estructura integrada.

    .mb-5(data-aos='fade-down')
      .titulo-sexto.color-secundario.mb-3
        h5 Tabla 5.
        span Cláusulas de ISO 14001:2015 y aplicación técnica en la planta de confección
      .tabla-a.color-secundario
        table
          thead
            tr
              th.w-25 Cláusula de ISO 14001:2015
              th Aplicación técnica en la planta de confección
          tbody
            tr
              td.fw-bold 4. Contexto de la organización
              td Identificación de las partes interesadas relevantes: autoridades ambientales, comunidades aledañas, clientes internacionales y proveedores de insumos químicos; análisis de los requisitos ambientales legales aplicables.
            tr
              td.fw-bold 5. Liderazgo y política ambiental
              td Compromiso documentado de la alta dirección con la reducción de residuos de corte, el control de vertimientos y el uso eficiente del agua y la energía en los procesos húmedos.
            tr
              td.fw-bold 6. Planificación: aspectos y riesgos
              td Elaboración de la matriz de aspectos e impactos ambientales por proceso (corte, costura, lavado, tinción, acabados, empaque) y definición de los controles operacionales prioritarios.
            tr
              td.fw-bold 7. Apoyo: competencia y comunicación
              td Programa de formación para operarios en separación de residuos, uso seguro de insumos químicos y reporte de incidentes ambientales; comunicación interna de los indicadores de desempeño.
            tr
              td.fw-bold 8. Operación y control operacional
              td Procedimientos escritos para el vertimiento de aguas residuales, el almacenamiento de residuos peligrosos y el mantenimiento preventivo de sistemas de tratamiento.
            tr
              td.fw-bold 9. Evaluación del desempeño
              td Indicadores mensuales de consumo de agua por unidad producida, kilogramos de residuos sólidos por turno y resultados de análisis fisicoquímicos de efluentes.
            tr
              td.fw-bold 10. Mejora continua
              td Gestión de no conformidades ambientales derivadas de auditorías internas, inspecciones de las CAR y revisiones periódicas por la dirección.

    .row.justify-content-center
      .col-lg-1.col-md-2.col-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/4.svg', alt='')
      .col-lg-11.col-md-10(data-aos="fade-left")
        p.mb-0 En materia de normas técnicas sectoriales, ICONTEC ha elaborado normas técnicas colombianas (NTC) aplicables a productos del sector confección que inciden sobre los procesos ambientalmente relevantes. Entre ellas se destacan las relativas a solidez del color (NTC 1500, NTC 1619), resistencia de costuras y especificaciones de etiquetado de fibras, las cuales se articulan con los requisitos ambientales cuando involucran procesos de tinción, blanqueo o acabados con sustancias químicas reguladas.

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Sellos verdes y certificaciones ambientales: OEKO-TEX, GOTS y Bluesign

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-2.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/5.svg', alt='')
      .col-lg-4
        p La proliferación de declaraciones ambientales no verificadas en el sector textil (denominada genéricamente #[em greenwashing]) motivó el desarrollo de sistemas de certificación independientes que respaldan, mediante auditorías de tercera parte, las afirmaciones ambientales de los productos y procesos.
        p Tres de estos sistemas concentran el mayor volumen de certificaciones en la cadena de valor de la confección industrial a nivel mundial y constituyen requisitos de acceso a importantes mercados de exportación:
      .col-lg-6.col-md-10
        .titulo-sexto.color-secundario.mb-3
          h5 Figura 4. 
          span Sello verde productos químicos textiles permitidos  
        figure
          img(src='@/assets/curso/temas/t2/fig4.png', alt='Sello de certificación OEKO-TEX con la denominación ECO PASSPORT, asociado a la verificación de sustancias utilizadas en procesos textiles.')

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-primario")
          .row(titulo="A. OEKO-TEX® STANDARD 100 (Seguridad química del producto)")
            .col-md-12
              p Desarrollado por la asociación OEKO-TEX® (con sede en Zúrich, Suiza, y Viena, Austria), este sistema certifica que cada componente de un artículo textil (fibras, hilos, telas, botones, cremalleras, etiquetas y acabados) ha sido sometido a pruebas de laboratorio acreditadas para verificar la ausencia de sustancias nocivas para la salud humana, entre ellas, metales pesados, pesticidas, formaldehído y colorantes cancerígenos.
              p La certificación se otorga por producto y requiere una renovación anual.
          .row(titulo="B. GOTS (Global Organic Textile Standard): trazabilidad orgánica integral")
            .col-md-12
              p Administrado por Global Standard gGmbH (Fráncfort del Meno, Alemania), el estándar GOTS exige que al menos el 70 % de las fibras del producto sean de origen orgánico certificado; en la categoría superior, este porcentaje asciende al 95 %.
              p Adicionalmente, establece criterios ambientales para todos los eslabones de la cadena de producción, como el tratamiento de aguas residuales y la restricción del uso de insumos químicos peligrosos, así como criterios sociales que incluyen salarios justos y la prohibición del trabajo infantil y del trabajo forzado.
              p Asimismo, contempla la trazabilidad documental desde el cultivo de la fibra hasta la prenda terminada, siendo este uno de los elementos centrales del sistema.
          .row(titulo="C. bluesign® (Eficiencia de recursos y seguridad química en la fabricación)")
            .col-md-12
              p Desarrollado por Bluesign Technologies Ag (Baar, Suiza), este sistema se diferencia de los anteriores por su enfoque en los procesos de fabricación y en la gestión de los insumos, en lugar de limitarse al análisis del producto terminado. El sistema evalúa aspectos relacionados con la seguridad química, el uso eficiente de recursos, el control de emisiones y residuos, la salud y seguridad ocupacional y la responsabilidad social.
              p Bluesign evalúa el uso responsable de recursos como el agua y la energía, el control de sustancias químicas, el tratamiento de aguas residuales y otras emisiones, así como las condiciones de seguridad de los trabajadores. Su enfoque busca prevenir los impactos desde el origen mediante el control de los insumos y la evaluación de los procesos productivos.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/6.svg', alt='')

    .row.justify-content-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/7.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p.mb-1 En el sector de la confección, la aplicación de estos sistemas de certificación puede contribuir al fortalecimiento de los procesos de control de calidad y gestión ambiental, especialmente en actividades como la selección y gestión de productos químicos, la optimización del consumo de agua y energía y el tratamiento de aguas residuales.
        p En Colombia, algunas empresas del sector textil cuentan con certificaciones internacionales. Por ejemplo, Lafayette declara contar con la certificación OEKO-TEX® STANDARD 100 para sus productos textiles.
        p Esta situación contrasta con el panorama internacional, donde diversas marcas han incorporado sistemas de certificación y evaluación ambiental y de seguridad química como parte de sus estrategias de sostenibilidad. En el caso de bluesign, la denominación bluepass es el nuevo sello de certificación que sustituye progresivamente las denominaciones anteriores bluesign® PRODUCT y bluesign® APPROVED.

    .row.bgimg-1.align-items-center.p-4.p-lg-5.mb-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .bg-white.bg-fondo-1.p-4.py-lg-5       
            SlyderA(tipo="b")
              .row.justify-content-center
                .col-md-5.col-lg-5.col-11
                  h4 Patagonia (Estados Unidos)
                  p Trabaja con bluesign desde 2000 y utiliza materiales evaluados bajo este sistema, con el propósito de gestionar los impactos ambientales y químicos de su cadena de suministro.
                .col-md-6.col-lg-5.col-11
                  .titulo-sexto.color-secundario.mb-3
                    h5 Figura 5. 
                    span Prendas de vestir Patagonia  
                  figure
                    img(src='@/assets/curso/temas/t2/fig5.png', alt='Grupo de personas ubicadas frente a una unidad móvil de reparación de prendas, junto a un aviso que indica servicios de arreglo y mantenimiento de vestuario.')
              .row.justify-content-center
                .col-md-5.col-lg-5.col-11
                  h4 Pact (Estados Unidos)
                  p Cuenta con productos certificados bajo GOTS y utiliza algodón orgánico certificado. Además, trabaja con fábricas con certificación Fair Trade, que incorporan criterios relacionados con condiciones laborales seguras, salarios justos y protección de los trabajadores.
                .col-md-6.col-lg-5.col-11
                  .titulo-sexto.color-secundario.mb-3
                    h5 Figura 6. 
                    span Prendas de vestir Pact
                  figure
                    img(src='@/assets/curso/temas/t2/fig6.png', alt='Dos personas en posición sentada que portan prendas superiores ajustadas sin mangas y con mangas cortas, combinadas con pantalones de silueta relajada y ajustada para uso cotidiano.')
              .row.justify-content-center
                .col-md-5.col-lg-5.col-11
                  h4 EILEEN FISHER (Estados Unidos)
                  p Desarrolla iniciativas de moda circular desde hace más de una década. Su programa Renew, creado en 2009, permite recolectar prendas usadas para repararlas, revenderlas, donarlas o transformarlas, prolongando así su vida útil. La empresa también ha trabajado con materiales y procesos respaldados por certificaciones como GOTS, OEKO-TEX® y bluesign® en productos y líneas seleccionadas.
                .col-md-6.col-lg-5.col-11
                  .titulo-sexto.color-secundario.mb-3
                    h5 Figura 7. 
                    span Prendas de vestir Eileen Fisher
                  figure
                    img(src='@/assets/curso/temas/t2/fig7.png', alt='Tres modelos presentan prendas de vestir de Eileen Fisher en tonos neutros, azul oscuro y verde azulado, con diseños amplios y de estilo minimalista.')



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
