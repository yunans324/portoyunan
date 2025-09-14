# portoyunan

Portfolio sederhana milik Yunan dibuat dengan React + Vite. Menampilkan section Hero, About, Projects (dengan halaman detail), dan Footer.

## Teknologi Utama
- React 19
- React Router DOM 7
- Vite 7 (dev server & build tool)
- ESLint (konfigurasi dasar)

## Menjalankan Secara Lokal
```bash
npm install
npm run dev
```
Buka `http://localhost:5173` (default Vite) di browser.

## Struktur Direktori (ringkas)
```
src/
	App.jsx        # Routing dan komposisi halaman utama
	main.jsx       # Entry React DOM
	index.css      # Gaya global sederhana
	components/    # Komponen UI (Navbar, Hero, About, Projects, ProjectDetail, Footer)
	assets/        # Gambar (avatar, ui/ux preview, dll)
```

## Pengembangan Lanjutan (Ide)
- Tambah data project terpisah (JSON atau file JS) + konsumsi dinamis.
- Dark/Light mode toggle.
- Deploy ke GitHub Pages / Netlify / Vercel.
- Optimasi gambar & lazy loading.

## Lisensi
Tidak ditentukan (default: all rights reserved). Tambahkan LICENSE bila diperlukan.
