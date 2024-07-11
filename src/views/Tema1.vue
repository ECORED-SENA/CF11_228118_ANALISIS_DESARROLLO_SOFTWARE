<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Internet y la web 
    
    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p El desarrollo de aplicaciones y sistemas web ha sido una tendencia predominante en las últimas tres décadas, y sus mejoras han evolucionado en consonancia con las innovaciones en la infraestructura tecnológica que las respalda. Actualmente, las aplicaciones son notablemente más interactivas, rápidas, seguras y fáciles de usar. Un ejemplo de esto es el acceso a sitios web desde dispositivos móviles, la visualización de videos en YouTube, las conversaciones a través de WhatsApp, o el #[em streaming] de series en Netflix. Todos estos avances son posibles gracias a una #[strong robusta infraestructura de #[em hardware]] que permite el despliegue no solo de aplicaciones sino también de servicios que se utilizan diariamente. Por ello, es crucial comprender los componentes fundamentales que enriquecen y otorgan rigurosidad a la construcción de este tipo de sistemas. 
        figure.d-none.d-md-block
          img(src="@/assets/curso/tema1/1.svg" style="max-width:100px;")
      .col-lg-5(data-aos="fade-left")
        figure.m-auto.col-9.col-md-8.col-lg-12
          img(src="@/assets/curso/tema1/2.png")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_1 1.1 Fundamentos de la internet
    
    p(data-aos="fade-right") Internet emergió ante la necesidad de comunicación e interacción con personas en cualquier parte del mundo. Esta tecnología se considera el pilar de la web y se define como la infraestructura técnica que la hace posible. En su forma más básica, se presenta como una vasta red de computadoras comunicándose simultáneamente. 

    .cont_1_1.mt-5
      .cont_decorativo.mb-4(data-aos="flip-up" style="max-width:fit-content;position:relative;")
        .row
          .col-auto.ps-3.pe-0
            figure
              img(src="@/assets/curso/tema1/3.svg")
          .col.pe-4(style="place-self:end;")
            h3.text-white.mb-0.pb-2 Historia de la internet 
      
      .row(style="position:relative;")
        .col(style="place-self:center;" data-aos="fade-right")
          p.mb-0 La historia de la internet se remonta a inicios de la década de 1960 con un proyecto de investigación denominado #[strong ARPANET], financiado por el ejército de los Estados Unidos. En la década de 1980, se transformó en una infraestructura pública con el apoyo de diversas instituciones del sector público y privado. Las tecnologías que soportan la internet han evolucionado a lo largo del tiempo para satisfacer la creciente demanda de la población, aunque la forma en que funciona ha cambiado poco.
        .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/4.svg")
      
      .col-xl-10.m-auto.mt-5(data-aos="zoom-in-up" style="position:relative;")
        .p-4(style="background-color:#E3DFEB;border-radius:8px;")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/5.svg")
            .col(style="place-self:center;")
              p.mb-0 Internet se presenta como un medio de conectividad entre todos los equipos de cómputo y, debido a su distribución y organización, se busca continuamente la mejor manera de mantener conectados a los usuarios.
      
      .cont_decorativo.mb-4.mt-5(data-aos="flip-up" style="max-width:fit-content;position:relative;")
        .row
          .col-auto.ps-3.pe-0
            figure
              img(src="@/assets/curso/tema1/3.svg")
          .col.pe-4(style="place-self:end;")
            h3.text-white.mb-0.pb-2 #[em Hardware] de red 
      
      p(data-aos="fade-right" style="position:relative;") Cuando dos computadoras necesitan comunicarse, pueden vincularse mediante medios físicos como el cable Ethernet, o de manera inalámbrica utilizando tecnologías como WiFi, Bluetooth, ZigBee, entre otras. 

      .cont_1_2.mt-5.pb-5.pt-5
        .tarjeta.p-4.p-lg-5.pb-lg-4.bg-white
          SlyderA(tipo="b")
            .row
              .col-lg-7.mb-4.mb-lg-0
                h5(style="color:#8722E2;") Ejemplo de conexión entre dos equipos o terminales 
                p La mayoría de las computadoras de hoy en día pueden soportar cualquiera de este tipo de conexiones. A continuación, se presenta un ejemplo de conexión vía Ethernet entre dos equipos. 
              .col-lg-5
                figure.m-auto.col-12.col-md-9.col-lg-12
                  img(src='@/assets/curso/tema1/7.svg' alt="Ejemplo de conexión Ethernet entre dos equipos.")
            .row
              .col-lg-7.mb-4.mb-lg-0
                h5(style="color:#8722E2;") Ejemplo de conexión entre diez equipos o terminales 
                p No se puede pensar que la red solo se limita a dos ordenadores, se pueden conectar tantos como se deseen, aunque con mayor complejidad. Por ejemplo, si se quieren conectar 10 computadoras, se necesitarían 45 cables y unos nueve conectores por computador, como se alcanza a apreciar en la siguiente figura. 
              .col-lg-5
                figure.m-auto.col-12.col-md-9.col-lg-12
                  img(src='@/assets/curso/tema1/8.svg' alt="Ejemplo de conexión entre diez equipos o terminales.")
            .row
              .col-lg-7.mb-4.mb-lg-0
                h5(style="color:#8722E2;") Ejemplo de conexión de diez equipos con un enrutador 
                p Por ejemplo, para que el terminal B reciba un mensaje desde el terminal A, este debe enviarlo primero al #[em router], quien a su vez lo remite al ordenador B asegurándose que dicho mensaje no sea entregado a otro ordenador. Una vez incorporado un enrutador al sistema, la red de diez terminales solo requiere diez cables: un conector para cada ordenador y un enrutador con 10 conectores, como se aprecia en la siguiente gráfica. 
              .col-lg-5
                figure.m-auto.col-12.col-md-9.col-lg-12
                  img(src='@/assets/curso/tema1/9.svg' alt="Ejemplo de conexión de diez equipos con un enrutador.")
      
      .col-xl-10.m-auto.mt-5(data-aos="zoom-in-up")
        .p-4(style="background-color:#E3DFEB;border-radius:8px;")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/10.svg")
            .col(style="place-self:center;")
              p.mb-0 Reflexionando sobre el ejemplo anterior, surge la pregunta: ¿qué ocurre al conectar cientos, miles o millones de ordenadores entre sí? Claramente, un solo enrutador no puede gestionar una escala tan amplia. Aunque un enrutador funcione similarmente a un pequeño computador, esto no implica que conectar múltiples enrutadores sea una tarea sencilla.
        
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/11.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El proceso de conexión entre varios terminales puede ser muy complejo y laborioso. Por ello, para organizar estas conexiones de manera eficiente, cada ordenador en una red está conectado a un dispositivo especializado denominado enrutador o #[em router]. Este dispositivo actúa de manera similar a los señalizadores en las estaciones del sistema integrado de transporte público, dirigiendo el tráfico para garantizar que llegues a tu destino correctamente. Así, el #[em router] asegura que los mensajes enviados desde un computador o terminal emisor alcancen el destino adecuado.
    
    .col-xl-6.col-lg-10.mt-5.m-auto
      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
        h5 Figura 1.
        span Conector para cada ordenador y enrutador con 10 conectores
      figure(data-aos="zoom-in-up")
        img(src="@/assets/curso/tema1/12.svg" alt="Diagrama de red con un nodo central etiquetado como 'router' y diez computadoras conectadas desde la A hasta la J, dispuestas en círculo alrededor del nodo central.")
    
    p.mt-4(data-aos="fade-right") Al incorporar un enrutador al sistema, una red de diez terminales solo necesitaría diez cables: un conector para cada ordenador y un enrutador equipado con 10 conectores.  
    p.fw-bold(data-aos="fade-left") Ejemplo de conexión de diez equipos con dos enrutadores 
    p(data-aos="fade-right") En ese sentido, estas conexiones entre terminales generan redes de datos de transmisión como la recepción de información, por lo que es necesario caracterizar estas redes, las cuales son importantes para la comprensión del funcionamiento de un sistema web. Entre ellas se encuentran las redes de área local, una red de área metropolitana y una red de área amplia. 

    .col-xl-8.mt-5.m-auto
      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
        h5 Figura 2.
        span Conexión de diez equipos con dos enrutadores
      figure(data-aos="zoom-in-up")
        img(src="@/assets/curso/tema1/13.svg" alt="Diagrama de red presentando dos grupos de computadoras, cada grupo conectado a su propio router, y los routers están conectados entre sí. Las computadoras están etiquetadas de la A a la J.")
    
    .cont_decorativo.mb-4.mt-5(data-aos="flip-up" style="max-width:fit-content;position:relative;")
      .row
        .col-auto.ps-3.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.pe-4(style="place-self:end;")
          h3.text-white.mb-0.pb-2 Redes de área local LAN 
    
    p(data-aos="fade-right") Generalmente llamadas LAN (#[em Local Area Networks]), son redes de naturaleza privada que operan dentro de un solo establecimiento, como una casa, oficina o fábrica. Las redes LAN se utilizan ampliamente para conectar computadoras personales y electrodomésticos, con el fin de compartir recursos (por ejemplo, impresoras) e intercambiar información. 
    p.fw-bold(data-aos="fade-left") A continuación, se presenta un ejemplo de esta red: 

    .col-xl-8.mt-4.m-auto
      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
        h5 Figura 3.
        span Red de área local inalámbrica y cableada
      figure(data-aos="zoom-in-up")
        img.d-none.d-md-block(src="@/assets/curso/tema1/14.svg" alt="Diagrama simple presentando  dos dispositivos de red etiquetados: 'a' como Punto de acceso y 'b' como Switch Ethernet.")
        img.d-lg-none(src="@/assets/curso/tema1/15.svg" alt="Diagrama simple presentando  dos dispositivos de red etiquetados: 'a' como Punto de acceso y 'b' como Switch Ethernet.")
    
    p.mt-4(data-aos="fade-right") El diseño físico y lógico de una red, conocido como topología, se basa frecuentemente en enlaces de punto a punto para redes alámbricas. El estándar IEEE 802.3, más conocido como Ethernet, es la forma más común de establecer una LAN (Red de Área Local) alámbrica. La figura en su apartado b ilustra un ejemplo de una topología de Ethernet conmutada, donde cada computadora se comunica a través del protocolo Ethernet y se conecta a un dispositivo conocido como #[em switch] mediante un enlace de punto a punto. 
    p(data-aos="fade-left") En este contexto, un #[em switch] dispone de varios puertos, cada uno de los cuales puede conectarse a una computadora. La función principal del #[em switch] es transmitir paquetes entre las computadoras que están conectadas a él. Utiliza la dirección incluida en cada paquete para determinar a qué computadora debe enviarlo, tal como se presenta en el ejemplo de la red de área cableada mencionado. 

    .cont_decorativo.mb-4.mt-5(data-aos="flip-up" style="max-width:fit-content;position:relative;")
      .row
        .col-auto.ps-3.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.pe-4(style="place-self:end;")
          h3.text-white.mb-0.pb-2 Modelo de referencia TCP/IP 
    
    .cont_1_1
      .row(style="position:relative;")
        .col(style="place-self:center;" data-aos="fade-right")
          .p-3(style="background-color:#E8EEFE;")
            p.mb-0 Al igual que los seres humanos requieren de un lenguaje común para comunicarse, es esencial que todos los equipos de cómputo dispongan de un modo estandarizado para interactuar entre ellos. Para la mayoría de los equipos modernos, este estándar es el TCP/IP. Generalmente, el TCP/IP viene preinstalado en los dispositivos y opera de manera automatizada. Sin embargo, es crucial entender el modelo TCP/IP, especialmente si se necesita configurar un equipo para conectarlo a otro sistema. (Fisher, 2021).
        .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/16.svg")
      
      .row.mt-4(style="position:relative;")
        .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/17.svg")
        .col(style="place-self:center;" data-aos="fade-right")
          p.mb-0 El protocolo TCP/IP, cuyas siglas significan #[em Transmission Control Protocol/Internet Protocol] (#[strong Protocolo de Control de Transmisión/Protocolo de Internet]), constituye un conjunto de reglas estandarizadas que facilitan la comunicación de los equipos en redes como Internet. La eficacia de estas máquinas radica en su velocidad de transmisión y en su capacidad para comunicarse con otras, un aspecto fundamental en la era de la cuarta revolución industrial, caracterizada por la interacción inteligente de equipos, especialmente en contextos de producción. 
      
      .col-xl-8.col-lg-10.m-auto.mt-4(data-aos="fade-up")
        .bloque1.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/18.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La dependencia de nuestras actividades diarias, como enviar correos electrónicos, ver Netflix o recibir indicaciones de navegación, se basa en la interacción continua entre distintos dispositivos. Estos equipos pueden ser de diferentes fabricantes y ubicarse en diversas zonas geográficas. Así, tanto las personas como las plataformas de #[em software] que los utilizan pueden emplear distintos lenguajes, tanto humanos como informáticos.
    
    p.mt-5(data-aos="fade-right") El blog de #[em Avast Academy] señala que una interacción determinada puede ocurrir entre dos sistemas informáticos o involucrar a cientos de ellos. Sin embargo, al igual que el proceso de pasar una carta o un paquete de mano en mano, cada transacción se realiza entre solo dos equipos a la vez. Para que esta comunicación sea efectiva, ambos equipos deben conocer de antemano cómo se espera que se comuniquen. 

    .cont_decorativo.mb-4.mt-5(data-aos="flip-up" style="max-width:fit-content;position:relative;")
      .row
        .col-auto.ps-3.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.pe-4(style="place-self:end;")
          h3.text-white.mb-0.pb-2 Proceso de comunicación 
    
    p.fw-bold(data-aos="fade-right") Según (Fishre,2021), la comunicación nace a partir de las siguientes incógnitas: 

    .row
      .col-md-6.col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/19.svg' style="max-width:120px;top:30px;")
          .tarjeta.color-primario.mt-4(style="background-color:#E8EEFE;border-radius:0px;width:100%;")
            .p-4.text-center
              h5(style="color:#12263F !important;") ¿Cómo inician la conversación?
      .col-md-6.col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/19.svg' style="max-width:120px;top:30px;")
          .tarjeta.color-primario.mt-4(style="background-color:#E8EEFE;border-radius:0px;width:100%;")
            .p-4.text-center
              h5(style="color:#12263F !important;") ¿A quién le toca comunicarse?
      .col-md-6.col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/19.svg' style="max-width:120px;top:30px;")
          .tarjeta.color-primario.mt-4(style="background-color:#E8EEFE;border-radius:0px;width:100%;")
            .p-4.text-center
              h5(style="color:#12263F !important;") ¿Cómo sabe un equipo si su mensaje se ha transmitido correctamente?
      .col-md-6.col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/19.svg' style="max-width:120px;top:30px;")
          .tarjeta.color-primario.mt-4(style="background-color:#E8EEFE;border-radius:0px;width:100%;")
            .p-4.text-center
              h5(style="color:#12263F !important;") ¿Cómo terminan la conversación?
    
    .col-xl-8.m-auto.mt-5
      .p-3(style="background-color:#E3DFEB;border-radius:12px;" data-aos="fade-up")
        p.mb-0 De esta manera, es evidente que los equipos necesitan reglas, instrucciones o en su término técnico, protocolos para la comunicación y el comportamiento entre esas dos instancias. 
    
    .cont_decorativo.mb-4.mt-5(data-aos="flip-up" style="max-width:fit-content;position:relative;")
      .row
        .col-auto.ps-3.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.pe-4(style="place-self:end;")
          h3.text-white.mb-0.pb-2 Funcionamiento del modelo
    
    p(data-aos="fade-right") El funcionamiento de este protocolo radica en descomponer cada mensaje en paquetes. Porque el objetivo no es volver a enviar de nuevo y desde cero el mensaje completo, toda vez que haya un fallo. Así que estos paquetes se vuelven a ensamblar en el otro extremo. De hecho, cada paquete podría tomar una ruta diferente hasta el equipo de destino, toda vez sí la ruta deja de estar disponible o está muy congestionada. De manera adicional, TCP/IP divide las distintas tareas de comunicación en capas. Así, cada capa tiene una función diferente. Los datos pasan por cuatro capas independientes antes de recibirse en el otro extremo. 

    .cont_decorativo.mb-4.mt-5(data-aos="flip-up" style="max-width:fit-content;position:relative;")
      .row
        .col-auto.ps-3.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.pe-4(style="place-self:end;")
          h3.text-white.mb-0.pb-2 Cuatro capas del modelo TCP/IP 
    
    p(data-aos="fade-right") En la literatura, se encuentran un sin número de definiciones alrededor de las capas de este modelo, entre las más importante y haciendo un resumen para dar mayor claridad se tienen: 

    .cont_1_2.mt-5.pb-5.pt-5
      .tarjeta.p-4.p-lg-5.pb-lg-4(style="background-color:#ECF2FF;")
        LineaTiempoC.color-primario(text-small)
          .row.col-xl-11.m-auto.mt-4(titulo="Capa de internet")
            .col-lg-7.mb-4.mb-lg-0
              h5(style="color:#8722E2;") Capa de internet
              p La capa de internet (también denominada capa de red), es la capa encargada de controlar el movimiento (envío y recepción) de los paquetes alrededor de la red.
            .col-lg-5
              figure.m-auto.col-12.col-md-10.col-lg-12
                img(src="@/assets/curso/tema1/21.svg")
          .row.col-xl-11.m-auto.mt-4(titulo="Capa de aplicación")
            .col-lg-7.mb-4.mb-lg-0
              h5(style="color:#8722E2;") Capa de aplicación
              p La capa de aplicaciones es el grupo de aplicaciones que requiere comunicación de red. Es con lo que el usuario o cliente suele interactuar, como el correo electrónico y la mensajería. Como la capa inferior es la encargada de gestionar los detalles de la comunicación, no tienen que preocuparse por ello. 
            .col-lg-5
              figure.m-auto.col-12.col-md-10.col-lg-12
                img(src="@/assets/curso/tema1/20.svg")
          .row.col-xl-11.m-auto.mt-4(titulo="Capa de enlace de datos")
            .col-lg-7.mb-4.mb-lg-0
              h5(style="color:#8722E2;") Capa de enlace de datos
              p La capa de enlace de datos (igualmente denominada como capa de enlace, capa de interfaz de red o capa física) es la encargada de manejar las partes físicas del envío y recepción de datos mediante el cable Ethernet, la tarjeta de interfaz de red, la red inalámbrica, el controlador del dispositivo en el equipo, entre otros. 
            .col-lg-5
              figure.m-auto.col-12.col-md-10.col-lg-12
                img(src="@/assets/curso/tema1/22.svg")
          .row.col-xl-11.m-auto.mt-4(titulo="Capa de transporte")
            .col-lg-7.mb-4.mb-lg-0
              h5(style="color:#8722E2;") Capa de transporte
              p La capa de transporte es la capa encargada que proporciona una conexión de datos fiable entre dos dispositivos. Divide los datos en paquetes, hace acuse de recibo de los paquetes que recibe del otro dispositivo y además se asegura de que el otro dispositivo haga el acuse de recibo pertinente de los paquetes que recibe a su vez. 
            .col-lg-5
              figure.m-auto.col-12.col-md-10.col-lg-12
                img(src="@/assets/curso/tema1/23.svg")
    
    p.fw-bold.mt-5(data-aos="fade-right") La siguiente tabla presenta las capas y sus respectivos protocolos. 

    .titulo-sexto.color-acento-contenido.mt-4(data-aos="zoom-in-down")
      h5 Tabla 1.
      span Principales protocolos del Modelo TCP/IP por capas
    .tabla-a.color-primario(data-aos="zoom-in-up")
      table
        thead
          tr.text-center(style="background-color:#00FFDF;")
            th(style="border:1px #CCCCCC solid;") Modelo TCPS / IP 
            th(style="border:1px #CCCCCC solid;") Suite de protocolos #[br] (Principales)
            th(style="border:1px #CCCCCC solid;") Suite de protocolos #[br] (Principales)
            th(style="border:1px #CCCCCC solid;") Suite de protocolos #[br] (Principales)
            th(style="border:1px #CCCCCC solid;") Suite de protocolos #[br] (Principales)
        tbody
          tr
            td.p-3(style="border:1px #CCCCCC solid;") Capa de Aplicación
            td.p-3(style="border:1px #CCCCCC solid;") SSH
            td.p-3(style="border:1px #CCCCCC solid;") FTP
            td.p-3(style="border:1px #CCCCCC solid;") SMTP
            td.p-3(style="border:1px #CCCCCC solid;") DHCP
          tr
            td.p-3(style="border:1px #CCCCCC solid;") Capa de aplicación
            td.p-3(style="border:1px #CCCCCC solid;") DNS
            td.p-3(style="border:1px #CCCCCC solid;") RIP
            td.p-3(style="border:1px #CCCCCC solid;") SNMP
            td.p-3(style="border:1px #CCCCCC solid;") HTTP
          tr
            td.p-3(style="border:1px #CCCCCC solid;") Capa de transporte
            td.p-3(style="border:1px #CCCCCC solid;") TCP
            td.p-3(style="border:1px #CCCCCC solid;") DCCP
            td.p-3(style="border:1px #CCCCCC solid;") UTP
            td.p-3(style="border:1px #CCCCCC solid;") N/A
          tr
            td.p-3(style="border:1px #CCCCCC solid;") Capa de transporte
            td.p-3(style="border:1px #CCCCCC solid;") UDP
            td.p-3(style="border:1px #CCCCCC solid;") ICMP
            td.p-3(style="border:1px #CCCCCC solid;") FCP
            td.p-3(style="border:1px #CCCCCC solid;") N/A
          tr
            td.p-3(style="border:1px #CCCCCC solid;") Capa de Internet
            td.p-3(style="border:1px #CCCCCC solid;") IP
            td.p-3(style="border:1px #CCCCCC solid;") ICMP
            td.p-3(style="border:1px #CCCCCC solid;") N/A
            td.p-3(style="border:1px #CCCCCC solid;") N/A
          tr
            td.p-3(style="border:1px #CCCCCC solid;") Capa de Internet
            td.p-3(style="border:1px #CCCCCC solid;") IPSEC
            td.p-3(style="border:1px #CCCCCC solid;") IGMP
            td.p-3(style="border:1px #CCCCCC solid;") N/A
            td.p-3(style="border:1px #CCCCCC solid;") N/A
          tr
            td.p-3(style="border:1px #CCCCCC solid;") Capa de interfaz de Red
            td.p-3(style="border:1px #CCCCCC solid;") ARP
            td.p-3(style="border:1px #CCCCCC solid;") L2TP
            td.p-3(style="border:1px #CCCCCC solid;") N/A
            td.p-3(style="border:1px #CCCCCC solid;") N/A
          tr
            td.p-3(style="border:1px #CCCCCC solid;") Capa de interfaz de Red
            td.p-3(style="border:1px #CCCCCC solid;") NDP
            td.p-3(style="border:1px #CCCCCC solid;") ETHERNET
            td.p-3(style="border:1px #CCCCCC solid;") N/A
            td.p-3(style="border:1px #CCCCCC solid;") N/A

    .cont_decorativo.mb-4.mt-5(data-aos="flip-up" style="max-width:fit-content;position:relative;")
      .row
        .col-auto.ps-3.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.pe-4(style="place-self:end;")
          h3.text-white.mb-0.pb-2 Dirección IP
    
    .row(style="position:relative;")
      .col(style="place-self:center;" data-aos="fade-right")
        .p-3(style="background-color:#E8EEFE;")
          p.mb-0 Para comunicarse con una computadora específica en una red, es necesario especificar su dirección. Por esta razón, cada computadora conectada a una red tiene una dirección única que la identifica de manera lógica y jerárquica, conocida como “#[strong dirección IP]” (#[strong Internet Protocol]). Esta dirección consta de una serie de cuatro números separados por puntos, por ejemplo: 192.168.2.19. Aunque para las computadoras este identificador es simple, los humanos pueden tener dificultades para recordarlo y memorizarlo. Para facilitar la asociación de esta serie numérica, se utilizan los nombres de dominio. 
      .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/24.svg")
    
    .cont_decorativo.mb-4.mt-5(data-aos="flip-up" style="max-width:fit-content;position:relative;")
      .row
        .col-auto.ps-3.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.pe-4(style="place-self:end;")
          h3.text-white.mb-0.pb-2 Sistema de Nombres de Dominio (DNS)
    
    .row(style="position:relative;")
      .col(style="place-self:center;" data-aos="fade-right")
        .p-3(style="background-color:#E8EEFE;")
          p.mb-0 Los DNS funcionan como una libreta de direcciones de sitios web. Cuando  se introduce una dirección web en el navegador, esta consulta los DNS antes de recuperar el sitio web. El navegador necesita determinar en qué servidor se aloja el sitio web para enviar los mensajes HTTP correctamente. Significa que es análogo, el buscar la dirección de una tienda para poder visitarla.  
      .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/25.svg")
    
    .col-xl-8.m-auto.mt-4.col-lg-10
      .p-3(style="background-color:#F5F0FF;border-radius:8px;" data-aos="fade-up")
        .row(style="position:relative;")
          .col-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/26.svg")
          .col(style="place-self:center;")
            p.mb-0 Por ejemplo, #[strong(style="color:#8722E2;") google.com] es el nombre de dominio que se utiliza para representar la dirección #[strong IP 173.194.121.32], facilitando la identificación de un ordenador en internet.
    
    .cont_decorativo.mb-4.mt-5(data-aos="flip-up" style="max-width:fit-content;position:relative;")
      .row
        .col-auto.ps-3.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.pe-4(style="place-self:end;")
          h3.text-white.mb-0.pb-2 Protocolo HTTP
    
    .row(style="position:relative;")
      .col(style="place-self:center;" data-aos="fade-right")
        .p-3(style="background-color:#E8EEFE;")
          p.mb-0 #[strong El Protocolo de Transferencia de Hipertexto (HTTP)] es un protocolo de aplicación que establece un lenguaje para la comunicación entre clientes y servidores. Es similar al idioma que se usa para hacer un pedido en una tienda. HTTP permite solicitar datos y recursos, como documentos HTML, y es la base de cualquier intercambio de datos en la web. Funciona con una estructura cliente-servidor, lo que significa que una petición de datos es iniciada por el elemento que recibirá los datos (el cliente), generalmente un navegador web. 
      .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/27.svg")
    
    .col-xl-8.m-auto.mt-4.col-lg-10
      .row
        .col-lg.mb-4.mb-lg-0.pe-lg-0(data-aos="fade-right")
          figure.m-auto.col-9.col-md-7.col-lg-12
            img(src="@/assets/curso/tema1/28.png")
        .col-lg.ps-lg-0(data-aos="fade-left")
          .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#8722E2;")
            p.text-white.mb-0 Se han abordado conceptos clave sobre los componentes que conforman la arquitectura de internet. Como se ha explicado, internet es una infraestructura técnica que permite la conexión de miles de millones de computadoras. Algunas de estas, conocidas como servidores web, son capaces de enviar mensajes inteligibles a los navegadores. Así, internet constituye la infraestructura, mientras que la web es un servicio construido sobre ella. Además, existen otros servicios soportados por internet, como el correo electrónico. 

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_2 1.2 Arquitectura web 
    
    p(data-aos="fade-right") Para comprender el funcionamiento de un sistema, plataforma o aplicación web, es fundamental conocer los conceptos y el comportamiento de las tecnologías que se integran en esta arquitectura. A continuación se detalla: 

    .cont_decorativo.mb-4.mt-5(data-aos="flip-up" style="max-width:fit-content;position:relative;")
      .row
        .col-auto.ps-3.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.pe-4(style="place-self:end;")
          h3.text-white.mb-0.pb-2 Arquitectura cliente/servidor 
    
    p(data-aos="fade-right") Una aplicación web opera bajo una arquitectura simplificada conocida como cliente/servidor. En este modelo, el "cliente" generalmente se refiere a un navegador web instalado en un dispositivo del usuario, que se encarga de mostrar y solicitar información o documentos a través de una red. Las computadoras conectadas a la web se clasifican como clientes y servidores. Un diagrama simplificado de cómo interactúan se podría visualizar de la siguiente manera: 

    .col-xl-6.col-lg-10.mt-4.m-auto
      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
        h5 Figura 4.
        span Arquitectura web
      figure(data-aos="zoom-in-up")
        img(src="@/assets/curso/tema1/29.svg" alt="Figura de un concepto de red cliente-servidor, mostrando un hombre con una laptop conectada a varios servicios en la nube y un servidor físico.")
    
    .cont_decorativo.mb-4.mt-5(data-aos="flip-up" style="max-width:fit-content;position:relative;")
      .row
        .col-auto.ps-3.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.pe-4(style="place-self:end;")
          h3.text-white.mb-0.pb-2 Cliente web
    
    .row(style="position:relative;")
      .col(style="place-self:center;" data-aos="fade-right")
        .p-3(style="background-color:#E8EEFE;")
          p.mb-0 El cliente web es una aplicación ejecutable, usualmente preinstalada en el dispositivo del usuario, que facilita el acceso a internet. Este cliente es capaz de mostrar y solicitar documentos sobre una red, siendo así responsable de la capa de presentación. Los clientes web son dispositivos de usuarios conectados a internet (por ejemplo, un ordenador conectado a la red Wi-Fi o un teléfono conectado a la red de telefonía móvil) y el #[em software] disponible que permite acceder a internet en dichos dispositivos (normalmente, un navegador web como Firefox o Chrome). 
      .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/30.svg")
    
    .cont_decorativo.mb-4.mt-5(data-aos="flip-up" style="max-width:fit-content;position:relative;")
      .row
        .col-auto.ps-3.pe-0
          figure
            img(src="@/assets/curso/tema1/3.svg")
        .col.pe-4(style="place-self:end;")
          h3.text-white.mb-0.pb-2 Servidor web
    
    .row(style="position:relative;")
      .col(style="place-self:center;" data-aos="fade-right")
        .p-3(style="background-color:#E8EEFE;")
          p.mb-0 En la arquitectura web, el servidor web juega un papel crucial, pues se encarga de atender las solicitudes enviadas por los clientes a través de los navegadores web. Es en el servidor donde se realiza todo el procesamiento de las aplicaciones y la gestión de los datos. Los servidores son computadoras que almacenan páginas web, sitios o aplicaciones. Cuando un dispositivo cliente desea acceder a una página web, una copia de esta página se descarga desde el servidor al equipo cliente y se presenta en su navegador web. En esencia, un servidor es una computadora potente que almacena y transmite datos vía internet. 
      .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/31.svg")
    
    p.fw-bold.mt-4(data-aos="fade-right") A continuación, se presenta un esquema que facilitará la comprensión de los diversos aspectos relacionados con esta arquitectura. 

    .col-xl-6.col-lg-10.mt-4.m-auto
      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
        h5 Figura 5.
        span Arquitectura cliente servidor 
      figure(data-aos="zoom-in-up")
        img(src="@/assets/curso/tema1/32.svg" alt="Diagrama de red presentando  una conexión de servidor a múltiples dispositivos de clientes a través de Internet, incluyendo ordenadores, servidores y dispositivos móviles.")
    
    .col-xl-10.m-auto.mt-4(data-aos="zoom-in")
      .p-4(style="background-color:#E3DFEB;border-radius:8px;")
        .row
          .col-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/33.svg")
          .col(style="place-self:center;")
            p.mb-0 Se inicia con un ejemplo en el que se tiene al cliente A, conforme se presenta en el esquema anterior. Este cliente, que es una computadora o un ordenador de escritorio, cuenta con un explorador web instalado. El usuario, Pepito Pérez, necesita ingresar a Facebook. Para acceder a la red social, es necesario registrar las credenciales, como el #[em login] y la contraseña. Al hacer clic en iniciar sesión, se genera inmediatamente una petición que viaja desde el cliente hasta el servidor, tal como se ilustra en el esquema de la arquitectura.  
      
    p.mt-4(data-aos="fade-right") El servidor, por su parte, procesa los datos de Pepito y verifica la información con otros servidores y bases de datos, como se observa en la figura. Dependiendo de si la validación de los datos es afirmativa o no, el servidor enviará una respuesta al usuario, permitiéndole o negándole el acceso a su espacio en la red social. Esta respuesta del servidor se transmite en un lenguaje y con recursos que son interpretados y manejados por el explorador web para ser mostrados en pantalla. Esto indica que existen tecnologías tanto del lado del cliente como del lado del servidor, por lo que el servidor, además de procesar los datos, debe responder en el formato o lenguaje adecuado para que el cliente pueda interpretarlo correctamente. 

    .col-xl-4.col-lg-6.col-lg-10.mt-4.m-auto
      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
        h5 Figura 6.
        span Cuadro de #[em login] y #[em password] de Facebook 
      figure(data-aos="zoom-in-up")
        img(src="@/assets/curso/tema1/34.svg" alt="Pantalla de inicio de sesión de Facebook con campos para dirección de correo electrónico y contraseña.")
    
    p.mt-5(data-aos="fade-right") Este ejemplo se puede realizar desde cualquier otro dispositivo, es por eso por lo que la arquitectura web es considerada como un ambiente multiplataforma y distribuido. 
    p.fw-bold(data-aos="fade-left") Finalmente, es importante tener en cuenta que una web sigue las siguientes pautas: 

    .row.mt-4.justify-content-center
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4(:style="{'background-image': `url(${require('@/assets/curso/tema1/35.png')})`}")
              h5.text-center(style="color:#12263F;") ¿Cómo se realiza la transferencia de información? 
              figure.text-center.mt-5
                img(src="@/assets/curso/tema1/36.svg" style="max-width:280px;display:inline;")
            .tarjeta-flip__contenido.p-4(style="background-color:#3A1D71;")
              h5.fw-bold.text-center.mt-4(style="color:#00FFDF;") ¿Cómo se realiza la transferencia de información? 
              p.mt-5.text-white.mb-5 Cada solicitud y respuesta se envía utilizando el protocolo HTTP. Es mediante este protocolo que se transmiten los datos. 
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4(:style="{'background-image': `url(${require('@/assets/curso/tema1/35.png')})`}")
              h5.text-center(style="color:#12263F;") ¿Cómo se describe la información apenas llega al cliente como respuesta? 
              figure.text-center.mt-5
                img(src="@/assets/curso/tema1/37.svg" style="max-width:250px;display:inline;")
            .tarjeta-flip__contenido.p-4(style="background-color:#3A1D71;")
              h5.fw-bold.text-center.mt-4(style="color:#00FFDF;") ¿Cómo se describe la información apenas llega al cliente como respuesta? 
              p.mt-5.text-white.mb-5 Para la presentación de la información web se utilizan tecnologías del lado del cliente, es decir, HTML, CSS y JavaScript en sus versiones más recientes. Estos lenguajes de programación y diseño permiten estructurar el contenido, definir su estilo y manejar comportamientos dinámicos en la página. 
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4(:style="{'background-image': `url(${require('@/assets/curso/tema1/35.png')})`}")
              h5.text-center(style="color:#12263F;") ¿Cómo se localiza la información?
              figure.text-center.mt-5
                img(src="@/assets/curso/tema1/38.svg" style="max-width:250px;display:inline;")
            .tarjeta-flip__contenido.p-4(style="background-color:#3A1D71;")
              h5.fw-bold.text-center.mt-4(style="color:#00FFDF;") ¿Cómo se localiza la información?
              p.mt-5.text-white.mb-5 La información se localiza mediante la dirección URL, la cual se compone de tres partes: primero el protocolo, segundo la ruta del servidor y tercero el dominio. La estructura queda de la siguiente forma: #[span(style="color:#F0C518 !important;") http://rutadelservidor/ubicacion/dominio]. Esta estructura asegura que el navegador pueda identificar y acceder a la ubicación exacta del recurso solicitado en la web.


        
    
  
    
 

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaFlip: true,
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
.cont_1_1
  position: relative
.cont_1_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 90%
  top: 0
  background: rgb(255,255,255)
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,239,255,1) 100%)
.cont_1_2,.cont_1_2 *
  position: relative
.cont_1_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema1/6.png)
  background-size: 100% 100%
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #F0C518
  opacity: 1
.slyder-a__bullets__item--active
  background-color: #A854F3 !important
  border-color: #A854F3 !important
.slyder-a__bullets__item
  background-color: #E1C3FB
  border-color: #E1C3FB
.bloque1.bloque-texto-g.color-secundario
  background-color: #8722E2
.linea-tiempo-c__header__btn, .linea-tiempo-c__header__btn--left, .linea-tiempo-c__header__btn--right, .pasos-b__header__btn--left, .pasos-b__header__btn--right
  border: 2px solid #F0C518
  background-color: #F0C518
@media screen and (max-width: 992px)
  .cont_1_2:before
    background-size: cover
</style>
