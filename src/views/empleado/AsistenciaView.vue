<template>
  <div class="asistenciaView">
    <h1>Asistencia</h1>
    <p>Esta es la vista de asistencia para empleados.</p>
    <div>
      <a href="/" @click.prevent="router.push('/')">Volver al inicio</a>
    </div>
</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
.asistenciaView {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 96px;
  margin: 0;
  color: #333;
}

p {
  font-size: 24px;
  color: #666;
  margin: 0;
}

a {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

a:hover {
  background-color: #0056b3;
}
</style>