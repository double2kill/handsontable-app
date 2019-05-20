import Vue from 'vue'
import { Button, message } from 'ant-design-vue/lib'

export default () => {
  Vue.use(Button)
  Vue.prototype.$message = message
}
