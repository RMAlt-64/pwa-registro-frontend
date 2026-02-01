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

   
    
    if (to.meta.requiresAuth && !isAuthenticated) {
        // Si la ruta requiere autenticación y no hay token, redirige al login
        next({ name: 'login' })
    } else if (to.name === 'login' && isAuthenticated) {
        // Si ya está logueado e intenta ir al login, redirige al admin
        next({ path: '/admin/usuarios' })
    } else {
        next()
    }
})

export default router