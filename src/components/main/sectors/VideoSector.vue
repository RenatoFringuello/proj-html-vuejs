<script>
    import AppLoader from '../../prefabs/AppLoader.vue'

    export default {
        name:'VideoSector',
        components: {
            AppLoader,
        },
        props: {
            videoId:String
        },
        data() {
            return {
                videoW : 726,
                videoH : 426,
                isLoaded: false
            }
        },
        computed:{
            getSize(){
                return{
                    width : '100%',
                    height : `${this.videoH * 1.4}px`,
                }
            },
            getSrc(){
                return `https://www.youtube.com/embed/${this.videoId}`;
            }
        }
    }
</script>

<template>
    <div class="sector" id="video" :style="getSize">
        <!-- add shapes here -->
        <iframe v-show="isLoaded" @load="isLoaded = true" :width="videoW" :height="videoH" :src="getSrc" frameborder="0" allowfullscreen></iframe>
        <AppLoader v-show="!isLoaded" />
    </div>
</template>

<style lang="scss" scoped>
    @use '../../../style/general.scss' as *;
    @use '../../../style/partials/variables' as *;
    #video{
        background:#1e9195;
        @include flex(center, center);

        iframe{
            border-radius: $btn-border-radius;
        }
    }
</style>