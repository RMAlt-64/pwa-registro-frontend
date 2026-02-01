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
    // set full auth (usuario + token). Usar cuando el backend devuelve usuario
    setAuth(userData, token) {
      this.usuario = userData;
      this.token = token;
      this.rol = userData.rol;

      // Guardamos en el navegador para que no se borre al refrescar (F5)
      localStorage.setItem('token', token);
      localStorage.setItem('rol', userData.rol);
      console.log('[auth] setAuth', { usuario: userData, rol: userData.rol });

    },
    // set sólo token (útil cuando el login devuelve sólo token)
    setToken(token, rol ) {
      this.token = token;
      this.rol = rol;
      localStorage.setItem('token', token);
      if (rol){
        localStorage.setItem('rol', rol);
      }
      console.log('[auth] setToken', { token, rol });
    },
    logout() {
      this.usuario = null;
      this.token = null;
      this.rol = null;
      localStorage.clear();
      console.log('[auth] logout - localStorage cleared');
    }
  },

  // 3. GETTERS: Para consultar datos de forma rápida
  getters: {
    estaLogueado: (state) => !!state.token,
    esAdmin: (state) => state.rol === 'admin',
  }
});