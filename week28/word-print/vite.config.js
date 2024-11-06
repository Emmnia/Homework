import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxFactory: '_jsx',
    jsxFragment: '_jsxFragment',
    jsxInject: `import { createElement as _jsx, Fragment as _jsxFragment } from 'react'`,
  }
})

