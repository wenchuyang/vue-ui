## 创建项目
1. 全局安装 create-vite-app`yarn global add create-vite-app@1.18.0`或者`npm i -g create-vite-app@1.18.0`
2. 创建项目目录`cva xxx`或者`create-vite-app xxx`
或者
`yarn create xxx`或者`npm init xxx`
## 文件用途
index.html 主页

<div id="app"></div>  //容器
<script type="module" src="/src/main.js"></script>  //type, src

main.js文件
createApp //创建App实例
App.vue是一个组件
createApp(App).mount('#app')  //创建APP实例并挂载到#app下

App.vue文件
HelloWorld是一个组件
export default {
  name: 'App',
  components: {
    HelloWorld: HelloWorld   //左边是标签名，写在template里边的。右边是引入的HelloWorld组件
  }
}

node_modules 依赖
public
src 开发代码目录
package.json 依赖关系map
## 运行项目
cd xxx
npm install 或者 yarn
npm run dev 或者 yarn dev


