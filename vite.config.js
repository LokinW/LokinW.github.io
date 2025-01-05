import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        work: resolve(__dirname, 'work.html'),
        cv: resolve(__dirname, 'cv.html'),
        bachelorarbeit: resolve(__dirname, 'pages/bachelorarbeit.html'),
        botandcook: resolve(__dirname, 'pages/botandcook.html'),
        otherness: resolve(__dirname, 'pages/otherness.html'),
        whitepaper: resolve(__dirname, 'pages/whitepaper.html'),
        impressum: resolve(__dirname, 'impressum.html'),
        datenschutz: resolve(__dirname, 'datenschutz.html')
      },
    },
  },
})