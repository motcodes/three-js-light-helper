import * as THREE from 'three';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';

export const hemisphereLightHelper = (scene, light, size = 0.3) => {
  const lightHelper = new THREE.HemisphereLightHelper(light, size);
  scene.add(lightHelper);
};

export const directionalLightHelper = (scene, light, size = 0.3) => {
  const lightHelper = new THREE.DirectionalLightHelper(light, size);
  scene.add(lightHelper);
};

export const pointLightHelper = (scene, light, size = 0.3) => {
  const lightHelper = new THREE.PointLightHelper(light, size);
  scene.add(lightHelper);
};

export const spotLightHelper = (scene, light) => {
  const lightHelper = new THREE.SpotLightHelper(light);
  scene.add(lightHelper);

  window.requestAnimationFrame(() => {
    lightHelper.update();
  });
};

export const rectAreaLightHelper = (scene, light) => {
  const lightHelper = new RectAreaLightHelper(light);
  scene.add(lightHelper);
};
