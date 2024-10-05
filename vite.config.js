import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/My_Portfolio_In_React2/',
  // base: '/',

  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split('.').pop();
          if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'tiff', 'bmp', 'ico'].includes(extType)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (['woff', 'woff2', 'eot', 'ttf', 'otf'].includes(extType)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
  publicDir: 'public',
});