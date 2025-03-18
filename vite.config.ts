import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'styled-components',
        '@strapi/design-system',
        '@strapi/helper-plugin',
        '@strapi/icons'
      ]
    }
  }
});