<template>
  <div class="unsplash-image">
    <div class="search-bar">
      <input v-model="keyword" @keyup.enter="() => fetchImage(1)" placeholder="Enter keyword" class="search-input" />
      <button class="search-button" @click="() => fetchImage(1)">Search</button>
    </div>
    <div class="images-container">
      <ImageDisplay :images="images" />
    </div>
    <div class="pagination-controls">
      <button class="prev-btn" @click="fetchPreviousPage" :disabled="currentPage <= 1"> < </button>
      <span style="color: #3eaf7c">PAGE {{ currentPage }}</span>
      <button class="next-btn" @click="fetchNextPage"> > </button>
    </div>
  </div>
</template>


<script>

import { fetchImages } from "@/services/unsplashService.js";
import { generate } from "random-words";
export default {
  data() {
    return {
      keyword: '',
      images:[],
      currentPage: 1,
    };
  },
  methods: {
    async fetchImage(page = 1) {
      if (!this.keyword) {
        this.keyword = generate();
      }
      this.currentPage = page;
      console.log(process.env.VUE_APP_UNSPLASH_ACCESS_KEY);
      const images = await fetchImages(this.keyword, page);
      this.images = images.length > 0 ? images : [];
    },
    async fetchNextPage() {
      this.fetchImage(this.currentPage + 1);
    },
    async fetchPreviousPage() {
      if (this.currentPage > 1) {
        this.fetchImage(this.currentPage - 1);
      }
    },

  },
};
</script>

<style scoped>

.search-bar {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  width: 100%;
  max-width: 600px;
  height: 60px;
  border-right: none;
}

.search-input {
  padding: 10px 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 22px ;
  width: 100%;
  box-shadow: 0 4px 6px rgba(32,33,36,0.28);
  outline: none;
}

.search-input:focus {
  border-color: #aaa;
}

.search-button {
  margin-left: 10px;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 22px;
  background-color: transparent;
  color: #aaa;
  outline: none;
  transition: all 0.3s;
}

.search-button:hover {
  font-size: 18px;
  color: #3eaf7c;
  border: 1.5px solid #3eaf7c;

}

.prev-btn, .next-btn {
  margin-left: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 22px;
  background-color: transparent;
  color: #aaa;
  outline: none;
  transition: all 0.3s;
}

.prev-btn:hover, .next-btn:hover {
  color: #3eaf7c;
}

.pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination-controls button {
  padding: 10px 20px;
  margin: 0 5px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.pagination-controls button:disabled {
  color: #ccc;
  cursor: not-allowed;
}

.pagination-controls span {
  margin: 0 10px;
}

.unsplash-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
}

.images-container {
  max-height: 75vh;
  overflow-y: auto;
  width: 100%;
  margin: 20px 0;
}

.pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.search-bar {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
</style>
