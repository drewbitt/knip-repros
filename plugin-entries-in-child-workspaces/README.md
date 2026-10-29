# Plugin entry globs drop files in child workspaces

The root Vitest config includes `packages/lib/src/check.ts` through an inline project. `npm test` passes.

`npx knip` reports:

```
Unused files (2)
packages/lib/src/check.ts
packages/lib/src/value.ts
```

Both files are used by the configured test project.
