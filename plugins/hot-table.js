import Vue from 'vue'
import { HotTable } from '@handsontable/vue'

export default () => {
  if (process.client) {
    require('handsontable/languages/zh-CN')
    Vue.component('hot-table', HotTable)
  }
}
