import React, { useEffect } from "react";
import { Printer, Download, ArrowLeft, Cake, CheckCircle2, Heart, Sparkles, MapPin, Phone, Mail } from "lucide-react";
import confetti from "canvas-confetti";

export default function PurchaseTicket({ order, onReturnToStore }) {
  useEffect(() => {
    // Disparar confeti de celebración al montar el ticket
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#F7CAD0", "#EE859A", "#C88A3E", "#FFFDF9", "#583925"],
      });
    } catch (e) {
      // Ignorar si el entorno bloquea canvas
    }

    // Scroll arriba para ver el ticket completo
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!order) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="ticket-wrapper">
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Banner de éxito antes del comprobante */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "1.75rem",
            maxWidth: 580,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "var(--c-success-light)",
              color: "var(--c-success)",
              marginBottom: 12,
            }}
          >
            <CheckCircle2 size={32} />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.8rem",
              color: "var(--c-coffee-dark)",
              marginBottom: 6,
            }}
          >
            ¡Pedido Realizado con Éxito!
          </h2>
          <p style={{ color: "var(--c-text-muted)", fontSize: "0.95rem" }}>
            Hemos recibido tu orden simulada. A continuación tienes tu comprobante oficial de compra listo para guardar o imprimir.
          </p>
        </div>

        {/* CONTENEDOR DEL TICKET OFICIAL */}
        <div className="ticket-container" id="printable-ticket">
          {/* Cabecera del Ticket */}
          <div className="ticket-header">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 4 }}>
              <Cake size={24} color="#8E283F" />
              <div className="ticket-logo" style={{ fontFamily: "'Dancing Script', cursive", fontSize: "2.2rem", color: "#8E283F" }}>
                Corazón de Vainilla
              </div>
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--c-text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
              Repostería Artesanal & Galletas Gourmet
            </div>
            <div style={{ fontSize: "0.8rem", color: "var(--c-coffee-light)", marginTop: 4 }}>
              Guacamaya #2326, Fraccionamiento Los Prados, Cosoleacaque, Ver. • RFC: CDV-120524-ABC
            </div>
            <div style={{ fontSize: "0.8rem", color: "var(--c-coffee-light)" }}>
              Tel: 922 158 9055 • corazondevainilla239@gmail.com
            </div>

            <div className="ticket-folio-badge">
              FOLIO: {order.folio}
            </div>
          </div>

          {/* Metadatos de la Compra */}
          <div className="ticket-meta-grid">
            <div className="ticket-meta-item">
              <span className="ticket-meta-label">Fecha y Hora</span>
              <span className="ticket-meta-value">{order.date}</span>
            </div>

            <div className="ticket-meta-item">
              <span className="ticket-meta-label">Cliente</span>
              <span className="ticket-meta-value">{order.customer.fullName}</span>
            </div>

            <div className="ticket-meta-item">
              <span className="ticket-meta-label">Teléfono de Contacto</span>
              <span className="ticket-meta-value">{order.customer.phone}</span>
            </div>

            <div className="ticket-meta-item">
              <span className="ticket-meta-label">Correo Electrónico</span>
              <span className="ticket-meta-value">{order.customer.email}</span>
            </div>

            <div className="ticket-meta-item" style={{ gridColumn: "1 / -1" }}>
              <span className="ticket-meta-label">Método de Entrega</span>
              <span className="ticket-meta-value" style={{ color: "var(--c-pink-accent)", fontWeight: 700 }}>
                {order.deliveryMethod}
              </span>
            </div>

            {order.deliveryAddress && (
              <div className="ticket-meta-item" style={{ gridColumn: "1 / -1" }}>
                <span className="ticket-meta-label">Dirección Registrada</span>
                <span className="ticket-meta-value">{order.deliveryAddress}</span>
              </div>
            )}

            {order.dedicationNote && (
              <div className="ticket-meta-item" style={{ gridColumn: "1 / -1", background: "var(--c-pink-light)", padding: "0.5rem 0.75rem", borderRadius: 6 }}>
                <span className="ticket-meta-label">Dedicatoria Solicitada:</span>
                <span className="ticket-meta-value" style={{ fontStyle: "italic" }}>
                  "{order.dedicationNote}"
                </span>
              </div>
            )}
          </div>

          {/* Tabla de Productos Comprados */}
          <table className="ticket-table">
            <thead>
              <tr>
                <th style={{ width: "12%" }}>Cant.</th>
                <th>Descripción</th>
                <th className="col-right" style={{ width: "22%" }}>P. Unit</th>
                <th className="col-right" style={{ width: "24%" }}>Importe</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item) => (
                <tr key={item.id}>
                  <td style={{ fontWeight: 700 }}>{item.quantity} pza</td>
                  <td>
                    <div style={{ fontWeight: 600 }}>{item.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--c-text-muted)" }}>
                      {item.category}
                    </div>
                  </td>
                  <td className="col-right">${item.price.toFixed(2)}</td>
                  <td className="col-right" style={{ fontWeight: 700 }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Desglose de Totales */}
          <div className="ticket-totals-list">
            <div className="ticket-total-row">
              <span>Subtotal Productos:</span>
              <span style={{ fontWeight: 600 }}>${order.subtotal.toFixed(2)} MXN</span>
            </div>

            <div className="ticket-total-row">
              <span>Costo de Envío:</span>
              <span style={{ fontWeight: 600 }}>
                {order.shipping === 0 ? "Gratis ($0.00 MXN)" : `$${order.shipping.toFixed(2)} MXN`}
              </span>
            </div>

            <div className="ticket-total-row grand-total">
              <span>TOTAL PAGADO:</span>
              <span>${order.total.toFixed(2)} MXN</span>
            </div>
          </div>

          {/* Código de barras simulado */}
          <div className="ticket-barcode">
            ||| | ||||| || |||||| | |||| ||| ||||||| ||| |||
            <div style={{ fontSize: "0.75rem", marginTop: 4, letterSpacing: "0.3em" }}>
              *{order.folio}*
            </div>
          </div>

          {/* Mensaje de agradecimiento */}
          <div className="ticket-thanks">
            <Heart size={18} fill="#E56B84" color="#E56B84" style={{ display: "inline-block", verticalAlign: "middle", marginRight: 6 }} />
            ¡Muchas gracias por permitirnos endulzar tus momentos especiales!
            <br />
            <span style={{ fontSize: "0.85rem", color: "var(--c-text-muted)", fontStyle: "normal", display: "block", marginTop: 6 }}>
              Horneamos con amor, técnica y los mejores ingredientes artesanales de México.
            </span>
          </div>

          <div
            style={{
              textAlign: "center",
              fontSize: "0.75rem",
              color: "var(--c-text-muted)",
              borderTop: "1px dashed var(--c-border)",
              paddingTop: 10,
            }}
          >
            Estado del pedido: <strong>CONFIRMADO (SIMULACIÓN E-COMMERCE)</strong>
          </div>
        </div>

        {/* Barra de Acciones */}
        <div className="ticket-actions-bar">
          <button className="btn btn-primary" onClick={handlePrint}>
            <Printer size={18} />
            <span>Imprimir Ticket</span>
          </button>

          <button
            className="btn btn-secondary"
            onClick={handlePrint}
            title="Selecciona 'Guardar como PDF' en el destino de impresión de tu navegador"
          >
            <Download size={18} />
            <span>Guardar como PDF</span>
          </button>

          <button className="btn btn-coffee" onClick={onReturnToStore}>
            <ArrowLeft size={18} />
            <span>Regresar a la Tienda</span>
          </button>
        </div>
      </div>
    </div>
  );
}
