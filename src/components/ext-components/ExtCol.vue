<template>
  <div class="col-border" ref="colBorder" @mouseover.stop="hoverStyle(1)" @mouseout.stop="hoverStyle(0)">
  <Col class="drag-col"  :span="span"/>
  </div>
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
      private hoverStyle (type: number) {
        let vm = this
        let borderObj : HTMLElement = vm.$refs.colBorder as HTMLElement
        borderObj.setAttribute('style', type === 1 ? 'border: 1px black solid' : 'height: 80px ;border: 1px hidden')
        console.log(borderObj)
      }
  // computed
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .drag-col {
    height: 80px;
  }
  .col-border {
    height: 100%;
  }

</style>
