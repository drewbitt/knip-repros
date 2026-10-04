# knip repros

Minimal reproductions for [knip](https://github.com/webpro-nl/knip) issues, one per folder. Tested with knip 6.39.0.

```sh
cd <folder>
npm install
npx knip
```

- [vitest-root](./vitest-root): Vitest plugin ignores top-level `root`
- [rsbuild-function-config](./rsbuild-function-config): Rsbuild plugin ignores function configs
- [tsconfig-references](./tsconfig-references): `--use-tsconfig-files` finds no files with a solution-style tsconfig
- [nx-generators](./nx-generators): Nx plugin doesn't read `generators` from package.json
