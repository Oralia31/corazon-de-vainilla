import React from "react";
import { Cake, Mail, MapPin } from "lucide-react";
import { WhatsAppIcon } from "../components/icons";

export default function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Columna 1: Marca */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "var(--c-pink-light)",
                  color: "var(--c-pink-accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Cake size={22} />
              </div>
              <span style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.7rem", fontWeight: 700, color: "var(--c-white)" }}>
                Corazón de Vainilla
              </span>
            </div>

            <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginBottom: "1.25rem", maxWidth: 320 }}>
              Postres hechos a mano con ingredientes de calidad y un toque de cariño. Creando momentos dulces desde Cosoleacaque, Veracruz.
            </p>

            <div style={{ display: "flex", gap: 12 }}>
              {/* Instagram SVG */}
              <a
                href="https://www.instagram.com/corazondevainilla_1?knvt=YWN3azhqMWVwb3ps&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Corazón de Vainilla"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--c-pink)",
                  transition: "background 0.2s",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* Facebook SVG */}
              <a
                href="https://www.facebook.com/share/18VF1bBxSp/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Corazón de Vainilla"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--c-pink)",
                  transition: "background 0.2s",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--c-white)", marginBottom: "1.25rem" }}>
              Navegación
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, fontSize: "0.88rem", color: "rgba(255,255,255,0.75)" }}>
              <li>
                <a href="#inicio" onClick={(e) => { e.preventDefault(); onNavigate("inicio"); }}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#pasteles" onClick={(e) => { e.preventDefault(); onNavigate("pasteles"); }}>
                  Pasteles Artesanales
                </a>
              </li>
              <li>
                <a href="#galletas" onClick={(e) => { e.preventDefault(); onNavigate("galletas"); }}>
                  Galletas Gourmet
                </a>
              </li>
              <li>
                <a href="#nosotros" onClick={(e) => { e.preventDefault(); onNavigate("nosotros"); }}>
                  Nuestra Historia
                </a>
              </li>
              <li>
                <a href="#contacto" onClick={(e) => { e.preventDefault(); onNavigate("contacto"); }}>
                  Contacto & Sucursal
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Horarios */}
          <div>
            <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--c-white)", marginBottom: "1.25rem" }}>
              Horarios
            </h4>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginBottom: 8 }}>
              <strong>Lunes a Sábado:</strong><br />
              8:00 AM - 8:00 PM
            </p>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
              <strong>Domingos:</strong><br />
              9:00 AM - 6:00 PM
            </p>
          </div>

          {/* Columna 4: Contacto directo */}
          <div>
            <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--c-white)", marginBottom: "1.25rem" }}>
              Contacto Directo
            </h4>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)", display: "flex", gap: 8, marginBottom: 8 }}>
              <MapPin size={16} color="#F7CAD0" style={{ flexShrink: 0 }} />
              <span>Guacamaya #2326, Fraccionamiento Los Prados, Cosoleacaque, Ver.</span>
            </p>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)", display: "flex", gap: 8, marginBottom: 8 }}>
              <WhatsAppIcon size={16} color="#F7CAD0" />
              <a href="https://wa.me/529221589055?text=Hola%2C%20Coraz%C3%B3n%20de%20Vainilla.%20Me%20gustar%C3%ADa%20hacer%20un%20pedido%20y%20recibir%20informaci%C3%B3n%20sobre%20sus%20productos." target="_blank" rel="noopener noreferrer">
                922 158 9055
              </a>
            </p>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)", display: "flex", gap: 8 }}>
              <Mail size={16} color="#F7CAD0" style={{ flexShrink: 0 }} />
              <span>corazondevainilla239@gmail.com</span>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Corazón de Vainilla Repostería Artesanal. Todos los derechos reservados.
            <br />
          </p>
        </div>
      </div>
    </footer>
  );
}
