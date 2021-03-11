<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item href="/">
        <img src="@/assets/logo.jpg" alt="Market Fury" />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="/about">
        Market
      </b-navbar-item>
      <b-navbar-item href="/about">
        Sectors
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/about'}">
        About
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <router-link class="button active" :to="{ path: '/login'}">
            <strong>Login / Signup</strong>
          </router-link>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
