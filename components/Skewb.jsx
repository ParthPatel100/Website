"use client"


import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Float, Environment, OrbitControls } from '@react-three/drei';
import {Suspense} from "react";

function RubiksCube() {
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterials = [
        // Define materials for each face
        new THREE.MeshStandardMaterial({ color: 'rgb(218,22,22)', roughness: 0 }),
        new THREE.MeshStandardMaterial({ color: 'rgb(32,43,213)', roughness: 0 }),
        new THREE.MeshStandardMaterial({ color: 'rgb(72,217,34)', roughness: 0 }),
        new THREE.MeshStandardMaterial({ color: 'rgb(213,210,30)', roughness: 0 }),
        new THREE.MeshStandardMaterial({ color: 'rgb(255,255,255)', roughness: 0 }),
        new THREE.MeshStandardMaterial({ color: 'rgb(231,84,24)', roughness: 0 }),
    ];


    return (
        <Canvas className="z-5 " shadows gl={{antialias: true}} dpr={[1, 1.7]}
                camera={{position: [0, 0, 12], fov: 45, near: 1, far: 40}}>
            <Suspense fallback={null}>
                <RubiksCubeMesh geometry={cubeGeometry} materials={cubeMaterials} />
                <ContactShadows />
                <Environment preset="sunset" />
            </Suspense>
            <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
        </Canvas>
    );
}

function RubiksCubeMesh({ geometry, materials }) {
    const cubePieces = [];

    // Loop through each cube piece index and position
    for (let z = 0; z < 3; z++) {
        for (let y = 0; y < 3; y++) {
            for (let x = 0; x < 3; x++) {
                const pieceIndex = x + y * 3 + z * 9;
                const mesh = new THREE.Mesh(geometry.clone(), materials[pieceIndex % materials.length]);

                // Adjust position based on coordinates
                mesh.position.set(x - 1, y - 1, z - 1);

                cubePieces.push(mesh);
            }
        }
    }

    return (
        <group>
            {cubePieces.map((piece, index) => (
                <mesh key={index} {...piece} />
            ))}
        </group>
    );
}


export default RubiksCube;
