# CTA Cleaning Supply — Project Context

## Overview

Company profile website untuk PT Cipta Teknologi Aplikasi (CTA), supplier
chemical cleaning di Indonesia. Distribusi 3 brand: Diversey, Godrej, Prima.
WA: 6281283022552 | Deployed: Vercel | Branch aktif: development

## Status Migrasi

Fase 1 (done): Static HTML/CSS/JS — masih live di Vercel (branch main)
Fase 1.5 (in progress): Migrasi ke React + Vite (branch development)
Fase 2 (future): Tambah backend Node.js/Express/PostgreSQL

React version sudah berjalan di localhost:7000.
Build clean, semua homepage components fully migrated.

## Yang Sudah Selesai (React)

- Scaffold Vite + React + Tailwind CSS v4 + React Router v6
- Navbar, TopBar, Footer, WAFloat, EstimasiFloat (global components)
- Home page — semua sections selesai
- src/data/products.js dan wilayah.js (ES modules)

## Yang Belum Selesai

- React Router setup + route definitions
- About page
- Contact page
- Estimasi page (cascading dropdown, kalkulasi, WA checkout)
- Katalog Diversey (76 produk, 5 category tabs)
- Katalog Godrej (pending)
- Katalog Prima (pending)

## Sisa File Static (belum dihapus, masih dibutuhkan sebagai referensi)

- css/global.css dan css/responsive.css
- js/navbar.js (masih dipakai about.html dan contact.html)
- about.html dan contact.html (referensi layout untuk migrasi)

## Tech Stack

- React + Vite
- Tailwind CSS v4
- React Router v6
- Framer Motion (animasi)
- Zustand (state: cart, estimasi)
- shadcn/ui (UI components)
- Dayjs (replace moment.js)

## Folder Structure

src/
├── components/ → Navbar, Footer, TopBar, WAFloat, EstimasiFloat
├── pages/ → Home (done), About, Contact, Estimasi, DiverseyKatalog
├── data/ → products.js, wilayah.js (ES modules)
├── store/ → cartStore.js (Zustand)
└── assets/ → images dan fonts

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
- Navbar: sticky, height 68px (mobile 60px), hamburger di <768px
- WAFloat: fixed bottom-right, background #25D366
- EstimasiFloat: fixed bottom-left, background accent, animasi pulse
- Footer: 4-column grid, background text color (#1A2332)

## Fitur Utama Per Halaman

Home → Hero section, brand showcase, marketplace comparison,
estimasi CTA banner (SELESAI)
About → Company profile, value cards grid, sidebar info
Contact → Contact cards + form + map placeholder
Estimasi → Cascading dropdown Provinsi→Kota→Kecamatan→Kelurahan,
kalkulasi live harga + ongkir, WA checkout message,
Gratis ongkir: DKI Jakarta & Bandung
Diversey → Product grid, 5 category tabs, 76 produk real,
hover overlay (Lihat Detail + Tambah Keranjang),
floating cart badge, toast notifications
Godrej → (pending)
Prima → (pending)

## Data Structure Products

{
id: string,
name: string,
brand: 'diversey' | 'godrej' | 'prima',
category: string,
price: number,
unit: string,
description: string,
warning?: { type: 'danger' | 'warning', text: string }
}

## Coding Conventions

- Gunakan forEach untuk iterasi array (bukan reduce atau for...of)
- Semua komponen functional dengan hooks
- Tidak ada class components
- Teks UI dalam Bahasa Indonesia
- Format harga: Intl.NumberFormat('id-ID', {style:'currency',currency:'IDR'})
- Commit setiap komponen selesai sebelum lanjut ke komponen berikutnya
