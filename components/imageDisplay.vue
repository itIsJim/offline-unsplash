<template>
  <div class="images-masonry">
    <div @click="openModal(image)" v-for="(image, index) in images" :key="index" class="image-display">
      <img :src="image.url" :alt="image.alt" class="displayed-image" />
    </div>
  </div>
  <UModal v-model="isOpen">
      <SingleImage :image="selectedImage"/>
  </UModal>
</template>


<script>
import { ref } from 'vue';

export default {
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const selectedImage = ref({});
    const isOpen = ref(false);
    const openModal = (image) => {
      console.log(image)
      selectedImage.value = image;
      isOpen.value = true;
    };
    return { isOpen, openModal, selectedImage };
  },
};
</script>

<style scoped>
.images-masonry {
  column-count: 2;
  column-gap: 1rem;
}

@media (min-width: 600px) {
  .images-masonry {
    column-count: 3;
  }
}

@media (min-width: 900px) {
  .images-masonry {
    column-count: 4;
  }
}

.image-display {
  border-radius: 8px;
  break-inside: avoid;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: transform 0.3s ease, z-index 0s;
}

.displayed-image {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: transform 0.3s ease;
  display: block;
  cursor: pointer;
}

.image-display:hover .displayed-image {
  border-radius: 8px;
  transform: scale(1.05);
  z-index: 10;
}

.image-display:hover {
  border-radius: 8px;
  position: relative;
  z-index: 10;
}

</style>


