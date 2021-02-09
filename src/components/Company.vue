<template>
  <div class="container">
    <h1>{{ company }}</h1>
    <h2>This firm is going to sell nothing for billions of dollars.</h2>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      company: 'Acme Inc'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
