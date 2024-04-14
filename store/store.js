import { createApp } from 'vue'
import MyList from "~/components/MyList.vue";
import { createStore } from 'vuex'

// Define your Vuex store
const store = createStore({
    state() {
        return {
            imgList: []
        }
    },
    mutations: {
        addImage(state, image) {
            state.imgList.push(image);
        }
    }
})

// Create a new Vue application and use the Vuex store
const app = createApp(MyList) // Pass the root component App here
app.use(store)
