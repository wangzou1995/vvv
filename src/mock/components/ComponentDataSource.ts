/**
 * 组件数据源测试
 */
export default class ComponentDataSource {
  private static Mock = require('mockjs')
  private static component: object = {}
  // 获取组件信息
  public static getComponents () {
    let data = this.Mock.mock({
      'list|7': [{
        'id|+1': 1,
        name: 'FORM表单',
        type: 'form',
        icon: 'iconfont iconbiaodan',
        containername: null,
        tb_window_element: [],
        parentid: -1,
        windowid: null,
        readonly: false,
        containerdesc: null,
        showpage: false,
        loaddata: false,
        checkbox: false,
        pagesize: null,
        datasubmitrange: null,
        createtime: null,
        autosave: false,
        orderid: null,
        gridfilter: false,
        leaf: null,
        containertype: 'form',
        forcefit: false,
        levelid: null,
        layoutalign: null,
        iconcls: null,
        subobjid: null,
        scrollevent: null,
        filtersql: null,
        filter: [],
        layouttype: 'hbox',
        tb_window_layout_field_group: [],
        flex: null,
        renderevent: null,
        'elementNode|+1': ['a-input', 'a-layout', 'a-button', 'a-table', 'ext-form', 'ext-row', 'ext-col']
      }]
    })
    return data
  }
}
