import { cpSync, existsSync, mkdirSync, statSync } from "node:fs"
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

mkdirSync(dest, { recursive: true })

for (const name of ["killer_beats_casette_mixstation"]) {
  const from = join(src, name)
  const to = join(dest, name)
  if (!existsSync(from)) continue
  cpSync(from, to, { recursive: true })
}

console.log("[copy-model-assets] Synced assets/models -> public/models")
