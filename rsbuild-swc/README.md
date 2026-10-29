# Rsbuild SWC plugins

```sh
npm install
npm exec -- rsbuild build
npm run check
```

The build succeeds. Knip reports `@swc/plugin-emotion` unused. Supplying the same SWC options through `tools.rspack.module.rules` with a `use` object clears the finding.

Knip 6.43.0. The dependencies in package.json are pinned.
