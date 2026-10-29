# Plugin entry globs drop files in child workspaces

Reproduction URL: https://github.com/drewbitt/knip-repros/tree/remaining-gaps-2026-10-29/plugin-entries-in-child-workspaces

`npm test` passes, but `npm run check` reports `packages/lib/src/check.ts` and its imported `value.ts` as unused. The root Vitest config includes the test through an inline project.

A default `**/` glob makes `getPluginEntryFilePatterns` exclude child workspaces from the whole batch, including the explicit test path. The same batching also drops Relay artifact entries inside a child workspace.

Expected: Knip keeps entries explicitly included by the root config.

Knip 6.43.0, Vitest 5.0.3.
