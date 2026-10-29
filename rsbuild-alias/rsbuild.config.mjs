import { defineConfig } from '@rsbuild/core';

export default defineConfig({
  source: { entry: { index: './src/main.ts' } },
  resolve: { alias: { '@env': `${import.meta.dirname}/src/env.ts` } }
});
