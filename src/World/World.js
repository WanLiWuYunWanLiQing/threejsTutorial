import { loadBirds } from './components/birds/birds.js';
import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createAxesHelper, createGridHelper } from './components/helpers.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

let camera;
let renderer;
let controls;
let scene;
let loop;

class World {
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        loop = new Loop(scene, camera, renderer);
        container.append(renderer.domElement);

        controls = createControls(camera, renderer.domElement);
        // 按需渲染 controls 的方法
        // controls.addEventListener('change', () => { this.render(); });
        const { mainLight, ambientLight } = createLights();

        loop.updatables.push(controls);
        scene.add(ambientLight, mainLight);

        const resizer = new Resizer(container, camera, renderer);
    }

    async init() {
        const { parrot, flamingo, stork } = await loadBirds();
        controls.target.copy(parrot.position);
        scene.add(parrot, flamingo, stork);
    }

    // 2. Render the scene
    render() {
        // draw a single frame
        renderer.render(scene, camera);
    }

    start() {
        loop.start();
    }


    stop() {
        loop.stop();
    }
}

export { World };