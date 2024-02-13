"use client"

import * as THREE from 'three';

import {useEffect, useRef, Suspensem, useState, Suspense} from "react";
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Float, Environment} from "@react-three/drei";
import {gsap} from "gsap";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


export function Shapes() {
    return(
        <div className="flex flex-col aspect-square">
            <Canvas className="z-5 " shadows gl={{antialias: true}} dpr={[1, 1.7]}
                    camera={{position: [0, 0, 25], fov: 45, near: 1, far: 40}}>
                <Suspense fallback={null}>
                    <Geometries/>
                    <ContactShadows position={[0, -3.5, 0]}
                                    opacity={0.65}
                                    scale={40}
                                    blur={1}
                                    far={9}/>
                    <Environment preset="sunset"/>
                </Suspense>
            </Canvas>
        </div>
    )
}

function Geometries() {
    const geometries = [
        {
            position: [0, 0, 0],
            r: 0.3,
            geometry: new THREE.IcosahedronGeometry(3.2), // Gem
        },
        {
            position: [1, -0.75, 4],
            r: 0.4,
            geometry: new THREE.CapsuleGeometry(0.5, 1.6, 20, 16), // Pill
        },
        {
            position: [-1.4, 2, -4],
            r: 0.6,
            geometry: new THREE.DodecahedronGeometry(1.5), // Soccer ball
        },
        {
            position: [-0.8, -0.75, 5],
            r: 0.5,
            geometry: new THREE.TorusGeometry(0.6, 0.25, 16, 32), // Donut
        },
        {
            position: [1.6, 1.6, -4],
            r: 0.7,
            geometry: new THREE.OctahedronGeometry(1.5), // Diamond
        },
    ];


    const materials = [
        new THREE.MeshStandardMaterial({ color: 'rgb(184, 80, 66)', roughness: 0 }),
        new THREE.MeshStandardMaterial({ color: 'rgb(189,190,155)', roughness: 0.4 }),
        new THREE.MeshStandardMaterial({
            roughness: 0,
            metalness: 0.4,
            color: 'rgb(190, 220, 180)',
        }),
        new THREE.MeshStandardMaterial({ color: 'rgb(200, 162, 200)', roughness: 0.2 }),
        new THREE.MeshStandardMaterial({ color: 'rgb(169, 156, 143)', roughness: 0.1 }),
        new THREE.MeshStandardMaterial({
            roughness: 0.6,
            metalness: 0.2,
            color: 'rgb(145, 169, 197)',
        }),
        // new THREE.MeshStandardMaterial({
        //     roughness: 0,
        //     metalness: 0.5,
        //     color: 'rgb(60,81,218)',
        // }),
        // new THREE.MeshStandardMaterial({
        //     roughness: 0,
        //     metalness: 0.5,
        //     color: 'rgb(60,81,218)',
        // }),
        // new THREE.MeshStandardMaterial({
        //     roughness: 0,
        //     metalness: 0.5,
        //     color: 'rgb(60,81,218)',
        // }),
    ];

    return geometries.map(({ position, r, geometry }) => (
        <Geometry
            key={JSON.stringify(position)} // Unique key
            position={position.map((p) => p * 2)}
            geometry={geometry}
            materials={materials}
            r={r}
        />
    ));
}

function Geometry({ r, position, geometry, soundEffects, materials }) {
    const meshRef = useRef();
    const [visible, setVisible] = useState(true);

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
            setVisible(true);
            gsap.from(meshRef.current.scale, {
                x: 0,
                y: 0,
                z: 0,
                duration: gsap.utils.random(0.8, 1.2),
                ease: "elastic.out(1,0.3)",
                delay: gsap.utils.random(0, 0.5),
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <group position={position} ref={meshRef}>
            <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
                <mesh
                    geometry={geometry}
                    onClick={handleClick}
                    onPointerOver={handlePointerOver}
                    onPointerOut={handlePointerOut}
                    visible={visible}
                    material={startingMaterial}
                ></mesh>
            </Float>
        </group>
    );
}
