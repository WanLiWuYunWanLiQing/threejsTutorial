import { DirectionalLight, AmbientLight, HemisphereLight } from "three";

function createLights() {
    // Create a directional light
    const mainLight = new DirectionalLight('white', 3);
    // const ambientLight = new AmbientLight('white', 2);
    const ambientLight = new HemisphereLight(
        'white', // bright sky color
        'darkslategrey', // dim ground color
        2, // intensity
    );

    // move the light right, up, and towards us
    mainLight.position.set(10, 10, 10);

    return { mainLight, ambientLight };
}

export { createLights };