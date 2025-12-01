import React, { useState } from "react";
import "./Works.css";

export default function Works() {
  // 🟣 Lista de proyectos
  const projects = [
    {
      id: 1,
      title: "Proyecto Auki",
      description: "Branding completo de cerveza inspirado en la fiesta de La Tirana.",
      images: ["/img/Auki.png", "/img/Auki2.png", "/img/Auki3.png", "/img/Auki4.png"]
    },
    {
      id: 2,
      title: "Revista Sutura",
      description: "Diseño editorial + dirección de arte.",
      images: [
        "/img/revistas.png",
        "/img/sutura1.png",
        "/img/sutura2.png",
        "/img/sutura3.png",
        "/img/sutura4.png"
      ]
    },
    {
      id: 3,
      title: "Handcrafted",
      description: "Trabajos manuales.",
      images: ["/img/xilo.png", "/img/xilo2.png"]
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImgIndex(0);
  };

  const closeModal = () => setSelectedProject(null);

  const prevImage = () => {
    setCurrentImgIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImgIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="works-container">
      <h1 className="title-works">
        <span className="letter-special">W</span>orks
      </h1>

      {/* COLLAGE */}
      <div className="collage-grid">
        {projects.map((project) => (
          <div key={project.id} className="collage-item" onClick={() => openModal(project)}>
            <img src={project.images[0]} alt={project.title} />
          </div>
        ))}
      </div>

             {/* Imagen de software */}
      <div className="miniv3-image-container">
        <img 
          src="/img/mini-v3.png" 
          alt="mini-v3" 
          className="miniv3-img" 
        />
      </div>

    <div className="marcotriple-image-container">
  <img src="/img/marco.png" alt="decoración" className="marco-img img-1" />
  <img src="/img/marco.png" alt="decoración" className="marco-img img-2" />
  <img src="/img/marco.png" alt="decoración" className="marco-img img-3" />
</div>

      {/* MODAL */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>

            {/* BOTÓN CERRAR */}
            <button className="close-btn" onClick={closeModal}>✕</button>

            {/* CONTENIDO PRINCIPAL */}
            <div className="modal-body">

              {/* IMAGEN Y FLECHAS */}
              <div className="carousel-section">
                <button className="carousel-btn btn-left" onClick={prevImage}>◀</button>

                <img
                  className="carousel-image"
                  src={selectedProject.images[currentImgIndex]}
                  alt="project"
                />

                <button className="carousel-btn btn-right" onClick={nextImage}>▶</button>
              </div>

       

              {/* TEXTO A LA DERECHA */}
              <div className="text-section">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <p className="modal-description">{selectedProject.description}</p>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}


