<template>
  <main>
    <Annonce-item v-for="(ann, index) in annonce" :key="index" :ann="ann" />
  </main>
</template>

<script>
import AnnonceItem from "../components/Annonce/AnnonceItem.vue";
import axios from "axios";

const apiURL = "http://gestdech.com/api/annonces";

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
      axios.get(apiURL + "/" + this.idAnnonce)
        .then((res) => {
          this.annonce = res.data;
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