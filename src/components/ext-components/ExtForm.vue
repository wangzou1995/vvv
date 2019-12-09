<template>
  <div class="form-border">
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
    /*pointer-events: none;*/
  }
  .form-border :hover {
      border: 1px blue solid;
      /*使用z-index可以让他在有相对定位的情况下选中它也能让边框浮起来*/
      z-index: 1;
  }
</style>
