# Rsbuild plugin ignores function configs

`rsbuild.config.ts` exports a function. `npx knip` reports:

```
Unused files (1)
src/app.ts
```

Exporting the same config as a plain object makes knip clean.
