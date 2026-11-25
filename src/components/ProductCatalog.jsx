import React, { useState, useMemo } from "react";
import { Sparkles, Search, Cake, Cookie, Grid } from "lucide-react";
import ProductCard from "./ProductCard";

export default function ProductCatalog({
  products,
  onAddToCart,
  onOpenDetails,
  selectedCategory,
  onSelectCategory,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((prod) => {
      const matchCat =
        selectedCategory === "todos" || prod.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchSearch =
        prod.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prod.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [products, selectedCategory, searchTerm]);

  return (
    <section className="catalog-section" id="catalogo">
      <div className="container">
        <div className="catalog-header">
          
          {/*<div className="section-badge">
            <Sparkles size={14} />
            Catálogo Completo
          </div>*/}

          <h2 className="section-title">Nuestra Selección Artesanal</h2>
           <div className="dessert-divider" aria-hidden="true">
            <span />
            <b>♥</b>
            <span />
          </div>
          
          <p className="section-subtitle">
            Ingredientes 100% naturales, mantequilla pura y chocolate de origen. Selecciona tus favoritos y recíbelos en tu hogar o recógelos en tienda.
          </p>
        </div>

        {/* Controles de Filtros y Búsqueda */}
        <div className="catalog-controls">
          {/* Píldoras de Categorías */}
          <div className="category-pills" role="tablist" aria-label="Filtrar por categoría">
            <button
              className={`pill-btn ${selectedCategory === "todos" ? "active" : ""}`}
              onClick={() => onSelectCategory("todos")}
              role="tab"
              aria-selected={selectedCategory === "todos"}
            >
              <Grid size={16} />
              <span>Todos ({products.length})</span>
            </button>

            <button
              className={`pill-btn ${selectedCategory === "Pasteles" ? "active" : ""}`}
              onClick={() => onSelectCategory("Pasteles")}
              role="tab"
              aria-selected={selectedCategory === "Pasteles"}
            >
              <Cake size={16} />
              <span>Pasteles ({products.filter((p) => p.category === "Pasteles").length})</span>
            </button>

            <button
              className={`pill-btn ${selectedCategory === "Galletas" ? "active" : ""}`}
              onClick={() => onSelectCategory("Galletas")}
              role="tab"
              aria-selected={selectedCategory === "Galletas"}
            >
              <Cookie size={16} />
              <span>Galletas ({products.filter((p) => p.category === "Galletas").length})</span>
            </button>
          </div>

          {/* Barra de búsqueda */}
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Buscar por nombre o sabor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Buscar producto"
            />
          </div>
        </div>

        {/* Grid de Productos Responsive */}
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onOpenDetails={onOpenDetails}
              />
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "4rem 1rem",
              background: "var(--c-white)",
              borderRadius: "var(--radius-lg)",
              border: "1px dashed var(--c-border)",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                marginBottom: "1rem",
              }}
            >
              🧁
            </div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "var(--c-coffee-dark)", marginBottom: 8 }}>
              No encontramos resultados para tu búsqueda
            </h3>
            <p style={{ color: "var(--c-text-muted)", marginBottom: "1.5rem" }}>
              Intenta buscando con otra palabra o limpia el filtro para ver todo el catálogo.
            </p>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => {
                setSearchTerm("");
                onSelectCategory("todos");
              }}
            >
              Restablecer filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
