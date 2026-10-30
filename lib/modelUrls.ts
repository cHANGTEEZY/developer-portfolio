/**
 * GLTF and related files are authored under `assets/models` and copied to
 * `public/models` by `npm run prepare-assets` (predev/prebuild) so they are
 * served from the same origin as the app (works with Vercel / CDN for static files).
 */

/** Killer Beats cassette mixstation — hosted on UploadThing; see `killerBeatsCdn.ts`. */
export { KILLER_BEATS_SCENE_GLTF_URL as KILLER_BEATS_SCENE_GLTF } from "./killerBeatsCdn"
