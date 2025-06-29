import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    build: {
      outDir: 'dist'
    }
  }

  if (command !== 'serve') {
    config.base = '/Resume-Portfolio/'
  }

  return config
})