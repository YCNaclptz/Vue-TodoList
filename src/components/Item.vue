<template>
    <!-- 需要在最外層包覆一層元素用來繼承父元件的樣式，以免影響到子元件的樣式 -->
    <div>
        <div class="item">
            <input type="text" :value="todo.title">
            <button @click="del">刪除</button>
        </div>
    </div>
</template>

<script setup>

const {todo} = defineProps({
    todo: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['del']);
const del = async () => {
    await fetch(`http://127.0.0.1:8003/news/${todo.id}`, {
        method: 'delete'
    });
    emit('del');
}
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