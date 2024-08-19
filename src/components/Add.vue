<template>
    <div class="add">
        <input type="text" placeholder="按Enter提交任務" @keyup.enter="onSubmit" v-model="title">
    </div>
</template>

<script setup>
import { ref } from 'vue';
import useTodo from '../composables/useTodo.js';

const title = ref('');
const { add, todos } = useTodo();

const getMaxId = () => {
    if (todos.value.length === 0) return 0;
    return Math.max(...todos.value.map(todo => todo.id));
};

const onSubmit = () => {
    add({id: `${getMaxId() + 1}` ,title: title.value});
    title.value = '';
}
</script>

<style lang="scss" scoped>
.add{
    display: flex;
    input {
        border: solid 5px #16a085;
        padding: 10px;
        flex: 1
    }
}
</style>