import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function DessertIcon({ type }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 3,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" {...common}>
      {type === "cookies" && (
        <>
          <path d="M54 20c-20 3-33 18-33 38 0 20 15 35 36 35 20 0 34-13 36-31-10 1-18-5-20-14-2-11-9-17-19-28Z" />
          <circle cx="44" cy="45" r="4" fill="currentColor" stroke="none" />
          <circle cx="72" cy="58" r="4" fill="currentColor" stroke="none" />
          <circle cx="48" cy="76" r="4" fill="currentColor" stroke="none" />
          <path d="M25 40c-8 4-12 10-12 18M65 21l-8 8M79 27l-8 8" />
        </>
      )}
      {type === "roll" && (
        <>
          <path d="M23 60c0-28 18-43 40-43 20 0 34 13 36 31-2 24-20 42-43 42-20 0-33-12-33-30Z" />
          <path d="M38 60c0-17 10-28 25-28 12 0 21 8 22 19-1 14-11 24-25 24-12 0-22-6-22-15Z" />
          <path d="M48 60c0-8 5-13 14-13 7 0 12 4 13 10-1 7-6 12-13 12-8 0-14-4-14-9Z" />
          <path d="M83 29c7 3 13 9 16 16" />
        </>
      )}
      {type === "brownie" && (
        <>
          <path d="M24 48l54-16 17 30-55 17Z" />
          <path d="M40 79l55-17 2 32-56 18Z" />
          <path d="M24 48l16 31v33l-17-38Z" />
          <path d="M24 48l55-16 3 17-42 30Z" />
          <path d="M48 39l-9 27M70 32l-9 31M82 43l-11 29M58 62l10 32M79 56l11 31" />
        </>
      )}
      {type === "cupcake" && (
        <>
          <path d="M31 68c-1-18 13-28 29-28 16 0 29 11 29 28Z" />
          <path d="M38 68c-1-10 8-18 22-18 13 0 22 8 22 18" />
          <path d="M33 70l8 35h38l8-35Z" />
          <path d="M43 78l3 19M60 78v20M77 78l-3 19" />
          <path d="M57 40c-10-7-6-15 2-20 8-5 15 0 12 8-2 6-7 9-14 12Z" />
          <circle cx="70" cy="24" r="5" />
        </>
      )}
      {type === "cheesecake" && (
        <>
          <path d="M20 84l22-45 50 25-27 28Z" />
          <path d="M65 92l27-28-2 20-25 15Z" />
          <path d="M20 84l45 8 25 7-50 5Z" />
          <path d="M31 67l48 24M38 54l46 23M44 43l47 22" />
          <circle cx="51" cy="35" r="9" />
          <circle cx="43" cy="31" r="5" />
          <path d="M51 26l-2-10M47 30l-8-7M56 31l7-7" />
        </>
      )}
      {type === "carlota" && (
        <>
          <path d="M58 17a43 43 0 1 0 43 43H58Z" />
          <path d="M58 17v43h43M58 60l30-30M58 60l42 0M58 60l30 30M58 60l0 43M58 60l-31 30M58 60l-43 0M58 60l-31-30" />
          <path d="M58 17c-24 0-43 19-43 43" />
        </>
      )}
    </svg>
  );
}

const dessertCategories = [
  { label: "Galletas", icon: "cookies", filter: "Galletas" },
  { label: "Cinnamon rolls", icon: "roll", filter: "Galletas" },
  { label: "Brownies", icon: "brownie", filter: "Galletas" },
  { label: "Cupcakes", icon: "cupcake", filter: "Pasteles" },
  { label: "Cheesecakes", icon: "cheesecake", filter: "Pasteles" },
  { label: "Carlotas", icon: "carlota", filter: "Pasteles" },
];

export default function CategorySection({ onSelectCategory }) {
  const favoritesTrackRef = useRef(null);

  const scrollFavorites = (direction) => {
    const track = favoritesTrackRef.current;
    if (track) {
      track.scrollBy({
        left: direction * track.clientWidth * 0.8,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="categories-section dessert-section" id="categorias">
      <div className="dessert-content">
        <div className="dessert-heading">
          <h2>Nuestros postres</h2>
          <div className="dessert-divider" aria-hidden="true">
            <span />
            <b>♥</b>
            <span />
          </div>
        </div>

        <div className="dessert-grid" role="list">
          {dessertCategories.map((category) => (
            <button
              type="button"
              className="dessert-category"
              key={category.label}
              onClick={() => onSelectCategory(category.filter)}
              role="listitem"
              aria-label={`Ver ${category.label}`}
            >
              <span className="dessert-icon">
                <DessertIcon type={category.icon} />
              </span>
              <span className="dessert-name">{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      <svg className="dessert-wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 82C155 30 270 142 430 82C585 24 700 130 860 74C1020 18 1140 116 1290 70C1360 49 1405 48 1440 54V120H0Z" />
      </svg>

      <h3 className="dessert-favorites">Favoritos del mes</h3>
      <div className="favorites-carousel" role="region" aria-label="Postres favoritos del mes">
        <button
          type="button"
          className="favorites-arrow"
          onClick={() => scrollFavorites(-1)}
          aria-label="Ver favoritos anteriores"
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <div className="favorites-track" ref={favoritesTrackRef} tabIndex={0}>
          <figure className="favorites-card">
            <img src="/images/favorito-brownies-artesanales.png" alt="Brownies artesanales recién horneados" loading="lazy" />
          </figure>
          <figure className="favorites-card">
            <img src="/images/favorito-brownies-sal-marina.png" alt="Brownies de chocolate con sal marina" loading="lazy" />
          </figure>
          <figure className="favorites-card">
            <img src="/images/favorito-galletas-surtidas.png" alt="Galletas surtidas de chocolate y red velvet" loading="lazy" />
          </figure>
          <figure className="favorites-card">
            <img src="/images/favorito-brownies-decorados.png" alt="Caja de brownies decorados" loading="lazy" />
          </figure>
          <figure className="favorites-card">
            <img src="/images/favorito-brownies-clasicos.png" alt="Brownies clásicos con sal en escamas" loading="lazy" />
          </figure>
        </div>
        <button
          type="button"
          className="favorites-arrow"
          onClick={() => scrollFavorites(1)}
          aria-label="Ver más favoritos"
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
