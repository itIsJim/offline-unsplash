<template>
  <div id="app" class="body">
    <Header />
    <MyList />
  </div>
</template>

<style scoped>
body {
  justify-content: center;
  align-items: center;
}
</style>
<script setup lang="ts">
import MyList from "~/components/MyList.vue";
</script>