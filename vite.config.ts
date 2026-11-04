import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ command }) => ({
  // GitHub project Pages serves this repository under /MyPortfolio/.
  // Keep the local development server at / for convenience.
  base: command === 'build' ? '/MyPortfolio/' : '/',
  plugins: [react(), tailwindcss()],
}));
