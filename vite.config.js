import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    VitePWA({
      manifest: {
        background_color: '#F4F0F3',
        display: 'standalone',
        icons: [
          {
            purpose: 'any',
            sizes: '192x192',
            src: 'manifest-icon-192.maskable.png',
            type: 'image/png'
          },
          {
            purpose: 'maskable',
            sizes: '192x192',
            src: 'manifest-icon-192.maskable.png',
            type: 'image/png'
          },
          {
            purpose: 'any',
            sizes: '512x512',
            src: 'manifest-icon-512.maskable.png',
            type: 'image/png'
          },
          {
            purpose: 'maskable',
            sizes: '512x512',
            src: 'manifest-icon-512.maskable.png',
            type: 'image/png'
          }
        ],
        name: 'Annas projekt',
        short_name: 'Annas',
        start_url: '.',
        theme_color: '#ffccff'
      },
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['assets/**', 'index.html', 'manifest.webmanifest'],
        runtimeCaching: [
          {
            handler: 'NetworkFirst',
            // Cache GET requests to https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest
            urlPattern:
              'https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest'
          },
          {
            handler: 'NetworkFirst',
            // Cache GET requests to https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list
            urlPattern:
              'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
          }
        ]
      }
    }),

    vue()
  ]
})
