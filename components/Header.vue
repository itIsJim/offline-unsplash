
<template>
  <header class="header">
    <nav class="navigation">
      <NuxtLink to="/" class="nav-link">
        <UButton class="nav-icon" icon="i-heroicons-home" color="gray" />
      </NuxtLink>
      <NuxtLink to="/list" class="nav-link">
       <UChip size="2xl" :show="store.newImage">
        <UButton class="nav-icon" icon="i-heroicons-heart" color="gray" />
      </UChip>
      </NuxtLink>
    </nav>
  </header>
</template>

<script>
import {store} from "~/store/store.js";
export default {
  name: 'Header',
  computed: {
    store() {
      return store
    }
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-end;
  padding: 10px 30px 10px 10px ;
  background-color: transparent;
  border-bottom: 1px solid #ddd;
}

.navigation {
  display: flex;
  gap: 20px;
}

.nav-icon {
  text-decoration: none;
  font-size: 28px;
  color: #3eaf7c;
  border: none;
}
.nav-icon:hover {
  text-decoration: underline;
}
</style>
