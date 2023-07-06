<script setup>
const props = defineProps({
  numberOfPages: {
    type: Number,
    required: true,
    default: 1,
  },
});
</script>

<template>
  <ul>
    <li v-for="index in numberOfPages">
      <button>{{ index }}</button>
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin-top: 1rem;
  gap: 1rem;
}
button {
  height: 2rem;
  width: 2rem;
  border: none;
  border-radius: 50%;
  background-color: #fff;
}
button:hover {
  background-color: lightblue;
  cursor: pointer;
}
</style>
