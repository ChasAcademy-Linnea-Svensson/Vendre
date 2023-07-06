<script setup>
import { RouterView } from 'vue-router';
import VendreHeader from './components/VendreHeader.vue';
</script>

<template>
  <VendreHeader />
  <RouterView />
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}
body {
  background-color: #f1effd;
}
a {
  text-decoration: none;
}
a:active {
  color: blue;
}
</style>
