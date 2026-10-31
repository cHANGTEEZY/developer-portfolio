import { cpSync, existsSync, mkdirSync, rmSync, statSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const src = join(root, "assets", "models")
const dest = join(root, "public", "models")

if (!existsSync(src) || !statSync(src).isDirectory()) {
  console.warn(
    "[copy-model-assets] Skipping: assets/models not found (add models under assets/models)."
  )
  process.exit(0)
}

// Mirror the folder so stale files (old model versions) never ship to the CDN.
rmSync(dest, { recursive: true, force: true })
mkdirSync(dest, { recursive: true })
cpSync(src, dest, { recursive: true })

console.log("[copy-model-assets] Synced assets/models -> public/models")
