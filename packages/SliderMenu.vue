<template>
  <div class="slider-main">
    <div class="slider-body">
      <div ref="sliderMenu" class="slider-menu">
          <div  v-for="(item, index) in data" :key='index' @click="scrollToView(index)">
            <slot name="menu" :row="{...item,current,index}">
              <div class="slider-menu-nav" :class="{'slider-menu-nav-active': current === index}">
                <span>{{item.name}}</span>
              </div>
            </slot>
          </div>
      </div>
      <div class="slider-info">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SliderMenu',
  data () {
    return {
      current: 0,
      data: []
    }
  },
  methods: {
    scrollToView (index) {
      const data = this.getScrollItems()
      if (index >= 0 && index < data.length) {
        const item = data[index] || {}
        const elOffset = this.getOffset(item)
        const top = elOffset.top - this.getStartTop()
        window.scrollTo({ top: top < 0 ? 0 : top, behavior: 'smooth' })
      }
    },
    handleScroll (e) {
      const data = this.getScrollItems()
      const scrollTop = this.getScroll(window, true)
      let maxTop = -99999
      data.forEach((target, index) => {
        const elOffset = this.getOffset(target)
        const realTop = elOffset.top - this.getStartTop() - scrollTop
        if (realTop <= 0 && maxTop <= realTop) {
          maxTop = realTop
          this.current = index
        }
      })
    },
    getStartTop () {
      if (this.$refs.sliderMenu) {
        return this.$refs.sliderMenu.offsetTop || 0
      }
      return 0
    },
    getScrollItems () {
      let childrenRefs = []
      let refs = []
      if (this.$children && this.$children.length) {
        childrenRefs = this.$children.map(item => item.$el)
        refs = childrenRefs
      }
      return refs
    },
    getScroll (target, top) {
      const prop = top ? 'pageYOffset' : 'pageXOffset'
      const method = top ? 'scrollTop' : 'scrollLeft'
      let ret = target[prop]
      if (typeof ret !== 'number') {
        ret = window.document.documentElement[method]
      }
      return ret
    },
    getOffset (element) {
      const rect = element.getBoundingClientRect()
      const scrollTop = this.getScroll(window, true)
      const scrollLeft = this.getScroll(window)

      const docEl = window.document.body
      const clientTop = docEl.clientTop || 0
      const clientLeft = docEl.clientLeft || 0
      let height = rect.bottom - rect.top
      if (height === 0 && element.parentNode) {
        const parentRect = element.parentNode.getBoundingClientRect()
        height = parentRect ? parentRect.height || 0 : 0
      }
      return {
        top: rect.top + scrollTop - clientTop,
        left: rect.left + scrollLeft - clientLeft,
        height: height,
        width: rect.right - rect.left
      }
    }
  },
  mounted () {
    if (this.$children && this.$children.length) {
      this.data = this.$children.map(item => { return { name: item.name } })
    }
    window.addEventListener('scroll', this.handleScroll, false)
    window.addEventListener('resize', this.handleScroll, false)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll, false)
    window.removeEventListener('resize', this.handleScroll, false)
  }
}
</script>
<style scoped>
.slider-main {
  display: flex;
  flex-direction: column;
}
.slider-body {
  display: flex;
  flex-wrap: wrap;
}
.slider-menu {
  position: fixed;
  left: auto;
  width: 180px;
  overflow: auto;
  color: #000;
  height: auto;
  top: 10px;
}
.slider-menu-nav {
  border-left: 2px solid #e8eaed;
  display: block;
  padding: 15px 0 0 30px;
  position: relative;
  line-height: 24px;
  color: inherit;
  cursor: pointer;
}
.slider-menu-nav-active, .slider-menu-nav:hover {
  color: #1a73e8;
}
.slider-menu-nav-active {
  border-left: 2px solid #1a73e8;
}
.component-info {
  height: 100px;
  width: 600px;
  border: 1px solid #f0f0f0;
}
.slider-info {
  padding-left: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
