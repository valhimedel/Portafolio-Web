import "./Habilities.css";

export default function Habilities() {
  return (
    
    <div className="habilities-container">
       <p className="español">
        Español
      </p>
      <p className="ingles">
        Inglés
      </p>
      {/* Título principal */}
      <h1 className="title-habilities">
        <span className="letter-special">H</span>abilities
      </h1>

      {/* Subtítulo Software */}
      <h2 className="subtitle">
        <span className="letter-special">S</span>oftware
      </h2>

      {/* Imagen */}
      <div className="software-image-container">
        <img 
          src="/img/Programas.png" 
          alt="Softwares" 
          className="software-img" 
        />
      </div>

       {/* Imagen */}
      <div className="idiomas-image-container">
        <img 
          src="/img/idiomas.png" 
          alt="Idiomas" 
          className="idiomas-img" 
        />
      </div>

      {/* cartoon valhi */}
      <div className="miniv2-image-container">
        <img 
          src="/img/mini-v2.png" 
          alt="miniv2" 
          className="miniv2-img" 
        />
      </div>

      {/* Subtítulo Language */}
      <h3 className="subtitle2">
        <span className="letter-special">L</span>anguage
      </h3>
    </div>
  );
}

