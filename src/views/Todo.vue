<template>
    <div>
        <item class="item" v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Item from '../components/Item.vue';
const todos = ref([]);

todos.value = await fetch(`http://127.0.0.1:8003/news`)
    .then(res => res.json());

</script>

<style lang="scss" scoped>

div {
    display: flex;
    flex-direction: column;
    .item {
        margin-bottom: 10px;
    }
}
</style>