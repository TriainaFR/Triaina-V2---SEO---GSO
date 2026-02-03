import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Écoute sur toutes les adresses IP (nécessaire pour Docker/Railway)
  },
  preview: {
    host: true, // Idem pour le mode preview
    allowedHosts: true // Autorise TOUS les hôtes (fix radical pour Railway)
  }
});