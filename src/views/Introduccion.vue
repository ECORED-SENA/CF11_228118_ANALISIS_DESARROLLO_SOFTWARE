<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .cont_intro.pb-5
      .p-4(style="background-color:#DEBEFB;border-radius:12px;")
        .row(data-aos="zoom-in")
          .col(style="place-self:center;")
            p.mb-0 En este componente formativo, se abordarán los conceptos fundamentales relacionados con la arquitectura de sistemas web. Se examinará la naturaleza de su comportamiento, así como los componentes físicos y lógicos esenciales para su operación. Además, se identificarán y caracterizarán las tecnologías web del lado del cliente y del servidor, avanzando hacia la comprensión de las tecnologías que facilitan la comunicación y transferencia de información o la creación de servicios con otros sistemas. 
          .col-auto.d-none.d-lg-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/intro2.svg")

      .p-4.mt-4(style="background-color:#3A1D71;border-radius:12px;")
        .row(data-aos="zoom-in")
          .col-auto.d-none.d-md-block
            figure
              img(src="@/assets/curso/intro3.svg")
          .col(style="place-self:center;")
            p.mb-0.text-white Este componente tiene como objetivo fomentar un análisis crítico para la elección de tecnologías específicas, dependiendo de los requerimientos y el alcance de un proyecto estimado. Este análisis se sustenta en la descripción y rasgos distintivos que se detallan en cada sección de este documento.
      
      p.mt-4(data-aos="fade-right") Se profundizará en la arquitectura de un sistema web, explorando cómo su comportamiento depende tanto de los componentes físicos como lógicos, y cómo estos facilitan la identificación y caracterización de tecnologías web tanto del lado del cliente como del servidor. Estas tecnologías permiten la comunicación y el traspaso de información, así como la generación de servicios con otros sistemas.

      .p-4.mt-4(style="background-color:#3A1D71;border-radius:12px;")
        .row(data-aos="zoom-in")
          .col(style="place-self:center;")
            p.mb-0.text-white En este componente formativo, se desarrollarán conocimientos sobre la arquitectura web y el funcionamiento de internet. También se introducirán las tecnologías para el desarrollo web, como el #[em frontend] y el #[em back-end], y la arquitectura orientada a servicios, incluyendo SOAP, REST y API-REST. 
          .col-auto.d-none.d-md-block
            figure
              img(src="@/assets/curso/intro3.svg")
            


    


    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass">
.cont_intro, .cont_intro *
  position: relative
.cont_intro:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 110%
  bottom: -50px
  background: url(../assets/curso/intro1.png)
  background-size: 100% 100%
</style>
