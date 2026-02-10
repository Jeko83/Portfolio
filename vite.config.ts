import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',   // allow all network interfaces
    port: 5173,
    strictPort: true,   // optional: fail if port is in use
    cors: true,          // optional: allow cross-origin
    allowedHosts: [
      'giacomo.work',
      'portfolio.giacomo.work',
      'www.giacomo.work',
      'www.portfolio.giacomo.work'
    ]
  }
})
