import * as THREE from 'three';

export function createFloor(size: number, color: number): THREE.Mesh {
    const geometry = new THREE.PlaneGeometry(size, size);
    const material = new THREE.MeshBasicMaterial({ color });    
    const floor = new THREE.Mesh(geometry, material);
    floor.rotation.x = -Math.PI / 2;    
    
    return floor;
}