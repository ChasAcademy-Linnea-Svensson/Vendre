<script setup>
import Button from '../components/Button.vue';
</script>

<template>
  <main>
    <section class="fullheight first">
      <h1 class="title">
        Vendre Optimize <span class="title-highlight">Commerce</span>
      </h1>
      <p class="first-text">
        Marknadsledande CMS, PIM & internationell försäljning i samma
        e-handelsplattform.
      </p>
      <div class="btn-container">
        <Button :bg="'#FEE32B'" :to="'/'" :size="'big'">TESTA VENDRE</Button>
      </div>
    </section>
    <section class="fullheight second"></section>
  </main>
</template>

<style scoped>
.fullheight {
  height: calc(100vh - 80px);
}
.first {
  background: url('../assets/landingpage-background.png') no-repeat center
    center/cover;
  display: flex;
  align-items: left;
  justify-content: start;
  flex-direction: column;
  padding: 6rem 0 0 10%;
}
.title {
  width: 50rem;
  font-size: 5rem;
  margin-bottom: 2rem;
  line-height: 1.4;
}
.title-highlight {
  background-color: #fff;
  background-image: linear-gradient(
    90deg,
    rgba(106, 65, 239, 1) 0%,
    rgba(253, 160, 254, 1) 45%,
    rgba(255, 97, 57, 1) 100%
  );
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.first-text {
  font-size: 1.5rem;
  font-weight: 600;
  width: 23rem;
  line-height: 1.6;
  margin-bottom: 5rem;
}
.second {
  background-color: #fff;
}

/* tablet */
@media screen and (max-width: 992px) {
  .title {
    width: 30rem;
  }
}

/* mobile */
@media screen and (max-width: 772px) {
  .first {
    background: url('../assets/landingpage-background.png') no-repeat;
    background-position: 80% 40vh;
    background-size: 350%;
    padding: 3rem 0.5rem;
    align-items: center;
  }
  .title {
    width: 90vw;
    font-size: 3rem;
    text-align: center;
  }
  .first-text {
    width: 90vw;
    font-size: 1.2rem;
    text-align: center;
    padding: 1rem;
  }
}
</style>
