import React from "react";
import { Star, Quote, Sparkles } from "lucide-react";
import { TESTIMONIALS } from "../data/products";

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonios">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div className="section-badge">
            <Sparkles size={14} />
            Opiniones Reales
          </div>
          <h2 className="section-title">Lo que Dicen Quienes Ya Probaron</h2>
          <p className="section-subtitle">
            La satisfacción de nuestros clientes es nuestro mayor orgullo y el motor que nos impulsa a innovar cada día.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <div style={{ display: "flex", gap: 3 }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#C88A3E" color="#C88A3E" />
                  ))}
                </div>
                <Quote size={24} color="#F7CAD0" />
              </div>

              <p style={{ color: "var(--c-coffee)", fontSize: "0.92rem", fontStyle: "italic", lineHeight: 1.6, marginBottom: "1.25rem", flexGrow: 1 }}>
                "{t.comment}"
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 12, borderTop: "1px solid var(--c-border)", paddingTop: "1rem" }}>
                <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                <div>
                  <h5 style={{ fontWeight: 700, color: "var(--c-coffee-dark)", fontSize: "0.95rem" }}>{t.name}</h5>
                  <div style={{ fontSize: "0.78rem", color: "var(--c-pink-accent)", fontWeight: 600 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
