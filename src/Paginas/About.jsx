import "./About.css";

export default function About() {
  return (
    <div className="about-container">

      {/* TÍTULO */}
      <h1 className="title-about">
        <span className="letter-special">A</span>bout 
        <span className="letter-special">M</span>e
      </h1>

      
      {/* Imagen camara */}
      <div className="camara-image-container">
        <img 
          src="/img/Camara.png" 
          alt="Camara" 
          className="camara-img" 
        />
      </div>

       {/* mini valhi  */}
      <div className="mini-image-container">
        <img 
          src="/img/mini-v.png" 
          alt="Mini" 
          className="miniv-img" 
        />

      </div>

      {/* CAJA DE TEXTO PRINCIPAL */}
      <div className="caja-texto">
        <p>
          Soy diseñadora gráfica, creo en el diseño como un espacio híbrido, donde lo digital 
          y lo manual pueden convivir sin fricciones. Me muevo entre el código y la tinta, entre 
          interfaces y texturas, construyendo proyectos que mezclan precisión técnica con un toque 
          emocional. Disfruto crear identidades y publicaciones que hablen por sí solas, explorar 
          la web como un lienzo vivo y trabajar procesos gráficos como la serigrafía o la 
          xilografía, donde cada impresión tiene su propia huella. Mis herramientas favoritas son 
          Illustrator e InDesign, aunque también me gusta experimentar con Photoshop y After Effects 
          para darle movimiento a las ideas.

          <br /><br />
          Si te resuena mi manera de crear, me encantaría que diseñemos algo juntxs ✨
        </p>
      </div>

      {/* NOMBRE VALHI / VALJI / VALKI */}
      <div className="nombre-text">
        <span className="v-special">V</span>alhi,
        <span className="v-special">V</span>alji,
        <span className="v-special">V</span>alki
        <span className="nickname-normal-text"> o como quieras</span>
      </div>

    </div>
  );
}
