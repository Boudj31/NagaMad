<template>
  <div>

      <h3 v-if="user">Hello {{ use.name[0].value }} </h3>
      <h3 v-if="!user">Vous n'etes pas connecté</h3>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Profil",
  computed: {
    ...mapGetters(['user'])
  }

}
</script>

<style scoped>

</style>