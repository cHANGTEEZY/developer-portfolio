/**
 * GLTF and related files are authored under `assets/models` and copied to
 * `public/models` by `npm run prepare-assets` (predev/prebuild) so they are
 * served from the same origin as the app.
 *
 * `/models/*` is served with a one-year immutable cache (see `next.config.mjs`),
 * so when a model changes, bump the version in its filename rather than
 * overwriting it in place.
 */

/**
 * Office desk scene: a single meshopt-compressed GLB with 1024px WebP colour
 * maps and 512px roughness/normal maps (~2.3 MB, down from the 133 MB source).
 */
export const OFFICE_SCENE_URL = "/models/office-desk/office-desk.v1.glb"
