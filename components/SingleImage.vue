<template>
  <UCard>
    <div class="single-image-container">
      <div class="image-wrapper">
        <img :src="image.url" :alt="image.alt" class="image"/>
      </div>
      <div class="description-wrapper">
        <a :download="image.alt" :href="image.download" :title="image.alt">
          <UIcon name="i-heroicons-folder-arrow-down" class="download-icon"/>
        </a>
        <h1><strong>{{ image.alt || 'No Description Available' }}</strong></h1>
        <p>❤️ {{ image.likes }}</p>
        <p><strong>Created At:</strong> {{ formattedDate }}</p>
        <p><strong>Username:</strong> {{ image.user.username }}</p>
        <p><strong>Color:</strong> <span class="color-indicator" :style="{backgroundColor: image.color}"></span> {{ image.color }}</p>
        <div>
          <p><strong>Tags:</strong> {{ formattedTags }}</p>
        </div>
      </div>
    </div>
  </UCard>
</template>



<script>
import { ref } from 'vue';

export default {
  props: {
    image: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const isOpen = ref(false);

    const formattedDate = computed(() => {
      if (props.image.createdAt) {
        const date = new Date(props.image.createdAt);
        return date.toLocaleDateString('it-IT');
      }
      return '';
    });

    const formattedTags = computed(() => {
      return props.image.tags?.map(tag => tag.title).join(', ') || 'No Tags';
    });

    return { isOpen, formattedDate, formattedTags };
  },
};
</script>

<style scoped>
.single-image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  align-item: center;
}

.image-wrapper {
  max-width: 100%;
  align-item: center;
}

.image {
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.description-wrapper {
  max-width: 80%;
  text-align: left;
}

.description-wrapper h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.description-wrapper p {
  font-size: 16px;
  margin-bottom: 5px;
}

.color-indicator {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 5px;
  vertical-align: middle;
}

@media (min-width: 768px) {
  .single-image-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .description-wrapper {
    max-width: 40%;
  }
}

.download-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  cursor: pointer;
}
</style>

