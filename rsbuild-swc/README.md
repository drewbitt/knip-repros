# Rsbuild tools.swc plugins appear unused

`npm exec -- rsbuild build` succeeds. `npx knip` reports:

```
Unused devDependencies (1)
@swc/plugin-emotion  package.json
```

Putting the same SWC options in a `use` object under `tools.rspack.module.rules` makes knip clean.
