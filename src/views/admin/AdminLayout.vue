<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <Nav />
    <div class="flex flex-1">
      <Sidebar />
      <main class="flex-1 p-6 overflow-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import Nav from '../../components/layout/Nav.vue';
import Sidebar from '../../components/layout/Sidebar.vue';
</script>


