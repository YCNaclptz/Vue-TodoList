<template>
    <!-- 需要在最外層包覆一層元素用來繼承父元件的樣式，以免影響到子元件的樣式 -->
    <div>
        <div class="item">
            <input type="text" :value="todo.title">
            <button>刪除</button>
        </div>
    </div>
</template>

<script setup>

defineProps({
    todo: {
        type: Object,
        required: true
    }
})
</script>

<style lang="scss" scoped>

div.item {
    display: flex;
    input {
            padding: 10px;
        }
}

</style>