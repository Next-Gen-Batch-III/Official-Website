import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: (() => {
    const isVercel = !!process.env.VERCEL || !!process.env.CI
    const enableImageOptimizer = !isVercel && !process.env.SKIP_IMAGE_OPTIMIZER
    return [
      react(),
      tailwindcss(),
      enableImageOptimizer && ViteImageOptimizer({
        logStats: true,
        webp: { quality: 80 },
        png: { quality: 80 },
        jpeg: { quality: 80 },
        jpg: { quality: 80 },
      }),
    ].filter(Boolean)
  })(),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
