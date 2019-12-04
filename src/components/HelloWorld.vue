<template>
  <div class="hello">
    <input v-model="foo"/>
    <input v-model="foo"/>
    <a-input size="large" v-model="fun" />
    <a-input size="large" v-model="secondFoo" />
    <a-button type="primary" @click="add">ssss</a-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import store from '@/store'
import { getModule } from 'vuex-module-decorators'
import TestVuex from '@/store/test/testVuex'

const module1 = getModule(TestVuex, store)
const module2 = getModule(TestVuex, store)
  @Component
export default class HelloWorld extends Vue {
    // props
    // data
    public foo: number = 0;
    public add () {
      module1.set(module1.foo + 1)
      console.log('===========')
    }

    // methods
    getFoo () {
      return this.foo
    }

    // computed
    get fun () {
      return module1.foo
    }
    set fun (val) {
      console.log(val)
      module1.set(val)
    }
    get secondFoo () {
      return module2.foo
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
