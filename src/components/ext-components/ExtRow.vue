<template>
  <div style="height: 100%">
  <Row  class="drag-row">
    <vvv-drag :list="colItems" group="demo" :class="colItems.length > 0 ? 'drag-row' : 'drag-row-empty'">
      <template v-for="(item, index) in colItems"   :label="item.name">
        <comment :is="item.elementNode" :key="index" :span="24/colItems.length" :items="item.tb_window_element"/>
      </template>
    </vvv-drag>
  </Row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, PropSync } from 'vue-property-decorator'
import { Row } from 'ant-design-vue'
    @Component({
      components: { Row }
    })
export default class ExtRow extends Vue {
  // props
      @PropSync('items') colItems!:Array<object>
  // data
  // methods
  // computed
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .drag-row {
    border: 1px silver dashed;
  }
  .drag-row-empty {
    height: 80px;
    border: 1px sienna dashed;
  }
</style>
