# CTA Cleaning Supply — Project Context

## Overview

Company profile website untuk PT Cipta Teknologi Aplikasi (CTA), supplier
chemical cleaning di Indonesia. Distribusi 3 brand: Diversey, Godrej, Prima.
WA: 6281283022552 | Deployed: Vercel | Branch aktif: development

## Status Migrasi

Fase 1 (done): Static HTML/CSS/JS — masih live di Vercel (branch main)
Fase 1.5 (in progress): Migrasi ke React + Vite (branch development)
Fase 2 (future): Tambah backend Node.js/Express/PostgreSQL

React version berjalan di localhost:7000.

## Yang Sudah Selesai (React)

- Scaffold Vite + React + Tailwind CSS v4 + React Router v6
- Navbar (sticky, hamburger mobile, active state per route)
- TopBar, Footer, WAFloat (global components)
- Home page — Hero, Brands, Checkout CTA, Estimasi CTA banner
- About page
- Contact page
- Katalog Diversey — 76 produk, 5 category tabs, search, modal detail, cart
- Estimasi page — lokasi (Jabodetabek + Bandung dropdown, luar area text input),
  product picker (search + tabs + qty control), ringkasan + checkout via WA
- 404 Not Found page
- src/data/products.js — harga Publish Price 2026 Mei
- src/data/wilayah.js — Jabodetabek + Kota Bandung (3-level)
- src/data/diverseyImages.js — mapping 76 produk Diversey
- src/store/cartStore.js (Zustand)

## Yang Belum Selesai

- Katalog Godrej (butuh data produk + foto)
- Katalog Prima (butuh data produk + foto)
- Cart / Keranjang page (floating badge sudah ada, halaman belum)
- Product detail page (saat ini modal popup, belum halaman tersendiri)

## File Static yang Masih Ada (referensi)

- brands/godrej.html — referensi layout untuk katalog Godrej nanti
- brands/prima.html — referensi layout untuk katalog Prima nanti
- css/global.css, css/responsive.css — diimport di index.css via @layer legacy
- js/navbar.js — tidak terpakai di React

## Tech Stack

- React + Vite
- Tailwind CSS v4
- React Router v6
- Framer Motion (animasi)
- Zustand (state: cart)
- shadcn/ui (UI components)
- Dayjs (replace moment.js)

## Folder Structure

src/
├── components/ → Navbar, Footer, TopBar, WAFloat, Estimasi (banner), Hero,
│                 Brands, Checkout, FloatingEstimasi (unused)
├── pages/      → HomePage, DiverseyCatalog, AboutPage, ContactPage,
│                 EstimasiPage, NotFoundPage
├── data/       → products.js, wilayah.js, diverseyImages.js
├── store/      → cartStore.js (Zustand)
└── assets/     → images dan fonts

## Design Tokens

Primary: #0B3D6B
Primary light: #1565A0
Primary 50: #E8F1FA
Accent: #00A86B ← warna CTA button utama
Accent light: #E6F7F0
Warning: #D4511E
Danger: #C0392B
Background: #FAFBFC
Surface: #FFFFFF
Text: #1A2332
Text secondary: #5A6577
Text tertiary: #8E99A8
Border: #E2E6EC
Border light: #F0F2F5

Font heading: Plus Jakarta Sans
Font body: DM Sans

Radius: sm=6px, md=10px, lg=16px, xl=24px
Transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1)

## Komponen Global (ada di semua halaman)

- TopBar: background primary, info jam & nomor telepon
- Navbar: sticky, height 68px (mobile 60px), hamburger di <768px,
  NavLink active state per route, Estimasi Biaya button NavLink
- WAFloat: fixed bottom-right, background #25D366
- Footer: 4-column grid, background text color (#1A2332),
  semua link internal pakai React Router Link

## Fitur Utama Per Halaman

Home → Hero (Lihat Produk CTA), brand showcase, marketplace comparison,
estimasi CTA banner
About → Company profile, value cards, sidebar info perusahaan & brand partner
Contact → Contact cards + form + map placeholder
Estimasi → Cascading dropdown Jabodetabek+Bandung / free text luar area,
product picker (76 produk, search, 5 tabs), ringkasan + no HP + WA checkout
Diversey → Product grid, 5 category tabs, 76 produk, search, modal detail,
floating cart badge, toast notifications
404 → Halaman not found dengan tombol ke Home & Katalog
Godrej → (pending — butuh data produk + foto)
Prima → (pending — butuh data produk + foto)

## Data Structure Products

{
id: string,
name: string,
brand: 'diversey' | 'godrej' | 'prima',
category: string,
price: number,         ← Publish Price 2026 Mei (excl. tax)
unit: string,
description: string,
weight?: number        ← belum diisi, dibutuhkan untuk integrasi Raja Ongkir (Fase 2)
}

## Catatan Fase 2 (Backend)

- Integrasi ongkir luar Jabodetabek/Bandung via Raja Ongkir API
  (butuh backend proxy — API key tidak boleh di frontend)
- Perlu tambah field weight (gram) ke setiap produk di products.js
- Alur: user pilih kota → frontend → backend CTA → Raja Ongkir API
  → return list kurir + tarif → user pilih → masuk WA message
- Stack Fase 2: Node.js / Express / PostgreSQL

## Coding Conventions

- Gunakan forEach untuk iterasi array (bukan reduce atau for...of)
- Semua komponen functional dengan hooks
- Tidak ada class components
- Teks UI dalam Bahasa Indonesia
- Format harga: Intl.NumberFormat('id-ID', {style:'currency',currency:'IDR'})
- Commit setiap komponen selesai sebelum lanjut ke komponen berikutnya
- Link internal pakai React Router <Link> atau <NavLink>, bukan <a href>
