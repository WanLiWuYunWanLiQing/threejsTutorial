import { Mesh } from 'three';

import { createGeometries } from './geometries.js';
import { createMaterials } from './materials.js';

function createMeshes() {
    const geometries = createGeometries();
    const materials = createMaterials();

    const cabin = new Mesh(geometries.cabin, materials.body);
    cabin.position.set(1.5, 1.4, 0);

    const chimney = new Mesh(geometries.chimney, materials.detail);
    chimney.position.set(-2, 1.9, 0);
}

export { createMeshes }