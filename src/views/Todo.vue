<template>
    <div>
        <item class="item" v-for="todo in todos" :key="todo.id" :todo="todo"/>
    </div>
    <add />
</template>

<script setup>

import Item from '../components/Item.vue';
import useRequest from '../composables/useRequest.js';
import useTodo from '../composables/useTodo.js';
import Add from '../components/Add.vue';
const request = useRequest();

const { todos, load } = useTodo();
load();
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