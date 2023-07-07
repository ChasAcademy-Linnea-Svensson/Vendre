<script setup>
import { RouterLink } from 'vue-router';
import Button from '../components/Button.vue';
import { onMounted } from 'vue';

onMounted(() => {
  document.querySelectorAll('.partner-title').forEach((partner, indx) => {
    partner.addEventListener('click', () => {
      document.querySelectorAll('.partner-title').forEach((title, i) => {
        if (i === indx) {
          title.firstChild.classList.add('active');
          title.classList.add('active');
        } else {
          title.firstChild.classList.remove('active');
          title.classList.remove('active');
        }
      });
    });
  });
});
</script>

<template>
  <main>
    <section class="main-lockup">
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
    <section class="partners">
      <div>
        <h2>Med Vendre får du dedikerade partners</h2>
        <div class="link-container">
          <div class="partner-title active">
            <font-awesome-icon
              icon="fa-solid fa-arrow-right"
              class="arrow active"
            />
            <RouterLink to="/">AFFÄRSSYSTEM</RouterLink>
          </div>
          <div class="mobile-icons show">
            <img src="../assets/partners/visma.webp" alt="visma logo" />
            <img src="../assets/partners/pyramid.webp" alt="visma logo" />
            <img
              src="../assets/partners/businesscentral.webp"
              alt="visma logo"
            />
            <img src="../assets/partners/monitor.webp" alt="visma logo" />
            <img src="../assets/partners/jeeves.webp" alt="visma logo" />
            <img src="../assets/partners/mamut.webp" alt="visma logo" />
            <img src="../assets/partners/specter.webp" alt="visma logo" />
            <img src="../assets/partners/fortnox.webp" alt="visma logo" />
            <img src="../assets/partners/garp.webp" alt="visma logo" />
            <img src="../assets/partners/inriver.webp" alt="visma logo" />
          </div>
          <div class="partner-title">
            <font-awesome-icon icon="fa-solid fa-arrow-right" class="arrow" />
            <RouterLink to="/">FRAKT- & BETALLÖSNINGAR</RouterLink>
          </div>
          <div class="mobile-icons">
            <img src="../assets/partners/visma.webp" alt="visma logo" />
            <img src="../assets/partners/pyramid.webp" alt="visma logo" />
            <img
              src="../assets/partners/businesscentral.webp"
              alt="visma logo"
            />
            <img src="../assets/partners/monitor.webp" alt="visma logo" />
            <img src="../assets/partners/jeeves.webp" alt="visma logo" />
            <img src="../assets/partners/mamut.webp" alt="visma logo" />
            <img src="../assets/partners/specter.webp" alt="visma logo" />
            <img src="../assets/partners/fortnox.webp" alt="visma logo" />
            <img src="../assets/partners/garp.webp" alt="visma logo" />
            <img src="../assets/partners/inriver.webp" alt="visma logo" />
          </div>
          <div class="partner-title">
            <font-awesome-icon icon="fa-solid fa-arrow-right" class="arrow" />
            <RouterLink to="/">ON SITE</RouterLink>
          </div>
          <div class="partner-title">
            <font-awesome-icon icon="fa-solid fa-arrow-right" class="arrow" />
            <RouterLink to="/">OFF SITE</RouterLink>
          </div>
          <div class="partner-title">
            <font-awesome-icon icon="fa-solid fa-arrow-right" class="arrow" />
            <RouterLink to="/">INTEGRATION</RouterLink>
          </div>
          <div class="partner-title">
            <font-awesome-icon icon="fa-solid fa-arrow-right" class="arrow" />
            <RouterLink to="/">SOLUTION PARTNERS</RouterLink>
          </div>
        </div>
      </div>
      <div class="row-container">
        <div class="row r1">
          <img src="../assets/partners/visma.webp" alt="visma logo" />
          <img src="../assets/partners/pyramid.webp" alt="visma logo" />
          <img src="../assets/partners/businesscentral.webp" alt="visma logo" />
        </div>
        <div class="row r2">
          <img src="../assets/partners/monitor.webp" alt="visma logo" />
          <img src="../assets/partners/jeeves.webp" alt="visma logo" />
          <img src="../assets/partners/mamut.webp" alt="visma logo" />
          <img src="../assets/partners/specter.webp" alt="visma logo" />
        </div>
        <div class="row r3">
          <img src="../assets/partners/fortnox.webp" alt="visma logo" />
          <img src="../assets/partners/garp.webp" alt="visma logo" />
          <img src="../assets/partners/inriver.webp" alt="visma logo" />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.main-lockup {
  height: calc(100vh - 80px);
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
.partners {
  height: 80vh;
  background-color: #fff;
  padding: 10% 12%;
  display: flex;
  align-items: start;
  justify-content: space-between;
}
.partners .link-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 4rem;
  margin-right: 2.5rem;
}
.partners .link-container a {
  font-weight: 700;
  font-size: 1rem;
  color: #000;
}
.partners .link-container a:hover {
  color: #5232ed;
}
.partners h2 {
  width: 15rem;
}
.partners img {
  height: 7rem;
  width: 7rem;
  border-radius: 10px;
  box-shadow: #e4e4e4 1px 1px 20px;
}
.partners .link-container .mobile-icons {
  display: none;
}
.partners .row-container {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.partners .row-container img {
  transition: all 0.2s ease;
}
.partners .row-container img:hover {
  transform: translateY(-10px);
}
.partners .row {
  display: flex;
  gap: 1.2rem;
}
.partners a {
  grid-area: 'icon';
}
.partners .row:nth-child(2) {
  transform: translateX(-12%);
}
.partners .partner-title {
  display: flex;
}
.partners .partner-title.active a {
  color: #5232ed;
}
.partners .partner-title .arrow {
  display: none;
  z-index: 0;
}
.partners .partner-title .arrow.active {
  display: block;
  animation: activeLink 1s ease forwards;
  color: #5232ed;
}
.active {
  display: block;
  margin-right: 1rem;
}

/* tablet */
@media screen and (max-width: 992px) {
  .title {
    width: 30rem;
    font-size: 4rem;
  }
  .partners {
    padding: 10% 10%;
  }
  .partners img {
    height: 5rem;
    width: 5rem;
  }
  .partners .link-container .mobile-icons.show {
    display: flex;
    gap: 1.2rem;
    max-width: 90vw;
    padding: 0.5rem;
    overflow-x: scroll;
  }
  .partners .row-container {
    display: none;
  }
}

/* mobile */
@media screen and (max-width: 772px) {
  .main-lockup {
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

@keyframes activeLink {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
