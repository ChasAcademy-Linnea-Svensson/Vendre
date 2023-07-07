<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  numberOfPages: {
    type: Number,
    required: true,
    default: 1,
  },
});

const emit = defineEmits(['current-page']);

const handlePageChange = (pageNr) => {
  emit('current-page', pageNr);
};

onMounted(() => {
  document.querySelectorAll('button').forEach((btn, indx) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('button').forEach((b, i) => {
        if (i === indx) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
    });
  });
});
</script>

<template>
  <ul>
    <li v-for="index in numberOfPages">
      <button @click="handlePageChange(index)" :class="index === 1 && 'active'">
        {{ index }}
      </button>
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
  margin-bottom: 2rem;
}
button {
  height: 2rem;
  width: 2rem;
  border: none;
  border-radius: 50%;
  background-color: #fff;
}
button.active {
  background-color: lightblue;
}
button:hover {
  background-color: lightblue;
  cursor: pointer;
}
</style>
