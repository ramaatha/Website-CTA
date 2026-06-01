# CTA Cleaning Supply — Project Context

## Overview

Company profile website untuk PT Cipta Teknologi Aplikasi (CTA), supplier
chemical cleaning di Indonesia. Distribusi 3 brand: Diversey, Godrej, Prima.
WA: 6281283022552 | Deployed: Vercel | Branch aktif: development

## Status Migrasi

Fase 1 (current): Static HTML/CSS/JS — SUDAH JALAN di Vercel
Fase 1.5 (in progress): Migrasi ke React + Vite
Fase 2 (future): Tambah backend Node.js/Express/PostgreSQL

File static lama tetap ada sebagai referensi konten & layout.
Jangan hapus file HTML lama sampai React version selesai.

## Tech Stack Target

- React + Vite
- Tailwind CSS (replace CSS files lama)
- React Router v6
- Framer Motion (animasi)
- Zustand (state: cart, estimasi)
- shadcn/ui (UI components)
- Dayjs (replace moment.js)

## Folder Structure Target

src/
├── components/ → Navbar, Footer, TopBar, WAFloat, EstimasiFloat
├── pages/ → Home, About, Contact, Estimasi, DiverseyKatalog, dll
├── data/ → products.js, wilayah.js (ES modules)
├── store/ → cartStore.js (Zustand)
└── assets/ → pindahan dari /images dan /fonts

## Existing File Structure (Static)

├── index.html
├── about.html
├── contact.html
├── estimasi.html
├── brands/
│ ├── diversey.html → 76 produk real, 5 category tabs
│ ├── godrej.html
│ └── prima.html
├── css/
│ ├── global.css → design tokens utama
│ ├── navbar.css
│ ├── hero.css
│ ├── cards.css
│ ├── brands.css
│ ├── estimasi.css
│ └── responsive.css
├── images/
│ ├── brands/
│ │ ├── diversey.webp
│ │ └── godrej.jpg
│ └── ecommerce/ → logo Tokopedia, Shopee, TikTok
└── js/
├── data/
│ ├── products.js → 76 produk Diversey (global var, perlu convert)
│ └── wilayah.js → data provinsi/kota/kecamatan/kelurahan
└── navbar.js

## Design Tokens (dari global.css — WAJIB dipakai konsisten)

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

Home → Hero section, brand showcase, floating estimasi CTA
About → Company profile, value cards grid, sidebar info
Contact → Contact cards + form + map placeholder
Estimasi → Cascading dropdown Provinsi→Kota→Kecamatan→Kelurahan,
kalkulasi live harga + ongkir, WA checkout message
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
