# Rsbuild aliases

```sh
npm install
npm exec -- rsbuild build
npm run check
```

The build succeeds. Knip reports `src/env.ts` unused and `@env` unlisted. Moving the alias from `resolve.alias` to `tools.rspack.resolve.alias` clears both findings.

Knip 6.43.0. The dependencies in package.json are pinned.
