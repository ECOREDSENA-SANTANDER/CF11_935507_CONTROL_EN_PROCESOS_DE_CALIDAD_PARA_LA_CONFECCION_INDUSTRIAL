<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Medición del impacto ambiental en procesos de confección

    .bloque-texto-g.bg-color-4.btgbr-top.p-3.p-sm-4.p-md-5(data-aos='fade')
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.py-lg-5
        p.mb-0 El control del desempeño ambiental en la confección industrial descansa sobre la capacidad de cuantificar, registrar y analizar los datos que evidencian la relación entre el proceso productivo y el entorno natural. Sin indicadores definidos y medidos con regularidad, la gestión ambiental carece de dirección verificable y de evidencias objetivas para la toma de decisiones técnicas o para la demostración de conformidad ante los organismos certificadores y las autoridades ambientales. 


    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1 Indicadores de impacto ambiental y ciclo de vida del producto (#[em LCA])

    .row.justify-content-center.mb-5
      .col-lg-1.col-md-2.d-none.d-md-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/2.svg', alt='')
      .col-lg-11.col-md-10(data-aos="fade-left")
        p.mb-0 Un indicador de impacto ambiental es una medida cuantitativa que refleja el estado o la tendencia de un aspecto ambiental determinado a lo largo del tiempo. Para ser operativo en el contexto del control de la confección, debe cumplir criterios de especificidad, medibilidad, pertinencia y periodicidad definida, que permitan comparar el desempeño real con las metas establecidas en el plan de gestión ambiental de la organización.

    .mb-5(data-aos='fade-down')
      .titulo-sexto.color-secundario.mb-3
        h5 Tabla 9. 
        span Indicadores de impacto ambiental
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th Indicador ambiental
              th Unidad de medida
              th Proceso donde se mide
              th Frecuencia de registro
          tbody.fc
            tr
              td Consumo de agua por unidad producida
              td Litros / prenda.
              td Lavado, tinción y acabados húmedos.
              td Diaria.
            tr
              td Consumo de energía por turno
              td kWh / turno productivo.
              td Operación total de la planta.
              td Por turno.
            tr
              td Generación de residuos sólidos
              td kg de residuos / kg de tela procesada.
              td Corte y confección.
              td Semanal.
            tr
              td Residuos peligrosos generados
              td kg / mes.
              td Mantenimiento e insumos químicos.
              td Mensual.
            tr
              td Índice de aprovechamiento de tela
              td Porcentaje de tela utilizada vs. total ingresado.
              td Trazado y corte.
              td Por orden de producción.
            tr
              td Emisiones de CO₂ equivalente (estimadas)
              td kg CO₂e / unidad producida.
              td Toda la cadena productiva de la planta.
              td Mensual o trimestral.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/3.png', alt='')
      .col-lg-6(data-aos="fade-left")
        p.mb-0 El Análisis de Ciclo de Vida (ACV; #[em Life Cycle Assessment], #[em LCA], en inglés) es una metodología estandarizada en las normas ISO 14040:2006, Gestión ambiental. Análisis del ciclo de vida. Principios y marco de referencia, e ISO 14044:2006, Gestión ambiental. Análisis del ciclo de vida. Requisitos y directrices. Esta metodología permite evaluar los impactos ambientales potenciales asociados a un producto a lo largo de todas las etapas de su ciclo de vida, desde la extracción de materias primas, pasando por la manufactura y distribución, hasta su uso y disposición final.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t4/subt.svg', alt='')
      h3.mb-0 Las cuatro fases del LCA según ISO 14040:2006

    .row.bgimg-1.align-items-center.p-4.p-lg-5.mb-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center
          
          .bg-white.bg-fondo-1.p-4.py-lg-5   
            SlyderE(indicadores="centro")
              .row.justify-content-center.mb-4
                .col-md-6.col-lg-3.col-11
                  h4 Definición del objetivo y el alcance
                  p Delimita qué sistema de producto se analizará, con qué propósito y bajo qué unidad funcional. Ejemplo: analizar el ciclo de vida de una prenda de algodón de 200 gramos, desde la obtención de la fibra hasta su disposición final.
                .col-md-5.col-lg-7.col-11
                  img(src='@/assets/curso/temas/t4/slider1-1.png', alt='')
              .row.justify-content-center.mb-4
                .col-md-6.col-lg-3.col-11
                  h4 Inventario del Ciclo de Vida (ICV)
                  p Cuantifica las entradas y salidas de cada etapa, como materias primas, agua, energía, productos, subproductos, residuos y emisiones. Ejemplo: registrar el consumo de algodón, agua y energía, así como los residuos textiles generados durante la fabricación.
                .col-md-5.col-lg-7.col-11
                  img(src='@/assets/curso/temas/t4/slider1-2.png', alt='')
              .row.justify-content-center.mb-4
                .col-md-6.col-lg-3.col-11
                  h4 Evaluación del Impacto del Ciclo de Vida (EICV)
                  p Traduce los datos del inventario en categorías de impacto ambiental, como cambio climático, consumo de agua, toxicidad humana y eutrofización. Ejemplo: evaluar los impactos asociados al consumo de agua y energía y a las emisiones generadas durante la producción.
                .col-md-5.col-lg-7.col-11
                  img(src='@/assets/curso/temas/t4/slider1-3.png', alt='')
              .row.justify-content-center.mb-4
                .col-md-6.col-lg-3.col-11
                  h4 Interpretación
                  p Analiza los resultados, identifica los puntos de mayor impacto (#[em hotspots]) y formula recomendaciones para apoyar la toma de decisiones. Ejemplo: identificar que el proceso de teñido presenta un alto consumo de agua y energía y proponer alternativas para reducir estos impactos.
                .col-md-5.col-lg-7.col-11
                  img(src='@/assets/curso/temas/t4/slider1-4.png', alt='')
    
    p En la confección industrial, la aplicación del LCA permite comparar alternativas de proceso (por ejemplo, tinción convencional frente a tinción con colorantes reactivos de bajo impacto) y seleccionar la opción con menor carga ambiental global. El control de calidad interviene en la fase de inventario, suministrando los datos reales de consumo de materiales, agua y energía registrados durante la producción, así como los volúmenes y características de los residuos generados por proceso.


    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2 Huella hídrica, huella de carbono y reducción de emisiones

    .row.justify-content-center.mb-5
      .col-lg-1.col-md-2.d-none.d-md-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/7.svg', alt='')
      .col-lg-11.col-md-10(data-aos="fade-left")
        p.mb-0 La huella hídrica y la huella de carbono son indicadores agregados que cuantifican el impacto ambiental de un proceso o producto en dos de las categorías de mayor relevancia global: el consumo y la contaminación del recurso hídrico, y la contribución al cambio climático mediante la emisión de gases de efecto invernadero (GEI). Su estandarización metodológica permite la comparación entre plantas, sectores y cadenas de valor, y su reporte es exigido por varios de los sistemas de certificación de sostenibilidad aplicables al sector confección.

    .mb-5(data-aos='fade-down')
      .titulo-sexto.color-secundario.mb-3
        h5 Tabla 10. 
        span Indicadores según huellas
      .tabla-a.color-secundario
        table
          thead
            tr
              th.w-25 Indicador
              th Definición técnica normalizada
              th Expresión en el sector confección
          tbody.fc
            tr
              td Huella hídrica azul
              td Volumen de agua superficial o subterránea consumida como consecuencia de un proceso productivo, ya sea por evaporación, incorporación al producto o transferencia a otra cuenca o período.
              td Agua utilizada y consumida en procesos como lavado, teñido, blanqueo y otros acabados húmedos de prendas.
            tr
              td Huella hídrica gris
              td Volumen de agua dulce necesario para asimilar una carga contaminante determinada, hasta alcanzar la concentración máxima aceptable establecida por la normativa o por las condiciones naturales del cuerpo receptor.
              td Permite estimar el volumen de agua requerido para asimilar la carga contaminante de los efluentes generados en procesos de teñido y acabado.
            tr
              td Huella de carbono - Alcance 1
              td Emisiones directas de gases de efecto invernadero (GEI) provenientes de fuentes que son propiedad o están bajo el control de la organización.
              td Combustión de gas natural en calderas para la producción de vapor y uso de combustibles en vehículos propios o equipos controlados por la planta.
            tr
              td Huella de carbono - Alcance 2
              td Emisiones indirectas de GEI asociadas a la generación de la electricidad, vapor, calor o refrigeración adquiridos y consumidos por la organización.
              td Emisiones asociadas al consumo de electricidad utilizada por máquinas de coser, cortadoras, planchas eléctricas, sistemas de iluminación y otros equipos de la planta.
            tr
              td Huella de carbono - Alcance 3
              td Otras emisiones indirectas de GEI generadas en fuentes que no son propiedad ni están bajo el control de la organización, pero que hacen parte de su cadena de valor.
              td Emisiones asociadas al transporte de materias primas, distribución de productos terminados, desplazamientos relacionados con la actividad, uso de las prendas y tratamiento al final de su vida útil.

    p La reducción de emisiones en la planta de confección se logra mediante tres vías técnicas complementarias:

    .row.justify-content-center.no-pointer.mb-4
      .col-lg-4.col-md-6.mb-3
        .tarjeta--boton.bg-color-2.p-4.pb-lg-5.h-100
          .row.justify-content-center.mb-3
            .col-5.col-md-6.col-lg-5
              img(src='@/assets/curso/temas/t4/tarj1-1.svg', alt='')
          p.mb-0 La eficiencia energética, que reduce el consumo total de energía por unidad producida.
      .col-lg-4.col-md-6.mb-3
        .tarjeta--boton.bg-color-2.p-4.pb-lg-5.h-100
          .row.justify-content-center.mb-3
            .col-5.col-md-6.col-lg-5
              img(src='@/assets/curso/temas/t4/tarj1-2.svg', alt='')
          p.mb-0 La sustitución progresiva de fuentes de energía fósil por energías de origen renovable.
      .col-lg-4.col-md-6.mb-3
        .tarjeta--boton.bg-color-2.p-4.pb-lg-5.h-100
          .row.justify-content-center.mb-3
            .col-5.col-md-6.col-lg-5
              img(src='@/assets/curso/temas/t4/tarj1-3.svg', alt='')
          p.mb-0 La optimización de los procesos logísticos para disminuir el transporte de materiales.

    p Explore el pódcast "Dato sobre la elaboración de un pantalón de #[em denim]" y descubra datos interesantes sobre las etapas, materiales y procesos que intervienen en la confección de esta prenda.

    .bg-color-3(data-aos='fade')
      img(src='@/assets/curso/temas/t4/podcast.svg', alt='')
      .bg-color-primario.p-4
        .tarjeta.bg-white.p-4
          TarjetaAudio.color-acento-botones(
          texto="Dato sobre la elaboración de un pantalón de <em>denim</em>"
          :audio="require_src('@/assets/curso/temas/t4/CF11_935507_podcast.mp3')")
          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")


    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.3 Ahorro energético en procesos de confección industrial

    .row.justify-content-center.mb-4
      .col-lg-1.col-md-2.d-none.d-md-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/4.svg', alt='')
      .col-lg-11.col-md-10(data-aos="fade-left")
        p.mb-0 El consumo de energía eléctrica representa, en promedio, entre el 15 % y el 25 % de los costos operativos de una planta de confección industrial (mediana escala), de acuerdo con datos del sector publicados por la Unidad de Planeación Minero Energética (UPME) de Colombia. La identificación y corrección de las fuentes de consumo ineficiente constituye, por tanto, una oportunidad simultánea de reducción de costos y de impacto ambiental.

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-4.btgbl-top.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade')
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Según información del fabricante Consew y estudios del sector publicados por la International Labour Organization (ILO), la sustitución de los motores de embrague tradicionales de las máquinas de coser industriales por servomotores de velocidad variable puede reducir el consumo eléctrico del motor entre un 50 % y un 70 %. Esto se debe a que los servomotores consumen energía principalmente durante la operación, mientras que los motores de embrague pueden mantener un consumo elevado incluso cuando la máquina permanece en reposo.

    .mb-5(data-aos='fade-down')
      .titulo-sexto.color-secundario.mb-3
        h5 Tabla 11.
        span Ahorro energético por área o equipos
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th.w-25 Área o equipo
              th Medida técnica de ahorro
              th Referencia de reducción potencial
          tbody.fc
            tr
              td Máquinas de coser industriales
              td Sustitución de motores de embrague por servomotores de velocidad variable y apagado automático cuando se presenten períodos de inactividad superiores a 3 minutos.
              td 50-70 % de reducción potencial en el consumo del motor, según información de fabricantes como Consew, Juki y Brother.
            tr
              td Planchas y termofijadoras
              td Control de la temperatura según el tipo de fibra y programación de apagado automático durante las pausas productivas.
              td 15-25 % de reducción potencial en el consumo del área de acabados mediante un control optimizado de la temperatura.
            tr
              td Iluminación de la planta
              td Reemplazo de luminarias fluorescentes T8 por luminarias LED de alta eficiencia energética.
              td 40-60 % de reducción potencial en el consumo de energía destinado a iluminación, según referencias del IDAE.
            tr
              td Sistema de aire comprimido
              td Detección y corrección de fugas en tuberías y ajuste de la presión de suministro al nivel mínimo requerido por los equipos neumáticos.
              td 20-30 % de reducción potencial en el consumo del sistema de aire comprimido, según referencias del Compressed Air Challenge.
            tr
              td Corte automatizado CNC
              td Concentración de los períodos de operación del equipo para reducir ciclos innecesarios de arranque, calentamiento y espera.
              td 10-15 % de reducción potencial estimada en el consumo de la cortadora automática, según las condiciones de operación.

    .row.justify-content-center.mb-5(data-aos='fade')
      .col-lg-10
        .bg-color-secundario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-1.col-md-2.col-3.mb-3.mb-lg-0
              img(src='@/assets/curso/temas/t1/3.svg', alt='')
            .col-lg-11.col-md-10
              p.text-white.mb-0 #[b Nota:] las estimaciones son referenciales y varían según el estado de conservación de los equipos y las condiciones específicas de cada planta. Se recomienda la medición directa con analizadores de redes para obtener datos propios.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-12
        .titulo-sexto.color-secundario.mb-3
          h5 Figura 11. 
          span Emisiones en la industria de la moda
        figure
          img(src='@/assets/curso/temas/t4/fig11.svg', alt='Esquema informativo que presenta la distribución de emisiones en la industria de la moda a lo largo de la cadena de suministro, incluyendo producción de material, preparación de hilos, producción de telas, procesos con agua, corte y confección, transporte, venta, uso del producto y disposición final.')


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
