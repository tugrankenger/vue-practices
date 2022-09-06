<script setup>
  defineProps({
    label:{
      type: [String, Boolean],
      default: ""
    },
    modelValue:{
      type:String,
      default: ""
    }
  })
</script>

<template>
  <div class="input-wrapper">
    <label v-if="label"> {{label}} </label>
    <input type="text" :value="modelValue" @input="$emit('upload:modelValue',$event.target.value)" v-bind="$attrs">
    <!-- v-bind="$attrs" ile su anda yukaridaki input icerisinde henuz tanımlanmamis ama tanimlanacak olan tum ozel olaylari (:value, @input, placeholder gibi) tutuyoruz. -->
  </div>
</template>

<style lang="scss" scoped>
  .input-wrapper{
    display: flex;
    flex-direction: column;
    input{
      padding: 8px 12px;
      font-size: 16px;
      margin: 10px 0;
    }
  }
</style>