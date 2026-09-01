import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

// Stubs Cloudflare-only module specifiers so the browser bundle (and the dev
// dependency optimizer) can resolve them without a Workers runtime.
function stubWorkerModules() {
  const stubs = ['cloudflare:workers']
  return {
    name: 'stub-worker-modules',
    enforce: 'pre' as const,
    resolveId(id: string) {
      return stubs.includes(id) ? `\0stub:${id}` : null
    },
    load(id: string) {
      return id.startsWith('\0stub:') ? 'export const env = {};\nexport default {};\n' : null
    },
  }
}

export default defineConfig({
  plugins: [
    stubWorkerModules(),
    tailwindcss(),
    react(),
    tsconfigPaths(),
  ],
  build: {
    rollupOptions: {
      external: ['node:async_hooks'],
    },
  },
})
