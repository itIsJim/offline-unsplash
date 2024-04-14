import { reactive } from 'vue'
export const store = reactive({
    imgList: [],
    newImage: false,
    addImage( image) {
        this.imgList.push(image);
        this.newImage = true;
    },
    setNewImage(value) {
        this.newImage = value;
    }
})