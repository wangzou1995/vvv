<template>
  <div>
    <div class="dragArea1">
      <vvv-drag class="drag"
                :list="dragArraySource"
                :group="{ name: 'demo', pull: pullF, put: false}"
                :clone="cloneDog"
                @move="checkMove"
                @add="checkAdd"
                @remve="checkRemove"
                @filter="cho"
      >
<!--        <transition-group>-->
          <div class="dragElement" v-for="element in dragArraySource" :key="element.id">
            <a-input v-model="element.value"/>
          </div>
<!--        </transition-group>-->
      </vvv-drag>
    </div>
    <div class="dragArea2">
      <vvv-drag class="drag" @change="log" :list="computedMsg" :group="{ name: 'demo', put: checkPut}">
<!--        <transition-group>-->
          <div class="dragElement" v-for="element in computedMsg" :key="element.id">
            <a-input baseGroup="111" v-model="element.value"/>
          </div>
<!--        </transition-group>-->
      </vvv-drag>
    </div>
    <div class="dragArea2">
      {{dragArraySource}}
      {{computedMsg}}
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import UUID from '@/utils/UUID'
import { getModule } from 'vuex-module-decorators'
import DataSource from '@/store/datasource/datasource'
import store from '@/store'
const components = getModule(DataSource, store)
  @Component
export default class Draggable extends Vue {
    // props
    // data
    private dragArraySource: Array<object> = [];
    // methods
    public log (evt: any) {
      console.log('log')
      let realSort:Array<object> = this.computedMsg.map(function (e :any, index: number) {
        e.sort = index
        return e
      })
      // 完成后进行排序
      components.setComponentsSort(realSort)
    }
    public cloneDog (evt: any) {
      console.log('cloneDog')
      console.log(evt)
      // 深克隆
      let clone = {
        ...evt,
        id: UUID.getUUID()
      }
      return clone
    }
    public checkAdd ({ element }: any) {
      console.log('checkAdd')
      console.log(element)
    }

    public checkRemove (evt: any) {
      console.log('checkRemove')
      console.log(evt)
    }

    public checkMove ({ element }: any) {
      console.log('checkMove')
      console.log(element)
    }

    public pullF (value: any) {
      console.log('pullFe')
      console.log(value)
      console.log('pullFd')
      return 'clone'
    }
    public checkPut (to: any, from: any) {
      console.log('checkPut')
      return to.el.children.length < 4
    }
    public cho (evt: any) {
      console.log('cho')
      console.log(evt)
    }
    // computed
    set computedMsg (component : Array<object>) {
      console.log('computed-set')
      console.log(component)
      components.setComponents(component)
    }
    get computedMsg () : Array<object> {
      console.log('computed-get')
      console.log(components.getComponents)
      return components.getComponents
    }
    // created    console.log(element
    public created () {
      this.dragArraySource = [
        { id: 1, value: 'a', sort: 1 },
        { id: 2, value: 'b', sort: 2 },
        { id: 3, value: 'c', sort: 3 }
      ]
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @base: {
    float: left;
    width: 50%;
    height: 200px;
    border: 1px silver solid;
  }

  .dragArea1 {
    float: left;
    width: 50%;
    height: 200px;
    border: 1px silver solid;
  }

  .dragArea2 {
    float: left;
    width: 50%;
    height: 200px;
    border: 1px silver solid;
  }

  .dragElement {
    border: 1px silver solid;
  }

  .drag {
    border: 1px red solid;
    height: 100%;
  }

  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }

</style>
