<template>
  <div class="my-image-list">
    <h1>Favourite</h1>
    <div class="unsplash-image">
      <div class="images-container">
        <ImageDisplay :images="store.imgList" />
      </div>
    </div>
  </div>
</template>

<script>
import {store} from "~/store/store.js";
export default {
  computed: {
    store() {
      return store
    }
  },
  setup() {
    store.setNewImage(false);
  },
  components: {},
};
</script>

<style scoped>
.unsplash-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
}

.images-container {
  max-height: 80%;
  overflow-y: auto;
  width: 100%;
  margin: 20px 0;
}

.my-image-list{
  text-align: center;
}

.my-image-list h1{
  font-size: 2rem;
  margin-bottom: 20px;
  margin-top: 20px;
  color: #3eaf7c;
}
</style>
