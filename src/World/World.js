import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createAxesHelper, createGridHelper } from './components/helpers.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

import { Train } from '../../assets/models/train/Train.js';

let camera;
let renderer;
let scene;
let loop;

class World {
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        loop = new Loop(scene, camera, renderer);
        container.append(renderer.domElement);

        const controls = createControls(camera, renderer.domElement);
        // 按需渲染 controls 的方法
        // controls.addEventListener('change', () => { this.render(); });
        const { mainLight, ambientLight } = createLights();
        const train = new Train();


        loop.updatables.push(controls);
        scene.add(ambientLight, mainLight, train);

        const resizer = new Resizer(container, camera, renderer);
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