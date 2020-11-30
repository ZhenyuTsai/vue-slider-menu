import SliderMenu from './SliderMenu.vue'
import SliderMenuItem from './SliderMenuItem.vue'

const components = [
  SliderMenu,
  SliderMenuItem
]

const install = (Vue) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
