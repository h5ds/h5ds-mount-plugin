# 挂载插件的方法

此方法是单纯的插件挂载，在editor或者layer中使用

use:

```javascript

import { mountPlugin } from 'h5ds-mount-plugin';

mountPlugin({...});

```
# API

#### mountPlugin `v1.0.0 add`

说明：挂载单个插件

```javascript

import { mountPlugin } from 'h5ds-mount-plugin';

// 挂载demo插件
mountPlugin({...demo});

```

#### unmountPlugin `v1.0.0 add`


说明：卸载挂载单个插件

```javascript

import { unmountPlugin } from 'h5ds-mount-plugin';

// 卸载demo插件
unmountPlugin('demo');

```

#### mountValue `v1.1.0 add`

说明：挂载指定参数

```javascript

import { mountValue } from 'h5ds-mount-plugin';

// 挂载 swiper 名称的参数，value
mountValue('swiper', value);

```

#### unmountValue `v1.1.0 add`

说明：卸载指定参数

```javascript

import { unmountValue } from 'h5ds-mount-plugin';

// 卸载 swiper 名称的值
unmountValue('swiper');

```

#### unmountAll `v1.1.0 add`

说明：卸载所有参数

```javascript

import { unmountAll } from 'h5ds-mount-plugin';

// 卸载所有参数
unmountAll('');

```
