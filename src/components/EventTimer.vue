<script>
    export default {
        name:'EventTimer',
    }
</script>

<template>
    <section>
        <span class="text">Starts TOMORROW! Our biggest event of the year...</span>
        <span class="timer"><i class="fa-regular fa-clock"></i>00 : 00 : 00 : 00</span>
        <button class="btn">Get ticket</button>
    </section>
</template>

<style lang="scss" scoped>
    @use '../style/general.scss' as *;
    @use '../style/partials/variables' as *;

    section{
        @include flex(center, center);
        color: $cube-boulder;
        background-color: $timer-bg;
        font-size: .7rem;
        padding: .35rem 0;
        *{
            margin: 0 1rem;
            &.timer{
                font-size: .85rem;
                font-weight: 600;
                color:$cube-bay-many;

                i{
                    margin:0 .4rem;
                }
            }
        }
    }
</style>