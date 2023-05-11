import * as THREE from "three";

export const initCamera = (sizes) => {
  // Camera
  const camera = new THREE.PerspectiveCamera(
    50,
    sizes.width / sizes.height,
    1,
    1000
  );
  camera.position.set(-5, 6, -15);

  const helper = new THREE.CameraHelper(camera);

  return {camera };
};
