# 🍰 Dulce Tentación - Repostería Artesanal & Gourmet
### E-Commerce Simulado en React + CSS3 (Mobile-First)

Bienvenido a la tienda en línea oficial de **Dulce Tentación**, una repostería fina especializada en la elaboración y venta de pasteles de ocasión y galletas gourmet artesanales.

Este proyecto ha sido desarrollado como una **Single Page Application (SPA)** de comercio electrónico completa, moderna, interactiva y 100% responsiva bajo la arquitectura de **React**, utilizando **React Hooks**, **LocalStorage**, **CSS Grid**, **Flexbox** y estilos optimizados para impresión (`@media print`).

---

## 📸 1. Concepto e Identidad Visual

| Atributo | Detalle |
| :--- | :--- |
| **Nombre de la Tienda** | **Dulce Tentación** (*Repostería Fina & Gourmet*) |
| **Concepto de Marca** | Alta pastelería artesanal, recetas tradicionales europeas y mexicanas, ingredientes 100% naturales, libre de conservadores. |
| **Emociones transmitidas** | Dulzura, elegancia, calidez, calidad artesanal y confianza familiar. |
| **Paleta de Colores Pastel** | • **Rosa Claro / Pastel:** `#FEF4F6`, `#F7CAD0`, `#E56B84`<br>• **Crema & Vainilla:** `#FFFCF7`, `#FFF9EE`<br>• **Beige & Almendra:** `#F9F4ED`, `#ECE2D5`<br>• **Café & Cacao Belga:** `#3A2216`, `#583925`<br>• **Blanco Puro:** `#FFFFFF` |
| **Tipografía** | • **Títulos:** *Playfair Display* (Serif elegante, clásico y sofisticado)<br>• **Cuerpo y UI:** *Plus Jakarta Sans* (Sans-serif moderno, legible y limpio) |

---

## 📱 2. Diseño Responsive & Multidispositivo (Mobile-First)

El proyecto fue construido bajo la metodología **Mobile-First**, garantizando fluidez visual, ergonomía táctil y **ausencia total de scroll horizontal** en todas las resoluciones evaluadas:

- **Móvil Pequeño (360 × 800 px):** Menú hamburguesa desplegable, tarjeta de producto en 1 columna, botones táctiles de 48px de altura mínima.
- **iPhone (390 × 844 px):** Espaciado ergonómico, selector de cantidades cómodo, Drawer del carrito fluido.
- **Móvil Grande (430 × 932 px):** 2 columnas de productos, visualización nítida y proporciones fotográficas exactas.
- **Tablets (768 × 1024 px & 1024 × 1366 px):** Catálogo en 2 a 3 columnas, formulario de Checkout en doble bloque, navegación equilibrada.
- **Laptops & Monitores de Escritorio (1366 × 768 px & 1920 × 1080 px):** Navegación completa en cabecera con efecto blur al hacer scroll, catálogo en 4 columnas, Checkout con desglose lateral fijado y ticket centrado.

---

## 🎂 3. Catálogo de Productos (12 Productos en MXN)

Todos los precios se manejan en **Pesos Mexicanos (MXN)** con cálculos monetarios precisos a 2 decimales:

### 🧁 Categoría: Pasteles Artesanales
1. **Pastel Supremo de Chocolate** — `$480.00 MXN` (Cacao belga al 70%, ganache cremosa y virutas artesanales).
2. **Pastel Tres Leches Tradicional** — `$420.00 MXN` (Bizcocho esponjoso bañado en tres leches con vainilla de Papantla y merengue suizo dorado).
3. **Pastel Chantilly con Fresas Frescas** — `$450.00 MXN` (Fresas orgánicas de Michoacán, crema chantilly ligera y mermelada casera).
4. **Cheesecake New York con Frutos Rojos** — `$520.00 MXN` (Horneado a baño maría con base crocante y coulis de frambuesas y moras).
5. **Pastel Especiado de Zanahoria** — `$460.00 MXN` (Nuez tostada, canela, nuez moscada y frosting clásico de queso crema).
6. **Pastel Gourmet de Vainilla Francesa** — `$410.00 MXN` (Vainas Bourbon naturales, crema diplomática y buttercream sedoso).

### 🍪 Categoría: Galletas Gourmet
7. **Galletas con Chispas de Chocolate (Caja 6 pzas)** — `$165.00 MXN` (Centro chewy, bordes dorados crujientes y flor de sal de Colima).
8. **Galletas de Avena con Arándanos y Miel (Caja 6 pzas)** — `$155.00 MXN` (Avena de grano entero, miel pura de abeja y canela).
9. **Galletas de Mantequilla Danesa (Caja 12 pzas)** — `$180.00 MXN` (Receta europea tradicional con 82% grasa que se deshace en la boca).
10. **Galletas Red Velvet Rellenas de Cheesecake (Caja 4 pzas)** — `$195.00 MXN` (Masa aterciopelada y corazón fundente de crema de queso).
11. **Besos de Nuez Tradicionales (Caja 12 pzas)** — `$175.00 MXN` (Polvorosas, con nuez pecana tostada y nevada de azúcar glas).
12. **Galletas Doble Chocolate Estilo Brownie (Caja 6 pzas)** — `$185.00 MXN` (Textura fudgy, corteza brillante craquelada y chispas belgas).

---

