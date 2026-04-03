/**
 * GLTF and related files are authored under `assets/models` and copied to
 * `public/models` by `npm run prepare-assets` (predev/prebuild) so they are
 * served from the same origin as the app (works with Vercel / CDN for static files).
 */
function withBasePath(path: `/${string}`): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
  if (!base) return path
  const normalized = base.endsWith("/") ? base.slice(0, -1) : base
  return `${normalized}${path}`
}

/** Killer Beats cassette mixstation — hosted on UploadThing; see `killerBeatsCdn.ts`. */
export { KILLER_BEATS_SCENE_GLTF_URL as KILLER_BEATS_SCENE_GLTF } from "./killerBeatsCdn"
