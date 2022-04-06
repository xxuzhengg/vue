<template>
  <div>
    <AppSchool/>
    <hr/>
    <AppStudent/>
  </div>
</template>

<script>
import AppSchool from "./components/AppSchool";
import AppStudent from "./components/AppStudent";

export default {
  name: "App",
  components: {AppSchool, AppStudent},
};
</script>
