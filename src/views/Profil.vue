<template>
  <div>
  <div v-for="(use, i) in user" :key="i">
      <h3 v-if="user">Hello {{ use.name[0].value }} </h3>
      <h3 v-if="!user">Vous n'etes pas connecté</h3>
  </div>
  </div>
</template>

<script>

import axios from "axios";
const apiURL = "http://gestdech.com/api/users";

export default {
  name: "Profil",
  data() {
    return {
      user: null
    }


  },
  async created() {
    const response = await axios.get(apiURL, {
    headers: {
      Authorization: 'Bearer' + localStorage.getItem("http://gestdech.com/rest/session/token")
    }
    });
    this.user = response.data;
    console.log(response);
  }
}
</script>

<style scoped>

</style>