## 🛒 4. Funcionalidades Principales

### 🛍️ Carrito de Compras Interactivo
- **Persistencia en LocalStorage:** El carrito conserva los productos aun si el usuario recarga la página o cierra el navegador.
- **Badge Contador:** Indica en tiempo real el total de piezas agregadas.
- **Controles de Cantidad (`+` / `-`):** Incrementa o disminuye unidades con actualización inmediata de subtotales.
- **Eliminación individual y vaciado total.**
- **Cálculo dinámico:** Subtotal por artículo, subtotal acumulado y total final.
- **Estado vacío amigable:** Con botón de llamada a la acción para volver a explorar.

### 📝 Checkout & Simulación de Compra
- Validación en tiempo real de campos requeridos:
  - Nombre completo (mínimo 3 caracteres).
  - Teléfono celular (10 dígitos).
  - Correo electrónico (formato RFC válido).
- **Método de entrega dinámico:**
  - **Recoger en Tienda:** Costo `$0.00 MXN` (Gratis), muestra dirección de la sucursal física.
  - **Envío a Domicilio:** Suma automáticamente `$80.00 MXN` al total y **despliega condicionalmente** los campos de Calle, Colonia, Código Postal y Referencias.
- Campo opcional para dedicatoria en pastel o mensaje de tarjeta.
- Aviso claro de entorno seguro de simulación (sin cobros reales).

### 🧾 Generación de Ticket de Compra & Impresión PDF
Al confirmar el pedido, el sistema genera inmediatamente un ticket profesional que incluye:
- Nombre, logotipo y datos fiscales ficticios de la pastelería.
- **Folio único autogenerado** (ejemplo: `DT-2026-84920`).
- **Fecha y hora exacta** del pedido.
- Datos del cliente y dirección / método de entrega.
- Tabla desglosada con Cantidad, Descripción, Precio Unitario e Importe.
- Desglose de Subtotal, Envío y Total Pagado en MXN.
- Código de barras decorativo y mensaje cálido de agradecimiento.
- **Botón "Imprimir Ticket" / "Guardar como PDF":** Gracias a las reglas `@media print`, al imprimir solo se visualiza el ticket limpio en escala de grises/negro, eliminando encabezados, menús y botones web.
- **Botón "Regresar a la Tienda":** Limpia el carrito y regresa al usuario al catálogo para una nueva experiencia.

---

## 📁 5. Arquitectura del Código

El proyecto está organizado en una estructura limpia y modular:

```text
Proyecto-fer/
├── dist/                          # Build de producción optimizado (HTML + JS + CSS)
│   ├── index.html
│   └── assets/
├── public/                        # Recursos estáticos
├── src/
│   ├── components/                # Componentes React reutilizables
│   │   ├── Header.jsx             # Cabecera, logotipo, navegación y badge de carrito
│   │   ├── Hero.jsx               # Banner principal y franja de beneficios
│   │   ├── CategorySection.jsx    # Acceso rápido a Pasteles y Galletas
│   │   ├── ProductCatalog.jsx     # Catálogo con filtros y buscador en vivo
│   │   ├── ProductCard.jsx        # Tarjeta de producto con hover y botón de agregar
│   │   ├── ProductModal.jsx       # Modal de detalle (ingredientes, alérgenos, porciones)
│   │   ├── ShoppingCart.jsx       # Drawer lateral del carrito interactivo
│   │   ├── Checkout.jsx           # Pantalla de checkout y validación de formulario
│   │   ├── PurchaseTicket.jsx     # Ticket imprimible con folio único y confetti
│   │   ├── AboutUs.jsx            # Sección sobre la repostería y valores
│   │   ├── Testimonials.jsx       # Reseñas reales de clientes
│   │   ├── ContactSection.jsx     # Sucursal, horarios y formulario de contacto
│   │   ├── Footer.jsx             # Pie de página y enlaces
│   │   └── Toast.jsx              # Notificaciones flotantes no intrusivas
│   ├── data/
│   │   └── products.js            # Arreglo de 12 productos con fotografías y detalles
│   ├── styles/
│   │   └── index.css              # Variables CSS, diseño responsive y @media print
│   ├── App.jsx                    # Orquestador del estado global (SPA)
│   └── main.jsx                   # Punto de entrada de React
├── index.html                     # Plantilla HTML con Google Fonts
├── vite.config.js                 # Configuración de Vite con base relativa
└── package.json                   # Dependencias y scripts
```

---

## 🚀 6. Instrucciones de Instalación y Ejecución

### Prerrequisitos
- Tener instalado **Node.js** (versión 18 o superior).

### Paso 1: Instalar dependencias
Abre una terminal en la carpeta del proyecto y ejecuta:
```bash
npm install
```

### Paso 2: Iniciar en modo desarrollo
Para correr el servidor local con recarga rápida (HMR):
```bash
npm run dev
```
La aplicación estará disponible en: **`http://localhost:3000/`** (o el puerto que indique la terminal).

### Paso 3: Compilar para producción (Opcional)
Para generar los archivos estáticos listos para producción:
```bash
npm run build
```
Los archivos optimizados quedarán en la carpeta `dist/`.

---

## 👨‍🍳 Créditos y Licencia
Desarrollado con pasión y dedicación artesanal por el equipo de diseño y desarrollo web para **Dulce Tentación**.
