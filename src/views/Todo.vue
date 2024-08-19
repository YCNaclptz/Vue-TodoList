<template>
    <div class="form">
        <add class="add" />
        <sort />
    </div>
    <div>
        <item class="item" v-for="todo in todos" :key="todo.id" :todo="todo"/>
    </div>
    
</template>

<script setup>

import Item from '../components/Item.vue';
import useRequest from '../composables/useRequest.js';
import useTodo from '../composables/useTodo.js';
import Add from '../components/Add.vue';
import Sort from '../components/Sort.vue';
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
.form{
    display: flex;
    flex-direction: row;
    margin: 10px 0;
    .add{
        flex: 1;
    }
}
</style>