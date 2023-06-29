import { defineConfig } from 'astro/config';
import basicSsl from '@vitejs/plugin-basic-ssl';

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  server: {
    host: true,
    port: 3000,
  },
  vite: {
    plugins: [ basicSsl() ]
  }
});