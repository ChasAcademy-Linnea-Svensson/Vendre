<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
const route = useRoute();
const employee = ref({});

const getEmployee = () => {
  fetch(`https://reqres.in/api/users/${route.params.id}`)
    .then((response) => response.json())
    .then((data) => (employee.value = data.data));
};

onMounted(() => {
  getEmployee();
});
</script>

<template>
  <main>
    <div>
      <div class="image-container">
        <img :src="employee.avatar" alt="Employee profile picture" />
      </div>
      <h1>{{ employee.first_name + ' ' + employee.last_name }}</h1>
      <h2>{{ employee.email }}</h2>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px);
}
div {
  background-color: #fff;
  height: 70vh;
  width: 60vw;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
}
.image-container {
  border-radius: 50%;
  max-width: 10rem;
  max-height: 10rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  min-height: 10rem;
  width: auto;
}

@media screen and (max-width: 992px) {
  div {
    width: 95vw;
  }
}
</style>
