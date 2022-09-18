<script setup>
const props = defineProps(
  {
    title:{
      type: String,
      required: true
    }
  }
)
</script>

<template>
  <div>
    <!-- <slot></slot>
    <slot name="title"></slot>
    <h1>i am the form helper</h1>
    <slot name="text"></slot> -->
    <!-- <slot></slot> -->
    <!-- {{title}} -->
      <div class="title">
        <slot name="title"></slot>
      </div>
    <h1>Please fill out our form..</h1>
    <form>
      <div id="form-header">
        <slot name="form-header"></slot>
      </div>
      <div id="form-fields">
        <slot name="form-fields"></slot>
      </div>
      <div id="form-constrols">
        <slot name="form-controls"></slot>
      </div>
      <div id="useful-links">
        <ul>
          <li><a href="javascript:void(0)">Link 1</a></li>
          <li><a href="javascript:void(0)">Link 2</a></li>
          <li><a href="javascript:void(0)">Link 3</a></li>
          <li><a href="javascript:void(0)">Link 4</a></li>
        </ul>
      </div>
    </form>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}
#useful-links ul{
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>