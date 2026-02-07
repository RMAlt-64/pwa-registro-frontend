<template>
  <header class="flex items-center justify-between h-14 px-4 bg-white border-b border-gray-200 shadow-sm">
    <div class="flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
        <path d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM1.49 15.326a.78.78 0 0 1-.358-.442 3 3 0 0 1 4.308-3.516 6.484 6.484 0 0 0-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 0 1-2.07-.655ZM16.44 15.98a4.97 4.97 0 0 0 2.07-.654.78.78 0 0 0 .357-.442 3 3 0 0 0-4.308-3.517 6.484 6.484 0 0 1 1.907 3.96 2.32 2.32 0 0 1-.026.654ZM18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5.304 16.19a.844.844 0 0 1-.277-.71 5 5 0 0 1 9.947 0 .843.843 0 0 1-.277.71A6.975 6.975 0 0 1 10 18a6.974 6.974 0 0 1-4.696-1.81Z" />
      </svg>

      <span class="text-sky-900 font-semibold text-lg">PWA Registro</span>
    </div>
    <div class="flex items-center gap-3">
      <img
          alt="Tailwind CSS Navbar component"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" class="size-10 rounded-full" />
      <span class="text-sm text-gray-500">use</span>
      <button
        type="button"
        @click="volverAlLogin"
        class="text-sm text-gray-600 hover:text-sky-900 font-medium px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
      >
        Cerrar sesión
      </button>
    </div>
  </header>
</template>

<script setup>
import { useAuth } from '../../composables/useAuth';

const { volverAlLogin } = useAuth();
</script>
