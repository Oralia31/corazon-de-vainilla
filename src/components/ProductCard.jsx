import React, { useState } from "react";
import { Plus, Check, Star, Users, Eye } from "lucide-react";

export default function ProductCard({ product, onAddToCart, onOpenDetails }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    onAddToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1200);
  };

  return (
    <article className="product-card" onClick={() => onOpenDetails(product)}>
      <div className="product-img-wrapper">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/images/favorito-brownies-artesanales.png";
          }}
        />

        {product.tag && <span className="product-tag-badge">{product.tag}</span>}

        <span className="product-category-badge">{product.category}</span>
      </div>

      <div className="product-card-body">
        {/* Rating */}
        <div className="product-rating">
          <Star size={14} fill="#C88A3E" color="#C88A3E" />
          <span>{product.rating.toFixed(1)}</span>
          <span className="count">({product.reviewsCount})</span>
        </div>

        {/* Título */}
        <h3 className="product-title" title={product.name}>
          {product.name}
        </h3>

        {/* Porciones / Presentación */}
        <div className="product-portion-info">
          <Users size={13} />
          <span>{product.portions}</span>
        </div>

        {/* Descripción corta */}
        <p className="product-desc">{product.description}</p>

        {/* Pie con precio y botón */}
        <div className="product-card-footer">
          <div className="product-price-box">
            <span className="product-currency">Precio MXN</span>
            <span className="product-price">
              ${product.price.toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>

          <button
            className={`btn-add-cart ${isAdded ? "added" : ""}`}
            onClick={handleAdd}
            aria-label={`Agregar ${product.name} al carrito`}
          >
            {isAdded ? (
              <>
                <Check size={17} />
                <span>¡Listo!</span>
              </>
            ) : (
              <>
                <Plus size={17} />
                <span>Agregar</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
