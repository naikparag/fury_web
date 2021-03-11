<template>
  <div class="container">
    <div class="content">
      <div
        id="g-sign-btn"
        class="g-signin2"
        data-width="260"
        data-height="50"
        data-onsuccess="onSignIn"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  mounted() {
      let gapiScript = document.createElement('script')
      gapiScript.setAttribute('src', 'https://apis.google.com/js/platform.js')
      document.head.appendChild(gapiScript)
    },
};
</script>
