import {createScene} from './scene';
import {createCamera} from './camera';
import {createRenderer} from './renderer';
import {createFloor} from './floor';
import {createGrid} from './grid';
import * as Movement from './movement';
import * as THREE from 'three';

const gameScene: HTMLElement | null  = document.getElementById("game-scene");

if (!gameScene){
    throw new Error("No game scene in DOM");
}

const scene: THREE.Scene = createScene(0x87ceeb);
const camera: THREE.PerspectiveCamera = createCamera(gameScene, 70, 0.1, 100);
const renderer: THREE.WebGLRenderer = createRenderer(gameScene, true);

const floor: THREE.Mesh = createFloor(100, 0x3a5f0b);
const grid: THREE.GridHelper = createGrid(100, 100);

scene.add(floor);
scene.add(grid);

Movement.initCameraRotation(camera);


const keys: Record<string, boolean> = {};

window.addEventListener("keydown", (e: KeyboardEvent) => {
    keys[e.code] = true;
});

window.addEventListener("keyup", (e: KeyboardEvent) => {
    keys[e.code] = false;
});

renderer.domElement.addEventListener('click', () => {
    renderer.domElement.requestPointerLock();
});

window.addEventListener('mousemove', (e: MouseEvent) => {
    if (document.pointerLockElement === renderer.domElement) {
        Movement.rotateCamera(camera, e.movementX, e.movementY);
    }
});


function gameLoop(): void{
    requestAnimationFrame(gameLoop);
    Movement.checkKeys(keys, camera);
    renderer.render(scene, camera);
}

gameLoop();