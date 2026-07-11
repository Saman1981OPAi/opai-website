"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const BLUE = 0x0a84ff;
const BLUE_SOFT = 0x4da3ff;
const AQUAMARINE = 0x7fffd4;

function createMapleLeafGeometry() {
  const shape = new THREE.Shape();
  const points: Array<[number, number]> = [
    [0, 1.72],
    [-0.18, 1.2],
    [-0.48, 1.38],
    [-0.38, 0.91],
    [-0.84, 1.02],
    [-0.69, 0.55],
    [-1.22, 0.44],
    [-0.72, 0.07],
    [-0.9, -0.14],
    [-0.28, -0.04],
    [-0.36, -0.55],
    [-0.08, -0.4],
    [-0.08, -1.25],
    [0.08, -1.25],
    [0.08, -0.4],
    [0.36, -0.55],
    [0.28, -0.04],
    [0.9, -0.14],
    [0.72, 0.07],
    [1.22, 0.44],
    [0.69, 0.55],
    [0.84, 1.02],
    [0.38, 0.91],
    [0.48, 1.38],
    [0.18, 1.2]
  ];

  points.forEach(([x, y], index) => {
    if (index === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  });
  shape.closePath();

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0.18,
    bevelEnabled: true,
    bevelSegments: 5,
    bevelSize: 0.055,
    bevelThickness: 0.055
  });
  geometry.center();
  return geometry;
}

