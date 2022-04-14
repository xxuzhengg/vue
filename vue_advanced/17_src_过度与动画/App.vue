<template>
  <div>
    <AppTest/>
    <AppTest2/>
    <AppTest3/>
  </div>
</template>

<script>
import AppTest from './components/AppTest'
import AppTest2 from './components/AppTest2'
import AppTest3 from './components/AppTest3'

export default {
  name: 'App',
  components: {AppTest, AppTest2, AppTest3},
}
</script>
