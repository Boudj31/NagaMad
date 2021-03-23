<template>
  <div class="main">
    <section class="search">
      <div class="container">

        <h1>Valorisez vos déchets</h1>

        <form>
          <button class="btn">
            <router-link to="result" >Voir les annonces</router-link>
          </button>
        </form>
      </div>
    </section>
    <div class="container">
      <Etapes />
      <CategoriesFilter />
      <AnnonceList :annonces="annonces" />
    </div>
  </div>
</template>

<script>
import Etapes from "../components/Etapes.vue";
import axios from "axios";
import CategoriesFilter from "@/components/CategoriesFilter";
import AnnonceList from "@/components/Annonce/AnnonceList";

const apiURL = "http://gestdech.com/api/annonce";

export default {

  components: {CategoriesFilter, Etapes, AnnonceList },
  name: "Home",
  data() {
    return {
      annonces: "",
      search: "",
      genreFilter: "",

    };
  },

  methods: {
    getAnnonce() {
      axios
          .get(apiURL)
          .then((res) => {
            this.annonces = res.data;
          })
          .catch((err) => {
            console.log(err);
          });
    },
  },

  created() {
    this.getAnnonce();
  },
}
</script>

<style scoped>
.search {
  background: url(../assets/img/background.jpg) no-repeat;
  background-size: cover;
  background-position: 50% 40%;
  width: 100%;
  padding: 65px 0;
  position: relative;
}

.search p {
  text-align: center;
  font-size: 30px;
  margin: 30px;
}

h1 {
  font-size: 60px;
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  margin-bottom: 90px;
}

.form-control {
  display: flex;
  width: 50%;
  margin-bottom: 20px;
}

form input {
  width: 60%;
  margin-right: 2%;
}

select {
  vertical-align: middle;
  background: var(--white) url("../assets/chevron-down-solid.svg") no-repeat right 8% center;
  background-size: 5%;
  appearance: none;
}

form select {
  width: 38%;
}

form input,
form select {
  padding: 13px 20px;
  border-radius: 37px;
  border: none;
}

.btn {
  border-radius: 13px;
  background-color: var(--orange);
  border: none;
  color: var(--white);
  padding: 15px 30px;
  font-size: 14px;
  margin-bottom: 90px;
}

#voirAnnonce {
  padding: 1.5% 5% 1.5% 5%;
  font-family: NunitoRegular;
  font-size: 15px;
}

.dislexic form input,
.dislexic form select
.dislexic #voirAnnonce {
  font-family: 'Open-Dyslexic Roman', sans-serif !important;
}
</style>