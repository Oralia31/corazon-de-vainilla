import React from "react";
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, Sparkles } from "lucide-react";

export default function ShoppingCart({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onGoToCheckout,
}) {
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      <div className="drawer-backdrop" onClick={onClose} aria-hidden="true" />

      <aside className={`cart-drawer open`} aria-label="Carrito de compras">
        {/* Cabecera del Carrito */}
        <div className="cart-header">
          <h3>
            <ShoppingBag size={22} color="#E56B84" />
            <span>Tu Carrito</span>
            <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--c-text-muted)" }}>
              ({totalItems} {totalItems === 1 ? "artículo" : "artículos"})
            </span>
          </h3>
          <button
            onClick={onClose}
            aria-label="Cerrar carrito de compras"
            style={{ width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", background: "var(--c-beige)" }}
          >
            <X size={20} color="#3A2216" />
          </button>
        </div>

        {/* Cuerpo del Carrito */}
        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="cart-empty-state">
              <div className="cart-empty-icon">
                <ShoppingBag size={40} />
              </div>
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", color: "var(--c-coffee-dark)", marginBottom: 8 }}>
                Tu canasta está vacía
              </h4>
              <p style={{ color: "var(--c-text-muted)", fontSize: "0.9rem", marginBottom: "1.5rem", maxWidth: 260 }}>
                Aún no has agregado ninguna de nuestras delicias recién horneadas.
              </p>
              <button className="btn btn-primary btn-sm" onClick={onClose}>
                <span>Explorar pasteles y galletas</span>
              </button>
            </div>
          ) : (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 6 }}>
                <span style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", color: "var(--c-text-muted)" }}>
                  Productos seleccionados
                </span>
                <button
                  onClick={onClearCart}
                  style={{ fontSize: "0.78rem", color: "var(--c-danger)", textDecoration: "underline", fontWeight: 600 }}
                >
                  Vaciar todo
                </button>
              </div>

              {cart.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <div className="cart-item-thumb">
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="cart-item-info">
                    <h5 className="cart-item-title">{item.name}</h5>
                    <span className="cart-item-unit-price">
                      Unitario: ${item.price.toFixed(2)} MXN
                    </span>
                    <span className="cart-item-subtotal">
                      Subtotal: ${(item.price * item.quantity).toFixed(2)} MXN
                    </span>
                  </div>

                  <div className="cart-item-actions">
                    <button
                      className="btn-remove-item"
                      onClick={() => onRemoveItem(item.id)}
                      aria-label={`Eliminar ${item.name} del carrito`}
                      title="Eliminar producto"
                    >
                      <Trash2 size={16} />
                    </button>

                    <div className="cart-item-stepper">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        aria-label="Restar una unidad"
                      >
                        <Minus size={13} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        aria-label="Sumar una unidad"
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Pie con Totales y Checkout */}
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary-line">
              <span>Subtotal productos:</span>
              <span style={{ fontWeight: 700 }}>${subtotal.toFixed(2)} MXN</span>
            </div>

            <div className="cart-summary-line" style={{ fontSize: "0.85rem", color: "var(--c-text-muted)" }}>
              <span>Costo de envío:</span>
              <span>Calculado en el checkout</span>
            </div>

            <div className="cart-summary-line total">
              <span>Total estimado:</span>
              <span className="total-amount">${subtotal.toFixed(2)} MXN</span>
            </div>

            <button
              className="btn btn-primary"
              style={{ width: "100%", marginTop: "0.5rem" }}
              onClick={onGoToCheckout}
            >
              <span>Finalizar Compra</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
