import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");

async function build() {
  await rm(distDir, { recursive: true, force: true });
  await mkdir(distDir, { recursive: true });

  await cp(path.join(rootDir, "index.html"), path.join(distDir, "index.html"));
  await cp(path.join(rootDir, "Karim1.png"), path.join(distDir, "Karim1.png"));

  console.log("Build complete: dist folder is ready.");
}

build().catch((error) => {
  console.error("Build failed.");
  console.error(error);
  process.exitCode = 1;
});
