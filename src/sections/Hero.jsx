import React from "react";

export default function Hero({ onExploreMenu }) {
  return (
    <section className="hero-banner-section" id="inicio">
      {/* Imagen de galletas como fondo completo */}
      <div className="hero-bg-wrapper">
        <img
          src="/images/hero-bg.jpg"
          alt="Galletas artesanales Corazón de Vainilla"
          className="hero-bg-img"
          loading="eager"
        />

        {/* Overlay de contenido sobre el lado derecho de la foto */}
        <div className="hero-overlay-content">
          <div className="hero-text-box">

            {/* Floritura decorativa debajo de Vainilla */}
            <div className="hero-flourish-wrap" aria-hidden="true">
              <img
                src="/images/logo-corazon.png"
                alt="Galletas artesanales Corazón de Vainilla"
                className=""
                loading="eager"
              />

            </div>

            {/* Descripción */}
            <p className="hero-script-desc">
              Postres hechos a mano con ingredientes de calidad y un toque de cariño
            </p>

            {/* Botón "Ver menú →" */}
            <div className="hero-btn-container">
              <button className="btn-hero-menu" onClick={onExploreMenu}>
                <span>Ver menú</span>
                <span className="arrow-sym">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
