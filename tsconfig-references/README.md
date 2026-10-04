# `--use-tsconfig-files` finds no files with a solution-style tsconfig

`tsconfig.json` has `"files": []` and references `tsconfig.app.json`.

- `npx knip` reports `src/orphan.ts` as unused
- `npx knip --use-tsconfig-files` prints nothing and exits 0

With a flat `tsconfig.json` (`{ "include": ["src"] }`), `--use-tsconfig-files` sees the files and reports `orphan`.
