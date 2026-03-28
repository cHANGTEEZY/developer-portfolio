import { Center, useGLTF } from "@react-three/drei"

const ComputerModal = () => {
  const { scene } = useGLTF("/models/killer_beats_casette_mixstation/scene.gltf")

  return (
    <Center>
      <primitive object={scene} scale={1} />
    </Center>
  )
}

export default ComputerModal
