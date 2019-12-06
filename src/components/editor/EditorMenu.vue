<template>
  <div class="editor-sider">
    <!--  文件树-->
    <div class="editor-sider-tree">
      <a-tree />
    </div>
    <!--  拖拽组件组-->
    <div>
      <vvv-drag :list="draggableList" :group="{name: 'demo', pull: 'clone', put: false}"
      :clone="deepClone">
        <div class="draggable_item" v-for="(element, index) in draggableList" :key="index">
          {{element.elementNode + element.id}}
        </div>
      </vvv-drag>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ComponentDataSource from '@/mock/components/ComponentDataSource'
import UUID from '@/utils/UUID'

@Component
export default class EditorMenu extends Vue {
  // props
  // data
  private draggableList: Array<object> = ComponentDataSource.getComponents().list
  // methods
  public deepClone (evt: any) {
    // 深克隆
    let clone = {
      ...evt,
      id: UUID.getUUID()
    }
    return clone
  }
  // computed
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .editor-sider {
    height: 100%;
  }
  .editor-sider-tree {
    height: 30%;
    border: 1px silver solid;
  }
  .draggable_item {
    border: 1px silver solid;
    height: 20px;
    width: 100%;
    float :left;
  }
</style>
