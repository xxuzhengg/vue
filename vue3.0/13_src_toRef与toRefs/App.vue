<template>
  <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
  <AppDemo v-if="isShowDemo"/>
</template>

<script>
import {ref} from 'vue'
import AppDemo from './components/AppDemo'

export default {
  name: 'App',
  components: {AppDemo},
  setup() {
    let isShowDemo = ref(true)
    return {isShowDemo}
  }
}
</script>

