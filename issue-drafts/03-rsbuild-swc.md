# Rsbuild tools.swc plugin dependencies are reported as unused

Reproduction URL: https://github.com/drewbitt/knip-repros/tree/main/rsbuild-swc

`@swc/plugin-emotion` is listed in `tools.swc.jsc.experimental.plugins`. The Rsbuild build succeeds, but Knip reports the package unused.

Supplying the same SWC options through `tools.rspack`, in a `use` object for `builtin:swc-loader`, clears the finding.

Expected: Knip counts the plugin named in `tools.swc`.

Knip 6.43.0, Rsbuild 2.2.12, @swc/plugin-emotion 17.0.0.
