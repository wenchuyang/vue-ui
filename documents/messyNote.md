src/main.js
createApp(App).mount('#app')  //将App组件挂载到#app上

App.vue
<template>
    下边可加入两个根节点
    <img>
    <HelloWorld> //组件

<script>
    在这里引入helloworld组件
    import HelloWorldxxx

    export default {
        name: 'App',
        components: {
            HelloWorld: HelloWorldxxx  //左边是标签名右边是组件
        }
    }

<style>

component 新建
模板提示插件： vue 3 snippets
插件名/标签大小写最好一致，但是不一致也没有问题



引入Vue Router 4  路由器 用于页面切换
`npm info vue-router versions` 查看vue-router所有版本号
yarn add vue-router@4.0.0-beta.3


- 初始化vue-router对象
在main.js中import history对象 form 'vue-router'
内存型路由，hash型路由，history型路由
import {createWebHashHistory, createRouter} from 'vue-router'
const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {
            path: "/", 
            component: App  // 需要引入App组件
        }
    ]
})
*main.js-->main.ts 会打开类型检查

找不到模块xxx
typescript只能理解.ts文件，不能理解.vue文件
创建xxx.d.ts，告诉ts如何理解.vue文件。文件最好放到src下。shims-vue.d.ts, 文件名无所谓，后缀要正确*

- 初始化vue-router
-  新建history对象
-  新建router对象
-  app.use(router) // const app = createApp(App) app.use(router) app.mount('#app')
-  添加<router-view> // App.vue里边不用直接引用<HelloWorld>,也不用引用，使用<router-view />进行路由的转换
添加组件  添加路由，path和component
-  添加<router-link>
<router-link to="/">根目录</router-link>  类似于a标签，来做导航




创建页面，路由改好
views文件夹  抄官网
- Home.vue
  Topnav: 左边logo，右边menu
  Banner：文字介绍+开始按钮
- Doc.vue
  Topnav：同上
  Content：左边aside，右边main

<style lang="scss" scoped>  如果控制台报错找不到sass模块，运行yarn add -D sass  //安装到devDependences里边  1.26.10

index.css-->index.scss
topnav样式更新的提交，复制下来

Topnav插件的封装，放到components下边
<script lang="ts">
引入有报错的话，打开一下shims-vue.d.ts文件再回来，还没好的话在Topnav里边再加一个空的script标签，删掉引入的那段话再粘贴回来试试

aside里边添加router-link导航（初始化aside的html）
aside css1

点击切换aside，点一次显示，再点一次隐藏
asideVisible===true  显示aside
asideVisible放在app里边，然后Topnav和aside去访问这个变量。app使用provide标记这个变量可以被子组件访问。Topnav和aside使用inject()访问这个变量
// Auto Import自动引入的插件（按tab自动引入）

name: 'App',
setup() {
    const asideVisible = ref(false)
    provide('xxx', asideVisible)  // 提供xxx这个名字，使用asideVisible变量  set
}

setup() {
    const asideVisible = inject<Ref<boolean>>('xxx')  // 相当于get方法 asideVisible.value
}

<div @click="toggleAside">LOGO</div>
setup() {
    const toggleAside = ()=>{
        menuVisible.value = !menuVisible.value
    }
    return {toggleAside}
}

v-if='asideVisible'

// App里边放了一个menuVisible变量，并使用provide声明可以被所有子组件获取。然后在Topnav里边使用inject获取并使用@click修改这个变量的值，在aside里边使用v-if进行判断是否要显示


做一个页面宽度低于500px的时候显示的切换按钮
页面低于500px显示LOGO在中间，菜单隐藏，右边为menu切换按钮
大于500px时logo在左边，菜单显示
添加toggleAside commit

ts里判断屏幕宽度设置asideVisible的初始值
const width = document.documentElement.clientWidth;
const asideVisible = ref(width <= 500 ? false : ture)


点击组件，显示相应的文档（嵌套路由）
routes: [
        {
            path: "/doc", 
            component: Doc,
            children: [
                {path: "switch", component: SwitchDemo}
            ]
        }
    ]
1. 加路由
2. 设置显示区域
   <router-view />

切换路由的时候把aside显示列表关上
router.afterEach(()=>{
    // 这里可以知道路由切换了，但是aside获取不到router。将router相关的东西封装到router.ts文件中
})
export const router = createRouter()

如果是pc端的话，不做aside的隐藏操作

路由切换之后关闭aside。

整体布局css