
import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    cssInjectedByJsPlugin()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/Modal/Modal.tsx'),
      name: 'mg-p14-modal',
      fileName: (format) =>`mg-p14-modal.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  },
})
