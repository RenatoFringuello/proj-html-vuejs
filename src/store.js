import { reactive } from "vue"
import { DateTime } from "luxon"

export const store = reactive({
    getImgPath(imgPath){
        return new URL(`./assets/images/${imgPath}`, import.meta.url).href;
    },
    getLuxonDateTime(){
        return DateTime;
    }
});