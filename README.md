# Three Js Light Helper Functions

This repo contains 5 functions for enabeling the Light-Helper in ThreeJS and automatically adding it to the scene.

## hemisphereLightHelper

This enables the Hemisphere Light Helper.
It takes 3 arguments

```js
import { hemisphereLightHelper } from '@motcodes/three-js-light-helper';
hemisphereLightHelper(scene, light, size);
```

- scene
  - to which scene the helper should be added
- light
  - the light you want to see
- size (optional)
  - size = 0.3
  - how big the helper should be

## directionalLightHelper

This enables the Directional Light Helper.
It takes 3 arguments

```js
import { directionalLightHelper } from '@motcodes/three-js-light-helper';
directionalLightHelper(scene, light, size);
```

- scene
  - to which scene the helper should be added
- light
  - the light you want to see
- size (optional)
  - size = 0.3
  - how big the helper should be

## pointLightHelper

This enables the Point Light Helper.
It takes 3 arguments

```js
import { pointLightHelper } from '@motcodes/three-js-light-helper';
pointLightHelper(scene, light, size);
```

- scene
  - to which scene the helper should be added
- light
  - the light you want to see
- size (optional)
  - size = 0.3
  - how big the helper should be

## spotLightHelper

This enables the Spot Light Helper.
It takes 3 arguments

```js
import { spotLightHelper } from '@motcodes/three-js-light-helper';
spotLightHelper(scene, light);
```

- scene
  - to which scene the helper should be added
- light
  - the light you want to see

## rectAreaLightHelper

This enables the RectArea Light Helper.
It takes 3 arguments

```js
import { rectAreaLightHelper } from '@motcodes/three-js-light-helper';
rectAreaLightHelper(scene, light);
```

- scene
  - to which scene the helper should be added
- light
  - the light you want to see
