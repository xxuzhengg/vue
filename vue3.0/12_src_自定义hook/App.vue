<template>
  <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
  <AppDemo v-if="isShowDemo"/>
  <hr>
  <AppTest/>
</template>

<script>
import {ref} from 'vue'
import AppDemo from './components/AppDemo'
import AppTest from './components/AppTest'

export default {
  name: 'App',
  components: {AppDemo, AppTest},
  setup() {
    let isShowDemo = ref(true)
    return {isShowDemo}
  }
}
</script>

