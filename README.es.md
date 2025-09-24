Disponible en: [English](README.md)

## Briaton Catalog — Proyecto JavaScript

## Descripción del Proyecto

Briaton Catalog es un **catálogo web dinámico** para una tienda online de iluminación, desarrollado como ejercicio de prueba para el estudio digital **AffArts**. 
El proyecto demuestra el trabajo con **JavaScript puro (Vanilla JS)**, renderizado dinámico de datos e integración con librerías como **Swiper.js**, **Tippy.js**, y **JustValidate**.

---

## Objetivo

Permitir a los usuarios explorar el catálogo de productos, filtrar y ordenar artículos, ver la disponibilidad en diferentes ciudades y agregar productos al carrito de compras para su posterior adquisición.

Este proyecto se centra en la **funcionalidad dinámica con JavaScript**. El diseño adaptable y responsive se aborda en un proyecto separado de mi portafolio.

---

## Funcionalidades

- **Funcionalidad del Catálogo**
  - Renderizado dinámico de tarjetas de productos desde `data.json`
  - Filtrado de productos por tipo y disponibilidad
  - Ordenamiento por precio (alto → bajo, bajo → alto) y popularidad
  - Visualización de la cantidad en stock junto a los filtros
  - Paginación para catálogos extensos

- **Carrito de Compras**
  - Agregar/eliminar artículos del carrito
  - Actualización dinámica del número de artículos y del precio total
  - Vista previa del carrito disponible en el menú desplegable del header

- **Componentes Interactivos**
  - Acordeón para preguntas frecuentes
  - Slider de productos del día usando **Swiper.js**, mostrando productos marcados como `goodsOfDay`
  - Información emergente con **Tippy.js** mostrando la disponibilidad por ciudad
  - Validación de formularios usando **JustValidate**
  - Envío de formularios a `https://httpbin.org/post` con modales de éxito/error

---

## Detalles Técnicos

- **Lenguaje:** JavaScript (Vanilla)
- **Librerías:** Swiper.js, Tippy.js, JustValidate
- **Fuente de Datos:** `data/data.json` simulando un API backend
- **Estructura del Proyecto:**

    /css        → CSS compilado desde SCSS
    /data       → Archivo JSON con datos de productos
    /fonts      → Tipografías del proyecto
    /images     → Imágenes de productos e íconos en sprites
    /js         → Scripts principales del proyecto
    /components → Componentes JS modulares para botones, formularios y tarjetas
    /modules    → Módulos JS agrupados por funcionalidad
    /utils      → Funciones utilitarias
    /vendor     → Librerías externas
    /scss       → Archivos SCSS
    catalog.html → Página HTML principal

---

## Cómo Funciona

- **Menú Burger:** Abre/cierra el menú principal del catálogo
- **Selector de Ciudad:** Permite a los usuarios seleccionar una ciudad para ver la disponibilidad
- **Tarjetas de Productos:** Generadas dinámicamente desde los datos JSON; cada tarjeta muestra información, precio y stock
- **Filtros y Ordenamiento:** Los usuarios pueden filtrar productos por tipo y disponibilidad, y ordenar por precio o popularidad
- **Interacción con el Carrito:** Al pasar el cursor sobre una tarjeta aparece "Agregar al carrito"; al hacer clic se añaden artículos; el carrito se actualiza dinámicamente
- **Acordeón:** Expande/colapsa las preguntas frecuentes; solo una sección abierta a la vez
- **Slider de Productos del Día:** Muestra los artículos seleccionados como `goodsOfDay` en un slider interactivo
- **Tooltips:** Al pasar el cursor sobre el ícono de información se muestra la disponibilidad en diferentes ciudades
- **Formulario:** Validado con **JustValidate**; muestra un modal en caso de éxito o error

---

## Instalación y Uso

1. Clonar el repositorio:

```bash
git clone https://github.com/Alyona-K/briaton-catalog
```

2. Abrir catalog.html usando Live Server.

3. El proyecto usa datos JSON locales (data/data.json) para simular respuestas del servidor.

4. No requiere herramientas de compilación — JavaScript puro y librerías.

---

## Notas

Este proyecto demuestra **funcionalidad dinámica en JavaScript** y **desarrollo de componentes modulares**.

TEl proyecto está completamente funcional con **interactividad en vivo**, iltrado, ordenamiento, gestión del carrito, sliders, tooltips y manejo de formularios.
