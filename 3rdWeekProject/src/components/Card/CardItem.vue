<script setup>
const props = defineProps(['item'])

</script>


<template>
    <li class="card__item" :class="{'-assitant': props.item.type}">{{props.item.name}}</li>
</template>

<style scoped>
.card__item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 10px 0;
  padding: 4px 0 4px 20px;
  border-bottom: 6px solid rgb(37, 37, 37);
  border-left: 10px solid rgb(37, 37, 37);
  text-align: left;
  list-style: none;
}
.card__item.-assitant {
  order: -1;
  background: black;
  color: white;
}
.card__item.-assitant::before {
  content: '🦄';
  display: block;
  padding-right: 10px;
}
</style>