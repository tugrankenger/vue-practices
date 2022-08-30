<script setup>

const props = defineProps({
  todoListProps: Array
})

const completedFilter = () =>{
  console.log(props?.todoListProps || "nothing...")
  return props?.todoListProps?.filter((item)=> item.completed) || []
}

</script>

<template>
  <div>
    <h3>completed</h3>
   <ul>
    <li v-for="todoItemProps in completedFilter()" :key="todoItemProps.id">
      <span>{{todoItemProps.name}}</span>
    </li>
   </ul>
  </div>
</template>