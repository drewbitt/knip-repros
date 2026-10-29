# Rsbuild resolve.alias targets appear unused

`npm exec -- rsbuild build` succeeds. `npx knip` reports:

```
Unused files (1)
src/env.ts
Unlisted dependencies (1)
@env  src/main.ts
```

Moving the alias from `resolve.alias` to `tools.rspack.resolve.alias` makes knip clean.
