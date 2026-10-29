# SWC plugins in direct loader rules

```sh
npm install
npm exec -- rsbuild build
npm run check
```

The build succeeds. Knip reports `@swc/plugin-emotion` unused. Moving `loader` and `options` into a `use` object clears the finding.

Knip 6.43.0. The dependencies in package.json are pinned.
