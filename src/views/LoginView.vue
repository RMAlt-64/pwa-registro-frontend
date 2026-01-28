<template>
    
    <div class="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
        
        <!-- Tarjeta del Login -->
        <div class="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl border border-gray-100">
            
            <!-- Header / Logo -->
            <div class="flex flex-col items-center gap-4 mb-8">
                <p class="text-sky-900 text-lg font-semibold">Welcome to the PWA REGISTRO</p>
                <div class="p-3 bg-blue-50 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"  class="size-8 stroke-sky-900">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                </div>
                <p class="text-gray-400 text-sm text-center">Start your experience with PWA REGISTRO by signing in</p>    
            </div>

            <!-- Formulario -->
            <div class="flex flex-col gap-5">
                
                <div class="space-y-2">
                    <label class="text-[#18818D] text-xs font-medium ml-1">Email</label>
                    <div class="relative group">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 text-gray-400">
                                <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                                <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                            </svg>
                        </div>
                        <input class="w-full border border-gray-300 p-2.5 pl-10 rounded-lg text-sm focus:outline-none focus:border-[#18818D] focus:ring-1 focus:ring-[#18818D] transition-all" v-model="email" type="email" placeholder="Enter your email address" />
                    </div>
                </div>

                <div class="space-y-2">
                    <label class="text-[#18818D] text-xs font-medium ml-1">Password</label>
                    <div class="relative group">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 text-gray-400">
                                <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <input class="w-full border border-gray-300 p-2.5 pl-10 rounded-lg text-sm focus:outline-none focus:border-[#18818D] focus:ring-1 focus:ring-[#18818D] transition-all" v-model="password" type="password" placeholder="Enter your password" />
                        <div class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                            <path fill-rule="evenodd" d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06l-1.745-1.745a10.029 10.029 0 0 0 3.3-4.38 1.651 1.651 0 0 0 0-1.185A10.004 10.004 0 0 0 9.999 3a9.956 9.956 0 0 0-4.744 1.194L3.28 2.22ZM7.752 6.69l1.092 1.092a2.5 2.5 0 0 1 3.374 3.373l1.091 1.092a4 4 0 0 0-5.557-5.557Z" clip-rule="evenodd" />
                            <path d="m10.748 13.93 2.523 2.523a9.987 9.987 0 0 1-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 0 1 0-1.186A10.007 10.007 0 0 1 2.839 6.02L6.07 9.252a4 4 0 0 0 4.678 4.678Z" />
                            </svg>




                        </div>
                    </div>
                    <div class="mt-1">
                        <a href="#" class="text-xs text-gray-500 hover:text-gray-700 float-right">Forgot Password?</a>
                    </div>
                </div>

                <button @click="handleLogin" class="mt-2 w-full bg-sky-900 text-white py-2.5 rounded-lg hover:bg-sky-700 active:scale-[0.98] transition-all font-medium shadow-md shadow-blue-500/20">
                    Sign In
                </button>
                
                <p v-if="mensaje" :class="['text-center text-sm mt-2 p-2 rounded', isError ? 'text-red-500 bg-red-50' : 'text-green-500 bg-green-50']">{{ mensaje }}</p>
            </div>
        </div>

    </div>
 
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');
const mensaje = ref('');
const isError = ref(false);

const handleLogin = async () => {
  try {
    const respuesta = await axios.post('http://localhost:3000/api/auth/login', {
      email: email.value,
      password: password.value
    });
    
    // Si el login es exitoso, guardamos el token
    const token = respuesta.data.token;
    localStorage.setItem('token', token);
    isError.value = false;
    mensaje.value = "¡Login exitoso! Token guardado.";
    router.push('/admin/usuarios');

    
  } catch (error) {
    isError.value = true;
    mensaje.value = "Error: " + (error.response?.data?.error || "Servidor no alcanzable");
  }
};
</script>

