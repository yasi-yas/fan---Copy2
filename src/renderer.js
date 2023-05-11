import * as THREE from "three";

export const initRenderer = (canvas, sizes, camera, scene) => {
  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.render(scene, camera);

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.toneMapping = THREE.NoToneMapping;

  scene.fog = new THREE.FogExp2(0x87CEEB, 0.001);
  renderer.setClearColor(scene.fog.color);
  // renderer.setClearColor(0xffffff, 0);

  // const skyGeo = new THREE.SphereGeometry(1000, 25, 25);
  // const loader = new THREE.TextureLoader();
  // const texture = loader.load("../factory/space.jpg");
  // const material = new THREE.MeshPhongMaterial({
  //   map: texture,
  // });

  // const sky = new THREE.Mesh(skyGeo, material);
  // sky.material.side = THREE.BackSide;
  // scene.add(sky);

  return renderer;
};
