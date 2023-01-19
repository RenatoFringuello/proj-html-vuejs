<script>
    export default {
        
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
        *{
            margin:.5rem 1rem;
            &.timer{
                font-size: .9rem;
                font-weight: 600;
                color:$cube-bay-many;

                i{
                    margin:.4rem;
                }
            }
        }
    }
</style>