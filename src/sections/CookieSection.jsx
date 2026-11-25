import React from "react";

export default function CookieSection({ onSelectCategory }) {
  const cookies = [
    {
      name: "Red Velvet",
      image: "/images/galleta-red-velvet.png",
    },
    {
      name: "Chocolate",
      image: "/images/galleta-chocolate.png",
    },
    {
      name: "Chispas de chocolate",
      image: "/images/galleta-chispas.png",
    },
  ];

  return (
    <section className="cookie-section" id="galletas-destacadas">
      <h2 className="cookie-section-title">Galletas</h2>
      <div className="cookie-grid">
        {cookies.map((cookie) => (
          <button
            type="button"
            className="cookie-feature"
            key={cookie.name}
            onClick={() => onSelectCategory?.("Galletas")}
            aria-label={`Ver galletas ${cookie.name}`}
          >
            <img src={cookie.image} alt={`Galleta ${cookie.name}`} loading="lazy" />
          </button>
        ))}
      </div>
    </section>
  );
}
