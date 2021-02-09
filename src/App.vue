<template>
  <div id="app">
    <navbar />
    <section class="section">
      <div class="container">
        <router-link to="/">Home</router-link>
        <router-link to="/company">Acme Inc</router-link>

        <router-view />
        
      </div>
    </section>
    <footer-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import FooterView from "./components/FooterView.vue";

export default {
  name: "App",
  components: {
    Navbar,
    FooterView
  }
};
</script>

<style>
#app {
  margin-top: 0.5rem;
}
</style>
