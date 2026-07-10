"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const BLUE = 0x0a84ff;
const BLUE_SOFT = 0x4da3ff;
const AQUAMARINE = 0x7fffd4;

function createMapleLeafGeometry() {
  const shape = new THREE.Shape();
  const points: Array<[number, number]> = [
    [0, 1.62],
    [-0.19, 1.12],
    [-0.52, 1.3],
    [-0.4, 0.83],
    [-0.88, 1.01],
    [-0.69, 0.5],
    [-1.16, 0.38],
    [-0.57, -0.05],
    [-0.7, -0.43],
    [-0.15, -0.27],
    [-0.11, -1.07],
    [0.11, -1.07],
    [0.15, -0.27],
    [0.7, -0.43],
    [0.57, -0.05],
    [1.16, 0.38],
    [0.69, 0.5],
    [0.88, 1.01],
    [0.4, 0.83],
    [0.52, 1.3],
    [0.19, 1.12]
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

function createShieldGeometry() {
  const shape = new THREE.Shape();
  shape.moveTo(-1.55, 1.18);
  shape.quadraticCurveTo(0, 1.64, 1.55, 1.18);
  shape.lineTo(1.37, -0.36);
  shape.quadraticCurveTo(0.95, -1.35, 0, -1.88);
  shape.quadraticCurveTo(-0.95, -1.35, -1.37, -0.36);
  shape.closePath();

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0.12,
    bevelEnabled: true,
    bevelSegments: 4,
    bevelSize: 0.04,
    bevelThickness: 0.04
  });
  geometry.center();
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

    const world = new THREE.Group();
    scene.add(world);

    const shield = new THREE.Mesh(
      createShieldGeometry(),
      new THREE.MeshPhysicalMaterial({
        color: 0x061a32,
        metalness: 0.8,
        roughness: 0.25,
        clearcoat: 1,
        clearcoatRoughness: 0.15,
        transparent: true,
        opacity: 0.82
      })
    );
    shield.scale.setScalar(1.16);
    shield.position.z = -0.35;
    world.add(shield);

    const shieldEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(shield.geometry, 20),
      new THREE.LineBasicMaterial({ color: BLUE_SOFT, transparent: true, opacity: 0.68 })
    );
    shieldEdges.scale.copy(shield.scale);
    shieldEdges.position.copy(shield.position);
    world.add(shieldEdges);

    const leaf = new THREE.Mesh(
      createMapleLeafGeometry(),
      new THREE.MeshPhysicalMaterial({
        color: BLUE,
        emissive: 0x032c68,
        emissiveIntensity: 1.2,
        metalness: 0.72,
        roughness: 0.2,
        clearcoat: 1
      })
    );
    leaf.scale.setScalar(0.82);
    leaf.position.set(0, 0.08, 0.25);
    world.add(leaf);

    const leafEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(leaf.geometry, 16),
      new THREE.LineBasicMaterial({ color: AQUAMARINE, transparent: true, opacity: 0.78 })
    );
    leafEdges.scale.copy(leaf.scale);
    leafEdges.position.copy(leaf.position);
    world.add(leafEdges);

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

    const latticePositions: number[] = [];
    for (let lane = 0; lane < 7; lane += 1) {
      const radius = 3.55 + lane * 0.22;
      const start = -1.15 + lane * 0.28;
      for (let step = 0; step < 10; step += 1) {
        const angleA = start + step * 0.16;
        const angleB = angleA + 0.1;
        const z = -1.4 + ((lane + step) % 4) * 0.32;
        latticePositions.push(
          Math.cos(angleA) * radius,
          Math.sin(angleA) * radius,
          z,
          Math.cos(angleB) * radius,
          Math.sin(angleB) * radius,
          z + 0.08
        );
      }
    }
    const latticeGeometry = new THREE.BufferGeometry();
    latticeGeometry.setAttribute("position", new THREE.Float32BufferAttribute(latticePositions, 3));
    const lattice = new THREE.LineSegments(
      latticeGeometry,
      new THREE.LineBasicMaterial({ color: BLUE, transparent: true, opacity: 0.2 })
    );
    lattice.rotation.z = -0.28;
    world.add(lattice);

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
      world.position.set(mobile ? 0.75 : tablet ? 2.2 : 3.25, mobile ? 2.0 : 0.15, 0);
      world.scale.setScalar(mobile ? 0.57 : tablet ? 0.78 : 1);
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
      leaf.position.z = 0.25 + (reducedMotion ? 0 : Math.sin(elapsed * 0.9) * 0.08);
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
