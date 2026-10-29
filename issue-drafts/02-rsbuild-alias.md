# Rsbuild resolve.alias targets are reported as unused

Reproduction URL: https://github.com/drewbitt/knip-repros/tree/remaining-gaps-2026-10-29/rsbuild-alias

`npm exec -- rsbuild build` succeeds, but `npm run check` reports `src/env.ts` unused and `@env` unlisted.

The alias is in `resolve.alias`. Moving it to `tools.rspack.resolve.alias` clears both findings.

Expected: Knip follows the alias in either location.

Knip 6.43.0, Rsbuild 2.2.12.
