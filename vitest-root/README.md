# Vitest plugin ignores top-level `root`

`vitest.config.ts` sets `root: 'lib'`. `npx vitest run` passes and loads `lib/setup.ts`.

`npx knip` reports:

```
Unused files (3)
lib/setup.ts
lib/src/a.test.ts
lib/src/a.ts
Unresolved imports (1)
./setup.ts  vitest.config.ts
```

Moving `root` into `test.root` makes knip clean.
