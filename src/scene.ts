import * as THREE from 'three';

export function createScene(backgroundColor: number): THREE.Scene{
    const scene: THREE.Scene = new THREE.Scene;
    scene.background = new THREE.Color(backgroundColor);

    return scene;
}

