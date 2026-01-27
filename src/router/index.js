// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import UsuariosView from '../views/admin/UsuariosView.vue'

const routes = [
    {
        path: '/',
        name: 'login',
        component: LoginView
    },
    {
        path: '/admin/usuarios',
        name: 'admin-usuarios',
        component: UsuariosView,
        // Aquí podrías agregar seguridad luego
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router