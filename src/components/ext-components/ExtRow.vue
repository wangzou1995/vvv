<template>
  <div style="height: 100%" ref="rowBorder" @mouseover.stop="hoverStyle(1)" @mouseout.stop="hoverStyle(0)">
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
      private hoverStyle (type: number) {
        let vm = this
        let borderObj : HTMLElement = vm.$refs.rowBorder as HTMLElement
        borderObj.setAttribute('style', type === 1 ? 'border: 1px black solid' : 'border: 1px hidden')
        console.log(borderObj)
      }
  // computed
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .drag-row {
  }
  .drag-row-empty {
    height: 80px;
  }
</style>
