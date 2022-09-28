<script setup>
    import {ref} from "vue"
const props = defineProps(['text','color']);
const emits = defineEmits(["action"]);
let isClicked = ref(true)
const clickHandler = (event) => {
emits('action', event);
isClicked.value = !isClicked.value;
console.log('isClicked', event);
}



</script>

<template>
    <button class="fancy-button" @click="clickHandler"
     :class="[props.color == 'green' ? '-green' : '']"
     v-if="isClicked" >{{props.text}} - {{isClicked}}</button> 
     <h1 v-else>ELSE</h1>
    <!-- <button class="fancy-button" :class = "{
        '-green' : props.color == 'green' , 
        '-coral : props.color == 'coral
        }">{{props.text}}</button>  // first option -->

</template>

<style lang="scss" scoped>
    .fancy-button {
        margin: 10px;
        padding: 0 20px 0;
        border: 2px solid indianred;
        background-color: rgba(252,130,15,0.95)


    }
    .-green {

background-color: green;
}
</style>