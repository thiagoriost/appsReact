import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My PWA App',
        short_name: 'PWA App',
        description: 'My awesome Progressive Web App!',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/Ampeross-Qetto-Icon-developer.256.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/Aha-Soft-Iron-Man-Ironman-Mask-3-Old.512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
