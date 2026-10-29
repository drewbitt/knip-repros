import { defineConfig } from '@rsbuild/core';

export default defineConfig({
  source: { entry: { index: './src/main.ts' } },
  tools: {
    swc: {
      jsc: { experimental: { plugins: [['@swc/plugin-emotion', {}]] } }
    }
  }
});
