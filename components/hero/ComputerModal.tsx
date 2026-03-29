import { Center, useGLTF } from "@react-three/drei"
import * as THREE from "three"

type ComputerModalProps = {
  rotation?: [number, number, number]
  scale?: number
  /** Lifts the model along Y after centering (world units). */
  yOffset?: number
}

const ComputerModal = ({
  rotation = [0, THREE.MathUtils.degToRad(20), 0],
  scale = 1.4,
  yOffset = 0,
}: ComputerModalProps) => {
  const { scene } = useGLTF(
    "/models/killer_beats_casette_mixstation/scene.gltf"
  )

  return (
    <group position={[0, yOffset, 0]}>
      <Center cacheKey={scene.uuid}>
        <group rotation={rotation}>
          <primitive object={scene} scale={scale} />
        </group>
      </Center>
    </group>
  )
}

export default ComputerModal
