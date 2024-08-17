import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://e-com-joy.vercel.app', // Use IPv4 address explicitly
        changeOrigin: true, // Recommended to avoid host header issues
      },
    },
  },
  build: {
    outDir: 'dist', // Default output directory
  },
});