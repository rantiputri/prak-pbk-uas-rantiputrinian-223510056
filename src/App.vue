<template>
  <q-layout view="hHh lpR fFf">
    <Navbar />

    <q-page-container>
      <q-page class="main-content">
        <div class="row justify-center">
          <router-view />
        </div>
      </q-page>
    </q-page-container>

    <q-footer class="text-center footer" elevated>
      <div class="footer-content">&copy; Ranti Putri Nian</div>
    </q-footer>
  </q-layout>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style>
html, body, #q-app {
  margin: 0;
  padding: 0;
  background-color: rgba(17, 17, 17, 0.684);
}

.q-layout {
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer {
  background: linear-gradient(45deg, #3a6186, #89253e);
  font-size: 12px;
  color: rgb(251, 250, 250);
  font-weight: bold;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  text-transform: uppercase;
  text-align: center;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.footer-content {
  padding: 10px;
  font-size: larger;
}
</style>
