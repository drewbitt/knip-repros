# knip repros

Minimal reproductions for [knip](https://github.com/webpro-nl/knip) issues, one per folder.

```sh
cd <folder>
npm install
npx knip
```

New cases use knip 6.43.0:

- [plugin-entries-in-child-workspaces](./plugin-entries-in-child-workspaces): root plugin entry globs drop files in child workspaces
- [rsbuild-alias](./rsbuild-alias): Rsbuild `resolve.alias` targets appear unused
- [rsbuild-swc](./rsbuild-swc): plugins in Rsbuild `tools.swc` appear unused
- [swc-direct-loader](./swc-direct-loader): SWC plugins in direct loader rules appear unused

Earlier reports are fixed upstream. These folders keep knip 6.39.0:

- [vitest-root](./vitest-root): [#2114](https://github.com/webpro-nl/knip/issues/2114)
- [rsbuild-function-config](./rsbuild-function-config): [#2115](https://github.com/webpro-nl/knip/issues/2115)
- [tsconfig-references](./tsconfig-references): [#2116](https://github.com/webpro-nl/knip/issues/2116)
- [nx-generators](./nx-generators): [#2117](https://github.com/webpro-nl/knip/issues/2117)
