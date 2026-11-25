import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Permite abrir dist/index.html directamente desde el explorador de archivos (file://)
  server: {
    port: 3000,
    open: true
  }
});
