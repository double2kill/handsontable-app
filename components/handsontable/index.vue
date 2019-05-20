<template>
  <div>
    <div>
      <a-button type="primary" @click="handleSubmit">
        保存
      </a-button>
    </div>
    <hot-table
      ref="hotTableComponent"
      :settings="settings"
    />
  </div>
</template>

<script>

import axios from 'axios'
import { CMD } from '~/constants/url'

export default {
  data: function () {
    return {
      settings: {
        data: [
          ['', '', '', '', '']
        ],
        licenseKey: 'non-commercial-and-evaluation',
        colHeaders: true,
        rowHeaders: true,
        columnSorting: true,
        width: '100%',
        manualColumnResize: true,
        manualRowResize: true,
        stretchH: 'all',
        contextMenu: true,
        dropdownMenu: true,
        filters: true,
        mergeCells: [],
        language: 'zh-CN',
        afterChange: (data) => {
          if (this.hotRef) {
            this.tableData = this.hotRef.getSourceData()
          }
        }
      },
      hotRef: null,
      tableData: []
    }
  },
  created() {
    this.fetchData()
  },
  mounted: function () {
    this.hotRef = this.$refs.hotTableComponent.hotInstance
  },
  methods: {
    async fetchData() {
      const response = await axios.get(`${CMD}/handsontable`, {
        params: {
          _sort: 'update_time',
          _order: 'desc'
        }
      })
      const { data } = response
      const { tableData } = data[0]
      this.hotRef.loadData(tableData)
    },
    async handleSubmit() {
      await axios.post(`${CMD}/handsontable`, {
        tableData: this.tableData,
        update_time: new Date().valueOf()
      })
      this.$message.info('恭喜你，保存成功了！', 1.5)
    }
  }
}
</script>

<style src="~/node_modules/handsontable/dist/handsontable.full.css"></style>
