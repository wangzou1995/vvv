<template>
  <div>
    <vvv-grid-layout  :layout.sync="testLayout"
                      :col-num="12"
                      :row-height="30"
                      :is-draggable="true"
                      :is-resizable="true"
                      :is-mirrored="false"
                      :vertical-compact="true"
                      :margin="[10, 10]"
                      :use-css-transforms="true">
      <vvv-grid-item v-for="item in testLayout"
                 :x="item.x"
                 :y="item.y"
                 :w="item.w"
                 :h="item.h"
                 :i="item.i"
                 :key="item.i" style="border: 1px silver solid">
        <a-input v-model="item.i"/>
        <a-button>{{item.i}}</a-button>
      </vvv-grid-item>
    </vvv-grid-layout>
    <a-input></a-input>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DragLayout extends Vue {
  private testLayout: Array<object> = [
    { 'x': 0, 'y': 0, 'w': 2, 'h': 2, 'i': '0' },
    { 'x': 2, 'y': 0, 'w': 2, 'h': 4, 'i': '1' },
    { 'x': 4, 'y': 0, 'w': 2, 'h': 5, 'i': '2' },
    { 'x': 6, 'y': 0, 'w': 2, 'h': 3, 'i': '3' },
    { 'x': 8, 'y': 0, 'w': 2, 'h': 3, 'i': '4' }
  ];
}
</script>

<style scoped>

</style>
