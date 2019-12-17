<template>
  <div class="form-border" @mouseover.stop="hoverStyle(1)" @mouseout.stop="hoverStyle(0)" ref="formBorder">
  <a-form class="ext-form" labelAlign="right" layout="inline">
    <vvv-drag :list="formItems" group="demo" :class="formItems.length > 0 ? 'drag-from' : 'drag-from-empty'">
      <template v-for="(item, index) in formItems"  :label="item.name">
        <comment :is="item.elementNode"  :items="item.tb_window_element" :key="index"/>
      </template>
    </vvv-drag>
  </a-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, PropSync } from 'vue-property-decorator'
@Component
export default class ExtForm extends Vue {
  @PropSync('items') formItems!:Array<object>
  // data
  // methods
  private hoverStyle (type: number) {
    let vm = this
    let borderObj : HTMLElement = vm.$refs.formBorder as HTMLElement
    borderObj.setAttribute('style', type === 1 ? 'border: 1px black solid' : 'border: 1px hidden')
    console.log(borderObj)
  }
  // computed
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .ext-form {
    height:100%;
  }
  .drag-from {
    height: 100%;

  }
  .drag-from-empty {
    height: 100px;

  }
  .form-border {
    height: 100%;
    border: 1px hidden;
    padding: 10px;
    /*pointer-events: none;*/
  }
</style>
