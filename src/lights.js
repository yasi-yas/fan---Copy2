import * as THREE from "three";

export const initLights = (scene) => {
  const spotLight = new THREE.SpotLight(0xffffff, 0.6);
  spotLight.position.set(0, -1, 0);
  const spotLightHelper = new THREE.SpotLightHelper(spotLight);
  spotLight.castShadow = true;

  spotLight.shadow.mapSize.width = 10;
  spotLight.shadow.mapSize.height = 10;

  spotLight.shadow.camera.near = 0;
  spotLight.shadow.camera.far = 1000;
  spotLight.shadow.camera.fov = 0;

  scene.add(spotLight);

  const spotLight2 = new THREE.SpotLight(0xf5f5d1, 0.6);
  spotLight2.position.set(0, -1, 0);
  const spotLightHelper2 = new THREE.SpotLightHelper(spotLight2);
  spotLight2.castShadow = true;

  spotLight2.shadow.mapSize.width = 1024;
  spotLight2.shadow.mapSize.height = 1024;

  spotLight2.shadow.camera.near = 0;
  spotLight2.shadow.camera.far = 1000;
  spotLight2.shadow.camera.fov = 0;

  scene.add(spotLight2);

  const spotLight3 = new THREE.SpotLight(0xffffff, 0.6);
  spotLight3.position.set(0, 30, -30);
  const spotLightHelper3 = new THREE.SpotLightHelper(spotLight3);
  spotLight3.castShadow = true;

  spotLight3.shadow.mapSize.width = 1024;
  spotLight3.shadow.mapSize.height = 1024;

  spotLight3.shadow.camera.near = 0;
  spotLight3.shadow.camera.far = 100;
  spotLight3.shadow.camera.fov = 0;

  scene.add(spotLight3);

  const spotLight4 = new THREE.SpotLight(0xf5f5d1, 0.6);
  spotLight4.position.set(-30, 5, 0);
  const spotLightHelper4 = new THREE.SpotLightHelper(spotLight4);
  spotLight4.castShadow = true;

  spotLight4.shadow.mapSize.width = 1024;
  spotLight4.shadow.mapSize.height = 1024;

  spotLight4.shadow.camera.near = 0;
  spotLight4.shadow.camera.far = 100;
  spotLight4.shadow.camera.fov = 0;

  scene.add(spotLight4);

  const spotLight5 = new THREE.SpotLight(0xffffff, 0.6);
  spotLight5.position.set(30, 5, 0);
  const spotLightHelper5 = new THREE.SpotLightHelper(spotLight5);
  spotLight5.castShadow = true;

  spotLight5.shadow.mapSize.width = 1024;
  spotLight5.shadow.mapSize.height = 1024;

  spotLight5.shadow.camera.near = 0;
  spotLight5.shadow.camera.far = 100;
  spotLight5.shadow.camera.fov = 0;

  scene.add(spotLight5);

  const spotLight6 = new THREE.SpotLight(0xffffff, 0.6);
  spotLight6.position.set(0, 30, 30);
  const spotLightHelper6 = new THREE.SpotLightHelper(spotLight6);
  spotLight6.castShadow = true;

  spotLight6.shadow.mapSize.width = 1024;
  spotLight6.shadow.mapSize.height = 1024;

  spotLight6.shadow.camera.near = 0;
  spotLight6.shadow.camera.far = 100;
  spotLight6.shadow.camera.fov = 0;

  scene.add(spotLight6);

  const spotLight7 = new THREE.SpotLight(0xffffff, 0.6);
  spotLight7.position.set(0, 30, 0);
  const spotLightHelper7 = new THREE.SpotLightHelper(spotLight7);
  spotLight6.castShadow = true;

  spotLight7.shadow.mapSize.width = 1024;
  spotLight7.shadow.mapSize.height = 1024;

  spotLight7.shadow.camera.near = 0;
  spotLight7.shadow.camera.far = 100;
  spotLight7.shadow.camera.fov = 0;

  scene.add(spotLight7);

  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xefefff, 0.5);
  dirLight.position.set(20, 10, 0);
  const dirLightHelper = new THREE.DirectionalLightHelper(dirLight);
  scene.add(dirLight);

  const dirLight2 = new THREE.DirectionalLight(0xefefff, 0.5);
  dirLight2.position.set(-20, 10, 0);
  const dirLightHelper2 = new THREE.DirectionalLightHelper(dirLight2);
  scene.add(dirLight2);

  const dirLight3 = new THREE.DirectionalLight(0xefefff, 0.1);
  dirLight3.position.set(0, 20, 0);
  const dirLightHelper3 = new THREE.DirectionalLightHelper(dirLight3);
  scene.add(dirLight3);

  const dirLight4 = new THREE.DirectionalLight(0xefefff, 0.1);
  dirLight4.position.set(0, 15, -30);
  const dirLightHelper4 = new THREE.DirectionalLightHelper(dirLight4);
  scene.add(dirLight4);

  const dirLight5 = new THREE.DirectionalLight(0xefefff, 0.1);
  dirLight5.position.set(20, 15, 20);
  const dirLightHelper5 = new THREE.DirectionalLightHelper(dirLight5);
  scene.add(dirLight5);

  const dirLight6 = new THREE.DirectionalLight(0xefefff, 0.1);
  dirLight6.position.set(0, 15, 30);
  const dirLightHelper6 = new THREE.DirectionalLightHelper(dirLight6);
  scene.add(dirLight6);

  const dirLight7 = new THREE.DirectionalLight(0xefefff, 0.1);
  dirLight7.position.set(-20, 15, -20);
  const dirLightHelper7 = new THREE.DirectionalLightHelper(dirLight7);
  scene.add(dirLight7);

  const dirLight8 = new THREE.DirectionalLight(0xefefff, 0.01);
  dirLight8.position.set(-20, 15, 20);
  const dirLightHelper8 = new THREE.DirectionalLightHelper(dirLight8);
  scene.add(dirLight8);

  const dirLight9 = new THREE.DirectionalLight(0xefefff, 0.01);
  dirLight9.position.set(20, 15, -20);
  const dirLightHelper9 = new THREE.DirectionalLightHelper(dirLight9);
  scene.add(dirLight9);

};
 