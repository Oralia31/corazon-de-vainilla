import React from "react";
import { WhatsAppIcon } from "../components/icons";

export default function AboutUs() {
  return (
    <section className="about-section" id="nosotros">
      <div className="about-story">
        <div className="about-story-inner">
          <img
            className="about-gift-photo"
            src="/images/galletas-regalo.png"
            alt="Caja de Corazón de Vainilla con galletas artesanales"
            loading="lazy"
          />

          <div className="about-copy">
            <h2>Sobre nosotros</h2>
            <p>
              Somos una repostería artesanal que nace del amor por los postres y la
              creatividad. En Corazón de Vainilla buscamos endulzar tus momentos con
              recetas únicas, ingredientes de calidad y una presentación especial.
            </p>
          </div>

          <div className="about-values" aria-label="Nuestros valores">
            <div className="about-value">
              <span className="about-value-icon about-icon-leaf" aria-hidden="true" />
              <span>Ingredientes de calidad</span>
            </div>
            <div className="about-value">
              <span className="about-value-icon about-icon-heart" aria-hidden="true" />
              <span>Elaboración artesanal</span>
            </div>
            <div className="about-value">
              <span className="about-value-icon about-icon-gift" aria-hidden="true" />
              <span>Ideal para regalar</span>
            </div>
          </div>
        </div>
      </div>

      <div className="about-order">
        <img
          className="about-whisk"
          src="/images/utensilio-cocina.png"
          alt=""
        />

        <svg className="dessert-wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 82C155 30 270 142 430 82C585 24 700 130 860 74C1020 18 1140 116 1290 70C1360 49 1405 48 1440 54V120H0Z" />
        </svg>

        <div className="about-order-content">
          <h3>
            Haz tu pedido
            <svg className="about-order-heart" viewBox="0 0 48 48" aria-hidden="true">
              <path d="M24 39C17 32 8 26 8 17c0-6 4-10 9-10 4 0 7 3 7 7 1-4 4-7 8-7 5 0 9 4 9 10 0 9-10 15-17 22Z" />
            </svg>
          </h3>
          <p>Escríbenos y separa tus postres para tu evento,<br />reunión o antojo del día.</p>
          <a
            className="about-whatsapp-button"
            href="https://wa.me/529221589055"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={28} color="#8E283F" />
            <span>Pedir por WhatsApp</span>
          </a>
        </div>

        <img
          className="about-piping"
          src="/images/manga-pastelera.png"
          alt=""
        />
      </div>
    </section>
  );
}
