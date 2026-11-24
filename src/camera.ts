import * as THREE from 'three';

export function createCamera(gameScene: HTMLElement, fov: number, near: number, far: number): THREE.PerspectiveCamera{
    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(fov, gameScene.clientWidth / gameScene.clientHeight, near, far);
    camera.position.set(0, 1.7, 0);
    camera.lookAt(0, 1.7, 0);

    return camera;
}