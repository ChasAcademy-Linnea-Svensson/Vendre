<script setup>
import { onMounted, ref } from 'vue';
import EmployeerCard from './EmployeerCard.vue';
import Pagination from './Pagination.vue';
const employees = ref([]);
const paginationPages = ref();
const currentPage = ref(1);

const getEmployees = async () => {
  return fetch(`https://reqres.in/api/users?page=${currentPage.value}`).then(
    (response) =>
      response
        .json()
        .then(
          (data) => (
            (employees.value = data.data),
            (paginationPages.value = data.total_pages)
          )
        )
  );
};
onMounted(() => {
  getEmployees();
});

const changePage = (pageNr) => {
  currentPage.value = pageNr;
  getEmployees();
};
</script>

<template>
  <div class="employeer-container">
    <EmployeerCard
      v-for="employeer in employees"
      :employeer="employeer"
      :key="employeer.id"
    />
  </div>
  <div>
    <Pagination :number-of-pages="paginationPages" @current-page="changePage" />
  </div>
</template>

<style scoped>
.employeer-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 1rem;
}
</style>
