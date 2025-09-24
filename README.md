Available in: [Español](README.es.md)

## Briaton Catalog — JavaScript Project

## Project Overview

Briaton Catalog is a **dynamic web catalog** for an online lighting store, developed as a test assignment for the digital studio **AffArts**. 
The project demonstrates working with **Vanilla JavaScript**, dynamic data rendering, and integration with libraries such as **Swiper.js**, **Tippy.js**, and **JustValidate**.

---

## Purpose

Enable users to browse the product catalog, filter and sort items, view availability in different cities, and add products to the shopping cart for purchase.

This project focuses on **dynamic functionality with JavaScript**. Responsive layout and adaptive design are covered in a separate project in my portfolio.

---

## Features

- **Catalog Functionality**
  - Dynamic rendering of product cards from `data.json`
  - Product filtering by type and availability
  - Sorting by price (high → low, low → high) and popularity
  - Display of stock counts next to filters
  - Pagination for large catalogs

- **Shopping Cart**
  - Add/remove items from the cart
  - Update item count and total price dynamically
  - Cart preview available in the header dropdown

- **Interactive Components**
  - Accordion for frequently asked questions
  - Day Products slider using **Swiper.js**, showing products marked as `goodsOfDay`
  - Tooltip information with **Tippy.js** showing stock availability per city
  - Form validation using **JustValidate**
  - Form submission to `https://httpbin.org/post` with success/error modals

---

## Technical Details

- **Language:** JavaScript (Vanilla)
- **Libraries:** Swiper.js, Tippy.js, JustValidate
- **Data Source:** `data/data.json` simulating a backend API
- **Project Structure:**

    /css       → compiled CSS from SCSS
    /data      → JSON file with product data
    /fonts     → project fonts
    /images    → product images and sprite icons
    /js        → main project scripts
    /components → modular JS components for buttons, forms, and cards
    /modules    → JS modules grouped by functionality 
    /utils      → utility functions 
    /vendor     → external libraries
    /scss      → SCSS files
    catalog.html → main HTML page

---

## How It Works

- **Burger Menu:** Opens/closes the main catalog menu
- **City Selector:** Users can select a city to see product availability
- **Product Cards:** Created dynamically from JSON data; each card shows product info, price, and stock
- **Filters & Sorting:** Users can filter products by type and availability, and sort by price or popularity
- **Cart Interaction:** Hover over a card to show "Add to Cart"; click to add items; cart updates dynamically
- **Accordion:** Expand/collapse FAQ items; only one section open at a time
- **Day Products Slider:** Displays selected `goodsOfDay` items in an interactive slider
- **Tooltips:** Hover over info icon to see availability in different cities
- **Form:** Validated using **JustValidate**; shows modal on success/error

---

## Installation & Usage

1. Clone the repository:

```bash
git clone https://github.com/Alyona-K/briaton-catalog
```

2. Open catalog.html via Live Server.

3. The project uses local JSON data (data/data.json) to simulate server responses.

4. No build tools required — pure Vanilla JS and libraries.

---

## Notes

This project demonstrates **dynamic JavaScript functionality** and **modular component development**.

The project is fully functional with **live interactivity**, filtering, sorting, cart management, sliders, tooltips, and form handling.
