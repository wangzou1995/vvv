import { MutationTypes } from './mutation-types'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
@Module({ name: 'Test', namespaced: true, stateFactory: true })
export default class Test extends VuexModule {
  foo = 12;
  get getFoo () {
    return this.foo
  }
  @Action({ commit: MutationTypes.TEST_GETTER })
  public set (foo: number) {
    return foo
  }
  @Mutation
  private [MutationTypes.TEST_GETTER] (foo: number) {
    this.foo = foo
  }
}
