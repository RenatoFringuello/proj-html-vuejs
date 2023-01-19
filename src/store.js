import { reactive } from "vue"

export const store = reactive({
    getImgPath(imgPath){
        return new URL(`./assets/images/${imgPath}`, import.meta.url).href;
    },
});