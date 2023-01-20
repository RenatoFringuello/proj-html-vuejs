<script>
    export default {
        name:'AppHeader'
    }
</script>

<template>
    <header>
        <div class="container">
            <a href="#" class="logo">Logo</a>
            <nav>
                <ul>
                    <li><a href="#">link</a></li>
                    <li><a href="#">link</a></li>
                    <li><a href="#">link</a></li>
                    <li><a href="#">link</a></li>
                    <li><a href="#">link</a></li>
                    <li><a href="#">link</a></li>
                </ul>
            </nav>
            <nav>
                <ul class="social-container">
                    <li><a href="#">s</a></li>
                    <li><a href="#">s</a></li>
                    <li><a href="#">s</a></li>
                    <li><a href="#">s</a></li>
                </ul>
            </nav>

        </div>
    </header>
</template>

<style lang="scss" scoped>
    @use '../style/general.scss' as *;
    @use '../style/partials/variables' as *;
    header{
        background-color: red;
        padding: 1.1rem 0;
        .container{
            @include container($header-max-w, auto);
            @include flex(center, space-between);
            
            ul{
                @include flex(center, space-between);
                li{
                    margin:0 1rem;
                }
                &.social-container li{
                    margin:0 .5rem;
                }
            }
        }
    }
</style>