<template>
  <div id="app">
    <slider-menu navWidth="300px">
      <!-- 自定义导航样式插槽 -->
      <template v-slot:menu="{row}">
        <div class="slider-menu-nav" :class="{'slider-menu-nav-active': row.current === row.index}">
          <span>{{row.name}}</span>
        </div>
      </template>
      <slider-menu-item name="标题1"></slider-menu-item>
      <slider-menu-item name="标题2"></slider-menu-item>
      <slider-menu-item name="标题3"></slider-menu-item>
      <slider-menu-item name="标题4"></slider-menu-item>
      <slider-menu-item name="标题5"></slider-menu-item>
    </slider-menu>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.slider-menu-item .content{
  height: 1000px;
  padding: 20px;
  border: 1px solid #f0f0f0;
}
</style>
