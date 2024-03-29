import { Group } from 'three';

import { createGeometries } from "./geometries.js";
import { createMaterials } from "./materials.js";
import { createMeshes } from "./meshes.js";

class Train extends Group {
    constructor() {
        super();

        this.meshes = createMeshes();
    }
}

export { Train }