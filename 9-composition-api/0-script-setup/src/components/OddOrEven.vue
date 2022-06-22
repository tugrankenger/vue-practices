<script setup>
import {computed, watch} from 'vue'
    const props= defineProps({
        countInfo: Number
    })
    const emit = defineEmits(["odd-event"]);
    const result = computed(()=>{
        return props.countInfo % 2 == 0 ? 'Even' : 'Odd'
    })

    watch(result, (result) =>{
        if(result == 'Odd') emit("odd-event", true)
    })
</script>

<template>
    <h1>{{result}}</h1>
</template>