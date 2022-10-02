<script setup>
import {ref, computed} from "vue"
import InputText from "./components/InputText.vue";
import InputEmail from "./components/InputEmail.vue";
// const name = ref("");
// const lastname = ref("");
// const email = ref("");
// const reemail = ref("");

const formInputs = ref({
  name: "",
  lastname: "",
  email: "",
  reemail: ""
})

const isFormValid = computed(() => {
  const isValid = Object.values(formInputs.value).every(input => input != '')
  return isValid

  })

const submitHandler = async event => {
  console.log("merjaba");
  event.preventDefault();
  const result = await fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: JSON.stringify({
      name: formInputs.value.name,
      lastname: formInputs.value.lastname,
      email: formInputs.value.email,
      reemail: formInputs.value.reemail
    })
  }).then()
}



</script>

<template>
  <form class = "form" @submit="submitHandler" >
    Fullname : {{formInputs.name}} {{formInputs.lastname}}
    <InputText v-model:name="formInputs.name" label = "isim"></InputText>
    <InputText v-model:name="formInputs.lastname" label = "soyisim"></InputText>
    <InputEmail v-model:name="formInputs.email" label="email"></InputEmail>
    <InputEmail v-model:name="formInputs.reemail" label="reemail"></InputEmail>

      <button type="" class = "form__button">SEND</button>
      <p v-if="isFormValid">merhaba</p>
     
      <button type="" class = "form__button">DETAYLAR</button>
      

    </form>


</template>

<style lang="scss" scoped>

</style>
