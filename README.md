# Bravos — Frontend

Pequeña aplicación frontend para la demo de Bravos Burgers.

Este repositorio contiene una aplicación React creada con Vite, estilos con Tailwind CSS + DaisyUI y enrutado cliente con React Router.

Si eres nuevo en el proyecto o vas a guiar a un desarrollador junior, comienza por leer la guía completa en `docs/DEVELOPER_GUIDE.md` y los comandos rápidos en `docs/quick_commands.md`.

## Resumen rápido

- Tecnologías: React, Vite, Tailwind CSS, DaisyUI, React Router
- Tipo: SPA (Single Page Application) con rutas cliente

## Archivos importantes

- `src/main.jsx` — entrada de React
- `src/App.jsx` — enrutamiento de la app
- `src/pages/` — páginas por ruta (home, menu, login, etc.)
- `src/components/` — componentes reutilizables por área
- `index.html` — HTML raíz con el `div#root`

## Cómo ejecutar (rápido)

```bash
npm install
npm run dev
```

## Documentación interna

- Guía para desarrolladores (detallada): `docs/DEVELOPER_GUIDE.md`
- Comandos rápidos: `docs/quick_commands.md`

## Despliegue

El repositorio incluye `vercel.json` para que Vercel redirija todas las rutas al `index.html`, permitiendo que React Router maneje las rutas en el cliente. Configura en Vercel:

- Build command: `npm run build`
- Output directory: `dist`

## Contacto

Si necesitas ayuda con este proyecto o quieres que prepare un PR con cambios de buenas prácticas (por ejemplo: usar `<Link>` en lugar de `<a>` para navegación interna), dímelo y lo preparo.
