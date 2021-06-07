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
