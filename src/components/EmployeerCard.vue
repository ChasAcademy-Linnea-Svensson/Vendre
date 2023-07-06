<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps({
  employeer: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="card">
    <img :src="employeer.avatar" alt="" />
    <h3>{{ employeer.first_name + ' ' + employeer.last_name }}</h3>
    <RouterLink :to="`/employees/${employeer.id}`">Contact</RouterLink>
  </div>
</template>

<style scoped>
.card {
  background-color: #cdcdcd;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
  padding: 1rem;
  width: 12rem;
}
img {
  border-radius: 50%;
}
</style>
