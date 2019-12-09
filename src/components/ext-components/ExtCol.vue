<template>
  <div class="col-border">
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
  // computed
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .drag-col {
    height: 80px;
    border: 1px red solid;
  }
  .col-border {
    height: 100%;
  }
  .col-border :hover {
    border: 1px blue solid;
    /*使用z-index可以让他在有相对定位的情况下选中它也能让边框浮起来*/
    z-index: 1;
  }

</style>
