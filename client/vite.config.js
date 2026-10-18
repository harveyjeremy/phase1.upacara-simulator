import { defineConfig } from 'vite';
// base './' lets the build work on GitHub Pages under any repo path.
export default defineConfig({ base: './', build: { chunkSizeWarningLimit: 900 } });
