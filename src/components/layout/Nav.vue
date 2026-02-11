<script setup>
import { useAuth } from '../../composables/useAuth';
import  Button  from 'primevue/button';
import Avatar from 'primevue/avatar';
const { volverAlLogin } = useAuth();
import { useAuthStore } from '../../stores/auth';
const authStore = useAuthStore();
</script>



<template>
  <header class="flex items-center justify-between h-14 px-4 bg-white border-b border-gray-200 shadow-sm">
    <div class="flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
        <path d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM1.49 15.326a.78.78 0 0 1-.358-.442 3 3 0 0 1 4.308-3.516 6.484 6.484 0 0 0-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 0 1-2.07-.655ZM16.44 15.98a4.97 4.97 0 0 0 2.07-.654.78.78 0 0 0 .357-.442 3 3 0 0 0-4.308-3.517 6.484 6.484 0 0 1 1.907 3.96 2.32 2.32 0 0 1-.026.654ZM18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5.304 16.19a.844.844 0 0 1-.277-.71 5 5 0 0 1 9.947 0 .843.843 0 0 1-.277.71A6.975 6.975 0 0 1 10 18a6.974 6.974 0 0 1-4.696-1.81Z" />
      </svg>

      <span class="text-sky-900 font-semibold text-lg">PWA Registro</span>
    </div>
    <div class="flex items-center gap-3">
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
          <span class="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>
      <Avatar image="https://img.daisyui.com/images/profile/demo/2@94.webp" shape="circle" />
      <span class="text-sm text-gray-600 font-medium">{{ authStore.nombreCompleto || 'Usuario' }}</span>
      <Button
        label="Cerrar sesión"
        @click="volverAlLogin"
        severity="secondary"
        
      />
    </div>
  </header>
</template>


