import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Sparkles, CheckCircle2 } from "lucide-react";

export default function ContactSection({ onShowToast }) {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      onShowToast("Por favor llena todos los campos para enviarnos tu mensaje.", "error");
      return;
    }

    setSubmitted(true);
    onShowToast("¡Mensaje enviado con éxito! Te responderemos muy pronto.", "success");
    setContactForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="contact-section" id="contacto">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="section-badge">
            <Sparkles size={14} />
            Estamos para Atenderte
          </div>
          <h2 className="section-title">Contáctanos & Visítanos</h2>
          <p className="section-subtitle">
            ¿Tienes un evento especial o necesitas un pastel personalizado? Escríbenos o visítanos en nuestra sucursal.
          </p>
        </div>

        <div className="contact-grid">
          {/* Tarjetas de Información */}
          <div className="contact-info-cards">
            <div className="contact-card-item">
              <div className="feature-icon-box">
                <MapPin size={22} />
              </div>
              <div>
                <h4 style={{ fontWeight: 700, color: "var(--c-coffee-dark)" }}>Nuestra Sucursal</h4>
                <p style={{ fontSize: "0.88rem", color: "var(--c-text-muted)" }}>
                  Guacamaya #2326, Fraccionamiento Los Prados, Cosoleacaque, Ver.
                </p>
              </div>
            </div>

            <div className="contact-card-item">
              <div className="feature-icon-box">
                <Phone size={22} />
              </div>
              <div>
                <h4 style={{ fontWeight: 700, color: "var(--c-coffee-dark)" }}>Atención Telefónica & WhatsApp</h4>
                <p style={{ fontSize: "0.88rem", color: "var(--c-text-muted)" }}>
                  922 158 9055
                </p>
              </div>
            </div>

            <div className="contact-card-item">
              <div className="feature-icon-box">
                <Mail size={22} />
              </div>
              <div>
                <h4 style={{ fontWeight: 700, color: "var(--c-coffee-dark)" }}>Correo Electrónico</h4>
                <p style={{ fontSize: "0.88rem", color: "var(--c-text-muted)" }}>
                  corazondevainilla239@gmail.com
                </p>
              </div>
            </div>

            <div className="contact-card-item">
              <div className="feature-icon-box">
                <Clock size={22} />
              </div>
              <div>
                <h4 style={{ fontWeight: 700, color: "var(--c-coffee-dark)" }}>Horarios de Atención</h4>
                <p style={{ fontSize: "0.88rem", color: "var(--c-text-muted)" }}>
                  Lunes a Sábado: 8:00 AM - 8:00 PM <br />
                  Domingos: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Formulario de Mensaje Simulado */}
          <div className="checkout-card" style={{ background: "var(--c-white)" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "var(--c-coffee-dark)", marginBottom: "1rem" }}>
              Envíanos una Consulta o Pedido Especial
            </h3>
            <p style={{ fontSize: "0.85rem", color: "var(--c-text-muted)", marginBottom: "1.5rem" }}>
              Cotizaciones para bodas, aniversarios o eventos corporativos con degustación personalizada.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label className="form-label" htmlFor="contactName">
                  Nombre completo
                </label>
                <input
                  id="contactName"
                  type="text"
                  className="form-input"
                  placeholder="Tu nombre completo"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contactEmail">
                  Correo electrónico
                </label>
                <input
                  id="contactEmail"
                  type="email"
                  className="form-input"
                  placeholder="tu@correo.com"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contactMessage">
                  Mensaje o detalles del pedido especial
                </label>
                <textarea
                  id="contactMessage"
                  rows={3}
                  className="form-textarea"
                  placeholder="Cuéntanos fecha de tu evento, número de personas o sabores deseados..."
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                {submitted ? (
                  <>
                    <CheckCircle2 size={18} />
                    <span>¡Enviado con Éxito!</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
