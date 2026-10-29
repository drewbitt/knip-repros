# SWC plugins in direct loader rules appear unused

`npm exec -- rsbuild build` succeeds. `npx knip` reports:

```
Unused devDependencies (1)
@swc/plugin-emotion  package.json
```

Moving `loader` and `options` into `use: { loader, options }` makes knip clean.
