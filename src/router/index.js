// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/auth/LoginView.vue'
import AdminLayout from '../views/admin/AdminLayout.vue'
import UsuariosView from '../views/admin/UsuariosView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import { useAuthStore } from '../stores/auth.js';


const routes = [
    {
        path: '/',
        name: 'login',
        component: LoginView
    },
    {
        path: '/admin',
        component: AdminLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: 'usuarios',
                name: 'admin-usuarios',
                component: UsuariosView,
                meta: { requiresAuth: true }
            }
            // Agrega más rutas admin aquí
        ]
    },
    {
        path: '/asistencia',
        name: 'asistencia',
        // 2. Lo que viene después se importa por función (Lazy Loading)
        component: () => import('../views/empleado/AsistenciaView.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFoundView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// Guard para proteger rutas que requieren autenticación
router.beforeEach((to, from, next) => {
   const authStore = useAuthStore();
   const isAuthenticated = authStore.estaLogueado;
   const userRol = authStore.rol;
   console.log('[Router] Navegando a:', to.fullPath, 'Desde:', from.fullPath, 'Autenticado:', isAuthenticated, 'Rol:', userRol);

    // 1. Si la ruta requiere auth y no está logueado -> Al Login
    if (to.meta.requiresAuth && !isAuthenticated) {
        return next({ name: 'login' });
    }

    // 2. Si ya está logueado e intenta entrar al Login -> Redirigir según su ROL
    if (to.name === 'login' && isAuthenticated) {
        if (userRol === 'administrador') {
            return next({ path: '/admin/usuarios' });
        } else {
            return next({ path: '/asistencia' });
        }
    }

    // 3. De lo contrario, dejar pasar
    return next();
});



export default router