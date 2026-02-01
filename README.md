# Quickstart - src (PWA Registro)

Este documento breve explica el flujo principal, dónde tocar para cambiar el backend y cómo depurar el login.

## 1) Arrancar la app
- Instalar deps: `npm install` (si no lo hiciste)
- Levantar dev server: `npm run dev`
- Abrir la app en el navegador (por defecto http://localhost:5173)

## 2) Flujo de Login (rápido)
1. Usuario rellena `src/views/auth/LoginView.vue` y pulsa **Sign In**.
2. `LoginView` hace `api.post('/api/auth/login', ...)` usando `src/services/api.js`.
3. `src/services/api.js` adjunta automáticamente `Authorization` si hay token en `localStorage`.
4. Al recibir `token`/`rol`, `LoginView` llama a `authStore.setToken(token, rol)` (store en `src/stores/auth.js`).
5. El router usa el getter `authStore.estaLogueado` para permitir acceso a rutas protegidas (p.ej. `/admin`).

## 3) Cambiar la URL del backend
- Edita el fichero `.env` (o define `VITE_API_URL` en el entorno) y reinicia Vite.
- `src/services/api.js` usará `import.meta.env.VITE_API_URL` por defecto.

## 4) Depuración rápida
- Abre DevTools → Console y Network.
- Mensajes útiles añadidos por el proyecto:
  - `[Login] intento con email:` cuando se intenta logear.
  - `[Login] éxito, token guardado en store` cuando login ok.
  - `[auth] setToken` y `[auth] logout` en store.
  - `[api] request` / `[api] response` logs en modo DEV.

## 5) Archivos importantes
- `src/views/auth/LoginView.vue` → formulario y lógica de login
- `src/services/api.js` → instancia axios central
- `src/stores/auth.js` → store Pinia (token, rol, acciones)
- `src/router/index.js` → rutas y guards

## 6) Siguientes pasos recomendados
- Si quieres, añado tests o un pequeño mock server para probar sin backend.
- Puedo documentar más en `docs/` si quieres una guía paso-a-paso más amplia.
