"use client"

import {
  Suspense,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import ComputerModal from "./ComputerModal"
import { Html, OrbitControls } from "@react-three/drei"
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib"
import * as THREE from "three"
import type { PerspectiveCamera } from "three"
import { LazyLoader } from "../shell"

const CAMERA_BREAKPOINTS = [
  {
    maxWidth: 480,
    position: [72, 22, 45] as [number, number, number],
    fov: 65,
  },
  {
    maxWidth: 768,
    position: [60, 18, 37] as [number, number, number],
    fov: 58,
  },
  {
    maxWidth: 1024,
    position: [52, 16, 32] as [number, number, number],
    fov: 54,
  },
  {
    maxWidth: 1399,
    position: [50, 15, 30] as [number, number, number],
    fov: 52,
  },
] satisfies {
  maxWidth: number
  position: [number, number, number]
  fov: number
}[]

const DESKTOP_CAMERA = {
  position: [45, 14, 28] as [number, number, number],
  fov: 50,
}

const HOME_TARGET = new THREE.Vector3(0, 0, 0)
/** Lower = longer return animation (exponential damp toward t=1) */
const RETURN_LAMBDA = 3
const HOME_EPS = 0.04

const _vEndDir = new THREE.Vector3()
const _vPos = new THREE.Vector3()

function getConfig(width: number) {
  return CAMERA_BREAKPOINTS.find((bp) => width <= bp.maxWidth) ?? DESKTOP_CAMERA
}

/** `preventDefault` allows context restoration; `restored` triggers a redraw. */
function WebglContextGuard() {
  const gl = useThree((s) => s.gl)
  const invalidate = useThree((s) => s.invalidate)

  useEffect(() => {
    const canvas = gl.domElement
    const onLost = (e: Event) => {
      e.preventDefault()
    }
    const onRestored = () => {
      invalidate()
    }
    canvas.addEventListener("webglcontextlost", onLost)
    canvas.addEventListener("webglcontextrestored", onRestored)
    return () => {
      canvas.removeEventListener("webglcontextlost", onLost)
      canvas.removeEventListener("webglcontextrestored", onRestored)
    }
  }, [gl, invalidate])

  return null
}

function HeroOrbit() {
  const { get, gl } = useThree()
  const orbitRef = useRef<OrbitControlsImpl>(null)
  const homePos = useRef(new THREE.Vector3())
  const homeFov = useRef(50)
  const returning = useRef(false)
  const dragging = useRef(false)

  /** Spherical return: avoids Cartesian lerp cutting toward origin (model “zooms in” mid-flight). */
  const returnArmed = useRef(false)
  const returnStartDir = useRef(new THREE.Vector3())
  const returnStartRadius = useRef(0)
  const returnT = useRef(0)

  const syncHomeFromWindow = useCallback(() => {
    const cfg = getConfig(window.innerWidth)
    homePos.current.set(...cfg.position)
    homeFov.current = cfg.fov
  }, [])

  const snapCameraToHome = useCallback(() => {
    const cam = get().camera as PerspectiveCamera
    cam.position.copy(homePos.current)
    cam.fov = homeFov.current
    cam.updateProjectionMatrix()
    const ctrl = orbitRef.current
    if (ctrl) {
      ctrl.target.copy(HOME_TARGET)
      ctrl.update()
    }
  }, [get])

  useLayoutEffect(() => {
    syncHomeFromWindow()
    snapCameraToHome()
  }, [snapCameraToHome, syncHomeFromWindow])

  useEffect(() => {
    const onResize = () => {
      syncHomeFromWindow()
      if (!dragging.current && !returning.current) {
        snapCameraToHome()
      }
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [snapCameraToHome, syncHomeFromWindow])

  useEffect(() => {
    const el = gl.domElement
    const onPointerLeave = () => {
      returning.current = true
    }
    el.addEventListener("pointerleave", onPointerLeave)
    return () => el.removeEventListener("pointerleave", onPointerLeave)
  }, [gl])

  useFrame((_, delta) => {
    const ctrl = orbitRef.current
    if (!ctrl) return
    const cam = get().camera as PerspectiveCamera

    if (!returning.current) {
      returnArmed.current = false
      ctrl.update()
      return
    }

    ctrl.enabled = false

    if (!returnArmed.current) {
      ctrl.target.copy(HOME_TARGET)
      returnStartDir.current.copy(cam.position).normalize()
      returnStartRadius.current = cam.position.distanceTo(HOME_TARGET)
      returnT.current = 0
      returnArmed.current = true
    }

    _vEndDir.copy(homePos.current).normalize()
    const endRadius = homePos.current.length()

    returnT.current = THREE.MathUtils.damp(
      returnT.current,
      1,
      RETURN_LAMBDA,
      delta
    )
    const t = returnT.current

    // Lerp direction then normalize, and lerp radius — distance from origin stays between start/end (no “dip inward” like Cartesian position lerp).
    _vPos.copy(returnStartDir.current).lerp(_vEndDir, t)
    if (_vPos.lengthSq() < 1e-10) {
      _vPos.copy(_vEndDir)
    } else {
      _vPos.normalize()
    }
    const r = THREE.MathUtils.lerp(returnStartRadius.current, endRadius, t)
    cam.position.copy(_vPos.multiplyScalar(r))

    ctrl.target.copy(HOME_TARGET)

    cam.fov = THREE.MathUtils.damp(
      cam.fov,
      homeFov.current,
      RETURN_LAMBDA,
      delta
    )
    cam.updateProjectionMatrix()
    ctrl.update()

    const posOk = cam.position.distanceTo(homePos.current) < HOME_EPS
    const fovOk = Math.abs(cam.fov - homeFov.current) < 0.06
    const tOk = t > 0.992
    if (posOk && fovOk && tOk) {
      cam.position.copy(homePos.current)
      ctrl.target.copy(HOME_TARGET)
      cam.fov = homeFov.current
      cam.updateProjectionMatrix()
      ctrl.update()
      returning.current = false
      returnArmed.current = false
      ctrl.enabled = true
    }
  })

  return (
    <OrbitControls
      ref={orbitRef}
      makeDefault
      enableZoom={false}
      enablePan={false}
      enableDamping
      dampingFactor={0.08}
      minAzimuthAngle={-Math.PI / 3}
      maxAzimuthAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 2.7}
      maxPolarAngle={Math.PI / 2}
      onStart={() => {
        dragging.current = true
      }}
      onEnd={() => {
        dragging.current = false
        returning.current = true
      }}
    />
  )
}

const Hero = () => {
  return (
    <div className="w-fullborder h-[min(80vh,900px)]">
      <Canvas
        className="touch-none"
        camera={{ position: [45, 14, 28], fov: 50 }}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          depth: true,
          stencil: false,
          powerPreference: "high-performance",
          preserveDrawingBuffer: false,
        }}
      >
        <WebglContextGuard />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} />
        <Suspense
          fallback={
            <Html center>
              <LazyLoader className="min-h-0" />
            </Html>
          }
        >
          <ComputerModal yOffset={4} rotation={[0, 20.4, 0]} />
        </Suspense>
        <HeroOrbit />
      </Canvas>
    </div>
  )
}

export default Hero
