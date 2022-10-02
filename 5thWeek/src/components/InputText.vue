<script setup>
import {computed} from "vue"
const props = defineProps(['name','label'])
const emit = defineEmits(['update:name'])

const isValid = computed(() => {
    return props.name.length > 1
})



const nameHandler = event => { 
  
  console.log("event.target.value");
  emit('update:name', event.target.value)

}
</script>

<template>
    <div>
        <label class="form__label" for="name">{{label}}</label>
        <input class = "form__input" type="text" name="name" id="name"  :value="name" @input="nameHandler">
        <p v-if="!isValid">bos gecilemez</p>
        </div>
</template>