import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { initLights } from "./lights";
import { createFloor, loadFactory } from "./modelLoader";
import { handleScreenResize } from "./events";
import { initCamera } from "./camera";
import { initRenderer } from "./renderer";
import { nodeFrame } from "three/addons/renderers/webgl/nodes/WebGLNodes.js";
import Stats from "three/addons/libs/stats.module.js";

// Canvas
const canvas = document.getElementById("webgl");
const container = document.getElementById("container");
const stats = new Stats();
container.appendChild(stats.dom);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const scene = new THREE.Scene();
const { camera, helper } = initCamera(sizes);
scene.add(camera, helper);
initLights(scene); 

// Controls
const controls = new OrbitControls(camera, canvas);
controls.maxPolarAngle = (0.9 * Math.PI) / 2;
// controls.enableDamping = true;
// controls.minDistance = 0.01;
controls.maxDistance = 30;
// controls.enablePan = true;

const renderer = initRenderer(canvas, sizes, camera, scene);
handleScreenResize(sizes, camera, renderer);

const floor = createFloor("#303130");
scene.add(floor);

loadFactory((factory) => {
  scene.add(factory);
  renderer.render(scene, camera);
});

const tick = () => {
  nodeFrame.update();
  renderer.render(scene, camera);
  stats.update();
  window.requestAnimationFrame(tick);
};
tick();
