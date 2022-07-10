<script setup>
import { ref, watch } from 'vue'

const value = ref(props.modelValue)

  const props = defineProps({
    modelValue: String,
    placeholder : String,
    type: String,
    name: String,
    value:String,
  })

  const emit = defineEmits(["update:modelValue"]) // parent tarafindan otomatik yakalanir

  watch(value, (newVal)=>{ //watch ile her degisimi parent component'e aktariyoruz.
    emit("update:modelValue",newVal)
  })
</script>

<template>
  <div>
    <input v-model="value" :placeholder="props.placeholder" :type="props.type" :name="props.name" />
    <span>this is child component(tinput.vue)</span>
  </div>
</template>