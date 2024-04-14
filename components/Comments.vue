<template>
  <div class="comment-input">
    <UInput class="input-field" v-model="userInput" size="xl" variant="none" placeholder="Leave a comment..." />
    <UButton class="send-icon" @click="addComment" icon="i-heroicons-arrow-right-circle-16-solid" color="primary"/>
  </div>
  <div class="comment-section">
    <h2>Comments</h2>
    <div v-for="(comment, index) in comments" :key="index" class="comment-display">
      <UCard>
        <h5>{{ comment.comment }}</h5>
          <h6>
            <strong>{{ comment.username }}</strong>
          </h6>
      </UCard>
    </div>
    <UDivider/>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    comments: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const userInput = ref('');

    const addComment = () => {
      if (userInput.value) {
        props.comments.unshift({
          comment: userInput.value,
          username: 'You'
        });
        userInput.value = '';
      }
    };

    return { userInput, addComment };
  },
};
</script>

<style scoped>
.comment-input {
  padding: 10px;
  display: flex;
  align-items: center;
}

.comment-section {
  font-family: 'Roboto', sans-serif;
  max-height: 80%;
  overflow-y: auto;
}

h2 {
  color: #00dc82;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  padding-bottom: 10px;
}

.comment-display {
  margin-bottom: 10px;
}

.send-icon {
  cursor: pointer;
  border: none;
  margin-left: 10px;
}

UCard {
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-radius: 8px;
}

.input-field {
  width: 100%;
}
</style>

