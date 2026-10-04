# Nx plugin doesn't read `generators` from package.json

`package.json` points `generators` at `generators.json`, which names `./src/foo/generator` as the factory. `nx g nx-generators:foo` loads it.

`npx knip` reports:

```
Unused files (1)
src/foo/generator.ts
```
