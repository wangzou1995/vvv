<template>
  <Col class="drag-col"  :span="span"/>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync } from 'vue-property-decorator'
import { Col } from 'ant-design-vue'
    @Component(
      {
        components: { Col }
      }
    )
export default class ExtCol extends Vue {
  // props
      @Prop(Number) span!: number
  // data
  // methods
  // computed
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .drag-col {
    height: 80px;
    border: 1px red solid;
  }
</style>
