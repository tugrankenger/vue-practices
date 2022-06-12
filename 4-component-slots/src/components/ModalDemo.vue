<template>
    <div class="container">
        <div class="header">
            <slot name="title"/>
        </div>
        <div class="content">
            <slot name="content" />
        </div>
        <hr>
        <slot />
        <hr>
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