<template>
  <div class="annonce-item">
    <div v-for="(annonce, i) in annonces" :key="i">

      <h2> <strong>Titre:</strong> {{ annonce.title }}</h2>
      <p> <strong>Details: </strong> {{ annonce.content | truncate }}</p>
      <h4><strong>Catégorie: </strong>{{ annonce.categorie}}</h4>
      <h3>Contact</h3>
      <h5><strong>Téléphone: </strong> {{ annonce.phone}}</h5>
      <h5><strong>Email: </strong> {{ annonce.mail}}</h5>
      <p>Date: {{ annonce.createdAt }}</p>
      <button>
        <router-link :to="{name: 'annonce' + '/' + annonce.id, params: { annonceID: annonce.id}}">En savoir plus</router-link>
        <!--<router-link :to="'/single/'+ annonce.id">En savoir plus</router-link> -->
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Annonce",
  props: ['annonces', 'annonce'],

  filters: {

    truncate: function (value) {
      value = value.substring(0, 50)
      return value
    }
  }

}
</script>

<style>

</style>