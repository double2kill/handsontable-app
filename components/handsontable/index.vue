<template>
  <hot-table
    :settings="settings"
  />
</template>

<script>

export default {
  data: function () {
    return {
      settings: {
        data: [
          ['2013', 'Tesla', 'Volvo', 'Toyota', 'Ford'],
          ['2019', 10, 11, 12, 13],
          ['2020', 20, 11, 14, 13],
          ['2021', 30, 15, 12, 13]
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
        language: 'zh-CN'
      }
    }
  }
}
</script>

<style src="~/node_modules/handsontable/dist/handsontable.full.css"></style>
