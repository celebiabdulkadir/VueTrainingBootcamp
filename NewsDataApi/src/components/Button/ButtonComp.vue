<script setup>
const props = defineProps(['title'])
const emit = defineEmits(['setTitle'])

const titleHandler = (title) => {
    emit('setTitle', title)

}  
</script>

<template>
    <ul><li @click="titleHandler(title)" > {{props.title}}</li> </ul>
    
</template>

