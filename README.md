# Jump It GT 🐵 — Saltos & Sonrisas

Catálogo web de inflables para fiestas infantiles en Guatemala.
Hecho con React, Vite y Tailwind CSS.

## Páginas

| Ruta | Descripción |
|---|---|
| `/` | Inicio: hero, destacados, alquiler por horas, cómo reservar y contacto |
| `/catalogo` | Todos los inflables, con filtros por tipo y buscador |
| `/catalogo/:id` | Detalle de cada inflable, con galería y botón de reserva |

## Cómo correrlo

```bash
pnpm install
pnpm run dev
```

Se abre en http://localhost:5173

Otros comandos:

```bash
pnpm run build     # genera la carpeta dist/ para publicar
pnpm run preview   # prueba la versión de producción
```

## Cómo editar el contenido

No hace falta tocar componentes.

- **Teléfono, redes y datos de la empresa:** `src/data/empresa.json`
- **Inflables (agregar, quitar o editar):** `src/data/inflables.js`
- **Colores de la marca:** `src/index.css`, dentro de `@theme`
- **Imágenes:** carpeta `public/image/`

### Agregar un inflable nuevo

1. Guarda su foto en `public/image/inflables/`.
2. Abre `src/data/inflables.js`, copia un bloque `{ ... }` y cambia sus datos.
3. Usa un `id` que no se repita.

## Estructura

```
src/
├── components/
│   ├── layout/      Navbar, Footer, WhatsApp, ScrollToHash
│   ├── sections/    Secciones de la página de inicio
│   └── inflables/   Tarjeta reutilizable de inflable
├── data/            empresa.json e inflables.js
├── hooks/           usePageTitle
├── pages/           Páginas completas
└── routes/          AppRouter
```

## Contacto

WhatsApp: +502 3057-4012 · Instagram: @jumpitgt_oficial · Facebook: JUMPIT GT