<template>
  <div class="container">
    <div class="content">
      <div v-for="text in company.text_sections">
        <div v-html="text.text"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCompanyById } from "@/service/api";

export default {
  name: "Home",
  data() {
    return {
      company: {}
    };
  },
  created: async function() {
    let result = await getCompanyById("JUBLFOOD");
    this.company = result.data.data;
  }
};
</script>
