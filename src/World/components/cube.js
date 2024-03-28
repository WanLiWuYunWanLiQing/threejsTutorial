import { BoxGeometry, Mesh, MeshStandardMaterial, MathUtils } from 'three';

function createCube() {
    // create a geometry
    const geometry = new BoxGeometry(2, 2, 2);

    // create a physically correct "standard" material
    const material = new MeshStandardMaterial({ color: "purple" });

    // create a Mesh containing the geometry and material
    const cube = new Mesh(geometry, material);

    cube.rotation.set(-0.5, -0.1, 0.8);

    const radiansPerSecond = MathUtils.degToRad(30);

    // this method will be called once per frame
    cube.tick = (delta) => {
        // increase the cube's rotation each frame
        cube.rotation.x += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
        cube.rotation.z += radiansPerSecond * delta;
    }

    return cube;
}

export { createCube };