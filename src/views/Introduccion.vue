<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4 La industria de la confección genera interacciones significativas con el medio ambiente en cada etapa de su cadena productiva, el consumo de agua en los procesos húmedos, la generación de residuos sólidos en el corte, el uso de insumos químicos en la tinción y los acabados, y el consumo de energía en la operación de la maquinaria industrial constituyen aspectos ambientales regulados por la normativa colombiana vigente y evaluados por los sistemas de certificación que los mercados de exportación exigen a sus proveedores. Gestionar estos aspectos con rigor técnico no es una función separada del control de calidad es una de sus expresiones más concretas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block
        img(src="@/assets/curso/temas/intro/1.png" alt="")
      .col-lg-7
        .bg-color-1.p-4.mb-4
          p.mb-0 El presente componente de formación aborda los fundamentos normativos, técnicos y operativos de la gestión ambiental y la sostenibilidad aplicados al contexto de la confección industrial colombiana. Sus contenidos articulan la normativa ambiental de obligatorio cumplimiento, las normas técnicas internacionales de referencia, los principios de producción más limpia, las herramientas de medición del impacto ambiental y los modelos de sostenibilidad que determinan el acceso a las principales cadenas de valor globales.
        p Todo el contenido se desarrolla desde una perspectiva operativa, cada concepto se vincula con una función verificable en la planta de confección, cada norma se relaciona con un procedimiento de control y cada indicador se articula con un registro que el sistema de gestión de calidad debe mantener actualizado. 


    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