function createStarField() {
  const positions: number[] = [];
  let seed = 1927;

  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  for (let index = 0; index < 620; index += 1) {
    positions.push((random() - 0.5) * 24, (random() - 0.5) * 15, -2 - random() * 12);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  return geometry;
}

function disposeScene(scene: THREE.Scene) {
  scene.traverse((object) => {
    if (object instanceof THREE.Mesh || object instanceof THREE.LineSegments || object instanceof THREE.Points) {
      object.geometry.dispose();
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      materials.forEach((material) => material.dispose());
    }
  });
}

export function OpaiScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasFallback, setHasFallback] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer: THREE.WebGLRenderer;

    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance"
      });
    } catch {
      setHasFallback(true);
      return;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x02050a, 0.055);

    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0, 9.5);

    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.localClippingEnabled = true;

    const world = new THREE.Group();
    scene.add(world);

    const stars = new THREE.Points(
      createStarField(),
      new THREE.PointsMaterial({
        color: 0xb8dcff,
        size: 0.025,
        transparent: true,
        opacity: 0.78,
        sizeAttenuation: true
      })
    );
    scene.add(stars);

    const leafVessel = new THREE.Group();
    world.add(leafVessel);

    const glassLeaf = new THREE.Mesh(
      createMapleLeafGeometry(),
      new THREE.MeshPhysicalMaterial({
        color: 0xd8efff,
        metalness: 0.02,
        roughness: 0.04,
        transmission: 0.92,
        transparent: true,
        opacity: 0.72,
        thickness: 0.55,
        ior: 1.36,
        clearcoat: 1,
        clearcoatRoughness: 0.03,
        attenuationColor: new THREE.Color(BLUE_SOFT),
        attenuationDistance: 3.2,
        side: THREE.DoubleSide
      })
    );
    glassLeaf.scale.setScalar(1.28);
    glassLeaf.position.z = 0.02;
    leafVessel.add(glassLeaf);

    const waterClipPlane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 0.2);
    const waterLeaf = new THREE.Mesh(
      createMapleLeafGeometry(),
      new THREE.MeshPhysicalMaterial({
        color: BLUE,
        emissive: 0x003a85,
        emissiveIntensity: 0.55,
        metalness: 0.04,
        roughness: 0.08,
        transmission: 0.28,
        transparent: true,
        opacity: 0.78,
        thickness: 0.42,
        ior: 1.33,
        clearcoat: 1,
        clippingPlanes: [waterClipPlane],
        side: THREE.DoubleSide
      })
    );
    waterLeaf.scale.setScalar(1.2);
    waterLeaf.position.z = 0.08;
    leafVessel.add(waterLeaf);

    const leafEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(glassLeaf.geometry, 16),
      new THREE.LineBasicMaterial({ color: 0xd8efff, transparent: true, opacity: 0.88 })
    );
    leafEdges.scale.copy(glassLeaf.scale);
    leafEdges.position.copy(glassLeaf.position);
    leafVessel.add(leafEdges);

    const bubbleMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xc8f5ff,
      metalness: 0,
      roughness: 0.02,
      transmission: 0.82,
      transparent: true,
      opacity: 0.72,
      thickness: 0.08,
      ior: 1.05,
      clearcoat: 1
    });
    const bubbleGeometry = new THREE.SphereGeometry(0.055, 16, 12);
    const bubbleSeeds = [
      [-0.42, 0.08, 0.04],
      [-0.23, 0.32, 0.12],
      [-0.08, 0.58, 0.2],
      [0.12, 0.16, 0.28],
      [0.3, 0.45, 0.36],
      [0.46, 0.72, 0.44],
      [-0.51, 0.85, 0.52],
      [-0.31, 0.67, 0.6],
      [0.01, 0.92, 0.68],
      [0.25, 0.78, 0.76],
      [0.5, 0.24, 0.84]
    ];
    const bubbles = bubbleSeeds.map(([x, phase, size], index) => {
      const bubble = new THREE.Mesh(bubbleGeometry, bubbleMaterial);
      bubble.position.set(x, -0.9 + phase, 0.34 + (index % 3) * 0.025);
      bubble.scale.setScalar(0.7 + size * 0.7);
      bubble.userData = { baseX: x, phase, speed: 0.09 + (index % 4) * 0.018 };
      leafVessel.add(bubble);
      return bubble;
    });

    const ringMaterial = new THREE.MeshBasicMaterial({ color: BLUE, transparent: true, opacity: 0.48 });
    const outerRing = new THREE.Mesh(new THREE.TorusGeometry(2.72, 0.027, 10, 180), ringMaterial);
    outerRing.rotation.set(Math.PI / 2.7, 0.1, 0.18);
    world.add(outerRing);

    const innerRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.23, 0.018, 8, 160),
      new THREE.MeshBasicMaterial({ color: AQUAMARINE, transparent: true, opacity: 0.35 })
    );
    innerRing.rotation.set(Math.PI / 2.2, 0.32, -0.3);
    world.add(innerRing);

    const arc = new THREE.Mesh(
      new THREE.TorusGeometry(3.2, 0.045, 10, 128, Math.PI * 1.22),
      new THREE.MeshBasicMaterial({ color: BLUE_SOFT, transparent: true, opacity: 0.55 })
    );
    arc.rotation.set(1.18, -0.16, 0.4);
    world.add(arc);

    const blockchain = new THREE.Group();
    const blockchainPoints = [
      [-3.45, 1.7, -0.8],
      [-2.75, 2.55, -0.35],
      [-1.65, 2.88, -0.95],
      [-0.55, 3.25, -0.4],
      [0.7, 3.05, -0.9],
      [1.82, 2.72, -0.28],
      [2.9, 2.1, -0.8],
      [3.48, 1.1, -0.22],
      [3.55, -0.25, -0.8],
      [2.92, -1.45, -0.3],
      [1.75, -2.52, -0.95],
      [0.42, -3.0, -0.38],
      [-1.02, -2.88, -0.88],
      [-2.3, -2.22, -0.3],
      [-3.2, -1.25, -0.9],
      [-3.62, 0.2, -0.25]
    ].map(([x, y, z]) => new THREE.Vector3(x, y, z));

    const nodeGeometry = new THREE.IcosahedronGeometry(0.11, 0);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: AQUAMARINE });
    blockchainPoints.forEach((point, index) => {
      const node = new THREE.Mesh(nodeGeometry, index % 3 === 0 ? nodeMaterial : ringMaterial);
      node.position.copy(point);
      node.scale.setScalar(index % 4 === 0 ? 1.35 : 1);
      blockchain.add(node);
    });

    const chainPositions: number[] = [];
    blockchainPoints.forEach((point, index) => {
      const next = blockchainPoints[(index + 1) % blockchainPoints.length];
      const cross = blockchainPoints[(index + 3) % blockchainPoints.length];
      chainPositions.push(point.x, point.y, point.z, next.x, next.y, next.z);
      if (index % 2 === 0) chainPositions.push(point.x, point.y, point.z, cross.x, cross.y, cross.z);
    });
    const chainGeometry = new THREE.BufferGeometry();
    chainGeometry.setAttribute("position", new THREE.Float32BufferAttribute(chainPositions, 3));
    const chain = new THREE.LineSegments(
      chainGeometry,
      new THREE.LineBasicMaterial({ color: BLUE_SOFT, transparent: true, opacity: 0.28 })
    );
    blockchain.add(chain);
    blockchain.rotation.z = -0.2;
    world.add(blockchain);

    const floor = new THREE.GridHelper(18, 32, BLUE, 0x12304d);
    floor.position.set(1.8, -3.4, -1.8);
    floor.rotation.x = 0.12;
    const floorMaterials = Array.isArray(floor.material) ? floor.material : [floor.material];
    floorMaterials.forEach((material) => {
      material.transparent = true;
      material.opacity = 0.16;
    });
    scene.add(floor);

    scene.add(new THREE.HemisphereLight(0x3d9bff, 0x02050a, 1.4));
    const keyLight = new THREE.DirectionalLight(BLUE_SOFT, 4.8);
    keyLight.position.set(4, 5, 6);
    scene.add(keyLight);
    const accentLight = new THREE.PointLight(AQUAMARINE, 24, 12, 2);
    accentLight.position.set(-2.8, -0.2, 3.5);
    scene.add(accentLight);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = new THREE.Vector2(0, 0);
    const targetPointer = new THREE.Vector2(0, 0);
    let isVisible = true;
    let animationFrame = 0;

    const positionWorld = (width: number) => {
      const mobile = width < 768;
      const tablet = width >= 768 && width < 1100;
      const worldY = mobile ? 2.0 : 0.15;
      const worldScale = mobile ? 0.57 : tablet ? 0.78 : 1;
      world.position.set(mobile ? 0.75 : tablet ? 2.2 : 3.25, worldY, 0);
      world.scale.setScalar(worldScale);
      waterClipPlane.constant = worldY + 0.2 * worldScale;
      camera.position.z = mobile ? 10.8 : 9.5;
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
      positionWorld(width);
    };

    const onPointerMove = (event: PointerEvent) => {
      targetPointer.set(event.clientX / window.innerWidth - 0.5, event.clientY / window.innerHeight - 0.5);
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    const clock = new THREE.Clock();
    const animate = () => {
      animationFrame = window.requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();
      pointer.lerp(targetPointer, reducedMotion ? 0.02 : 0.045);
      world.rotation.y = pointer.x * 0.3 + (reducedMotion ? 0.08 : Math.sin(elapsed * 0.28) * 0.08);
      world.rotation.x = pointer.y * 0.15 - 0.04;
      outerRing.rotation.z = reducedMotion ? 0.18 : elapsed * 0.08;
      innerRing.rotation.z = reducedMotion ? -0.3 : -elapsed * 0.12;
      arc.rotation.z = 0.4 + (reducedMotion ? 0 : elapsed * 0.035);
      blockchain.rotation.z = -0.2 + (reducedMotion ? 0 : elapsed * 0.018);
      stars.rotation.y = reducedMotion ? 0 : elapsed * 0.004;
      leafVessel.rotation.z = reducedMotion ? 0 : Math.sin(elapsed * 0.38) * 0.018;
      leafVessel.position.z = reducedMotion ? 0 : Math.sin(elapsed * 0.72) * 0.08;
      bubbles.forEach((bubble, index) => {
        const { baseX, phase, speed } = bubble.userData as { baseX: number; phase: number; speed: number };
        bubble.position.y = -0.95 + ((elapsed * speed + phase) % 1.16);
        bubble.position.x = baseX + (reducedMotion ? 0 : Math.sin(elapsed * 1.2 + index) * 0.025);
      });
      renderer.render(scene, camera);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    animate();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      observer.disconnect();
      disposeScene(scene);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="hero-scene" aria-hidden="true">
      <canvas ref={canvasRef} data-render-state={hasFallback ? "fallback" : "webgl"} />
      {hasFallback ? <div className="hero-scene-fallback" /> : null}
    </div>
  );
}
