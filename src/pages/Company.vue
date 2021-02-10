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
  props: ['companyId'],
  data() {
    return {
      company: {"text_sections": {
          "text" : "No Data."
      }}
    };
  },
  created: async function() {
    console.log(this.$route.params.companyId)
    let result = await getCompanyById(this.$route.params.companyId);
    this.company = result.data.data;
  }
};
</script>
