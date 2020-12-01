# vue-slider-menu

## Plug in description

> Vue项目中实现导航动态锚点定位。页面滚动的同时对应的导航高亮，点击导航会页面会滚动到对应的内容区域。实现原理是判断所有的子盒子自身的高度和距离页面顶部的距离来判断当前是哪个子盒子显示在页面中。

## The online Demo
<a href="https://zhenyutsai.github.io/demo/vue-slider-menu/">DEMO</a>

## Install
```
npm install vue-slider-menu -S
```

## Quick Start

```js
import Vue from 'vue'
import SliderMenu from 'vue-slider-menu'
import 'vue-slider-menu/dist/slider-menu.css'

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
