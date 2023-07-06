<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  bg: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  size: {
    // 'small' or 'big'
    type: String,
    required: true,
  },
});
</script>

<template>
  <RouterLink :to="`${to}`" class="book-btn" :style="`background-color: ${bg}`">
    <slot></slot>
  </RouterLink>
</template>

<style scoped>
a {
  color: #fff !important;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  width: 100%;
}
</style>
