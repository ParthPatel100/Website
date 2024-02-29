"use client"

import * as THREE from 'three';

import {useEffect, useRef, useState, Suspense} from "react";
import { Canvas } from '@react-three/fiber'
import {
    Float,
    Environment,
    TrackballControls, OrbitControls, ContactShadows,
} from "@react-three/drei";
import {gsap} from "gsap";
import { a } from "@react-spring/three"

export function Shapes() {
    // const [dpr, setDpr] = useState(1.5)

    let devicePixelRatio = 1; // Default value

    if (typeof window !== 'undefined') {
        devicePixelRatio = window.devicePixelRatio;
    }

    return(
        <div className="flex flex-col aspect-square mx-8">
            <Canvas className="z-5 w-full" gl={{antialias: true}} dpr={devicePixelRatio}
                    camera={{position: [0, 0, 15], fov: 45, near: 1, far: 40}}>
                <Suspense fallback={null}>
                    <Geometries/>
                    <Environment preset="sunset"/>
                </Suspense>
                <TrackballControls noZoom={true} noPan={true} rotateSpeed={2}/>
            </Canvas>
        </div>
    )
}

let uniqueKey = 0

function Geometries() {
    const geometries = [
        {
            position: [0, 0, 0],
            r: 0.4,
            geometry: new THREE.IcosahedronGeometry(1.1), // Diamond
        },
        {
            position: [0, 0, 0],
            r: 0.74,
            geometry: new THREE.TorusGeometry(1.8, 0.4, 30, 100), // Donut
        },
        {
            position: [0, 0, 0],
            r: 0.65,
            geometry: new THREE.TorusGeometry(3.4, 0.4, 30, 100), // Donut
        },
        {
            position: [0, 0, 0],
            r: 0.8,
            geometry: new THREE.TorusGeometry(4.8, 0.4, 30, 100), // Donut
        },
    ];


    const materials = [
        new THREE.MeshStandardMaterial({
            color: 'rgb(184, 80, 66)',
            roughness: 0,
            metalness: 0.2, }),
        new THREE.MeshStandardMaterial({
            color: 'rgb(189,190,155)',
            roughness: 0.4,
            metalness: 0.6, }),
        new THREE.MeshStandardMaterial({
            roughness: 0,
            metalness: 0.4,
            color: 'rgb(190, 220, 180)',
        }),
        new THREE.MeshStandardMaterial({
            color: 'rgb(200, 162, 200)',
            roughness: 0.2,
            metalness: 1.0, }),
        new THREE.MeshStandardMaterial({
            roughness: 0.3,
            metalness: 0.3,
            color: 'rgb(145, 169, 197)',
        }),
    ];

    return geometries.map(({ position, r, geometry }) => (
        <Geometry
            key={JSON.stringify(uniqueKey++)} // Unique key
            position={position.map((p) => p * 2)}
            geometry={geometry}
            materials={materials}
            r={r}
        />
    ));
}

function Geometry({ r, position, geometry, soundEffects, materials }) {
    const meshRef = useRef();

    const startingMaterial = getRandomMaterial();

    function getRandomMaterial() {
        return gsap.utils.random(materials);
    }

    function handleClick(e) {
        const mesh = e.object;

        gsap.to(mesh.rotation, {
            x: `+=${gsap.utils.random(0, 2)}`,
            y: `+=${gsap.utils.random(0, 2)}`,
            z: `+=${gsap.utils.random(0, 2)}`,
            duration: 1.3,
            ease: "elastic.out(1,0.3)",
            yoyo: true,
        });

        mesh.material = getRandomMaterial();
    }

    const handlePointerOver = () => {
        document.body.style.cursor = "pointer";
    };

    const handlePointerOut = () => {
        document.body.style.cursor = "default";
    };

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(meshRef.current.scale, {
                x: 0,
                y: 0,
                z: 0,
                duration: gsap.utils.random(0.8, 1.2),
                ease: "elastic.out(1,0.9)",
                delay: gsap.utils.random(0, 0.5),
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <group position={position} ref={meshRef}>
            <Float speed={5 * r} rotationIntensity={10 * r} >
                <a.mesh
                    geometry={geometry}
                    onPointerDown={handleClick}
                    onPointerOver={handlePointerOver}
                    onPointerOut={handlePointerOut}
                    material={startingMaterial}
                ></a.mesh>
            </Float>
        </group>
    );
}
