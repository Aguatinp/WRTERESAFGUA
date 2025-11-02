#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const docsDir = path.join(root, "docs");
const assetsDir = path.join(root, "assets");
const distAssetsDir = path.join(distDir, "assets");

if (!fs.existsSync(distDir)) {
  console.error("dist/ not found. Run `npm run build` first.");
  process.exit(1);
}

if (!fs.existsSync(distAssetsDir)) {
  console.error("dist/assets/ not found. The build output looks incomplete.");
  process.exit(1);
}

fs.rmSync(docsDir, { recursive: true, force: true });
fs.rmSync(assetsDir, { recursive: true, force: true });

fs.cpSync(distDir, docsDir, { recursive: true });
fs.cpSync(distAssetsDir, assetsDir, { recursive: true });

const docsIndex = path.join(docsDir, "index.html");
const docs404 = path.join(docsDir, "404.html");

if (fs.existsSync(docsIndex)) {
  fs.copyFileSync(docsIndex, docs404);
}

console.log("Copied dist/ to docs/ and assets/ for GitHub Pages.");
