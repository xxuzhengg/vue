<template>
  <div>
    <AppStudent name="李四" sex="女" :age="18"/>
  </div>
</template>

<script>
import AppStudent from "./components/AppStudent";

export default {
  name: "App",
  components: {AppStudent},
};
</script>
