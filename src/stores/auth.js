import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  // 1. EL ESTADO: Aquí guardamos la información
  state: () => ({
    usuario: null,
    token: localStorage.getItem('token') || null,
    rol: localStorage.getItem('rol') || null,
  }),

  // 2. LAS ACCIONES: Funciones para modificar el estado
  actions: {
    setAuth(userData, token) {
      this.usuario = userData;
      this.token = token;
      this.rol = userData.rol;

      // Guardamos en el navegador para que no se borre al refrescar (F5)
      localStorage.setItem('token', token);
      localStorage.setItem('rol', userData.rol);
    },

    logout() {
      this.usuario = null;
      this.token = null;
      this.rol = null;
      localStorage.clear();
    }
  },

  // 3. GETTERS: Para consultar datos de forma rápida
  getters: {
    estaLogueado: (state) => !!state.token,
    esAdmin: (state) => state.rol === 'admin',
  }
});