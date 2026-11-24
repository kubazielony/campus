import * as THREE from 'three';

let sensivity: number = 0.002;
let speed: number = 0.2;

export function moveForward(camera: THREE.PerspectiveCamera) {
    const pitch = camera.rotation.x;
    camera.rotation.x = 0;
    camera.translateZ(-speed);
    camera.rotation.x = pitch;
}

export function moveBackward(camera: THREE.PerspectiveCamera) {
    const pitch = camera.rotation.x;
    camera.rotation.x = 0;
    camera.translateZ(speed);
    camera.rotation.x = pitch;
}

export function moveLeft(camera: THREE.PerspectiveCamera) {
    camera.translateX(-speed);
}

export function moveRight(camera: THREE.PerspectiveCamera) {
    camera.translateX(speed);
}

export function checkKeys(keys: Record<string, boolean>, camera: THREE.PerspectiveCamera): void{
    const baseSpeed: number = speed;
    if (keys["ShiftLeft"]) speed *= 2;

    if (keys["KeyW"]) moveForward(camera);
    if (keys["KeyS"]) moveBackward(camera);
    if (keys["KeyA"]) moveLeft(camera);
    if (keys["KeyD"]) moveRight(camera);

    speed = baseSpeed;
}


export function initCameraRotation(camera: THREE.PerspectiveCamera) {
    camera.rotation.order = 'YXZ';
}
export function rotateCamera(camera: THREE.PerspectiveCamera, movementX: number, movementY: number){
    camera.rotation.y -= movementX * sensivity;
    camera.rotation.x -= movementY * sensivity;
    camera.rotation.x = THREE.MathUtils.clamp(camera.rotation.x, -(Math.PI / 2), Math.PI / 2);
}