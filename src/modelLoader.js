import * as THREE from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadFactory = (onFactoryLoaded) => {
  // Models
  const gltfLoader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath(
    "./node_modules/three/examples/jsm/libs/draco/gltf/"
  ); // use a full url path
  gltfLoader.setDRACOLoader(dracoLoader);

  gltfLoader.load("./factory/factory2.glb", (gltf) => {
    const model = gltf.scene;
    model.position.set(-21, -6.6, 9);
    // console.log(model.position);
    onFactoryLoaded(model);
  });
};

export const createFloor = (color) => {
  //Floor
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(31, 17),
    new THREE.MeshStandardMaterial({
      color,
      metalness: 0,
      roughness: 100,
    })
  );
  floor.receiveShadow = true;
  floor.rotation.x = -Math.PI * 0.5;
  floor.position.set(0, -6, 0);
  return floor;
};
