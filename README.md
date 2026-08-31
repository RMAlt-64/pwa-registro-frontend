# PWA Registro UNER — PWA Instalable de Control de Asistencia Geolocalizado

## ¿Qué problema resuelve?

Las empresas registran asistencia en planillas o sistemas sin validación de ubicación. Eso genera fichajes fuera de puesto, sin trazabilidad y sin control de quién estuvo dónde y cuándo. Sin soporte offline, si el empleado se queda sin señal no puede fichar.

**PWA Registro UNER** resuelve eso: una PWA instalable que registra entradas/salidas con geolocalización, valida si el empleado está dentro del radio del puesto (fórmula Haversine) y funciona offline con sincronización posterior. Roles diferenciados: administrador gestiona puestos y usuarios, empleado ficha asistencia.

## Solución

Frontend PWA (`Vue 3 + Vite PWA`) + Backend API REST (`Express + PostgreSQL`). La PWA se instala como app nativa (standalone), guarda Service Worker con Workbox y cachea la app shell. El backend valida cada registro calculando distancia en metros vs `radio_validacion` del puesto y marca `fuera_de_rango`.

## Funcionalidades principales

- **PWA instalable:** `vite-plugin-pwa` (autoUpdate), `manifest` (theme `#1A3C6E`, icons 192/512 maskable), Service Worker + Workbox precache 14 entries y `runtimeCaching NetworkFirst` para `/api/*`.
- **Autenticación por roles:** Login con `LoginView.vue`, token JWT en Pinia + localStorage, guards `requiresAuth` en router.
- **Gestión admin:** ABM de usuarios y puestos (lat/long, radio validación) en `/admin`.
- **Fichaje empleado:** Registro de entrada/salida con captura de coordenadas y validación de distancia.
- **Offline-first:** app shell cacheada, API con NetworkFirst para reintento al recuperar señal.

## Stack

**Frontend:** Vue 3.5 + Vite 7.2 + Pinia 3 + Vue Router 4.6 + Axios + PrimeVue + Tailwind CSS 4 + DaisyUI + vite-plugin-pwa 1.3 + Workbox
**Backend:** Node/Express 5 + Sequelize 6 + PostgreSQL + JWT/Bcrypt (ver `pwa-registro-backend`)

## Arquitectura

```
src/
├── views/auth/LoginView.vue   # Form + AbortController + validación
├── services/api.js            # Axios + baseURL VITE_API_URL + interceptor Bearer
├── stores/auth.js             # Pinia (token, rol, nombre,  estaLogueado, esAdmin)
└── router/index.js            # Guards por rol, lazy loading
public/
├── pwa-192x192.png / pwa-512x512.png / apple-touch-icon.png
dist/
├── manifest.webmanifest + sw.js + workbox-*.js
```

## Instalación y ejecución

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/ con manifest + sw.js
npm run preview
```

Backend URL por defecto `http://localhost:3000`. Para cambiarla: crear `.env` con `VITE_API_URL=https://tu-api.com` y reiniciar Vite.

## Flujo de login

1. `LoginView.vue` → `api.post('/api/auth/login')` (Axios)
2. `api.js` inyecta `Authorization: Bearer <token>` automáticamente
3. `authStore.setToken(token, rol)` persiste en localStorage
4. Router permite `/admin/usuarios` (admin) o `/asistencia` (empleado) según `esAdmin`

## Estado

PWA instalable verificada (`npm run build` genera `manifest.webmanifest` + `sw.js`). Roadmap: Background Sync con IndexedDB para fichajes 100% offline y tests.

## Repositorios

- Frontend: `github.com/RMAlt-64/pwa-registro-frontend` (este repo)
- Backend: `github.com/RMAlt-64/pwa-registro-backend`

## Autor

Ruben Manuel Almiron — UNER — github.com/RMAlt-64
