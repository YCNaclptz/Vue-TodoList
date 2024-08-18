<template>
    <div>
        <item class="item" v-for="todo in todos" :key="todo.id" :todo="todo" @del="del"/>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Item from '../components/Item.vue';
import useRequest from '../composables/useRequest.js';

const request = useRequest();
const todos = ref([]);

todos.value = await request.get();
const del = async () => {
    todos.value = await request.get();
}
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