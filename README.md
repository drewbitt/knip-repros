# knip repros

Minimal reproductions for [Knip](https://github.com/webpro-nl/knip), one per folder.

## New cases

Tested independently with Knip 6.43.0. Each folder pins its direct dependencies.

| Reproduction | Issue draft |
| --- | --- |
| [Plugin entries in child workspaces](./plugin-entries-in-child-workspaces) | [Draft](./issue-drafts/01-plugin-entries.md) |
| [Rsbuild aliases](./rsbuild-alias) | [Draft](./issue-drafts/02-rsbuild-alias.md) |
| [Rsbuild SWC plugins](./rsbuild-swc) | [Draft](./issue-drafts/03-rsbuild-swc.md) |
| [SWC plugins in direct loader rules](./swc-direct-loader) | [Draft](./issue-drafts/04-swc-direct-loader.md) |

```sh
cd <folder>
npm install
npm run check
```

The check currently exits 1 with the findings described in each README. The Vitest test passes, and all three Rsbuild examples build. Each Rsbuild finding disappears when its option is moved to the supported alternative described in the README.

These are drafts; no new upstream issues have been filed. Review the text before submission. Use Knip's Bug report form and place the reproduction URL in its own field.

## Earlier reports

These reports are fixed upstream. Their folders retain the original Knip 6.39.0 versions.

- [vitest-root](./vitest-root): [#2114](https://github.com/webpro-nl/knip/issues/2114)
- [rsbuild-function-config](./rsbuild-function-config): [#2115](https://github.com/webpro-nl/knip/issues/2115)
- [tsconfig-references](./tsconfig-references): [#2116](https://github.com/webpro-nl/knip/issues/2116)
- [nx-generators](./nx-generators): [#2117](https://github.com/webpro-nl/knip/issues/2117)
