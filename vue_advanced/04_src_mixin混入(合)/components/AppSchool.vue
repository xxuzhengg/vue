<template>
  <div>
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>

// import {hunhe,hunhe2} from '../mixin'

export default {
  name: "AppSchool",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
      x: 666,//如果混合也存在,则以这个为准
    };
  },
  // mixins:[hunhe,hunhe2],
};
</script>