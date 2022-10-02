<script setup>
import {computed} from "vue"
const props = defineProps(['email','label']);
const emit = defineEmits(['update:email'])


const emailHandler = event => {
  emit('update:email', event.target.value)

}

const isValid = computed(() => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(props.email)
})
</script>

<template>
      <div class = "form__wrapper">
        <label class="form__label" for="lastname">{{label}}</label>
        <input class = "form__input" type="text" name="email" id="email" v-model="email" @input="emailHandler">
        <p v-if="!isValid">bos gecilemez</p>
      </div>
</template>