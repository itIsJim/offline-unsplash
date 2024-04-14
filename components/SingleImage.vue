<template>
  <UCard>
    <div class="single-image-container">
      <div class="image-wrapper">
        <img :src="image.url" :alt="image.alt" class="image"/>
      </div>
      <div class="description-wrapper">
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
    <div class="footer">
      <template v-if="routeIncludesList()">
        <UIcon name="i-heroicons-heart-solid" class="heart-icon"/>
      </template>
      <template v-else>
        <UIcon @click="addImageToStore" name="i-heroicons-heart" class="heart-icon"/>
      </template>
      <UIcon @click="toggleCommenting" name="i-heroicons-chat-bubble-left-right" class="chat-bubble-left-right-icon"/>
    </div>
  </UCard>
  <USlideover v-model="isCommenting">
    <Comments :comments="comments"/>
  </USlideover>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { store } from "~/store/store.js";
import Quote from 'inspirational-quotes';
import Comments from './Comments.vue';
const toast = useToast();

const route = useRoute();
const props = defineProps({
  image: {
    type: Object,
    required: true,
    default: () => ({})
  }
});

const isCommenting = ref(false);
const comments = ref([]);

function addImageToStore() {
  store.addImage(props.image);
  toast.add({title:'Image added to favorites successfully!'});
}

function toggleCommenting() {
  isCommenting.value = !isCommenting.value;
}

function routeIncludesList() {
  return route.path.includes('list');
}

const formattedDate = computed(() => {
  return props.image.createdAt ? new Date(props.image.createdAt).toLocaleDateString('it-IT') : '';
});

const formattedTags = computed(() => {
  return props.image.tags ? props.image.tags.map(tag => tag.title).join(', ') : 'No Tags';
});

watchEffect(() => {
  if (isCommenting.value) {
    comments.value = generateRandomComments();
  }
});

function generateRandomComments() {
  return Array.from({ length: 20 }, (_, i) => {
    const quote = Quote.getQuote();
    return {
      id: i,
      comment: quote.text,
      username: quote.author
    };
  });
}
</script>

<style scoped>
.single-image-container {
  display: flex;
  flex-direction: row;
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

.heart-icon, .chat-bubble-left-right-icon {
  cursor: pointer;
  font-size: 24px;
  margin-right: 20px;
}

.image-footer {
  display: flex;
  gap: 10px;
}

.footer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
}
</style>

