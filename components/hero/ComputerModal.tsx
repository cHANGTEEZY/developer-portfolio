import { Center, useGLTF } from "@react-three/drei"
import { useMemo } from "react"
import * as THREE from "three"

import { OFFICE_SCENE_URL } from "@/lib/modelUrls"

type ComputerModalProps = {
  rotation?: [number, number, number]
  /** Longest side of the model after scaling (world units). */
  fitSize?: number
  /** Moves the model after centering (world units). */
  offset?: [number, number, number]
}

const ComputerModal = ({
  rotation = [0, 0, 0],
  fitSize = 36,
  offset = [0, 0, 0],
}: ComputerModalProps) => {
  const { scene } = useGLTF(OFFICE_SCENE_URL)

  // Scale from the model's bounds so the desk reads the same size whatever
  // units the file was authored in.
  const scale = useMemo(() => {
    const size = new THREE.Box3()
      .setFromObject(scene)
      .getSize(new THREE.Vector3())
    const longest = Math.max(size.x, size.y, size.z) || 1
    return fitSize / longest
  }, [scene, fitSize])

  return (
    <group position={offset}>
      <Center cacheKey={`${scene.uuid}-${scale}`}>
        <group rotation={rotation}>
          <primitive object={scene} scale={scale} />
        </group>
      </Center>
    </group>
  )
}

useGLTF.preload(OFFICE_SCENE_URL)

export default ComputerModal
