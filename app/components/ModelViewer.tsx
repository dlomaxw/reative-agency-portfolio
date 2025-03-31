"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { useLanguage } from "@/app/context/language-context"

export default function ModelViewer() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [modelIndex, setModelIndex] = useState(0)

  const models = [
    {
      name: t("model.office"),
      description: t("model.office.description"),
    },
    {
      name: t("model.villa"),
      description: t("model.villa.description"),
    },
    {
      name: t("model.cultural"),
      description: t("model.cultural.description"),
    },
  ]

  // Create a procedural building model
  const createProceduralBuilding = (scene: THREE.Scene, modelType: number) => {
    // Remove existing model if any
    scene.children.forEach((child) => {
      if (child.name === "building") {
        scene.remove(child)
      }
    })

    // Create a group for the building
    const buildingGroup = new THREE.Group()
    buildingGroup.name = "building"

    // Different building types
    if (modelType === 0) {
      // Modern Office Building
      createModernOfficeBuilding(buildingGroup)
    } else if (modelType === 1) {
      // Residential Villa
      createResidentialVilla(buildingGroup)
    } else {
      // Cultural Center
      createCulturalCenter(buildingGroup)
    }

    // Add the building to the scene
    scene.add(buildingGroup)
  }

  // Modern Office Building
  const createModernOfficeBuilding = (group: THREE.Group) => {
    // Main building structure
    const buildingGeometry = new THREE.BoxGeometry(10, 20, 10)
    const buildingMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.1,
    })
    const building = new THREE.Mesh(buildingGeometry, buildingMaterial)
    building.position.y = 10
    building.castShadow = true
    building.receiveShadow = true
    group.add(building)

    // Windows
    const glassMaterial = new THREE.MeshStandardMaterial({
      color: 0x88ccff,
      roughness: 0.05,
      transparent: true,
      opacity: 0.3,
    })

    // Create window pattern
    const windowPattern = new THREE.Group()

    // Front and back facades
    for (let y = 0; y < 10; y++) {
      for (let x = -4; x <= 4; x += 2) {
        const windowGeometry = new THREE.BoxGeometry(1.5, 1.5, 0.1)
        const windowMesh = new THREE.Mesh(windowGeometry, glassMaterial)
        windowMesh.position.set(x, y * 2 + 1, 5.05)
        windowMesh.castShadow = true
        windowPattern.add(windowMesh)

        const windowMeshBack = windowMesh.clone()
        windowMeshBack.position.z = -5.05
        windowPattern.add(windowMeshBack)
      }
    }

    // Left and right facades
    for (let y = 0; y < 10; y++) {
      for (let z = -4; z <= 4; z += 2) {
        const windowGeometry = new THREE.BoxGeometry(0.1, 1.5, 1.5)
        const windowMesh = new THREE.Mesh(windowGeometry, glassMaterial)
        windowMesh.position.set(5.05, y * 2 + 1, z)
        windowMesh.castShadow = true
        windowPattern.add(windowMesh)

        const windowMeshLeft = windowMesh.clone()
        windowMeshLeft.position.x = -5.05
        windowPattern.add(windowMeshLeft)
      }
    }

    group.add(windowPattern)

    // Roof structure
    const roofGeometry = new THREE.BoxGeometry(12, 1, 12)
    const roofMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      roughness: 0.2,
    })
    const roof = new THREE.Mesh(roofGeometry, roofMaterial)
    roof.position.y = 20.5
    roof.castShadow = true
    roof.receiveShadow = true
    group.add(roof)

    // Ground
    const groundGeometry = new THREE.CircleGeometry(20, 32)
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0x999999,
      roughness: 0.8,
    })
    const ground = new THREE.Mesh(groundGeometry, groundMaterial)
    ground.rotation.x = -Math.PI / 2
    ground.position.y = 0
    ground.receiveShadow = true
    group.add(ground)

    // Add some trees/landscaping
    const treePositions = [
      [-8, 0, 8],
      [8, 0, 8],
      [-8, 0, -8],
      [8, 0, -8],
    ]

    treePositions.forEach((position) => {
      const tree = createTree()
      tree.position.set(position[0], position[1], position[2])
      group.add(tree)
    })
  }

  // Residential Villa
  const createResidentialVilla = (group: THREE.Group) => {
    // Main house structure
    const houseGeometry = new THREE.BoxGeometry(12, 6, 8)
    const houseMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.8,
    })
    const house = new THREE.Mesh(houseGeometry, houseMaterial)
    house.position.y = 3
    house.castShadow = true
    house.receiveShadow = true
    group.add(house)

    // Second floor
    const secondFloorGeometry = new THREE.BoxGeometry(10, 6, 7)
    const secondFloor = new THREE.Mesh(secondFloorGeometry, houseMaterial)
    secondFloor.position.y = 9
    secondFloor.position.x = -1
    secondFloor.castShadow = true
    secondFloor.receiveShadow = true
    group.add(secondFloor)

    // Roof
    const roofGeometry = new THREE.ConeGeometry(8, 4, 4)
    const roofMaterial = new THREE.MeshStandardMaterial({
      color: 0x995533,
      roughness: 0.8,
    })
    const roof = new THREE.Mesh(roofGeometry, roofMaterial)
    roof.position.y = 14
    roof.position.x = -1
    roof.rotation.y = Math.PI / 4
    roof.castShadow = true
    group.add(roof)

    // Windows
    const windowMaterial = new THREE.MeshStandardMaterial({
      color: 0x88ccff,
      roughness: 0.05,
      transparent: true,
      opacity: 0.5,
    })

    // First floor windows
    const windowPositions = [
      [0, 3, 4.01], // Front
      [0, 3, -4.01], // Back
      [6.01, 3, 0], // Right
      [-6.01, 3, 0], // Left
    ]

    windowPositions.forEach((position) => {
      const isVertical = Math.abs(position[2]) > 0
      const windowGeometry = new THREE.BoxGeometry(isVertical ? 2 : 0.1, 2, isVertical ? 0.1 : 2)
      const window = new THREE.Mesh(windowGeometry, windowMaterial)
      window.position.set(position[0], position[1], position[2])
      group.add(window)
    })

    // Swimming pool
    const poolGeometry = new THREE.BoxGeometry(8, 0.5, 5)
    const poolMaterial = new THREE.MeshStandardMaterial({
      color: 0x0070f3,
      roughness: 0.1,
      transparent: true,
      opacity: 0.8,
    })
    const pool = new THREE.Mesh(poolGeometry, poolMaterial)
    pool.position.set(0, 0.25, 8)
    group.add(pool)

    // Ground
    const groundGeometry = new THREE.CircleGeometry(20, 32)
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0x88aa66,
      roughness: 0.9,
    })
    const ground = new THREE.Mesh(groundGeometry, groundMaterial)
    ground.rotation.x = -Math.PI / 2
    ground.position.y = 0
    ground.receiveShadow = true
    group.add(ground)

    // Add some trees
    const treePositions = [
      [-8, 0, 8],
      [8, 0, 8],
      [-8, 0, -8],
      [8, 0, -8],
    ]

    treePositions.forEach((position) => {
      const tree = createTree()
      tree.position.set(position[0], position[1], position[2])
      group.add(tree)
    })
  }

  // Cultural Center
  const createCulturalCenter = (group: THREE.Group) => {
    // Main building - curved shape
    const points = []
    for (let i = 0; i < 10; i++) {
      const angle = (i / 9) * Math.PI
      const x = 10 * Math.sin(angle)
      const y = i * 2
      points.push(new THREE.Vector2(x, y))
    }

    const curvedGeometry = new THREE.LatheGeometry(points, 20)
    const buildingMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.1,
    })
    const curvedBuilding = new THREE.Mesh(curvedGeometry, buildingMaterial)
    curvedBuilding.position.y = 0
    curvedBuilding.scale.set(0.8, 0.8, 0.8)
    curvedBuilding.castShadow = true
    curvedBuilding.receiveShadow = true
    group.add(curvedBuilding)

    // Glass dome on top
    const domeGeometry = new THREE.SphereGeometry(6, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2)
    const glassMaterial = new THREE.MeshStandardMaterial({
      color: 0x88ccff,
      roughness: 0.05,
      transparent: true,
      opacity: 0.3,
    })
    const dome = new THREE.Mesh(domeGeometry, glassMaterial)
    dome.position.y = 16
    dome.castShadow = true
    group.add(dome)

    // Decorative elements - rings around the building
    const ringGeometry = new THREE.TorusGeometry(8.2, 0.3, 16, 100)
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xff7b00, // Orange
      roughness: 0.2,
    })

    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(ringGeometry, ringMaterial)
      ring.position.y = 5 + i * 5
      ring.rotation.x = Math.PI / 2
      ring.castShadow = true
      group.add(ring)
    }

    // Ground with plaza
    const groundGeometry = new THREE.CircleGeometry(20, 32)
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0x999999,
      roughness: 0.8,
    })
    const ground = new THREE.Mesh(groundGeometry, groundMaterial)
    ground.rotation.x = -Math.PI / 2
    ground.position.y = 0
    ground.receiveShadow = true
    group.add(ground)

    // Plaza pattern
    const plazaGeometry = new THREE.RingGeometry(2, 15, 32, 8)
    const plazaMaterial = new THREE.MeshStandardMaterial({
      color: 0xdddddd,
      roughness: 0.6,
    })
    const plaza = new THREE.Mesh(plazaGeometry, plazaMaterial)
    plaza.rotation.x = -Math.PI / 2
    plaza.position.y = 0.01
    group.add(plaza)

    // Add some decorative sculptures
    const sculptureGeometry = new THREE.IcosahedronGeometry(1, 0)
    const sculptureMaterial = new THREE.MeshStandardMaterial({
      color: 0x0070f3, // Blue
      roughness: 0.1,
    })

    const sculpturePositions = [
      [-8, 1, 8],
      [8, 1, 8],
      [-8, 1, -8],
      [8, 1, -8],
    ]

    sculpturePositions.forEach((position, index) => {
      const sculpture = new THREE.Mesh(sculptureGeometry, sculptureMaterial)
      sculpture.position.set(position[0], position[1], position[2])
      sculpture.rotation.set(Math.random(), Math.random(), Math.random())
      sculpture.scale.set(1 + index * 0.2, 1 + index * 0.2, 1 + index * 0.2)
      sculpture.castShadow = true
      group.add(sculpture)
    })
  }

  // Helper function to create a simple tree
  const createTree = () => {
    const tree = new THREE.Group()

    // Trunk
    const trunkGeometry = new THREE.CylinderGeometry(0.2, 0.3, 2, 8)
    const trunkMaterial = new THREE.MeshStandardMaterial({
      color: 0x8b4513,
      roughness: 0.9,
    })
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial)
    trunk.position.y = 1
    trunk.castShadow = true
    trunk.receiveShadow = true
    tree.add(trunk)

    // Foliage
    const foliageGeometry = new THREE.ConeGeometry(1, 3, 8)
    const foliageMaterial = new THREE.MeshStandardMaterial({
      color: 0x228b22,
      roughness: 0.8,
    })

    const foliage1 = new THREE.Mesh(foliageGeometry, foliageMaterial)
    foliage1.position.y = 2.5
    foliage1.castShadow = true
    tree.add(foliage1)

    const foliage2 = new THREE.Mesh(foliageGeometry, foliageMaterial)
    foliage2.position.y = 3.5
    foliage2.scale.set(0.8, 0.8, 0.8)
    foliage2.castShadow = true
    tree.add(foliage2)

    return tree
  }

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color("#111827") // Dark background

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.set(20, 15, 20)
    camera.lookAt(0, 5, 0)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    containerRef.current.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.minDistance = 5
    controls.maxDistance = 50
    controls.maxPolarAngle = Math.PI / 2 - 0.1 // Prevent going below ground
    controls.target.set(0, 5, 0)

    // Lighting
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    // Directional light (sun)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(10, 20, 10)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 1024
    directionalLight.shadow.mapSize.height = 1024
    directionalLight.shadow.camera.near = 0.5
    directionalLight.shadow.camera.far = 50
    directionalLight.shadow.camera.left = -20
    directionalLight.shadow.camera.right = 20
    directionalLight.shadow.camera.top = 20
    directionalLight.shadow.camera.bottom = -20
    scene.add(directionalLight)

    // Hemisphere light for more natural outdoor lighting
    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.5)
    scene.add(hemisphereLight)

    // Create the initial building
    createProceduralBuilding(scene, modelIndex)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return

      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }

    window.addEventListener("resize", handleResize)

    setIsLoading(false)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      controls.dispose()
    }
  }, [])

  // Update the model when modelIndex changes
  useEffect(() => {
    if (containerRef.current) {
      setIsLoading(true)

      // We need to recreate the scene when changing models
      // This is a simplified approach - in a production app, you'd want to
      // keep the scene and just update the model
      const existingCanvas = containerRef.current.querySelector("canvas")
      if (existingCanvas) {
        containerRef.current.removeChild(existingCanvas)
      }

      // Scene setup
      const scene = new THREE.Scene()
      scene.background = new THREE.Color("#111827")

      // Camera setup
      const camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        0.1,
        1000,
      )
      camera.position.set(20, 15, 20)
      camera.lookAt(0, 5, 0)

      // Renderer setup
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      })
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.shadowMap.enabled = true
      renderer.shadowMap.type = THREE.PCFSoftShadowMap
      containerRef.current.appendChild(renderer.domElement)

      // Controls
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true
      controls.dampingFactor = 0.05
      controls.minDistance = 5
      controls.maxDistance = 50
      controls.maxPolarAngle = Math.PI / 2 - 0.1
      controls.target.set(0, 5, 0)

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
      scene.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      directionalLight.position.set(10, 20, 10)
      directionalLight.castShadow = true
      directionalLight.shadow.mapSize.width = 1024
      directionalLight.shadow.mapSize.height = 1024
      scene.add(directionalLight)

      const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.5)
      scene.add(hemisphereLight)

      // Create the building
      createProceduralBuilding(scene, modelIndex)

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate)
        controls.update()
        renderer.render(scene, camera)
      }
      animate()

      setIsLoading(false)
    }
  }, [modelIndex])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("model.title")}
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-8 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t("model.description")}
        </motion.p>

        <div className="flex flex-wrap justify-center mb-8 gap-4">
          {models.map((model, index) => (
            <button
              key={index}
              onClick={() => setModelIndex(index)}
              className={`px-4 py-2 rounded-full transition-colors ${
                modelIndex === index ? "bg-primary text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {model.name}
            </button>
          ))}
        </div>

        <div className="relative">
          <div ref={containerRef} className="w-full h-[600px] rounded-xl overflow-hidden shadow-2xl">
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-80 z-10">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mb-4"></div>
                <p className="text-white">{t("model.loading")}</p>
              </div>
            )}
          </div>

          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg text-white">
            <p className="text-sm">{t("model.controls")}</p>
          </div>

          <div className="mt-6 bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-2">{models[modelIndex].name}</h3>
            <p className="text-gray-300">{models[modelIndex].description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

