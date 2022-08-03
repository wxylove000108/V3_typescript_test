<template>
    <div class="headers fixed top-0 left-0 right-0 h-15 px-15 flex items-center justify-between">
      <slot></slot>
    </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'Headers',
  });
</script>

<style scoped>
.headers {
  backdrop-filter: saturate(180%) blur(20px);
  background-color: var(--color-navbar-bg);
}
</style>