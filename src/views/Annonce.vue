<template>
  <main>
    <Annonce-item :ann="annonce" />
  </main>
</template>

<script>
import AnnonceItem from "../components/Annonce/AnnonceItem.vue";
import axios from "axios";

//const apiURL = "http://127.0.0.1:8000/api/annonces";

export default {
  components: { AnnonceItem },
  name: "Annonce",
  props: ["idAnnonce"],
  data() {
    return {
      annonce: "",
    };
  },
  methods: {
    getTheAnnonce: function () {
      axios.get( 'annonces' + '/' + this.idAnnonce)
        .then((res) => {
          this.annonce = (res.data);
         // console.log(JSON.stringify(res.data));
        })
        .catch((err) => console.log(err));
    },
  },
  created() {
    this.getTheAnnonce();
    console.log(this.annonce);
  },
};
</script>

<style>
</style>