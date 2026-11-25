import React, { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, Phone, Clock } from "lucide-react";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "../components/icons";

// Logo oficial de la marca
const BrandLogoDisplay = ({ size = 100 }) => (
  <img
    src="/images/logo.png"
    alt="Corazón de Vainilla"
    style={{ width: size, height: size, objectFit: "contain", display: "block" }}
  />
);

export default function Header({
  cartCount,
  onOpenCart,
  onNavigate,
  activeSection,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="header-inner">
            {/* Logotipo oficial de la marca */}
            <div className="brand-logo" onClick={() => handleNavClick("inicio")} title="Corazón de Vainilla - Inicio">
              <div className="brand-emblem-wrap">
                <BrandLogoDisplay size={100} />
              </div>
            </div>

            {/* Menú de Navegación Desktop: Inicio, Nuestro menú, Nosotros, Pedidos, Contacto */}
            <nav className="nav-desktop-ref" aria-label="Navegación principal">
              <a
                href="#inicio"
                className={`nav-ref-link ${activeSection === "inicio" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("inicio");
                }}
              >
                Inicio
              </a>
              <a
                href="#menu"
                className={`nav-ref-link ${activeSection === "menu" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("menu");
                }}
              >
                Nuestro menú
              </a>
              <a
                href="#nosotros"
                className={`nav-ref-link ${activeSection === "nosotros" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("nosotros");
                }}
              >
                Nosotros
              </a>
              <a
                href="#pedidos"
                className={`nav-ref-link ${activeSection === "pedidos" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("pedidos");
                }}
              >
                Pedidos
              </a>
              <a
                href="#contacto"
                className={`nav-ref-link ${activeSection === "contacto" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("contacto");
                }}
              >
                Contacto
              </a>
            </nav>

            {/* Acciones: Iconos de Redes Sociales, Carrito y Menú Hamburguesa */}
            <div className="header-actions">
              {/* Redes Sociales con color y forma exactos a la imagen */}
              <div className="header-social-group" aria-label="Redes sociales">
                <a
                  href="https://www.facebook.com/share/18VF1bBxSp/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label="Facebook de Corazón de Vainilla"
                  title="Facebook"
                >
                  <FacebookIcon size={25} />
                </a>

                <a
                  href="https://www.instagram.com/corazondevainilla_1?knvt=YWN3azhqMWVwb3ps&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label="Instagram de Corazón de Vainilla"
                  title="Instagram"
                >
                  <InstagramIcon size={25} />
                </a>

                <a
                  href="https://wa.me/529221589055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label="WhatsApp de Corazón de Vainilla"
                  title="WhatsApp"
                >
                  <WhatsAppIcon size={25} />
                </a>
              </div>

              {/* Botón Carrito de Compras con insignia */}
              <button
                className="cart-toggle-btn"
                onClick={onOpenCart}
                aria-label={`Ver carrito de compras con ${cartCount} productos`}
                title="Carrito de compras"
              >
                <ShoppingBag size={21} />
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </button>

              {/* Botón Hamburguesa Móvil */}
              <button
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Abrir menú de navegación"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop del Cajón móvil */}
      {mobileMenuOpen && (
        <div
          className="drawer-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Menú Desplegable Móvil */}
      <aside
        className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}
        aria-label="Menú móvil"
      >
        <div className="mobile-nav-header">
          <div className="brand-logo" onClick={() => handleNavClick("inicio")}>
            <BrandLogoDisplay size={64} />
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Cerrar menú"
            style={{ padding: 4 }}
          >
            <X size={24} color="#3A2216" />
          </button>
        </div>

        <nav className="mobile-nav-links">
          <button
            className={`mobile-nav-link ${activeSection === "inicio" ? "active" : ""}`}
            onClick={() => handleNavClick("inicio")}
          >
            🏠 Inicio
          </button>
          <button
            className={`mobile-nav-link ${activeSection === "menu" ? "active" : ""}`}
            onClick={() => handleNavClick("menu")}
          >
            📋 Nuestro menú
          </button>
          <button
            className={`mobile-nav-link ${activeSection === "nosotros" ? "active" : ""}`}
            onClick={() => handleNavClick("nosotros")}
          >
            👩‍🍳 Nosotros
          </button>
          <button
            className={`mobile-nav-link ${activeSection === "pedidos" ? "active" : ""}`}
            onClick={() => handleNavClick("pedidos")}
          >
            🛍️ Pedidos
          </button>
          <button
            className={`mobile-nav-link ${activeSection === "contacto" ? "active" : ""}`}
            onClick={() => handleNavClick("contacto")}
          >
            📍 Contacto
          </button>
        </nav>

        <div style={{ marginTop: "auto", paddingTop: "1.25rem", borderTop: "1px solid var(--c-border)" }}>
          <span style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", color: "var(--c-text-muted)", display: "block", marginBottom: 10 }}>
            Síguenos y contáctanos
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
            <a
              href="https://www.facebook.com/share/18VF1bBxSp/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="Facebook"
            >
              <FacebookIcon size={28} />
            </a>
            <a
              href="https://www.instagram.com/corazondevainilla_1?knvt=YWN3azhqMWVwb3ps&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="Instagram"
            >
              <InstagramIcon size={28} />
            </a>
            <a
              href="https://wa.me/529221589055"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={28} />
            </a>
          </div>

          <div>
            <a
              href="https://wa.me/529221589055"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-whatsapp-number"
              aria-label="Enviar mensaje al 922 158 9055 por WhatsApp"
            >
              <Phone size={14} color="#8E283F" /> 922 158 9055
            </a>
            <p style={{ fontSize: "0.85rem", color: "var(--c-text-muted)", display: "flex", alignItems: "center", gap: 6 }}>
              <Clock size={14} color="#8E283F" /> Lun a Dom: 8:00 - 20:00
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
