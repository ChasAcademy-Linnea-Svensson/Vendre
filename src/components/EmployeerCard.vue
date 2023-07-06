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
    <div class="image-container">
      <img :src="employeer.avatar" alt="" />
    </div>
    <h3>{{ employeer.first_name + ' ' + employeer.last_name }}</h3>
    <RouterLink :to="`/employees/${employeer.id}`">Contact</RouterLink>
  </div>
</template>

<style scoped>
.card {
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
  padding: 1rem;
  width: 14rem;
}
.image-container {
  border-radius: 50%;
  height: 8rem;
  width: 8rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  height: 8rem;
  width: auto;
}
</style>
