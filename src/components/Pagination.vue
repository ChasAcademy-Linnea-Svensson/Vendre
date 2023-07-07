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
  setTimeout(() => {
    document.querySelectorAll('button').forEach((button, indx) => {
      button.addEventListener('click', () => {
        console.log(button);
        document.querySelectorAll('button').forEach((btn, i) => {
          if (i === indx) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        });
      });
    });
  }, 100);
});
</script>

<template>
  <ul>
    <li v-for="index in numberOfPages">
      <button :class="index === 1 && 'active'" @click="handlePageChange(index)">
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
