<template>
  <aside class="w-56 min-h-[calc(100vh-3.5rem)] bg-white border-r border-gray-200 flex flex-col py-4">
    <nav class="flex flex-col gap-0.5 px-2">
      <router-link
        v-for="item in items"
        :key="item.to.name"
        :to="item.to"
        active-class="bg-sky-50 text-sky-900 font-medium border-l-4 border-sky-900"
        class="flex items-center gap-2 px-3 py-2.5 rounded-r-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors border-l-4 border-transparent"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 shrink-0">
          <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
        </svg>
        <span>{{ item.label }}</span>
      </router-link>
    </nav>
  </aside>
</template>

<script setup>
const items = [
  { to: { name: 'admin-usuarios' }, label: 'Usuarios' },
  // Agrega más: { to: { name: 'admin-otro' }, label: 'Otro' },
];
</script>
