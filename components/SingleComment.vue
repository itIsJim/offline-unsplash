<template>

</template>

<script setup>

</script>

<script>

import {store} from "~/store/store.js";
export default {
  props: {
    image: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  computed: {
    store() {
      return store
    }
  },
  methods: {

  },
  setup(props) {
    return {  };
  },
};
</script>

<style scoped>

</style>

