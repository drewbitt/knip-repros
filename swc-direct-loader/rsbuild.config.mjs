import { defineConfig } from '@rsbuild/core';

export default defineConfig({
  source: { entry: { index: './src/main.ts' } },
  tools: {
    rspack: {
      module: {
        rules: [{
          test: /\.ts$/,
          loader: 'builtin:swc-loader',
          options: { jsc: { experimental: { plugins: [['@swc/plugin-emotion', {}]] } } }
        }]
      }
    }
  }
});
