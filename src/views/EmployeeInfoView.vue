<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
const route = useRoute();
const employees = ref([]);

const getEmployees = async () => {
  return fetch(`https://reqres.in/api/users/${route.params.id}`).then(
    (response) => response.json().then((data) => (employees.value = data.data))
  );
};
onMounted(() => {
  getEmployees();
});
</script>

<template>
  <h1>{{ route.params.id }}</h1>
  <div v-for="emp in employees">hej</div>
</template>

<style scoped></style>
