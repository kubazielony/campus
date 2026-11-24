import * as THREE from 'three';

export function createRenderer(gameScene: HTMLElement, antialias: boolean): THREE.WebGLRenderer{
    
    const renderer = new THREE.WebGLRenderer({ antialias: antialias });
    renderer.setSize(gameScene.clientWidth, gameScene.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    gameScene.appendChild(renderer.domElement);

    return renderer;
}