# Nx plugin doesn't read `generators` from package.json

`tools/my-plugin` is a local Nx plugin, laid out like `@nx/plugin` creates. Its `package.json` points `generators` at `generators.json`, which names `./src/foo/generator` as the factory.

`npx nx g my-plugin:foo --dry-run` runs the generator. `npx knip` reports:

```
Unused files (1)
tools/my-plugin/src/foo/generator.ts
```
