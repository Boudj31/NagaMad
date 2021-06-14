<template>
  <div>
  <div v-for="(use, i) in user" :key="i">
      <h3 v-if="user">Hello {{ use.name[0].value }} </h3>
      <h3 v-if="!user">Vous n'etes pas connecté</h3>
  </div>
  </div>
</template>

<script>


export default {
  name: "Profil",
  props: ['user']

}
</script>

<style scoped>

</style>