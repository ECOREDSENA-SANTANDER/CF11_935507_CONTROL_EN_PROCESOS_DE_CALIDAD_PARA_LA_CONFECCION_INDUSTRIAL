<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p La gestión de la calidad y la sostenibilidad en la confección integra los principios ambientales, técnicos y productivos necesarios para reducir los impactos asociados a la fabricación de prendas. Este componente aborda la normativa ambiental aplicable, las normas técnicas y certificaciones de sostenibilidad, así como estrategias de producción limpia, gestión y aprovechamiento de residuos textiles. Asimismo, incorpora herramientas para la medición del impacto ambiental, como los indicadores ambientales, el análisis de ciclo de vida (LCA), la huella hídrica y la huella de carbono. Finalmente, promueve la sostenibilidad y la economía circular mediante el uso eficiente de los recursos, el ahorro energético, la reducción de emisiones, la valorización de residuos y la implementación de prácticas orientadas a prolongar el ciclo de vida de los productos textiles. 

    .row.justify-content-center
      .col-lg-12.mb-5.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La gestión de la calidad y sostenibilidad en la confección que integra normativa ambiental, estándares técnicos, producción limpia, medición del impacto ambiental y estrategias de economía circular.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis



</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
