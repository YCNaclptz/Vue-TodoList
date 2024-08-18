<template>
  <div>
     <!-- 當元件是aync時，用suspense包住，以達到層次化的非同步控制 -->
    <suspense>
      <template #default>
        <Todo />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </suspense>
  </div>
</template>

<script setup>
import Todo from './views/Todo.vue';

</script>

<style lang="scss" scoped>

</style>