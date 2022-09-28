<script setup>
import ButtonComp from "../bottons/Button.vue"   

const props = defineProps(["name","subtitle"])// defineProps array alır . Dışarıdan name değişkeni geliyor

const actionHandler = (event) => console.log("tilki", event);

</script>

<template>
    <header>
        

        <h1>HEADER COMPONENT {{props.name}}</h1>
        <h2>{{props.subtitle}}</h2> 
       

    <div class="headline">
        <h2 class="headline__title">Alt Baslik</h2>
        <p class="headline__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Quas ipsam, corporis nemo, id optio amet delectus eius deleniti ut in molestiae consectetur 
         exercitationem? Maiores architecto quam mollitia odit voluptatum numquam! <ButtonComp @action="actionHandler" text = "Başvur"></ButtonComp>
        </p>
        
        <div class="calender">
            <span class="calender__date">23.09.2022</span>
            <time class="calender__time">15.33</time>
        </div>
    </div>
    </header>
    

</template>

<style lang="scss" scoped>

h1 {
    background-color: aqua;
}

.headline {
    background-color: gray;

    &__title {
    background-color: blue;
    }
    &__description {
    background-color: gray;
    }
}

</style>