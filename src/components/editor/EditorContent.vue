<template>
  <vvv-drag :list="pageList" class="draggable_content" group="demo" @change="sortComponents">
    <div v-for="(p,index) in pageList" :key="index">
      <component :is="p.elementNode" class="tab" defaultValue="1" :items.sync="p['tb_window_element']"></component>
    </div>
    {{pageList}}
  </vvv-drag>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ComponentDataSource from '@/mock/components/ComponentDataSource'
@Component
export default class EditorContent extends Vue {
  public test:Array<object> = ComponentDataSource.getComponents().list
  // props
  // data
      private pageList:Array<object> = []
      // methods
      public sortComponents (evt: any) {
        this.test = this.test.map(function (e :any, index: number) {
          e.sort = index
          return e
        })
        // 完成后进行排序
      }
      // computed
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .draggable_content{
    height: 100%;
    width: 100%;
    border: 1px red solid;
  }
</style>
