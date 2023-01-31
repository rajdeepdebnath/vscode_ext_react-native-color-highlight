const production = process.argv[2] === "--production";
const watch = process.argv[2] === "--watch";

require("esbuild")
  .build({
    entryPoints: ["./src/extension.js"],
    bundle: true,
    outdir: "dist",
    external: ["vscode"],
    format: "cjs",
    sourcemap: !production,
    minify: production,
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
