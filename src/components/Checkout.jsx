import React, { useState } from "react";
import {
  ArrowLeft,
  CheckCircle,
  Truck,
  Store,
  ShieldCheck,
  CreditCard,
  AlertCircle,
  Clock,
  Sparkles,
} from "lucide-react";

export default function Checkout({ cart, onBackToStore, onConfirmPurchase }) {
  // Constante de costo de envío a domicilio
  const SHIPPING_COST = 80.0;

  // Estados del formulario
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    deliveryMethod: "tienda", // 'tienda' | 'domicilio'
    street: "",
    colony: "",
    postalCode: "",
    references: "",
    dedicationNote: "",
    paymentMethodSimulated: "contra-entrega",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Cálculos de totales
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = formData.deliveryMethod === "domicilio" ? SHIPPING_COST : 0.0;
  const grandTotal = subtotal + shipping;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpiar error del campo
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleDeliverySelect = (method) => {
    setFormData((prev) => ({ ...prev, deliveryMethod: method }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = "Por favor ingresa tu nombre completo (mínimo 3 caracteres).";
    }

    // Teléfono: 10 dígitos requerido
    const phoneRegex = /^[0-9]{10}$/;
    const cleanPhone = formData.phone.replace(/[\s-]/g, "");
    if (!cleanPhone) {
      newErrors.phone = "El teléfono celular es requerido.";
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = "Ingresa un número telefónico válido a 10 dígitos.";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es requerido.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Ingresa un correo electrónico con formato válido.";
    }

    // Validación condicional: solo si selecciona envío a domicilio
    if (formData.deliveryMethod === "domicilio") {
      if (!formData.street.trim()) {
        newErrors.street = "Ingresa calle y número exterior/interior.";
      }
      if (!formData.colony.trim()) {
        newErrors.colony = "Ingresa la colonia o delegación.";
      }
      if (!formData.postalCode.trim() || formData.postalCode.trim().length < 5) {
        newErrors.postalCode = "Ingresa un Código Postal válido (5 dígitos).";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("El carrito está vacío. Agrega productos antes de confirmar.");
      return;
    }

    if (!validateForm()) {
      // Scroll hacia el primer error
      window.scrollTo({ top: 120, behavior: "smooth" });
      return;
    }

    setIsSubmitting(true);

    // Simulación de procesamiento de 1 segundo
    setTimeout(() => {
      const orderData = {
        folio: `DT-2026-${Math.floor(10000 + Math.random() * 90000)}`,
        date: new Date().toLocaleString("es-MX", {
          dateStyle: "full",
          timeStyle: "short",
        }),
        timestamp: new Date().toISOString(),
        customer: {
          fullName: formData.fullName.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
        },
        deliveryMethod:
          formData.deliveryMethod === "domicilio" ? "Envío a Domicilio" : "Recoger en Tienda (Sucursal Cosoleacaque)",
        deliveryAddress:
          formData.deliveryMethod === "domicilio"
            ? `${formData.street}, Col. ${formData.colony}, C.P. ${formData.postalCode}${
                formData.references ? ` (Ref: ${formData.references})` : ""
              }`
            : "Guacamaya #2326, Fraccionamiento Los Prados, Cosoleacaque, Ver.",
        dedicationNote: formData.dedicationNote.trim(),
        paymentMethod:
          formData.paymentMethodSimulated === "contra-entrega"
            ? "Pago contra entrega (Efectivo / Tarjeta)"
            : "Transferencia SPEI simulada",
        items: [...cart],
        subtotal: subtotal,
        shipping: shipping,
        total: grandTotal,
      };

      setIsSubmitting(false);
      onConfirmPurchase(orderData);
    }, 1000);
  };

  return (
    <div className="checkout-view">
      <div className="container">
        {/* Botón Volver */}
        <button
          onClick={onBackToStore}
          className="btn btn-secondary btn-sm"
          style={{ marginBottom: "1.5rem" }}
        >
          <ArrowLeft size={16} />
          <span>Volver al catálogo</span>
        </button>

        <div style={{ marginBottom: "2rem" }}>
          <div className="section-badge">
            <Sparkles size={14} />
            Paso 2 de 2 • Finalizar Pedido
          </div>
          <h1 className="section-title">Confirma tu Compra</h1>
          <p className="section-subtitle" style={{ margin: 0 }}>
            Completa tus datos de entrega y revisa el resumen de tu pedido artesanal.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="checkout-grid">
            {/* Columna Izquierda: Datos del Cliente y Envío */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              {/* Bloque 1: Datos Personales */}
              <div className="checkout-card">
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.25rem",
                    color: "var(--c-coffee-dark)",
                    marginBottom: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      background: "var(--c-pink-light)",
                      color: "var(--c-pink-accent)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                    }}
                  >
                    1
                  </span>
                  Datos del Cliente
                </h3>

                <div className="form-group">
                  <label className="form-label" htmlFor="fullName">
                    Nombre completo *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    className={`form-input ${errors.fullName ? "error" : ""}`}
                    placeholder="Ej. Sofía Morales Sánchez"
                    value={formData.fullName}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                  {errors.fullName && (
                    <div className="form-error-msg">
                      <AlertCircle size={14} />
                      <span>{errors.fullName}</span>
                    </div>
                  )}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      Teléfono celular (10 dígitos) *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={`form-input ${errors.phone ? "error" : ""}`}
                      placeholder="Ej. 5512345678"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      maxLength={14}
                    />
                    {errors.phone && (
                      <div className="form-error-msg">
                        <AlertCircle size={14} />
                        <span>{errors.phone}</span>
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Correo electrónico *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={`form-input ${errors.email ? "error" : ""}`}
                      placeholder="tu-correo@ejemplo.com"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                    {errors.email && (
                      <div className="form-error-msg">
                        <AlertCircle size={14} />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Bloque 2: Método de Entrega */}
              <div className="checkout-card">
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.25rem",
                    color: "var(--c-coffee-dark)",
                    marginBottom: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      background: "var(--c-pink-light)",
                      color: "var(--c-pink-accent)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                    }}
                  >
                    2
                  </span>
                  Método de Entrega
                </h3>

                <div className="delivery-options-grid">
                  {/* Opción Tienda */}
                  <div
                    className={`delivery-option-card ${
                      formData.deliveryMethod === "tienda" ? "selected" : ""
                    }`}
                    onClick={() => handleDeliverySelect("tienda")}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && handleDeliverySelect("tienda")}
                  >
                    <div className="delivery-icon-wrap">
                      <Store size={20} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--c-coffee-dark)" }}>
                        Recoger en Tienda
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "var(--c-text-muted)" }}>
                        Sucursal Cosoleacaque • Horario 9am a 7pm
                      </div>
                      <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--c-success)", marginTop: 4 }}>
                        ¡GRATIS!
                      </div>
                    </div>
                  </div>

                  {/* Opción Domicilio */}
                  <div
                    className={`delivery-option-card ${
                      formData.deliveryMethod === "domicilio" ? "selected" : ""
                    }`}
                    onClick={() => handleDeliverySelect("domicilio")}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && handleDeliverySelect("domicilio")}
                  >
                    <div className="delivery-icon-wrap">
                      <Truck size={20} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--c-coffee-dark)" }}>
                        Envío a Domicilio
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "var(--c-text-muted)" }}>
                        Reparto en vehículo refrigerado
                      </div>
                      <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--c-pink-accent)", marginTop: 4 }}>
                        +$80.00 MXN
                      </div>
                    </div>
                  </div>
                </div>

                {/* Campos de dirección condicionales: se muestran SOLO si selecciona envío a domicilio */}
                {formData.deliveryMethod === "domicilio" ? (
                  <div
                    style={{
                      background: "var(--c-cream)",
                      padding: "1.25rem",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--c-border)",
                      animation: "fadeIn 0.3s ease",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "0.95rem",
                        color: "var(--c-coffee-dark)",
                        marginBottom: "1rem",
                        fontWeight: 700,
                      }}
                    >
                      Dirección de Entrega
                    </h4>

                    <div className="form-group">
                      <label className="form-label" htmlFor="street">
                        Calle y número exterior / interior *
                      </label>
                      <input
                        id="street"
                        name="street"
                        type="text"
                        className={`form-input ${errors.street ? "error" : ""}`}
                        placeholder="Ej. Av. Insurgentes Sur 1450, Depto 402"
                        value={formData.street}
                        onChange={handleChange}
                        autoComplete="street-address"
                      />
                      {errors.street && (
                        <div className="form-error-msg">
                          <AlertCircle size={14} />
                          <span>{errors.street}</span>
                        </div>
                      )}
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "1rem" }}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="colony">
                          Colonia / Municipio *
                        </label>
                        <input
                          id="colony"
                          name="colony"
                          type="text"
                          className={`form-input ${errors.colony ? "error" : ""}`}
                          placeholder="Ej. Los Prados"
                          value={formData.colony}
                          onChange={handleChange}
                        />
                        {errors.colony && (
                          <div className="form-error-msg">
                            <AlertCircle size={14} />
                            <span>{errors.colony}</span>
                          </div>
                        )}
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="postalCode">
                          Código Postal *
                        </label>
                        <input
                          id="postalCode"
                          name="postalCode"
                          type="text"
                          className={`form-input ${errors.postalCode ? "error" : ""}`}
                          placeholder="Ej. 03100"
                          value={formData.postalCode}
                          onChange={handleChange}
                          maxLength={6}
                        />
                        {errors.postalCode && (
                          <div className="form-error-msg">
                            <AlertCircle size={14} />
                            <span>{errors.postalCode}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" htmlFor="references">
                        Referencias de entrega (opcional)
                      </label>
                      <input
                        id="references"
                        name="references"
                        type="text"
                        className="form-input"
                        placeholder="Ej. Fachada beige, portón blanco, timbre 402"
                        value={formData.references}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      background: "var(--c-cream)",
                      padding: "1rem",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--c-border)",
                      fontSize: "0.85rem",
                      color: "var(--c-coffee)",
                    }}
                  >
                    📍 <strong>Punto de recolección:</strong> Guacamaya #2326, Fraccionamiento Los Prados, Cosoleacaque, Ver.
                    <br />
                    Te enviaremos un mensaje cuando tu pedido esté empacado y listo para retirar.
                  </div>
                )}

                {/* Dedicatoria opcional */}
                <div className="form-group" style={{ marginTop: "1.25rem", marginBottom: 0 }}>
                  <label className="form-label" htmlFor="dedicationNote">
                    Dedicatoria en pastel o mensaje de tarjeta (opcional)
                  </label>
                  <textarea
                    id="dedicationNote"
                    name="dedicationNote"
                    rows={2}
                    className="form-textarea"
                    placeholder="Ej. ¡Feliz Cumpleaños Mamá con todo nuestro amor!"
                    value={formData.dedicationNote}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Columna Derecha: Resumen de Compra */}
            <div className="order-summary-box">
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.3rem",
                  color: "var(--c-coffee-dark)",
                  marginBottom: "1rem",
                }}
              >
                Resumen del Pedido
              </h3>

              <div className="summary-items-list">
                {cart.map((item) => (
                  <div key={item.id} className="summary-item-row">
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: 44, height: 44, borderRadius: 6, objectFit: "cover" }}
                      />
                      <div>
                        <div style={{ fontWeight: 700, color: "var(--c-coffee-dark)", fontSize: "0.88rem" }}>
                          {item.name}
                        </div>
                        <div style={{ fontSize: "0.78rem", color: "var(--c-text-muted)" }}>
                          {item.quantity} x ${item.price.toFixed(2)} MXN
                        </div>
                      </div>
                    </div>
                    <div style={{ fontWeight: 700, color: "var(--c-coffee-dark)", whiteSpace: "nowrap" }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Totales desglosados */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: "1rem 0", borderTop: "1px solid var(--c-border)", borderBottom: "1px solid var(--c-border)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.92rem", color: "var(--c-coffee)" }}>
                  <span>Subtotal:</span>
                  <span style={{ fontWeight: 600 }}>${subtotal.toFixed(2)} MXN</span>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.92rem", color: "var(--c-coffee)" }}>
                  <span>Costo de envío:</span>
                  <span style={{ fontWeight: 600, color: shipping === 0 ? "var(--c-success)" : "inherit" }}>
                    {shipping === 0 ? "Gratis (Recoger en tienda)" : `$${shipping.toFixed(2)} MXN`}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "1.3rem",
                    fontWeight: 800,
                    color: "var(--c-coffee-dark)",
                    paddingTop: 8,
                    borderTop: "1px dashed var(--c-border)",
                  }}
                >
                  <span>Total Final:</span>
                  <span style={{ color: "var(--c-pink-accent)" }}>${grandTotal.toFixed(2)} MXN</span>
                </div>
              </div>

              {/* Alerta de Simulación */}
              <div className="simulation-alert">
                <ShieldCheck size={20} color="#8D6E63" style={{ flexShrink: 0 }} />
                <span>
                  <strong>Entorno Seguro de Simulación:</strong> No se solicitarán datos de tarjetas ni pasarelas reales.
                </span>
              </div>

              {/* Botón de Confirmación */}
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", marginTop: "1.5rem", height: 52 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Procesando tu pedido...</span>
                ) : (
                  <>
                    <CheckCircle size={20} />
                    <span>Confirmar Compra (${grandTotal.toFixed(2)} MXN)</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
