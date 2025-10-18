## Guía para desarrolladores (Junior)

Bienvenido — este documento explica cómo está organizado el proyecto "Bravos" y contiene lo necesario para que un desarrollador junior pueda entender, ejecutar y responder preguntas básicas sobre la web.

### Resumen rápido

- Tecnologías principales: React (v19), Vite, Tailwind CSS + DaisyUI, React Router DOM.
- Tipo de aplicación: SPA (Single Page Application) — varias rutas gestionadas en el cliente mediante React Router.
- Directorio raíz relevante: `src/`.

### Cómo ejecutar localmente

Requisitos:
- Node.js (16+ recomendado) y npm/yarn/pnpm.

Comandos básicos:

1. Instalar dependencias

```bash
npm install
```

2. Ejecutar en modo desarrollo (Vite HMR)

```bash
npm run dev
```

3. Construir para producción

```bash
npm run build
```

4. Previsualizar build localmente

```bash
npm run preview
```

### Estructura principal de archivos

- `index.html` — punto de entrada HTML. Contiene el div `#root` donde React monta la app.
- `src/main.jsx` — arranque de React; importa `App` y `index.css`.
- `src/App.jsx` — definición del enrutado con `react-router-dom` (rutas principales).
- `src/index.css` — configuración de Tailwind/DaisyUI y estilos globales.
- `src/pages/` — páginas que representan rutas (Home, Menu, Login, etc.).
- `src/components/` — componentes reutilizables y específicos por sección (landing, menu, perfil, login, registrar).
- `public/` — assets estáticos servidos tal cual.
- `vercel.json` — reescritura para despliegue en Vercel (redirige todas las rutas a `index.html`).

### Enrutamiento (cómo funciona y dónde está)

- El enrutamiento está en `src/App.jsx` y usa `BrowserRouter` + `Routes` + `Route`.
- Ejemplo de rutas definidas:
  - `/` → `Home` (landing)
  - `/menu` → `Menu`
  - `/login` → `Login`
  - `/registrarse` → `Registrarse`
  - `/pendings` → `Pendings`
  - `/pay-out` → `PayOut`
  - `/resenas` → `Resenas`

- Importante: aunque hay varias rutas, la app es una SPA. Para que las rutas funcionen en producción en hostings estáticos (Vercel, Netlify), necesitamos una regla para redirigir todas las peticiones a `index.html` (ya está en `vercel.json`).

### Componentes clave y responsabilidades

- `src/components/navbar.jsx` — barra de navegación principal usada en páginas públicas.
- `src/components/footer.jsx` — pie de página global.
- `src/components/landing/*` — `hero.jsx` (banner con CTA), `comentarios.jsx` (reseñas) y `navbar.jsx` (navbar alternativa para landing).
- `src/components/menu/*` — componentes del menú (hamburguesas, bebidas, hero específico).
- `src/components/perfil/*` — UI del perfil de usuario (recents, summary, navbar de perfil).
- `src/components/login/formulario.jsx` y `src/components/registrar/formulario.jsx` — formularios visuales sin lógica de backend (simulan navegación con `window.location.href`).

Nota: Actualmente la autenticación y la gestión real de pedidos no está conectada a un backend; los botones usan redirecciones de ejemplo (por ejemplo `window.location.href = '/pendings'`).

### Estilos: Tailwind CSS y DaisyUI

#### ¿Qué es Tailwind CSS?

Tailwind CSS es un **framework de CSS** que cambia cómo escribes estilos. En lugar de crear archivos CSS separados con clases como `.mi-boton { background: blue; }`, Tailwind te da clases utilitarias que aplicas directamente en el HTML/JSX.

**Ejemplo tradicional CSS:**
```css
/* archivo.css */
.boton-azul {
  background-color: blue;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
}
```
```html
<button class="boton-azul">Click me</button>
```

**Ejemplo con Tailwind:**
```html
<button class="bg-blue-500 text-white px-4 py-2 rounded">Click me</button>
```

**Ventajas:**
- Más rápido de escribir
- Menos archivos CSS
- Responsive por defecto (ej: `md:px-6` para pantallas medianas)
- Consistente

#### ¿Qué es DaisyUI?

DaisyUI es un **plugin para Tailwind** que añade componentes pre-estilizados. En lugar de recordar combinaciones de clases Tailwind, usas clases simples como `btn`, `card`, `badge`.

**Ejemplo sin DaisyUI:**
```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Botón
</button>
```

**Ejemplo con DaisyUI:**
```html
<button class="btn btn-primary">Botón</button>
```

DaisyUI incluye temas completos (colores, espaciado) que puedes cambiar fácilmente.

#### Cómo cambiar colores/temas

En este proyecto, el tema está configurado en `src/index.css`:

```css
@import "tailwindcss";
@plugin "daisyui" {
  themes: caramellatte --default
}
```

Para cambiar el tema, reemplaza `caramellatte` por otro tema de DaisyUI (ej: `dark`, `light`, `cupcake`).

### Gestión de datos: cómo se guarda la información

#### Actualmente: datos en variables JavaScript

