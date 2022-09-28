<script setup>
import CardItem from './CardItem.vue';
const props = defineProps(['data'])
</script>

<template>
    <div class="card">
        <CardItem v-for="item in props.data" :key="item" :item="item"></CardItem>
    </div>
</template>

<style scoped>
.card {
  margin: 20px;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  background-color: aliceblue;
  color: rgb(37, 37, 37);
}
.card h2 {
  order: -2;
}

</style>