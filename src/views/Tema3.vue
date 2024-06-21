<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Introducción a la arquitectura orientada a servicios
    
    .cont_3_1
      p(data-aos="fade-right" style="position:relative;") Hasta ahora, se han explorado las tecnologías para el desarrollo web, pero es crucial entender que, además de crear aplicaciones, también es posible desarrollar servicios. Para ello, es esencial abordar el concepto de la Arquitectura Orientada a Servicios, conocida como SOA. SOA es un tipo de arquitectura de #[em software] que se fundamenta en la integración de aplicaciones a través de servicios. Según IBM, SOA se define como: 

      .col-xl-10.m-auto.mt-4(data-aos="zoom-in")
        .p-4(style="background-color:#E3DFEB;border-radius:8px;")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/1.svg")
            .col(style="place-self:center;")
              p.mb-0 …una manera de hacer que los componentes de #[em software] sean reutilizables mediante interfaces de servicio. Estas interfaces utilizan estándares de comunicación que les permiten incorporarse rápidamente a nuevas aplicaciones sin necesidad de una integración profunda cada vez…” (IBM, 2021).
      
      p.mt-4(data-aos="fade-right" style="position:relative;") En este contexto, es destacable el desarrollo de #[em software] en sí, la reutilización de componentes y la comunicación con distintas aplicaciones sin la necesidad de crear desarrollos a medida para cada aplicación con la que se desee conectar. De aquí surge el concepto de servicio y de interoperabilidad. 

      .col-xl-10.m-auto.mt-4
        .bloque1.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Dentro de las implementaciones de SOA, se encuentran las arquitecturas REST y SOAP, las cuales siguen los mismos principios de SOA. REST y SOAP son dos enfoques diferentes para la transmisión de datos en línea. Ambos definen cómo diseñar interfaces de programación de aplicaciones (APIS), que actúan como medios para que dos aplicaciones o plataformas se comuniquen entre sí, exponiendo o publicando un conjunto de servicios y reglas sobre cómo acceder a ellos. La principal diferencia entre ellos es que SOAP es un protocolo estructurado, mientras que REST no lo es.
    
    p.mt-4(data-aos="fade-right") Generalmente, uno de estos dos enfoques regirá las APIS, definiendo así una serie de reglas tanto para la publicación de servicios como para el acceso a los mismos, según el caso práctico y las preferencias del desarrollador. 
    
    .cont_3_2.mt-5
      .cont_decorativo.mb-4(data-aos="flip-up" style="max-width:fit-content;position:relative;")
        .row
          .col-auto.ps-3.pe-0
            figure
              img(src="@/assets/curso/tema1/3.svg")
          .col.pe-4(style="place-self:end;")
            h3.text-white.mb-0.pb-2 SOAP
      
      .row(style="position:relative;")
        .col(style="place-self:center;" data-aos="fade-right")
          p.mb-0 SOAP, acrónimo de #[em Simple Object Access Protocol] (Protocolo Simple de Acceso a Objetos), se define como un protocolo o conjunto de reglas estándar diseñado principalmente para facilitar la comunicación entre aplicaciones desarrolladas en diferentes lenguajes de programación y que operan en distintas plataformas tecnológicas.
        .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema3/3.svg")
      
      .row.mt-4(style="position:relative;")
        .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema3/4.svg")
        .col(style="place-self:center;" data-aos="fade-right")
          p.mb-0 Debido a su naturaleza de protocolo, SOAP incorpora reglas integradas que, aunque aumentan la seguridad y la estructuración de los mensajes, también pueden incrementar la complejidad y la carga en los servidores, lo que a veces resulta en retrasos en los tiempos de carga de las páginas o en las respuestas. Sin embargo, debido a su robustez en estructura y seguridad, SOAP es ampliamente utilizado en el sector empresarial, donde estos factores son críticos. (RedHat, 2021).
      
      p.mt-4(data-aos="fade-right" style="position:relative;") Adicionalmente, el envío de una solicitud de datos a una API de SOAP puede gestionarse a través de diversos protocolos de la capa de aplicación, tales como HTTP, utilizado comúnmente por los navegadores web; SMTP, el protocolo para el envío de correos electrónicos; y TCP, entre otros. Una vez recibida una solicitud, los mensajes SOAP retornan por defecto documentos XML, un lenguaje de etiquetas que es comprensible tanto para máquinas como para personas, facilitando así la interoperabilidad entre sistemas dispares. 

      .cont_decorativo.mb-4.mt-5(data-aos="flip-up" style="max-width:fit-content;position:relative;")
        .row
          .col-auto.ps-3.pe-0
            figure
              img(src="@/assets/curso/tema1/3.svg")
          .col.pe-4(style="place-self:end;")
            h3.text-white.mb-0.pb-2 REST
      
      .row(style="position:relative;")
        .col(style="place-self:center;" data-aos="fade-right")
          p.mb-0 REST, acrónimo de #[em Representational State Transfer] (Transferencia de Estado Representacional), se define como un conjunto de principios arquitectónicos que se adaptan a las necesidades de los servicios web, y es especialmente valorado en aplicaciones móviles por la velocidad de transmisión y la ligereza de la información. Al enviar una solicitud de datos a una API REST, se utiliza el protocolo de transferencia de hipertexto, comúnmente conocido como HTTP. Las API diseñadas según los principios de REST (conocidas como API o servicios web RESTFUl) responden a estas solicitudes con mensajes en formatos como HTML, XML, JSON, entre otros. El formato más utilizado para los mensajes es la notación de objetos de JavaScript (JSON), que puede ser interpretado por cualquier lenguaje de programación, es liviano y comprensible tanto para máquinas como para personas. Así, las API RESTFUL son más flexibles y fáciles de configurar. (RedHat, 2021). 
        .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema3/5.svg")
      
      .col-xl-10.m-auto.mt-5
        .bloque1.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/6.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En conclusión, al comparar estas dos arquitecturas, las API REST son ideales para los escenarios tecnológicos más modernos, como el internet de las cosas (IoT), el desarrollo de aplicaciones móviles y la computación sin servidor, debido a su ligereza. Por otro lado, los servicios web SOAP ofrecen niveles superiores de seguridad y cumplimiento para operaciones asociadas con la dinámica operativa de las empresas; sin embargo, la rigurosidad de sus reglas puede resultar en una gestión más pesada de la información. 
    
  
    
 

      
</template>

<script>
export default {
  name: 'Tema3',
  components: {},
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
<style lang="sass">
.cont_3_1
  position: relative
.cont_3_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 70%
  top: 0
  background: rgb(255,255,255)
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,239,255,1) 100%)
.cont_3_2
  position: relative
.cont_3_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 85%
  top: 0
  background: rgb(255,255,255)
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,239,255,1) 100%)
</style>