La información de hamburguesas, bebidas y reseñas está **guardada directamente en el código** como variables JavaScript. Esto significa:

1. **No es persistente** — si recargas la página, los datos se pierden
2. **No se puede editar** desde la interfaz (solo cambiando el código)
3. **Es estático** — siempre muestra los mismos datos

**Ejemplo en `src/pages/menu.jsx`:**
```javascript
const list_hamburguesas = [
  { name: "Hamburguesa Clásica", price: 5.99, image_url: "..." },
  { name: "Hamburguesa con Queso", price: 6.99, image_url: "..." },
  // ... más hamburguesas
]
```

**Problemas:**
- Los datos están "hardcodeados" (escritos directamente en el código)
- No hay base de datos o API
- Si quieres añadir una hamburguesa nueva, debes editar el archivo `.jsx`

#### Para hacerlo dinámico en el futuro:

1. **Base de datos** — Guardar datos en una BD (ej: Firebase, Supabase)
2. **API** — Crear endpoints para obtener/enviar datos
3. **Estado global** — Usar Context o Redux para compartir datos entre componentes

### Despliegue en Vercel

#### ¿Qué es Vercel?

Vercel es un **servicio gratuito de hosting web** que permite publicar aplicaciones web fácilmente. Funciona conectando tu repositorio de GitHub/GitLab, y automáticamente:

- Detecta cambios en el código
- Construye la aplicación (`npm run build`)
- La publica en internet con una URL gratuita

**Ventajas:**
- Gratuito para proyectos pequeños
- Despliegue automático al hacer push
- Dominios personalizados gratis
- Fácil configuración

#### Cómo funciona el despliegue

1. **Conectar repositorio:** En Vercel, importas tu repo de GitHub
2. **Configurar build:** Vercel lee `package.json` y ejecuta `npm run build`
3. **Servir archivos:** Los archivos en `dist/` se sirven como sitio web
4. **URLs:** Cada despliegue tiene una URL (ej: `bravos.vercel.app`)

#### El problema de las rutas en SPA

En aplicaciones normales, cada ruta tiene su propio archivo HTML:
- `/` → `index.html`
- `/menu` → `menu.html`
- `/login` → `login.html`

Pero en SPA, **solo hay un `index.html`**. Cuando visitas `/menu` directamente, Vercel busca `menu.html` y no lo encuentra → Error 404.

**La solución:** `vercel.json` le dice a Vercel: "Para cualquier ruta, sirve `index.html` y deja que React Router maneje el resto".

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Buenas prácticas y recomendaciones rápidas para el junior

- No usar enlaces `<a href="...">` cuando quieras navegación sin recarga si usas React Router; en su lugar, usar `<Link to="...">` desde `react-router-dom`. Actualmente el proyecto usa `<a>` en muchos sitios; eso sigue funcionando pero forza recargas. Usar `Link` permite navegación cliente sin reload.
- Evitar el uso directo de `window.location.href` para navegación interna; reemplazar por `useNavigate()` de `react-router-dom`.
- Centralizar datos en estado (Context o store) si varias páginas comparten información (por ejemplo, carrito, usuario).
- Si añades lógica de backend, mover a `src/lib/api.js` o similar y documentar endpoints.

### FAQs que el junior podrá responder

- ¿Por qué la app tiene varias rutas pero un solo HTML? — Porque es una SPA: React Router cambia componentes en el cliente sin recargar el HTML.
- ¿Por qué en Vercel no cargaban otras rutas? — Porque Vercel intentaba servir archivos estáticos por ruta. `vercel.json` hace que todas las rutas se sirvan desde `index.html`.
- ¿Cómo cambio el tema de colores? — Edita las variables de DaisyUI/Tailwind en `index.css` o en `tailwind.config.js` si se añadió.
- ¿Dónde está la lógica de autenticación? — Actualmente no existe; los botones solo redirigen a páginas estáticas. La lógica debería implementarse llamando a un API y guardando token en estado/contexto.
- ¿Cómo se guardan las hamburguesas? — Actualmente en variables JavaScript dentro de los componentes. No es persistente ni editable desde la interfaz.
- ¿Qué es Tailwind? — Un framework CSS que usa clases utilitarias en lugar de escribir CSS tradicional.
- ¿Qué es DaisyUI? — Un plugin para Tailwind que añade componentes pre-estilizados como `btn`, `card`, etc.

### Siguientes pasos y mejoras sugeridas

1. Reemplazar los enlaces `<a>` por `<Link>` de `react-router-dom` en todo el proyecto para evitar recargas innecesarias.
2. Añadir una pequeña capa de routing protegida (PrivateRoute) para páginas como perfil/pendings si se integra auth.
3. Añadir un `tailwind.config.js` (si no existe) con los temas y shortcuts del proyecto para que sea más fácil personalizar.
4. Agregar tests básicos (Jest + React Testing Library) para componentes críticos.
5. Mover datos hardcodeados a un archivo separado (ej: `src/data/menu.js`) para centralizar.
6. Considerar añadir un backend simple (ej: JSON Server) para simular API y hacer datos dinámicos.
