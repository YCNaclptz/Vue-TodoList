<template>
    <div class="sort">
        <button @click="sort">{{ orderBy == 'asc' ? '降序' : '升序'}}</button>
    </div>
</template>

<script setup>
import useTodo from '../composables/useTodo.js';
const { orderBy } = useTodo();
const sort = () => {
    orderBy.value = orderBy.value === 'asc' ? 'desc' : 'asc';
}
</script>

<style lang="scss" scoped>
.sort{
    display: flex;
    flex-direction: row;
    button{
        margin-left: 10px;
        background-color: #16a085;
        color: #fff;
        border: none;
        padding: 0 10px;
    }
}
</style>