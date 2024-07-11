<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Introducción a las tecnologías para el desarrollo web
    
    .cont_2_1
      .row(style="position:relative;")
        .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
          p Las tecnologías de desarrollo web abarcan una amplia gama de lenguajes y herramientas de programación que se utilizan para crear sitios web, aplicaciones dinámicas y plataformas, dotadas de todas las funciones necesarias para satisfacer una diversidad de necesidades y requerimientos de los usuarios. Estas tecnologías están en constante evolución; no es necesario realizar un análisis exhaustivo sobre su estado de transformación para notar el creciente auge de diversos lenguajes de programación que facilitan la realización de acciones más complejas y efectivas en los sitios web. Por esta razón, las tecnologías web son consideradas multiplataforma, una característica que se resalta en la afirmación del grupo de expertos de Ingenio Virtual.
          figure.d-none.d-md-block
            img(src="@/assets/curso/tema2/1.svg" style="max-width:100px;")
        .col-lg-5(data-aos="fade-left")
          figure.m-auto.col-9.col-md-8.col-lg-12
            img(src="@/assets/curso/tema2/2.png")
      
      .col-xl-10.m-auto.mt-4
        .bloque1.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/3.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 ... Los modelos y tecnologías de desarrollo web han evolucionado significativamente en la última década. Existen multitud de aplicaciones, #[em frameworks], librerías, arquitecturas y sistemas de publicación que en sus diferentes versiones reciben actualizaciones y mejoras continuas. El progreso también se ha observado en la administración de sistemas, los servicios de alojamiento, técnicas de escalabilidad, monitorización y gestión de centros de procesos de datos. Esta evolución ha propiciado la convergencia de una gran cantidad de tecnologías, herramientas y estilos arquitectónicos para el desarrollo de sitios web y aplicaciones. (Ingenio Virtual, 2018). 
    
    p.mt-4(data-aos="fade-right") Esta tendencia subraya la importancia de mantenerse actualizado con las últimas tecnologías y enfoques en el campo del desarrollo web, para poder aprovechar al máximo las capacidades que ofrecen estas herramientas modernas. 

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_1 2.1 Tecnologías del #[em frontend] 
    
    p(data-aos="fade-right") Las tecnologías de #[em frontend] se utilizan para el desarrollo del "lado cliente" de un sitio web o aplicación. Estas tecnologías son responsables de desarrollar los componentes interactivos y producir los elementos visuales con los que los usuarios interactúan, como colores, estilos de texto, imágenes, botones y menús de navegación, entre otros objetos interactivos. Estas tecnologías y lenguajes están implementados en los diferentes navegadores, facilitando así su uso y compatibilidad. 

    .cont_decorativo.mb-4.mt-5(data-aos="flip-up" style="max-width:fit-content;position:relative;")
      .row
        .col-auto.ps-3.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.pe-4(style="place-self:end;")
          h3.text-white.mb-0.pb-2 HTML5
    
    .row(style="position:relative;")
      .col(style="place-self:center;" data-aos="fade-right")
        .p-3(style="background-color:#E8EEFE;")
          p.mb-0 HTML, abreviatura de #[em Hyper Text Markup Language], es una de las tecnologías esenciales para el desarrollo de todo tipo de aplicaciones web. Proporciona la estructura base para una página web. El código HTML garantiza que el contenido de un sitio web esté adecuadamente formateado y estructurado, permitiendo que cada navegador de Internet muestre el contenido como está previsto. Sin HTML, los navegadores no podrían mostrar texto, cargar imágenes ni otros elementos esenciales. 
      .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/4.svg")
    
    .col-xl-10.m-auto.mt-4(data-aos="zoom-in")
      .p-4(style="background-color:#E3DFEB;border-radius:8px;")
        .row
          .col-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/5.svg")
          .col(style="place-self:center;")
            p.mb-0 HTML5, la versión más reciente de HTML, incluye un conjunto más amplio de tecnologías que permiten a los sitios web y a las aplicaciones ofrecer más diversidad y potencia. Este conjunto es conocido como HTML5 y ofrece una gran variedad de recursos, incluyendo librerías, #[em plugins] y APIS que se pueden utilizar junto con lenguajes de programación como JavaScript para crear sitios web más interactivos y dinámicos. 
    
    .cont_2_2.mt-5.pb-4
      p.fw-bold(data-aos="fade-right") Algunas de las tecnologías más utilizadas en HTML5 incluyen: 
      .row.mt-4
        .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.col-xl-11.m-auto(titulo="Canvas")
              p Es un elemento HTML5 que se utiliza para dibujar imágenes y formas con el fin de manipularlas. También se puede utilizar para casos como gráficos y animaciones de juegos. 
            .row.col-xl-11.m-auto(titulo="Almacenamiento web")
              p Se utiliza para almacenar información directamente en el navegador. Algunos ejemplos de esto serían: almacenar la información de inicio de sesión del usuario y guardar las preferencias del usuario para un sitio web. 
            .row.col-xl-11.m-auto(titulo="<em>Web Workers</em>")
              p Esta tecnología habilita un #[em script] que sigue ejecutándose en segundo plano cuando se abre una página web y se usa principalmente en sitios web con capacidades sin conexión. Hace que las páginas estén disponibles sin conexión y permite el uso de notificaciones como web #[em Push]. Puede enviar estas notificaciones incluso cuando su navegador no está abierto. 
            .row.col-xl-11.m-auto(titulo="<em>Web Sockets</em>")
              p Permite una conexión bidireccional persistente entre el usuario y el servidor. Los casos de uso más comunes incluyen chats y notificaciones en aplicaciones web. 
        .col-lg-5(data-aos="fade-left")
          figure.m-auto.col-9.col-md-8.col-lg-12
            img(src="@/assets/curso/tema2/7.png")
    
    .cont_decorativo.mb-4.mt-5(data-aos="flip-up" style="max-width:fit-content;position:relative;")
      .row
        .col-auto.ps-3.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.pe-4(style="place-self:end;")
          h3.text-white.mb-0.pb-2 CSS3
    
    .row(style="position:relative;")
      .col(style="place-self:center;" data-aos="fade-right")
        .p-3(style="background-color:#E8EEFE;")
          p.mb-0 Hojas de Estilo en Cascada, conocidas por sus siglas en inglés como #[em Cascading Style Sheets] (CSS), son el lenguaje de estilos utilizado para describir la presentación de documentos HTML o XML. CSS especifica cómo deben ser renderizados los elementos estructurados, es decir, se encarga de la apariencia del sitio web.   
      .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/8.svg")
    
    .row.mt-4
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="<em>Cascading</em>")
            p Se refiere a que los estilos aplicados a los elementos de una página web se propagan a los elementos contenidos en estos, aplicándose en cascada.
          .row.col-xl-11.m-auto(titulo="<em>Style</em>")
            p A través de la tecnología CSS, se aplican estilos visuales a los distintos elementos de la página web. 
          .row.col-xl-11.m-auto(titulo="<em>Sheets</em>")
            p Traducido como hojas, porque los estilos de una página web generalmente se añaden en archivos separados. Estos archivos deben tener la extensión .css.
      .col-lg-5(data-aos="fade-left")
        figure.m-auto.col-9.col-md-8.col-lg-12
          img(src="@/assets/curso/tema2/9.png")
    
    p.mt-4(data-aos="fade-right") Desde la introducción de CSS3, el alcance de las especificaciones se ha incrementado de forma significativa, y el desarrollo de los distintos módulos de CSS ha comenzado a mostrar varias diferencias. Con CSS3, se ofrece un mayor control sobre los elementos del sitio, gracias a sus nuevas funciones y atributos aplicables a las etiquetas HTML, lo que maximiza las acciones visuales del sitio o plataforma. 

    .cont_decorativo.mb-4.mt-5(data-aos="flip-up" style="max-width:fit-content;position:relative;")
      .row
        .col-auto.ps-3.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.pe-4(style="place-self:end;")
          h3.text-white.mb-0.pb-2 JavaScript (JS) 
    
    .row(style="position:relative;")
      .col(style="place-self:center;" data-aos="fade-right")
        .p-3(style="background-color:#E8EEFE;")
          p.mb-0 Existen numerosas definiciones de este lenguaje de programación en la literatura. Sin embargo, una definición particularmente notable se encuentra en el blog de Rafa Ramos, que afirma literalmente:  
      .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/10.svg")
    
    .p-4.mt-4(style="background-color:#E3DFEB;border-radius:8px;")
      .row
        .col-auto.d-none.d-md-block(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/11.svg")
        .col(style="place-self:center;")
          p.mb-0 JavaScript es el lenguaje de programación encargado de dotar de mayor interactividad y dinamismo a las páginas web. Cuando JavaScript se ejecuta en el navegador, no necesita de un compilador. El navegador lee directamente el código, sin necesidad de terceros. Por tanto, se le reconoce como uno de los tres lenguajes nativos de la web junto a HTML (contenido y su estructura) y a CSS (diseño del contenido y su estructura). “ (Ramos, 2020). 
    
    p.mt-4(data-aos="fade-right") Además, aunque JavaScript es más conocido como un lenguaje de #[em scripting] para páginas web, también se utiliza en muchos entornos fuera del navegador, como en Node.js, Apache CouchDB y Adobe Acrobat. 

    .col-xl-10.m-auto.mt-4
      .bloque1.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema2/12.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Para concluir sobre estas tres tecnologías principales, se realiza una analogía con el cuerpo humano: los huesos, que constituyen la estructura ósea, se comparan con HTML, que estructura el contenido de la web; los músculos, que permiten el movimiento y la dinámica del cuerpo, se comparan con JavaScript, que añade interactividad a las páginas web; y la piel, que cubre y da apariencia al cuerpo, se compara con CSS, que estiliza y diseña el contenido web. Esta analogía tiene como objetivo facilitar la comprensión de estas tecnologías del lado del cliente. 
    
    p.mt-4.fw-bold(data-aos="fade-right") Para continuar, lo invitamos a explorar el siguiente video: 

    figure.mt-4(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/WNPTBznJEEw" title="Frameworks del Front-end" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_2 2.2 Tecnologías del #[em back-end]
    
    p(data-aos="fade-right") Las tecnologías del #[em back-end] se refieren a aquellas utilizadas en el lado del servidor. El servidor emplea estas tecnologías para gestionar y procesar las diferentes peticiones de información que recibe. Además, realiza la gestión de las bases de datos alojadas en el mismo. Una vez que la información es procesada, se envía de vuelta al dispositivo del usuario para que sea visualizada a través de las tecnologías #[em frontend]. Entre las tecnologías de #[em back-end] más conocidas y utilizadas se encuentran PHP, Java, .NET, Python y MySQL. Estas herramientas son esenciales para el desarrollo y la operación efectiva de aplicaciones web, ya que permiten la creación de funcionalidades complejas y manejo de grandes volúmenes de datos.
    
    .cont_decorativo.mb-4.mt-5(data-aos="flip-up" style="max-width:fit-content;position:relative;")
      .row
        .col-auto.ps-3.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.pe-4(style="place-self:end;")
          h3.text-white.mb-0.pb-2 Lenguajes del servidor 
    
    .row(style="position:relative;")
      .col(style="place-self:center;" data-aos="fade-right")
        .p-3(style="background-color:#E8EEFE;")
          p.mb-0 En el lado del servidor, el #[em back-end] es fundamental para el funcionamiento de un sitio web, ya que es en esta instancia donde se realizan los procesos más robustos de manejo de información. Por ello, se requieren lenguajes de programación que ofrezcan una diversidad de funciones para el tratamiento adecuado de esos datos. Además, los programas escritos por desarrolladores de #[em back-end] se utilizan para comunicar la información desde la base de datos hasta el navegador. La empresa de base tecnológica Third Rock Techkno señala que: 
      .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/13.svg")
    
    .col-xl-8.col-lg-10.m-auto.mt-5(data-aos="zoom-in")
      .d-flex.cont_fondo_1
        div
          i.fas.fa-quote-left.pe-2(style="color:#8722E2;font-size:28px;")
        div
          h5.mt-3 En 2021, el desarrollo de #[em Back-End] será aún más vital a medida que las empresas busquen expandirse a un ritmo rápido”. Esta empresa también destaca los lenguajes de programación del servidor que están en tendencia, subrayando la importancia de mantenerse actualizado con las tecnologías que lideran el mercado. (Third Rock Techkno, 2021)
          .d-flex.justify-space-between
            p.w-100 (Third Rock Techkno, 2021)
            i.fas.fa-quote-right(style="color:#8722E2;font-size:28px;")
    
    .cont_2_3.mt-4.pb-5
      p.fw-bold(data-aos="fade-right") Los lenguajes de programación son:  
      .row.justify-content-center.mt-4
        .col-md-6.col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.p-4(style="background-color:#F2E5FD;border-radius:23px;")
            figure.text-center
              img(src="@/assets/curso/tema2/14.svg" style="max-width:120px;display:inline;")
            p.mt-4 Este lenguaje tiene su propio entorno de ejecución. Es popular entre la comunidad de desarrolladores y se considera uno de los lenguajes más eficientes en la literatura de desarrollo de #[em software]. Se prefiere para desarrollar aplicaciones de alta gama para el desarrollo de sitios web, así como para la transmisión de video. 
        .col-md-6.col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.p-4(style="background-color:#F2E5FD;border-radius:23px;")
            figure.text-center
              img(src="@/assets/curso/tema2/15.svg" style="max-width:120px;display:inline;")
            p.mt-4 Se presenta como un lenguaje de programación #[em back-end] para Java Virtual Machine. Es muy preferido para el desarrollo de Android, contando con el soporte oficial de Google. Según Third Rock Techkno, tiene una curva de aprendizaje muy fácil, es menos propenso a fallos y facilita la detección de errores. 
        .col-md-6.col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.p-4(style="background-color:#F2E5FD;border-radius:23px;")
            figure.text-center
              img(src="@/assets/curso/tema2/16.svg" style="max-width:120px;display:inline;")
            p.mt-4 Se estima que este lenguaje jugará un papel fundamental en el futuro, ya que ayuda a reducir el tiempo dedicado a tareas estandarizadas. 
        .col-md-6.col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.p-4(style="background-color:#F2E5FD;border-radius:23px;")
            figure.text-center
              img(src="@/assets/curso/tema2/17.svg" style="max-width:120px;display:inline;")
            p.mt-4 Es un lenguaje de programación de #[em back-end] muy flexible con características impecables. Tiene una comunidad en constante actualización y numerosos #[em frameworks] basados en este lenguaje. Se considera el futuro del desarrollo #[em back-end] en 2021, destacando por una sintaxis muy expresiva que brinda libertad creativa a los desarrolladores. 
    
      .cont_decorativo.mb-4.mt-5(data-aos="flip-up" style="max-width:fit-content;position:relative;")
        .row
          .col-auto.ps-3.pe-0
            figure
              img(src="@/assets/curso/tema1/3.svg")
          .col.pe-4(style="place-self:end;")
            h3.text-white.mb-0.pb-2 #[em Frameworks] del #[em back-end] 
    
      .row
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
          p Al igual que los #[em frameworks] del #[em frontend], los #[em frameworks] del #[em back-end] proporcionan a los desarrolladores herramientas para realizar su trabajo de manera más eficiente, segura y robusta. Estos #[em frameworks] ofrecen estructuras predefinidas y componentes reutilizables que aceleran el proceso de desarrollo, ayudando a manejar aspectos complejos como la conexión con bases de datos, la gestión de sesiones, el procesamiento de transacciones y la seguridad. 
          p Una de las empresas de desarrollo web más destacadas de Canadá, Monocubed, señala la importancia de estos #[em frameworks] en el desarrollo actual. Según Mistry (2021), los #[em frameworks] de #[em back-end] que están marcando tendencia facilitan significativamente la creación de aplicaciones complejas y escalables.  Estos #[em frameworks] no solo mejoran la eficiencia del desarrollo sino que también aseguran que las aplicaciones puedan adaptarse y responder a las exigencias del mercado moderno. 
        .col-lg-4(data-aos="fade-left")
          figure.m-auto.col-9.col-md-8.col-lg-12
            img(src="@/assets/curso/tema2/18.png")
    
      .row.justify-content-center.mt-4
        .col-md-8.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.p-4(style="background-color:#F2E5FD;border-radius:23px;")
            figure.text-center
              img(src="@/assets/curso/tema2/19.svg" style="max-width:120px;display:inline;")
            p.mt-4 Este #[em framework] tiene una excelente estructura y es capaz de adaptarse a grupos grandes debido a la efectividad de sus recursos, como la llamada #[em toolbox]. Basado en PHP, sigue una sintaxis elegante y expresiva. Permite a los desarrolladores web ser flexibles y creativos, manejando los detalles de fondo a diferencia de otros #[em frameworks]. 
        .col-md-8.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.p-4(style="background-color:#F2E5FD;border-radius:23px;")
            figure.text-center
              img(src="@/assets/curso/tema2/20.svg" style="max-width:120px;display:inline;")
            p.mt-4 #[em Framework] de alto nivel conocido por su enfoque de ‘baterías incluidas’, lo que significa que incluye casi todo lo que necesitaría cualquier desarrollador. Se utiliza principalmente para el desarrollo de aplicaciones web interactivas a gran escala impulsadas por bases de datos. Es altamente personalizable y escalable, con una amplia comunidad y una importante documentación. 
        .col-md-8.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.p-4(style="background-color:#F2E5FD;border-radius:23px;")
            figure.text-center
              img(src="@/assets/curso/tema2/21.svg" style="max-width:120px;display:inline;")
            p.mt-4 Escrito en Ruby, este #[em framework] es fácil de probar y compilar. Cuenta con el amplio apoyo de una comunidad activa y una gran cantidad de recursos disponibles, lo que lo convierte en una alternativa viable para los principiantes en desarrollo. 


    
  
    
 

      
</template>

<script>
export default {
  name: 'Tema2',
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
.cont_2_1
  position: relative
.cont_2_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 80%
  top: 0
  background: rgb(255,255,255)
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,239,255,1) 100%)
.bloque1.bloque-texto-g.color-secundario
  background-color: #8722E2
.cont_2_2,.cont_2_2 *
  position: relative
.cont_2_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema2/6.png)
  background-size: 100% 100%
.acordion__accion__btn--a
  background-color: #F0C518
  box-shadow: 0px 0px 7px 2px rgba(0,0,0,.3)
.acordion .tarjeta--azul
  background-color: #3A1D71
.acordion .tarjeta--azul h3
  color: #fff
.acordion .tarjeta.tarjeta--azul.acordion__activo
  background-color: #EAD6FC
.acordion .tarjeta.tarjeta--azul.acordion__activo h3
  color: #12263F
.cont_fondo_1,.cont_fondo_1 *
  position: relative
.cont_fondo_1:before
  content: ''
  position: absolute
  width: 50%
  height: 60%
  bottom: 0
  right: -20px
  background-color: #F7EFFE
.cont_2_3,.cont_2_3 *
  position: relative
.cont_2_3:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 110%
  bottom: -50px
  top: 0
  background: rgb(255,255,255)
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,239,255,1) 100%)
</style>
