<script setup>
import DATA from "./assets/scripts/fetch";
import ButtonComp from "./components/Button/ButtonComp.vue";
import ContentComp from "./components/Content/ContentComp.vue";
import {ref} from "vue";

const titleValues = ref([]);
const content = ref([]);
const open = ref(false) 
const allData = DATA.results; 

// This function gets all titles
function getTitles() {
  const titles = allData.map(title => title.title );
  titleValues.value = titles
  console.log(titles);
  return titles
}

// This function gets datas of title
function getContents(title) {
  const result = allData.filter(content => content.title === title );
  return result
}
getContents()
getTitles()

// Function that sends related data to ContentComp component
function getContent(title) {
  const contentOutput = getContents(title)
  content.value = contentOutput
  return contentOutput  
}
</script>

<template>

    <header>
      <nav class="headlines">
        <div >
        <span>HEADLINES</span>
        </div>
      </nav>
    </header>

    <ButtonComp v-for="title in titleValues" class = "-header" @setTitle ="getContent" @click="open = true " :title = "title" :key="title" >
    </ButtonComp>
    <Teleport to="body">  <!-- I use teleport in order to show news details. -->
      <div v-if="open" class="modal">
      <ContentComp v-if="content.length > 0" :content="content" :titleValues="titleValues" ></ContentComp>
      <button @click="open = false">Close</button> <span></span>
      </div>
    </Teleport>
</template>

<style scoped>

  .headlines{
    font-size: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    
    padding-top: 7px;
    padding-bottom: 7px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: left;
    border-radius: 15px ;

  }

.-header {

  
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:left;
    min-height: 60px;
    
    padding-top: 7px;
    padding-bottom: 7px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: left;
    border-radius: 15px ;
}
.-header:hover {
    background-color: rgb(102, 97, 107);
    cursor:pointer;
}
.modal {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: white;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
    color: black;
    padding-left: 15px ;
    padding-right: 15px ;
    padding-bottom: 15px ;
    padding-top: 15px ;
}
</style>
