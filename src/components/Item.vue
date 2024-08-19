<template>
    <!-- 需要在最外層包覆一層元素用來繼承父元件的樣式，以免影響到子元件的樣式 -->
    <div>
        <div class="item">
            <input type="text" :value="todo.title">
            <button @click="del(todo.id)">刪除</button>
        </div>
    </div>
</template>

<script setup>
import useRequest from '../composables/useRequest.js';
import useTodo from '../composables/useTodo.js';

const request = useRequest();
const {del} = useTodo();

const {todo} = defineProps({
    todo: {
        type: Object,
        required: true
    }
});


</script>

<style lang="scss" scoped>

div.item {
    display: flex;
    input {
            padding: 10px;
            flex: 1;
        }
}

</style>