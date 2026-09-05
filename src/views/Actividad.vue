<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Sostenibilidad en el proceso productivo de la confección',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar el nivel de apropiación de los fundamentos relacionados con la gestión ambiental, normativa aplicable, sostenibilidad en la confección industrial.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal de la normativa ambiental en la confección industrial?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Regular los procesos productivos para garantizar el cumplimiento de requisitos ambientales y sostenibles.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Definir únicamente los estándares de calidad de las prendas terminadas sin relación con el ambiente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Controlar exclusivamente los procesos administrativos de la empresa de confección.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Establecer parámetros de comercialización en mercados internacionales de textiles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué se entiende por aspecto ambiental en un proceso de confección?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El cambio que ocurre en el medio ambiente después del proceso productivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El elemento del proceso que puede interactuar con el entorno natural.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El resultado económico derivado de la producción industrial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La evaluación final del impacto ambiental del producto terminado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es un ejemplo de impacto ambiental en la confección?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de maquinaria en procesos de costura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Consumo de energía eléctrica en planta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Contaminación del agua por vertimientos sin tratamiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Selección de materias primas textiles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el propósito de la norma ISO 14001:2015?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Regular el diseño de prendas de vestir en la industria textil.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Establecer requisitos para sistemas de gestión ambiental en organizaciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Controlar el escalado de tallas en producción industrial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir estándares de comercialización internacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué caracteriza a la producción más limpia?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El aumento de la producción sin control de recursos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La eliminación total de procesos industriales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La sustitución completa de maquinaria por procesos manuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La aplicación de estrategias preventivas para reducir impactos ambientales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el principal objetivo de la gestión de residuos textiles?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la cantidad de residuos generados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Disponer todos los residuos en rellenos sanitarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir, reutilizar y reciclar los residuos generados en el proceso.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar el uso de materiales textiles en producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué indicador permite medir el consumo de agua en la producción?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Huella de carbono.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Huella hídrica.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Índice de productividad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Balance financiero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es una característica de la economía circular?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso único de los materiales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminación del reciclaje.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mantenimiento de los materiales en uso el mayor tiempo posible.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Incremento de residuos industriales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué certificación garantiza la ausencia de sustancias nocivas en textiles?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'ISO 9001.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'OEKO-TEX Standard 100.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'NTC 1500.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fair Trade.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es el objetivo del análisis de ciclo de vida (LCA)?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Analizar los impactos ambientales en todas las etapas del producto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Evaluar únicamente la etapa de producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Determinar el costo del producto final.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar la distribución comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es una medida de manejo ambiental preventiva?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tratamiento de aguas residuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustitución de sustancias peligrosas por alternativas seguras.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reforestación posterior al impacto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Pago de tasas ambientales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué entidad regula la normativa ambiental en Colombia?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ministerio de Educación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ministerio de Comercio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'ICONTEC.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ministerio de Ambiente y Desarrollo Sostenible.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué representa la huella de carbono?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las emisiones de gases de efecto invernadero.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El consumo de agua en producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La cantidad de residuos sólidos generados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El consumo de materias primas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es un residuo peligroso en confección?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Retales de tela limpia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cartón de empaques.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aceites usados de maquinaria.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Hilos sobrantes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué busca el eco-diseño?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la complejidad del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir el impacto ambiental desde la etapa de diseño.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar el consumo de materiales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la funcionalidad del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es un principio de la producción limpia?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disposición final como primera opción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incremento del desperdicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Prevención en la fuente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Uso ilimitado de recursos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué mide un indicador ambiental?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El comportamiento financiero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El desempeño ambiental del proceso.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La productividad del operario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La calidad del diseño.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué implica la certificación GOTS?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de fibras sintéticas exclusivamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Producción sin control ambiental.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminación de trazabilidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cumplimiento de criterios orgánicos y sociales en la cadena textil.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué es la economía circular?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Modelo lineal de producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sistema que elimina el concepto de residuo mediante reutilización y reciclaje.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Producción sin control de recursos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Uso exclusivo de materias primas nuevas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el objetivo de la sostenibilidad en confección?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la producción sin control.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la calidad del producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Garantizar el equilibrio entre producción, ambiente y sociedad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar procesos industriales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
      ],
      mensaje_final_aprobado: 'Ha superado la actividad y demuestra sólidos conocimientos sobre gestión de la calidad y sostenibilidad en la confección.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>