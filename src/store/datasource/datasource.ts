import { DataSourceMutationTypes } from './datasource-mutation-types'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
@Module({ name: 'DataSource', namespaced: true, stateFactory: true })
export default class DataSource extends VuexModule {
  // state
  components: Array<object> = [{ id: 11, value: 'a', sort: 1 }]

  // getter
  get getComponents () {
    return this.components
  }

  @Mutation
  private [DataSourceMutationTypes.SET_COMPONENTS] (component: object) {
    this.components.push(component)
  }
  @Mutation
  private [DataSourceMutationTypes.SET_COMPONENTS_SORT] (components : Array<object>) {
    this.components = [
      ...components
    ]
  }
  @Action({ commit: DataSourceMutationTypes.SET_COMPONENTS })
  public setComponents (component: object) {
    return component
  }
  @Action({ commit: DataSourceMutationTypes.SET_COMPONENTS_SORT })
  public setComponentsSort (components: Array<object>) {
    return components
  }
}
