import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth.js';

/**
 * Composable para lógica de autenticación reutilizable.
 * Cierra sesión en el store y redirige al login.
 */
export function useAuth() {
  const router = useRouter();
  const authStore = useAuthStore();

  function volverAlLogin() {
    authStore.logout();
    router.push({ name: 'login' });
  }

  return {
    volverAlLogin,
  };
}
