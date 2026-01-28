<template>
  <div class="admin-layout">
    <nav class="admin-nav">
      <h2>Admin</h2>
      <ul>
        <li>
          <router-link to="/admin/usuarios">Usuarios</router-link>
        </li>
        <!-- Agrega más opciones de menú aquí -->
      </ul>
    </nav>
    <main class="admin-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
.admin-layout {
  display: flex;
  height: 100vh;
}

.admin-nav {
  width: 250px;
  background-color: #333;
  color: white;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.admin-nav h2 {
  margin-top: 0;
  margin-bottom: 20px;
}

.admin-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.admin-nav li {
  margin-bottom: 10px;
}

.admin-nav a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.admin-nav a:hover,
.admin-nav a.router-link-active {
  background-color: #555;
}

.admin-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}
</style>
