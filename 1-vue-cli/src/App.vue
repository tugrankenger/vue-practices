<template>
    <div class="container">
        <app-header></app-header>
        <CounterItem></CounterItem>
        <DemoComponent></DemoComponent>
    </div>
</template>

<script>
  import CounterItem from "@/components/CounterItem";
  import DemoComponent from "@/components/DemoComponent";
  import AppHeader from "./components/AppHeader.vue";
  export default{
    components:{
    CounterItem,
    DemoComponent,
    AppHeader
}
  }
</script>