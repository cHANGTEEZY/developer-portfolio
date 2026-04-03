import type { GLTFLoader } from "three-stdlib"
import * as THREE from "three"

import selectedRows from "@/selected-rows.json"

type UploadRow = {
  name: string
  url: string
}

/** Filename → UploadThing URL (from selected-rows.json). */
export const KILLER_BEATS_ASSET_URLS: Record<string, string> = (
  selectedRows as UploadRow[]
).reduce<Record<string, string>>((acc, row) => {
  acc[row.name] = row.url
  return acc
}, {})

export const KILLER_BEATS_SCENE_GLTF_URL = KILLER_BEATS_ASSET_URLS["scene.gltf"]

let killerBeatsLoadingManager: THREE.LoadingManager | null = null

function getKillerBeatsLoadingManager(): THREE.LoadingManager {
  if (!killerBeatsLoadingManager) {
    killerBeatsLoadingManager = new THREE.LoadingManager()
    killerBeatsLoadingManager.setURLModifier((url) => {
      const pathPart = url.split("?")[0]
      const file = pathPart.split("/").pop()
      if (file && KILLER_BEATS_ASSET_URLS[file]) {
        return KILLER_BEATS_ASSET_URLS[file]
      }
      return url
    })
  }
  return killerBeatsLoadingManager
}

/** Rewrites scene.bin / texture paths to flat UploadThing URLs. */
export function extendKillerBeatsLoader(loader: GLTFLoader): void {
  loader.manager = getKillerBeatsLoadingManager()
}
