<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Sostenibilidad y economía circular en la confección

    .bloque-texto-g.bg-color-4.btgbr-top.p-3.p-sm-4.p-md-5.mb-4(data-aos='fade')
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.py-lg-5
        p.mb-0 La sostenibilidad es la condición de los sistemas productivos, sociales y ambientales que satisfacen las necesidades del presente sin comprometer la capacidad de las generaciones futuras para satisfacer las propias (Comisión Mundial sobre el Medio Ambiente y el Desarrollo, 1987). En el contexto de la confección industrial, la sostenibilidad se expresa en la capacidad de las organizaciones para producir con eficiencia en el uso de recursos naturales, cumplimiento de la normativa ambiental vigente y responsabilidad social verificable a lo largo de toda la cadena de suministro.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-secundario.mb-3
          h5 Figura 12. 
          span Sostenibilidad
        figure
          img(src='@/assets/curso/temas/t5/fig12.svg', alt='Diagrama de tres componentes que relaciona dimensiones ambiental, social y económica, incluyendo prácticas sostenibles, condiciones laborales equitativas y estrategias de eficiencia en el uso de recursos.')

    p La industria de la moda y la confección es responsable del 10 % de las emisiones globales de CO2 (más que los sectores de aviación y navegación marítima combinados) y del 20 % de la contaminación hídrica industrial mundial, según el Programa de las Naciones Unidas para el Medio Ambiente (PNUMA, 2019). Ante este panorama, los modelos de producción sostenible y de economía circular han transitado de ser enfoques voluntarios a convertirse en condiciones de acceso a los principales mercados internacionales. 


    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.1 Ecodiseño y economía circular aplicados a la confección

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/2.png', alt='')
      .col-lg-6(data-aos="fade-left")
        p El ecodiseño, denominado también diseño ecológico o diseño para el medio ambiente, integra consideraciones ambientales en la fase de diseño y desarrollo del producto, antes de seleccionar los materiales y definir los procesos productivos.
        p.mb-0 La Comisión Europea, en la Directiva 2009/125/CE sobre diseño ecológico, señala que aproximadamente el 80 % del impacto ambiental de un producto se determina en la etapa de diseño. En la confección industrial, esto implica que las decisiones relacionadas con el tipo de fibra, la estructura del tejido, los accesorios incorporados y los acabados aplicados tienen consecuencias ambientales que se proyectan durante toda la vida útil de la prenda y condicionan sus posibilidades de reciclaje al final de esta.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t4/subt.svg', alt='')
      h3.mb-0 Criterios de ecodiseño en prendas de vestir

    p El ecodiseño aplicado a la confección considera cuatro dimensiones técnicas:

    SlyderF.mb-5(columnas="col-md-6 col-xl-4" data-aos="fade-down")
      .tarjeta.bg-color-5.p-4
        .row.justify-content-center.mb-3
          .col-5.col-md-6.col-lg-6
            img(src='@/assets/curso/temas/t5/tarj1-1.svg' alt='')
        h4.text-center Selección de materiales
        p Preferir fibras orgánicas certificadas, fibras recicladas posconsumo o fibras de origen biológico que presenten una menor huella ambiental documentada.
      .tarjeta.bg-color-5.p-4
        .row.justify-content-center.mb-3
          .col-5.col-md-6.col-lg-6
            img(src='@/assets/curso/temas/t5/tarj1-2.svg' alt='')
        h4.text-center Diseño para la durabilidad
        p Incorporar costuras reforzadas, materiales resistentes al lavado repetido y acabados que no requieran procesos de mantenimiento agresivos, con el fin de prolongar la vida útil de la prenda.
      .tarjeta.bg-color-5.p-4
        .row.justify-content-center.mb-3
          .col-5.col-md-6.col-lg-6
            img(src='@/assets/curso/temas/t5/tarj1-3.svg' alt='')
        h4.text-center Diseño para el desmontaje
        p Facilitar la separación de los materiales al finalizar la vida útil de la prenda, mediante el uso de un único tipo de fibra o materiales que puedan separarse físicamente sin procesos químicos.
      .tarjeta.bg-color-5.p-4
        .row.justify-content-center.mb-3
          .col-5.col-md-6.col-lg-6
            img(src='@/assets/curso/temas/t5/tarj1-4.svg' alt='')
        h4.text-center Minimización de insumos
        p Reducir el número de componentes, etiquetas, adornos y accesorios que puedan dificultar el reciclaje y aumentar la generación de residuos de la prenda.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t4/subt.svg', alt='')
      h3.mb-0 Economía circular
    
    p La economía circular propone un modelo productivo que elimina el concepto de residuo mediante el diseño deliberado de flujos de materiales cerrados. En este modelo, los materiales permanecen en uso el mayor tiempo posible y, al final de su vida útil, se recuperan y reintegran al ciclo productivo como nuevas materias primas.
    p La Fundación Ellen MacArthur, referente internacional en la difusión de este modelo, identifica tres principios fundamentales aplicables al sector textil:

    .row.justify-content-center.no-pointer.mb-4
      .col-lg-4.col-md-6.mb-3
        .tarjeta--boton.bg-color-2.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5.col-md-6.col-lg-5
              img(src='@/assets/curso/temas/t5/tarj2-1.svg', alt='')
          p.mb-0 Eliminar los residuos y la contaminación desde el diseño.
      .col-lg-4.col-md-6.mb-3
        .tarjeta--boton.bg-color-2.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5.col-md-6.col-lg-5
              img(src='@/assets/curso/temas/t5/tarj2-1.svg', alt='')
          p.mb-0 Mantener los productos y materiales en uso durante el mayor tiempo posible.
      .col-lg-4.col-md-6.mb-3
        .tarjeta--boton.bg-color-2.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5.col-md-6.col-lg-5
              img(src='@/assets/curso/temas/t5/tarj2-1.svg', alt='')
          p.mb-0 Regenerar los sistemas naturales de los cuales provienen las fibras naturales.
          
    .mb-4(data-aos='fade-down')
      .titulo-sexto.color-secundario.mb-3
        h5 Tabla 12. 
        span Modelos de Economía circular
      .tabla-a.color-secundario
        table
          thead
            tr
              th Modelo lineal tradicional en confección
              th Modelo de economía circular en confección
          tbody
            tr
              td #[b Extracción de materias primas:] obtención de fibras naturales o producción de fibras sintéticas a partir de recursos fósiles.
              td #[b Selección de materias primas sostenibles:] uso de fibras recicladas posconsumo, como rPET y algodón reciclado, o fibras de origen renovable con certificaciones reconocidas, como GOTS y FSC para fibras de celulosa.
            tr
              td #[b Producción:] fabricación de prendas con generación de retales y subproductos que no son aprovechados.
              td #[b Producción eficiente:] optimización del trazado mediante #[em software] CAD/CAM, reducción de desperdicios y reutilización de retales en el mismo proceso o en cadenas de valor complementarias.
            tr
              td #[b Distribución:] utilización de empaques de un solo uso, especialmente aquellos elaborados con materiales mixtos difíciles de reciclar.
              td #[b Distribución sostenible:] utilización de empaques monomateriales, reciclables o reutilizables, complementada con programas de logística inversa para su recuperación.
            tr
              td #[b Uso:] utilización de la prenda hasta su deterioro funcional, generalmente sin considerar alternativas de reparación o reutilización.
              td #[b Prolongación de la vida útil:] diseño de prendas durables, implementación de servicios de reparación y reacondicionamiento, y promoción de plataformas de intercambio o venta de prendas de segunda mano.
            tr
              td #[b Disposición final:] envío de las prendas a rellenos sanitarios o incineración sin recuperación de los materiales.
              td #[b Recuperación de materiales:] aplicación de procesos de reciclaje mecánico de fibras y, cuando sea viable, reciclaje químico, como la despolimerización del poliéster.

    p El reciclaje de textiles se desarrolla mediante dos rutas técnicas diferenciadas:

    .row.justify-content-center.mb-5(data-aos='fade')
      .col-lg-10
        .tarjeta--container.row
          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-4
              .col-5.col-md-6.col-lg-4
                img(src='@/assets/curso/temas/t5/tarj3-1.svg', alt='')
            h4 Reciclaje mecánico
            p.mb-0 Desfibra física y mecánicamente los tejidos para producir fibras regeneradas de menor longitud, que pueden utilizarse en aplicaciones de menor exigencia técnica, como rellenos industriales, materiales aislantes y productos textiles no tejidos.
          .col-md.tarjeta.color-secundario.p-5
            .row.justify-content-center.mb-4
              .col-5.col-md-6.col-lg-4
                img(src='@/assets/curso/temas/t5/tarj3-1.svg', alt='')
            h4 Reciclaje químico
            p.mb-0 Despolimeriza las fibras sintéticas, especialmente el poliéster, para obtener monómeros que pueden reingresar a la cadena de producción y convertirse nuevamente en fibras con propiedades comparables a las de las fibras vírgenes. Empresas como Worn Again Technologies, del Reino Unido, y Carbios, de Francia, han demostrado la viabilidad técnica de procesos aplicables a fibras de poliéster y mezclas de algodón y poliéster; sin embargo, su escalamiento industrial aún se encuentra en desarrollo.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t4/subt.svg', alt='')
      h3.mb-0 Moda circular

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-12
        figure
          img(src='@/assets/curso/temas/t5/infog.svg', alt='')


    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.2 Certificaciones de sostenibilidad #[em Fair Trade] y carbón neutral

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/3.png', alt='')
      .col-lg-6(data-aos="fade-left")
        p El ecosistema de certificaciones de sostenibilidad en el sector de la confección abarca diferentes dimensiones, entre ellas la seguridad química de los productos, la trazabilidad de las fibras orgánicas, las condiciones laborales de los trabajadores y la reducción o compensación de las emisiones de gases de efecto invernadero asociadas a la producción.
        .bg-color-1.p-4
          p.mb-0 Cada sistema de certificación establece criterios específicos para verificar el cumplimiento de determinados estándares ambientales, sociales o laborales, y su reconocimiento puede variar según los mercados y segmentos de consumo. A continuación, se describen cuatro sistemas de certificación de especial relevancia para el sector textil y sus principales implicaciones para el control de calidad.

    .mb-5(data-aos='fade-down')
      .titulo-sexto.color-secundario.mb-3
        h5 Tabla 13. 
        span Certificaciones de sostenibilidad
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th Certificación
              th Organismo certificador
              th Dimensión que certifica
              th Implicación para control de calidad
          tbody.fc
            tr
              td #[em Fair Trade International]
              td FLOCERT, organismo independiente de certificación del sistema #[em Fairtrade].
              td Condiciones comerciales y laborales justas, criterios para las organizaciones productoras y trazabilidad de las materias primas dentro de la cadena de suministro.
              td Verificar la documentación de los proveedores, el origen de las materias primas, los registros de trazabilidad y el cumplimiento de los criterios establecidos por el estándar #[em Fairtrade].
            tr
              td Carbono neutral
              td Organismos de certificación y verificación acreditados, como SCS #[em Global Services].
              td Medición, reducción y neutralización de las emisiones de gases de efecto invernadero (GEI) asociadas al alcance definido para la organización, el producto o el servicio.
              td Mantener registros de consumo energético y de combustibles, elaborar el inventario de GEI, documentar las acciones de reducción y, cuando corresponda, verificar la neutralización mediante mecanismos reconocidos.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/4.png', alt='')
      .col-lg-6(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t5/5.svg', alt='')
          .col-lg-10
            p.mb-0 La reducción de la huella de carbono en la confección industrial se logra mediante la combinación articulada de estrategias como la eficiencia energética, la sustitución de fuentes convencionales por alternativas renovables, la optimización de la logística de materias primas y productos terminados y, como complemento —no como sustituto de las reducciones reales—, la compensación de las emisiones residuales mediante proyectos certificados de reducción o captura de carbono.
        p El Acuerdo de París, adoptado en 2015 y aprobado por Colombia mediante la Ley 1844 de 2017, establece como objetivo mantener el aumento de la temperatura media mundial muy por debajo de 2 °C con respecto a los niveles preindustriales y continuar los esfuerzos para limitarlo a 1,5 °C. Asimismo, plantea alcanzar, en la segunda mitad del siglo, un equilibrio entre las emisiones antropogénicas de gases de efecto invernadero y su absorción por los sumideros.

    .row.justify-content-center
      .col-lg-9(data-aos="fade-right")
        p Este marco internacional impulsa transformaciones profundas en los modelos productivos, incluido el sector textil-confección, mediante la reducción progresiva de las emisiones, el aumento de la eficiencia en el uso de los recursos y la transición hacia modelos de producción más sostenibles y bajos en carbono.
        .row.justify-content-center
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t5/6.svg', alt='')
          .col-lg-7
            .bg-color-secundario.p-4.h-100.text-white.d-flex.align-items-center
              p.mb-0 La gestión ambiental y la sostenibilidad en la confección industrial son dimensiones constitutivas del control de calidad, no exigencias externas al proceso productivo. El cumplimiento de la normativa ambiental, la medición sistemática de los indicadores de impacto, la gestión técnica de los residuos conforme a la jerarquía establecida y el mantenimiento de la trazabilidad documental requerida por las certificaciones de sostenibilidad determinan la competitividad de largo plazo de las empresas del sector y su capacidad de acceso a los mercados internacionales. 
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
         img(src='@/assets/curso/temas/t5/7.png', alt='')


</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
