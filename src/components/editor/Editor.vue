<template>
    <a-layout style="height: 100%">
      <a-layout-header><EditorHeader/></a-layout-header>
      <a-layout>
        <a-layout-sider theme="light"><EditorMenu/></a-layout-sider>
        <a-layout-content><EditorContent/></a-layout-content>
        <a-layout-sider theme="light"><EditorConfig/></a-layout-sider>
      </a-layout>
    </a-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import EditorHeader from '@/components/editor/EditorHeader.vue'
import EditorMenu from '@/components/editor/EditorMenu.vue'
import EditorContent from '@/components/editor/EditorContent.vue'
import EditorConfig from '@/components/editor/EditorConfig.vue'
@Component({
  components: { EditorConfig, EditorContent, EditorMenu, EditorHeader }
})
export default class Editor extends Vue {
  // props
  // data
  // methods
  // computed
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .ant-layout-header {
    background: white;
  }
</style>
