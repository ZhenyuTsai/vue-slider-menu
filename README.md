# slider-menu

## Install
```
npm install vue-slider-menu -S
```

## Quick Start

```js
import Vue from 'vue'
import SliderMenu from 'vue-slider-menu'
import 'vue-slider-menu/lib/slider-menu.css'

Vue.use(SliderMenu)
```

## Start using

```html
<template>
  <div id="app">
    <slider-menu>
      <!-- 自定义导航样式插槽 -->
      <template v-slot:menu="{row}">
        <div class="slider-menu-nav" :class="{'slider-menu-nav-active': row.current === row.index}">
          <span>{{row.name}}</span>
        </div>
      </template>
      <slider-menu-item name="标题1">
      	区域内容
      </slider-menu-item>
      <slider-menu-item name="标题2"></slider-menu-item>
      <slider-menu-item name="标题3"></slider-menu-item>
      <slider-menu-item name="标题4"></slider-menu-item>
      <slider-menu-item name="标题5"></slider-menu-item>
    </slider-menu>
  </div>
</template>
```

## Browser Support

Modern browsers and Internet Explorer 10+.