<script setup>

import {ref} from "vue"


import { onMounted } from "vue";



let datas = ref([])
let pictures = ref([]);

console.log(pictures)

console.log(datas)

const randomNumber = (total) => Math.floor(Math.random() * total);

async function getAllBreeds() {
	const breeds = await fetch("https://dog.ceo/api/breeds/list/all")
		.then(data => data.json())
		.then(res => res);
	
	//console.log(breeds)

	let result = Object.keys(breeds.message);
	console.log(result)
	datas.value = result;
	return result;

	
}

async function getBreed(name) {

	let nameVeriable = name
	const breedImages = await fetch(`https://dog.ceo/api/breed/${nameVeriable}/images`)
		.then(data => data.json());

	//let randomImage = randomNumber(breedImages.message.length);
	console.log(breedImages.message);

	//let isClicked =

	pictures.value = breedImages.message
	return breedImages.message
}

function getPictures(param) {

	return pictures

}

onMounted(async (event) => {
	let allBreeds = await getAllBreeds();
	let randomIndex = randomNumber(allBreeds.length);
	let randomBreed = allBreeds[randomIndex];
	getBreed(randomBreed);
});




</script> 

<template>

	<ul><li v-for="data,index in datas" @click="getBreed(data)"> {{data}} <ul><li v-for="picture in pictures" v-if="data == randomBreed">{{picture}}</li></ul>
	 </li></ul>
	
 


</template>

<style scoped>
</style>
