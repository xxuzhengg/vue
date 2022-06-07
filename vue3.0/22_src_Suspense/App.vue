<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspense>
      <template v-slot:default>
        <AppChild/>
      </template>
      <template v-slot:fallback>
        <h3>稍等，加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Child from './components/Child'//静态引入
import {defineAsyncComponent} from 'vue'

const AppChild = defineAsyncComponent(() => import('./components/AppChild')) //异步引入
export default {
  name: 'App',
  components: {AppChild},
}
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>