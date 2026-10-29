# Plugin entries in child workspaces

```sh
npm install
npm test
npm run check
```

`npm test` passes. Knip reports `packages/lib/src/check.ts` and `packages/lib/src/value.ts` as unused. Both files belong to the inline Vitest project.

Knip 6.43.0. The dependencies in package.json are pinned.
