// Import Three.js
const THREE = require("three")

// Three.js Scene Setup
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("canvas3d"),
  alpha: true,
  antialias: true,
})

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Camera position
camera.position.z = 5

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const pointLight1 = new THREE.PointLight(0xffffff, 1)
pointLight1.position.set(5, 5, 5)
scene.add(pointLight1)

const pointLight2 = new THREE.PointLight(0xffffff, 0.5)
pointLight2.position.set(-5, -5, -5)
scene.add(pointLight2)

// Create geometries
const geometries = []

// Sphere 1
const sphere1Geometry = new THREE.SphereGeometry(0.5, 32, 32)
const sphere1Material = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  metalness: 0.7,
  roughness: 0.2,
  wireframe: false,
})
const sphere1 = new THREE.Mesh(sphere1Geometry, sphere1Material)
sphere1.position.set(-3, 2, 0)
scene.add(sphere1)
geometries.push({ mesh: sphere1, rotationSpeed: { x: 0.002, y: 0.003 }, floatSpeed: 0.001, floatAmount: 0.3 })

// Icosahedron
const icoGeometry = new THREE.IcosahedronGeometry(0.6, 0)
const icoMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  metalness: 0.8,
  roughness: 0.1,
  wireframe: true,
})
const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial)
icosahedron.position.set(3, -1.5, -1)
scene.add(icosahedron)
geometries.push({ mesh: icosahedron, rotationSpeed: { x: 0.001, y: 0.002 }, floatSpeed: 0.0015, floatAmount: 0.4 })

// Sphere 2 (smaller)
const sphere2Geometry = new THREE.SphereGeometry(0.3, 32, 32)
const sphere2Material = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  metalness: 0.6,
  roughness: 0.3,
  wireframe: false,
})
const sphere2 = new THREE.Mesh(sphere2Geometry, sphere2Material)
sphere2.position.set(2, 2.5, -2)
scene.add(sphere2)
geometries.push({ mesh: sphere2, rotationSpeed: { x: 0.003, y: 0.002 }, floatSpeed: 0.002, floatAmount: 0.2 })

// Torus
const torusGeometry = new THREE.TorusGeometry(0.4, 0.15, 16, 100)
const torusMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  metalness: 0.7,
  roughness: 0.2,
  wireframe: true,
})
const torus = new THREE.Mesh(torusGeometry, torusMaterial)
torus.position.set(-2.5, -2, -1.5)
scene.add(torus)
geometries.push({ mesh: torus, rotationSpeed: { x: 0.002, y: 0.003 }, floatSpeed: 0.0012, floatAmount: 0.35 })

// Mouse interaction
let mouseX = 0
let mouseY = 0
let targetX = 0
let targetY = 0

document.addEventListener("mousemove", (event) => {
  mouseX = (event.clientX / window.innerWidth) * 2 - 1
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1
})

// Animation
let time = 0

function animate() {
  requestAnimationFrame(animate)

  time += 0.01

  // Smooth camera movement based on mouse
  targetX = mouseX * 0.3
  targetY = mouseY * 0.3

  camera.position.x += (targetX - camera.position.x) * 0.05
  camera.position.y += (targetY - camera.position.y) * 0.05
  camera.lookAt(scene.position)

  // Animate geometries
  geometries.forEach((item, index) => {
    const { mesh, rotationSpeed, floatSpeed, floatAmount } = item

    // Rotation
    mesh.rotation.x += rotationSpeed.x
    mesh.rotation.y += rotationSpeed.y

    // Floating animation
    const offset = index * Math.PI * 0.5
    mesh.position.y += Math.sin(time * floatSpeed + offset) * floatAmount * 0.01
  })

  renderer.render(scene, camera)
}

// Handle window resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

// Start animation
animate()
