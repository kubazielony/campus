import * as THREE from 'three';

export function moveForward(camera: THREE.PerspectiveCamera){
    camera.translateZ(-1);
}