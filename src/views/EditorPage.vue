<template>
  <Editor />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Editor from '@/components/editor/Editor.vue'
@Component({
  components: { Editor }
})
export default class EditorPage extends Vue {
  // props
  // data
  // methods
  // computed
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
