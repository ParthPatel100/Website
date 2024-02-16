"use client"

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Float, Environment, OrbitControls } from '@react-three/drei';
import {Suspense, useEffect, useState} from "react";


function MirrorCube() {
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const materials = [
        new THREE.MeshStandardMaterial({ color: 'rgb(218,22,22)', roughness: 0 }),
        new THREE.MeshStandardMaterial({ color: 'rgb(32,43,213)', roughness: 0 }),
        new THREE.MeshStandardMaterial({ color: 'rgb(72,217,34)', roughness: 0 }),
        new THREE.MeshStandardMaterial({ color: 'rgb(213,210,30)', roughness: 0 }),
        new THREE.MeshStandardMaterial({ color: 'rgb(255,255,255)', roughness: 0 }),
        new THREE.MeshStandardMaterial({ color: 'rgb(231,84,24)', roughness: 0 }),
    ];

    // Define materials with slightly different sizes for each face

    return (
        <Canvas className="z-5 " shadows gl={{antialias: true}} dpr={[1, 1.7]}
                camera={{position: [0, 0, 12], fov: 45, near: 1, far: 40}}
        >
            <Suspense fallback={null}>
                <MirrorCubeMesh geometry={cubeGeometry} materials={materials} />
                <ContactShadows />
                <Environment preset="sunset" />
            </Suspense>
            <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
        </Canvas>
    );
}

function MirrorCubeMesh({ geometry, materials }) {
    const mesh = new THREE.Mesh(geometry, materials);

    // Define layers and axes for rotation
    const layers = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
    ];

    const axes = ['x', 'y', 'z'];

    const [isDragging, setIsDragging] = useState(false);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [currentLayer, setCurrentLayer] = useState(0);
    const [currentAxis, setCurrentAxis] = useState(0);

    const handleMouseDown = (event) => {
        setIsDragging(true);
        setMouseX(event.clientX);
        setMouseY(event.clientY);

        // Determine the layer and axis based on click position (needs refinement for better accuracy)
        const clickX = event.offsetX / window.innerWidth;
        const clickY = event.offsetY / window.innerHeight;
        if (clickX > 0.33 && clickX < 0.66) {
            setCurrentLayer(clickY > 0.5 ? 1 : 0);
            setCurrentAxis(clickX > 0.5 ? 2 : 0);
        } else if (clickY > 0.33 && clickY < 0.66) {
            setCurrentLayer(clickX > 0.5 ? 2 : 1);
            setCurrentAxis(clickY > 0.5 ? 1 : 0);
        } else {
            setCurrentLayer(clickX > 0.5 ? 5 : 4);
            setCurrentAxis(clickY > 0.5 ? 2 : 1);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (event) => {
        if (isDragging) {
            const deltaX = event.clientX - mouseX;
            const deltaY = event.clientY - mouseY;

            const rotationAngle = deltaX / 100;

            mesh.rotation[axes[currentAxis]] += rotationAngle;

            layers[currentLayer].forEach((faceIndex) => {
                mesh.geometry.attributes.position.array[faceIndex * 3 * 8] += rotationAngle;
                mesh.geometry.attributes.position.array[faceIndex * 3 * 8 + 1] += rotationAngle;
                mesh.geometry.attributes.position.array[faceIndex * 3 * 8 + 2] += rotationAngle;
            });

            mesh.geometry.attributes.position.needsUpdate = true;

            setMouseX(event.clientX);
            setMouseY(event.clientY);
        }
    };

    useEffect(() => {
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <mesh {...mesh} />;
}


export default MirrorCube;
