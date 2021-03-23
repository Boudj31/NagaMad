<template>
  <div class="annonce-item">
    <div v-for="(annonce, i) in annonces" :key="i">

      <h2> <strong>Titre:</strong> {{ annonce.title[0].value }}</h2>
      <p> <strong>Details: </strong> {{ annonce.field_content[0].value | truncate }}</p>
      <h4><strong>Catégorie: </strong>{{ annonce.field_category[0].value}}</h4>
      <h3>Contact</h3>
      <h5><strong>Téléphone: </strong> {{ annonce.field_phone[0].value}}</h5>
      <h5><strong>Email: </strong> {{ annonce.field_mail[0].value}}</h5>
      <p>Date: {{ annonce.created[0].value }}</p>
      <button>
       <!-- <router-link :to="{name: 'single' + '/' + annonce.nid[0].value, params: { annonceID: annonce.nid[0].value}}">En savoir plus</router-link>-->
        <router-link :to="'/single/'+ annonce.nid[0].value">En savoir plus</router-link>
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