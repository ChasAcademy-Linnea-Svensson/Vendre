<script setup>
import { ref } from 'vue';
const showHamburgerMenu = ref(false);
const ham = document.getElementById('#menu');

const handleHamburgerMenu = () => {
  showHamburgerMenu.value = !showHamburgerMenu.value;
};
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/employees">
        <img src="../assets/logo.webp" alt="Vendre logo" />
      </RouterLink>
      <ul v-if="showHamburgerMenu === true" id="menu" class="hamburger-ul">
        <li>PRODUKT</li>
        <li>PARTNERS</li>
        <li>PRISER</li>
        <li>KUNDCASE</li>
        <li>KUNSKAP</li>
        <li>MEDARBETARE</li>
      </ul>
      <ul class="normal-ul">
        <li>Produkt</li>
        <li>Partners</li>
        <li>Priser</li>
        <li>Kundcase</li>
        <li>Kunskap</li>
        <li>Medarbetare</li>
      </ul>
      <div class="button-container">
        <font-awesome-icon icon="fa-solid fa-globe" class="icon" />

        <font-awesome-icon
          v-if="showHamburgerMenu"
          icon="fa-solid fa-x"
          @Click="handleHamburgerMenu"
          class="hamburger-icon"
        />

        <font-awesome-icon
          v-if="!showHamburgerMenu"
          icon="fa-solid fa-bars"
          @Click="handleHamburgerMenu"
          class="hamburger-icon"
        />
        <button class="book-btn">BOKA DEMO</button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
template {
  overflow: hidden;
}
header {
  background-color: #fff;
  max-height: 80px;
}
.icon {
  height: 1.5rem;
  transform: rotate(0);
  cursor: pointer;
}
.icon:hover {
  animation: rotate 1s forwards;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2.5rem;
  position: sticky;
  top: 0;
}
img {
  width: 7rem;
}
.normal-ul {
  display: flex;
}
ul {
  gap: 2.5rem;
  list-style: none;
}
li {
  font-weight: 600;
}
li:hover {
  color: #666;
}
.button-container {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.button-container button {
  background-color: #000;
  color: #fff;
  border: none;
  padding: 1rem;
  border-radius: 5px;
}
.hamburger-icon {
  display: none;
  height: 2rem;
  cursor: pointer;
}
.hamburger-ul {
  display: none;
  padding: 1rem;
  background-color: #f9f9f9;
  height: 100vh;
  width: 100vw;
  transform: none;
  position: fixed;
  left: 0;
  font-size: 1.5rem;
  align-items: center;
  justify-content: start;
  padding-top: 4rem;
  animation: showMenu 0.5s ease;
}
.test {
  background-color: red;
}

@keyframes rotate {
  from {
    rotate: 0;
  }
  to {
    rotate: 150deg;
  }
}

@keyframes showMenu {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@media screen and (max-width: 992px) {
  .book-btn {
    display: none;
  }
  .normal-ul {
    display: none;
  }

  .hamburger-ul {
    display: flex;
    flex-direction: column;
    bottom: -80px;
  }
  .hamburger-icon {
    display: block;
  }
}
</style>
