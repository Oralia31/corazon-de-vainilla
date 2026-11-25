import React, { useState, useEffect } from "react";
import Header from "./layout/Header";
import Hero from "./sections/Hero";
import CategorySection from "./components/CategorySection";
import ProductCatalog from "./components/ProductCatalog";
import ProductModal from "./components/ProductModal";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Checkout";
import PurchaseTicket from "./components/PurchaseTicket";
import AboutUs from "./sections/AboutUs";
import CookieSection from "./sections/CookieSection";
import Testimonials from "./sections/Testimonials";
import ContactSection from "./sections/ContactSection";
import Footer from "./layout/Footer";
import Toast from "./ui/Toast";
import { PRODUCTS } from "./data/products";

export default function App() {
  // 1. Estado del carrito inicializado con LocalStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("dulce_tentacion_cart");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Error al leer LocalStorage:", e);
      return [];
    }
  });

  // 2. Estado de vista: 'store' | 'checkout' | 'ticket'
  const [activeView, setActiveView] = useState("store");

  // 3. Estado de cajón del carrito
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 4. Modal de detalle de producto
  const [modalProduct, setModalProduct] = useState(null);

  // 5. Categoría activa en catálogo: 'todos' | 'Pasteles' | 'Galletas'
  const [selectedCategory, setSelectedCategory] = useState("todos");

  // 6. Última orden confirmada (para el ticket)
  const [completedOrder, setCompletedOrder] = useState(null);

  // 7. Notificaciones Toast
  const [toasts, setToasts] = useState([]);

  // Sincronizar carrito con LocalStorage en cada modificación
  useEffect(() => {
    try {
      localStorage.setItem("dulce_tentacion_cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Error al guardar en LocalStorage:", e);
    }
  }, [cart]);

  // Manejador de Toasts
  const showToast = (message, type = "success") => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const dismissToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Agregar producto al carrito
  const handleAddToCart = (product, qty = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: qty }];
      }
    });

    showToast(`¡${product.name} agregado al carrito!`, "success");
  };

  // Actualizar cantidad de producto en el carrito
  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item))
    );
  };

  // Eliminar producto del carrito
  const handleRemoveItem = (productId) => {
    const itemToRemove = cart.find((i) => i.id === productId);
    setCart((prev) => prev.filter((item) => item.id !== productId));
    if (itemToRemove) {
      showToast(`Se eliminó ${itemToRemove.name} del carrito.`, "info");
    }
  };

  // Vaciar carrito
  const handleClearCart = () => {
    setCart([]);
    showToast("Se vació tu carrito de compras.", "info");
  };

  // Navegar al checkout
  const handleGoToCheckout = () => {
    setIsCartOpen(false);
    setActiveView("checkout");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Confirmar compra y generar ticket
  const handleConfirmPurchase = (orderData) => {
    setCompletedOrder(orderData);
    setCart([]); // Regla de negocio: limpiar carrito tras compra exitosa
    setActiveView("ticket");
    showToast("¡Compra confirmada! Generando ticket...", "success");
  };

  // Regresar a la tienda tras ticket
  const handleReturnToStore = () => {
    setCompletedOrder(null);
    setActiveView("store");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Navegación fluida por secciones
  const handleNavigate = (sectionId) => {
    if (activeView !== "store") {
      setActiveView("store");
    }

    if (sectionId === "menu" || sectionId === "pedidos") {
      setSelectedCategory("todos");
      setTimeout(() => {
        const el = document.getElementById("catalogo");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }

    if (sectionId === "pasteles") {
      setSelectedCategory("Pasteles");
      setTimeout(() => {
        const el = document.getElementById("catalogo");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }

    if (sectionId === "galletas") {
      setSelectedCategory("Galletas");
      setTimeout(() => {
        const el = document.getElementById("catalogo");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }

    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  const cartTotalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app-layout">
      {/* Encabezado Principal */}
      <Header
        cartCount={cartTotalItems}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
        activeSection={activeView === "store" ? "inicio" : ""}
      />

      {/* VISTA 1: TIENDA PRINCIPAL */}
      {activeView === "store" && (
        <main>
          {/* Banner Hero Split (Corazón de Vainilla) */}
          <Hero
            onExploreMenu={() => {
              setSelectedCategory("todos");
              const el = document.getElementById("catalogo");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          />

          {/* Sección de Categorías Rápidas */}
          <CategorySection
            onSelectCategory={(category) => {
              setSelectedCategory(category);
              const el = document.getElementById("catalogo");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          />

          {/* Catálogo de Productos con Filtros y Búsqueda */}
          <ProductCatalog
            products={PRODUCTS}
            onAddToCart={handleAddToCart}
            onOpenDetails={(product) => setModalProduct(product)}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          /> 

          {/* Sección Nosotros */}
          <AboutUs />

          {/* Galletas destacadas */}
          <CookieSection
            onSelectCategory={(category) => {
              setSelectedCategory(category);
              const el = document.getElementById("catalogo");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          />

          {/* Sección Testimonios */}
          {/*<Testimonials />*/}

          {/* Sección Contacto */}
          <ContactSection onShowToast={showToast} />
        </main>
      )}

      {/* VISTA 2: CHECKOUT */}
      {activeView === "checkout" && (
        <main>
          <Checkout
            cart={cart}
            onBackToStore={() => {
              setActiveView("store");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onConfirmPurchase={handleConfirmPurchase}
          />
        </main>
      )}

      {/* VISTA 3: TICKET DE COMPRA */}
      {activeView === "ticket" && (
        <main>
          <PurchaseTicket
            order={completedOrder}
            onReturnToStore={handleReturnToStore}
          />
        </main>
      )}

      {/* Pie de Página */}
      <Footer onNavigate={handleNavigate} />

      {/* Cajón Deslizante del Carrito */}
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onGoToCheckout={handleGoToCheckout}
      />

      {/* Modal de Detalle de Producto */}
      {modalProduct && (
        <ProductModal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Notificaciones Toasts flotantes */}
      <Toast toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}
