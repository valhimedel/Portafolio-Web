import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-title">
      <span className="letter-special">S</span>ocial
        <span className="letter-special">M</span>edia
      
        {/* Imagen de rrss */}
      <div className="rrss-image-container">
        <img 
          src="/img/rrss.png" 
          alt="Rrss" 
          className="rrss-img" 
        />
      </div>

       {/* Imagen2 de rrss */}
      <div className="rrss2-image-container">
        <img 
          src="/img/rrss2.png" 
          alt="Rrss2" 
          className="rrss2-img" 
        />
      </div>

      {/* Imagen3 de rrss */}
      <div className="tamagotchi-image-container">
        <img 
          src="/img/tamagotchi.png" 
          alt="Tamagotchi" 
          className="tamagotchi-img" 
        />
      </div>
{/* Aquí irán tus textos con vínculos */}
      <div className="links-container">
        
        {/* EJEMPLOS (puedes borrar o mover) */}
        <a href="https://instagram.com"
        target="_blank"  className="link-item link-1">
          Instagram.com/slaylikevaals
        </a>

        <a href="https://www.tiktok.com" 
        target="_blank" className="link-item link-2">
          Tiktok.com/slaylikevaals
        </a>

        <a href="https://cl.pinterest.com" 
        target="_blank" className="link-item link-3">
          Pinterest.com/slaylikevaals
        </a>

         <a href="https://w.app/slaylikevaals" 
         target="_blank" className="link-item link-4">
          Whatsapp.com/slaylikevaals
        </a>

         <a href="https://www.linkedin.com"
         target="_blank"  className="link-item link-5">
          Linkedin.com/slaylikevaals
        </a>

         <a href="https://www.behance.net"
         target="_blank"  className="link-item link-6">
          Behance.net/slaylikevaals
        </a>

      </div>

    </div>

    
  );
}
