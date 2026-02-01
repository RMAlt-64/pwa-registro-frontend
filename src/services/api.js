import axios from 'axios';

// `api` centraliza configuración HTTP: baseURL, headers, timeouts e interceptors.
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000, // 10s
});

// Request interceptor - adjunta token y opcionalmente logea en DEV
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  if (import.meta.env.DEV) {
    console.log('[api] request:', config.method, config.url);
  }
  return config;
}, (error) => {
  if (import.meta.env.DEV) console.error('[api] request error', error);
  return Promise.reject(error);
});

// Response interceptor - log en DEV y normaliza errores básicos
api.interceptors.response.use((response) => {
  if (import.meta.env.DEV) console.log('[api] response', response.status, response.config.url);
  return response;
}, (error) => {
  if (import.meta.env.DEV) console.error('[api] response error', error);
  // Si no hay respuesta (p. ej. network), añadimos un objeto consistente
  if (!error.response) {
    error.response = { data: { error: 'Network o CORS error' }, status: 0 };
  }
  return Promise.reject(error);
});

export default api;
