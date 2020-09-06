import Vue from 'vue'
import { Button } from 'element-ui'
import { Form,FormItem } from 'element-ui'
import { Input } from 'element-ui'
//导入弹框提示组件
import { Message,Container,Header,Aside,Main,Menu,Submenu,MenuItem,Breadcrumb,BreadcrumbItem,
Card,Row,Col,Table,TableColumn,Switch,Tooltip,Pagination,Dialog,MessageBox,Tag,Tree,Select,Option } from 'element-ui'
//按需导入，并注册



Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
//侧边栏
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(Tooltip)
Vue.use(MenuItem)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Option)
Vue.use(Select)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm