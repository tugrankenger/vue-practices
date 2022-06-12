<template>
    <div class="container">
        <div class="header">
            <h1 class="text-center">{{title}}</h1>
        </div>
        <div class="content" v-html="content">

        </div>
        <div class="footer">
            <button @click="onSave" class="btn btn-primary btn-sm me-2">Contact</button>
            <button class="btn btn-primary btn-sm me-2">About Us</button>
            <button class="btn btn-primary btn-sm">References</button>
        </div>
    </div>
</template>

<script>
    export default{
        props: ["onSave","title","content"]
    }
</script>