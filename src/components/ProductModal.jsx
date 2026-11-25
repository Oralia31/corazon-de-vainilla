import React, { useState } from "react";
import { X, Plus, Minus, Check, Star, Users, Clock, AlertTriangle, ShieldCheck } from "lucide-react";

export default function ProductModal({ product, onClose, onAddToCart }) {
  const [qty, setQty] = useState(1);
  const [addedSuccess, setAddedSuccess] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, qty);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 900);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="product-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        aria-labelledby="modal-product-title"
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar detalles">
          <X size={20} />
        </button>

        <div className="modal-grid">
          {/* Imagen lateral */}
          <div className="modal-media">
            <img src={product.image} alt={product.name} />
          </div>

          {/* Información detallada */}
          <div className="modal-content-body">
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <span className="product-category-badge" style={{ position: "static" }}>
                {product.category}
              </span>
              {product.tag && (
                <span className="product-tag-badge" style={{ position: "static" }}>
                  {product.tag}
                </span>
              )}
            </div>

            <h2 id="modal-product-title" className="product-title" style={{ fontSize: "1.6rem", marginBottom: 8 }}>
              {product.name}
            </h2>

            <div className="product-rating" style={{ marginBottom: 14 }}>
              <Star size={16} fill="#C88A3E" color="#C88A3E" />
              <span>{product.rating.toFixed(1)}</span>
              <span className="count">({product.reviewsCount} reseñas verificadas)</span>
            </div>

            <p style={{ color: "var(--c-text-muted)", fontSize: "0.95rem", marginBottom: "1.25rem", lineHeight: 1.5 }}>
              {product.details || product.description}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.85rem", color: "var(--c-coffee)" }}>
                <Users size={16} color="#E56B84" />
                <strong>Rendimiento:</strong> {product.portions}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.85rem", color: "var(--c-coffee)" }}>
                <Clock size={16} color="#E56B84" />
                <strong>Preparación:</strong> {product.prepTime}
              </div>
            </div>

            {/* Ingredientes clave */}
            {product.ingredients && product.ingredients.length > 0 && (
              <div style={{ marginBottom: "1.25rem" }}>
                <span style={{ fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", color: "var(--c-coffee-dark)", display: "block", marginBottom: 6 }}>
                  Ingredientes Seleccionados:
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", margin: "-2px" }}>
                  {product.ingredients.map((ing, idx) => (
                    <span key={idx} className="modal-ingredient-tag">
                      • {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Alérgenos */}
            {product.allergens && (
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.78rem", color: "var(--c-coffee-light)", marginBottom: "1.5rem" }}>
                <AlertTriangle size={14} color="#C88A3E" />
                <span>
                  <strong>Contiene alérgenos:</strong> {product.allergens.join(", ")}
                </span>
              </div>
            )}

            {/* Precio y Selector de Cantidad */}
            <div style={{ marginTop: "auto", borderTop: "1px solid var(--c-border)", paddingTop: "1.25rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--c-text-muted)", textTransform: "uppercase", fontWeight: 600 }}>
                    Precio unitario (MXN)
                  </span>
                  <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--c-coffee-dark)" }}>
                    ${product.price.toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                </div>

                <div className="quantity-stepper">
                  <button
                    className="stepper-btn"
                    onClick={() => setQty((prev) => Math.max(1, prev - 1))}
                    disabled={qty <= 1}
                    aria-label="Disminuir cantidad"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="stepper-val">{qty}</span>
                  <button
                    className="stepper-btn"
                    onClick={() => setQty((prev) => prev + 1)}
                    aria-label="Aumentar cantidad"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <button
                className={`btn btn-primary ${addedSuccess ? "added" : ""}`}
                style={{ width: "100%", height: 50 }}
                onClick={handleAdd}
              >
                {addedSuccess ? (
                  <>
                    <Check size={20} />
                    <span>¡Agregado al carrito!</span>
                  </>
                ) : (
                  <>
                    <Plus size={20} />
                    <span>
                      Agregar {qty > 1 ? `(${qty})` : ""} • ${(product.price * qty).toLocaleString("es-MX", { minimumFractionDigits: 2 })} MXN
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
