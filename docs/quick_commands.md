# Comandos rápidos

Archivo de referencia para tareas diarias y comandos que un desarrollador junior usará con más frecuencia.

Requisitos: Node.js (16+), npm (o el gestor que prefieras).

Instalar dependencias

```bash
npm install
```

Desarrollo (modo con recarga caliente)

```bash
npm run dev
```

Construcción para producción

```bash
npm run build
```

Previsualizar build local (servidor estático)

```bash
npm run preview
```

Lint (si quieres verificar reglas de ESLint)

```bash
npm run lint
```

Despliegue a Vercel (pasos resumidos):
1. Conectar el repositorio en Vercel.
2. En Settings -> General, configurar:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Agregar `vercel.json` (ya existe en el repo) para reescribir rutas al `index.html`.
4. Desplegar.

Notas rápidas:
- Si modificas `tailwind` o `daisyUI`, reconstruye con `npm run build` para producir la versión de producción.
- Para pruebas locales rápidas de HTML estático, `npm run preview` sirve el contenido de `dist`.
