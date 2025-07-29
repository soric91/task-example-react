import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'App TASK',
    favicon: 'https://cdn-icons-png.flaticon.com/32/906/906334.png',
  },
});
