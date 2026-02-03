# PWA Registro Frontend - AI Agent Instructions

## Project Overview
**Vue 3 + Vite PWA frontend** for employee registration/admin panel. Uses **Pinia** for state management, **Vue Router** for navigation, **Tailwind CSS** for styling, and **Axios** for HTTP communication.

### Tech Stack
- **Framework:** Vue 3 (Composition API preferred via `<script setup>`)
- **Build:** Vite 7.2 (`npm run dev`, `npm run build`)
- **Styling:** Tailwind CSS 4 + custom color scheme (teal: `#18818D`, sky-900: login primary)
- **State:** Pinia (auth store at `src/stores/auth.js`)
- **HTTP:** Axios with request/response interceptors (`src/services/api.js`)
- **Router:** Vue Router 4 with auth guards (`src/router/index.js`)

## Critical Architecture Patterns

### 1. Authentication Flow
**Location:** `src/stores/auth.js`, `src/services/api.js`, `src/views/auth/LoginView.vue`

- **Auth Store** (Pinia) holds: `token`, `rol`, `usuario` (persisted to `localStorage`)
- **API Service** auto-injects `Authorization: Bearer {token}` header on every request
- **Router Guards** check `authStore.estaLogueado` before allowing protected routes
- **Login flow:** Form → `api.post('/api/auth/login')` → `authStore.setToken(token, rol)` → redirect to `/admin`
- **Backend URL:** Configurable via `VITE_API_URL` env var (defaults to `http://localhost:3000`)

### 2. Component Structure
- **Views** (page-level): `src/views/auth/LoginView.vue` (public), `src/views/admin/` (protected)
- **Layouts:** `src/views/admin/AdminLayout.vue` wraps admin routes
- **Components:** Empty folder—reusable UI components go here (e.g., forms, cards)
- **Style:** Tailwind classes directly in templates; color palette: sky-900 (dark), blue-50 (light), teal (#18818D) accents

### 3. API Communication
- **Base setup:** `src/services/api.js` exports singleton Axios instance
- **Interceptors:** 
  - Request: Attaches token from `localStorage`
  - Response: Logs in DEV, normalizes network errors
- **Error handling:** Check `error.response.data` for backend messages; catch network with `!error.response` fallback
- **Timeout:** 10 seconds default

### 4. State Management (Pinia)
- **Store location:** `src/stores/auth.js` (only auth store currently)
- **Pattern:** Define `state()`, `actions{}`, `getters{}`
- **Key getters:** `estaLogueado` (boolean), `esAdmin` (bool)
- **Key actions:** `setAuth(userData, token)`, `setToken(token, rol)`, `logout()`
- **Persistence:** Token/rol saved to `localStorage` in actions; loaded on store init

### 5. Routing Structure
- `/` → Public login page
- `/admin` → Protected parent layout (requires auth)
  - `/admin/usuarios` → Users management view
- `/:pathMatch(.*)*` → 404 fallback
- **Guards:** `router.beforeEach()` redirects unauthenticated users to login; already-logged users can't access `/`

## Developer Workflows

### Running & Building
```bash
npm install           # Install dependencies
npm run dev          # Start Vite dev server (localhost:5173)
npm run build        # Production build to dist/
npm run preview      # Preview built app locally
```

### Environment Configuration
- Create `.env` file in project root
- Set `VITE_API_URL=http://your-backend-url:port` (required for non-localhost backends)
- Vite automatically reloads on `.env` changes

### Debugging
- **Console logs:** Framework prefixes: `[Login]`, `[auth]`, `[api]` for easy filtering
- **DevTools:** Network tab shows all API calls; Authorization header auto-injected
- **localStorage:** Inspect `token`, `rol` to verify auth state persistence
- **Pinia DevTools:** Available in dev; inspect store state real-time

## Key Conventions & Patterns

### Naming & File Organization
- **Views** (full pages): `PascalCase.vue` under `src/views/{feature}/`
- **Components** (reusable): `PascalCase.vue` in `src/components/`
- **Stores** (Pinia): Camelcase in `src/stores/` (e.g., `auth.js`)
- **Services** (API, utilities): Lowercase in `src/services/` (e.g., `api.js`)

### Vue Component Patterns
- **Composition API preferred:** Use `<script setup>` (all new code)
- **Reactive data:** `const variable = ref(initialValue)` or `const reactive = reactive({})`
- **v-model:** Use for form bindings (email, password inputs in LoginView)
- **Methods:** Arrow functions in `<script setup>` for event handlers
- **Validation:** Before API calls (check non-empty fields, trim email)

### API Request Patterns
```javascript
// Standard pattern (see LoginView)
try {
  const response = await api.post('/api/auth/login', { email, password });
  authStore.setToken(response.data.token, response.data.rol);
  router.push('/admin/usuarios');
} catch (error) {
  mensaje.value = error.response?.data?.error || 'Network error';
  isError.value = true;
}
```

### Form & UI Patterns
- **Loading state:** Use `isLoading` ref to prevent duplicate submissions (`@click="handleLogin" :disabled="isLoading"`)
- **Messages:** Display via conditional `<p v-if="mensaje">` with class binding for error/success styling
- **Icons:** Inline SVG from Heroicons (as seen in LoginView)
- **Tailwind theme:** Prefix critical colors with defined teal/sky values; avoid hardcoded colors

## Important Files & Cross-Component Communication

| File | Purpose | Key Exports |
|------|---------|-------------|
| `src/services/api.js` | Axios singleton with auth interceptor | `api` (default export) |
| `src/stores/auth.js` | Pinia auth store | `useAuthStore()` |
| `src/router/index.js` | Route definitions & auth guards | `router` (default), auto-linked in main.js |
| `src/views/auth/LoginView.vue` | Login form; entry point after logout | — |
| `src/views/admin/AdminLayout.vue` | Wrapper for admin routes | — |
| `src/App.vue` | Root component (renders `<router-view />`) | — |
| `src/main.js` | App bootstrap (Pinia + Router setup) | — |

## Common Tasks & Quick References

### Adding a New Protected Route
1. Create view in `src/views/admin/FeatureName.vue`
2. Add route in `src/router/index.js` under `/admin` children with `meta: { requiresAuth: true }`
3. Router guard automatically protects; use `authStore.esAdmin` for role-based checks

### Adding API Calls
1. Use `api.post/get/put/delete()` from `src/services/api.js`
2. Token auto-attached by request interceptor
3. Handle `error.response?.data?.error` for backend messages

### Logout Flow
1. Call `authStore.logout()` (clears localStorage + state)
2. Router redirects to `/` automatically on next navigation
3. Token removed from future requests

### Environment Setup Issues
- **CORS errors:** Check backend allows frontend origin (usually port 5173 in dev)
- **Token not persisting:** Verify `localStorage` enabled in browser; check auth store `setToken()` called
- **404 on API calls:** Verify `VITE_API_URL` matches backend (default `http://localhost:3000`)

## When Modifying Code
- **Always** run `npm run build` to catch template/import errors before committing
- **Add console logs** with `[FeatureName]` prefix for consistency
- **Test auth flow:** Logout → Login → Verify token in localStorage & DevTools Network tab
- **Validate forms** before API calls (empty fields, email format, etc.)
- **Update error messages** in Spanish/English consistently with app locale (currently mixed, observe existing patterns)
