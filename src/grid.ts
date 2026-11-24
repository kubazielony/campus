import * as THREE from 'three';

export function createGrid(
    size: number,
    divisions: number,
    colorCenterLine: number = 0x444444,
    colorGrid: number = 0x888888): THREE.GridHelper {
        
    const grid = new THREE.GridHelper(size, divisions, colorCenterLine, colorGrid);
    grid.position.y = 0.01;

    return grid;
}