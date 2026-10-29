# SWC plugin dependencies are missed in direct loader rules

Reproduction URL: https://github.com/drewbitt/knip-repros/tree/remaining-gaps-2026-10-29/swc-direct-loader

A rule with `loader: 'builtin:swc-loader'` and `options` builds successfully, but Knip reports `@swc/plugin-emotion` unused.

Moving those same fields into `use: { loader, options }` clears the finding. Both forms should count the plugin dependency.

[#1675](https://github.com/webpro-nl/knip/pull/1675) added SWC plugin detection; its fixture covers the `use` form.

Knip 6.43.0, Rsbuild 2.2.12, @swc/plugin-emotion 17.0.0.
