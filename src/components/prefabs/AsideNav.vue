<script>
export default {
    
}
</script>

<template >
    <aside>
        <ul>
            <li><i class="fa-solid fa-book"></i></li>
            <li><i class="fa-solid fa-cart-shopping"></i></li>
            <li><i class="fa-solid fa-book"></i></li>
            <li><i class="fa-solid fa-cart-shopping"></i></li>
        </ul>
    </aside>
</template>

<style lang="scss" scoped>
 @use '../../style/general.scss' as *;
  @use '../../style/partials/variables' as *;

  aside{
    position: absolute;
    background-color:white;
    z-index: 3;
    right: 0;
    top:20%;
    border-radius: $btn-border-radius 0 0 $btn-border-radius;
    box-shadow: 0 0 10px 1px #0003;
    transition: .5s;
    ul li{
        font-size: .85rem;
        color: #000c;
        padding: 5px;
        cursor: pointer;
        &:hover{
            opacity: .7;
        }
    }
    
  }
    
</style>