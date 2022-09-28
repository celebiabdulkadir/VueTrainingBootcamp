<script setup> // setup: kodları kısaltıyor. Saf javaScript olarak yazabiliryoruz. Return'e gerek kalmadı.
  
import PageHeader from "./components/PageComp/PageHeader.vue"
import ButtonComp from './components/bottons/Button.vue'
import {ref} from 'vue'
const title = ref("Patika")
const persons = ref([
  {id:1, name: 'Abdulkadir', lastname:'Celebi'},
   {id:2, name: 'başka1', lastname: "başka2"}
])
const headerName = "Hayalindeki yazılım kariyerine ilk adımı at";
const subtitle = "Türkiye’yi teknolojide bir yetenek merkezi yapmak için gençlere ihtiyaçları olan eğitimi sağlıyoruz."
const actionHandler = (event) => console.log('elma', event);

const buttonText = "Kayıt Ol"
</script>
<template>
  <section>
    <h1>Bootcamp {{title}}</h1>
    
    <PageHeader :name="headerName" :subtitle="subtitle">

    </PageHeader>
    <h3>khgljhgvljhkmvjlhmvbjhmbkjhmbnjkhömb
    </h3>
    <ButtonComp @action="actionHandler" :text="buttonText" color="green"></ButtonComp>
     
  </section>
</template>

<style lang="scss" scoped>
  .body {
    background-color: purple;
  }
</style>
