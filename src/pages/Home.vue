<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <h2>Bulding Market Intelligence.</h2>

    <ul v-if="companyList && companyList.length">
      <li v-for="company in companyList">
        <router-link :to="{ name: 'Company', params: { companyId: company.id } }">
          <strong>{{ company.name }}</strong>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getCompanyAll } from "@/service/api"

export default {
  name: "Home",
  data() {
    return {
      companyList: []
    };
  },
  created: async function() {
    let result = await getCompanyAll();
    console.log(result.data);
    this.companyList = result.data.data;
  }
};
</script>
