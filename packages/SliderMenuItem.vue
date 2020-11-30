<template>
  <div ref="scrollItem" class="slider-menu-item">
    <slot>
      <div class="content">{{name+' 的内容'}}</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'SliderMenuItem',
  props: {
    name: {
      type: [String, Number],
      default: 'String'
    }
  }
}
</script>

<style scoped>
.slider-menu-item .content{
  height: 1000px;
  width: 800px;
  padding: 20px;
  border: 1px solid #f0f0f0;
}
</style>
