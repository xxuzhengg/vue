<template>
  <div>
    <img src="./assets/logo.png" alt="logo"/>
    <AppSchool></AppSchool>
    <AppStudent></AppStudent>
  </div>
</template>

<script>
//引入组件
import AppSchool from "./components/AppSchool";
import AppStudent from "./components/AppStudent";

export default {
  name: "App",
  components: {
    AppSchool,
    AppStudent,
  },
};
</script>
