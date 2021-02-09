<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <h2>Bulding Market Intelligence one datapoint at a time.</h2>
    <!-- <router-link :to="/company">Jubi</router-link> -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Market Fury'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
