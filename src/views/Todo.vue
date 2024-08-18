<template>
    <div>
        {{ todos }}
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const todos = ref([]);

todos.value = await fetch(`http://127.0.0.1:8003/news`)
    .then(res => res.json());

</script>

<style lang="scss" scoped></style>