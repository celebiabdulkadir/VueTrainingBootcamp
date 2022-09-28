<script setup>
import { onMounted, ref } from 'vue';
import data from "./assets/scripts/fetchData"
import Button from './components/buttons/Button.vue';
import Card from './components/Card/Card.vue'

const groupNames = ref([]);

const students = ref([]);

const selectedGroupName = ('');



function getGroupNames () {
	const groups = data.map(element  => element.group);
	let unique = [...new Set(groups)];
	console.log(unique);
	return unique
}

function getStudentByGroupName (name) {
  const result = data.filter(student => student.group == name)

  console.log(result);

  students.value = result;

  return result;
}

const filterByNameHandler = (name) => {
  const result = getStudentByGroupName(name);
  selectedGroupName.value = name;
  students.value = result;
}



onMounted(async() => {

	groupNames.value = getGroupNames();
})


</script>

<template>
  <main class="main">
    <header class="header">
      <Button v-for="name in groupNames" :key="name" :name="name" @setName="filterByNameHandler"></Button>
    </header>
    <div class="wrapper" :class="selectedGroupName.toLowerCase()">
      <Card v-if="students.length > 0" :data="students"></Card>
    </div>
  </main>
</template>

<style scoped>
.main {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
}
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 80px;
  /* background-color: pink; */
}
.wrapper {
  margin: 40px;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.orchid {
  background-color: orchid;
}
.steelblue {
  background-color: steelblue;
}
.indianred {
  background-color: indianred;
}
.yellowgreen {
  background-color: yellowgreen;
}
.lightseagreen {
  background-color: lightseagreen;
}
</style>
