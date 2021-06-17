<template>
  <main>
    <section class="search">
      <div class="container">
        <h1>Faites votre recherche</h1>
        <p>Des annonces proche de chez vous</p>
        <form>
          <div class="form-control">
            <input
                type="search"
                v-model="search"
                placeholder="Que recherchez-vous ?"
                aria-label="Search"
            />
            <select name="" id="categorie" v-model="genreFilter">
              <option value="Categorie">-- Catégorie --</option>
              <option value="Tous">Tous</option>
              <option value="Meuble">Meuble</option>
              <option value="Materiaux">Matériaux de construction</option>
              <option value="Electronique">Electronique</option>
              <option value="Electrique">Electrique</option>
              <option value="Bureau">Bureau</option>
              <option value="Bois">Bois</option>
              <option value="Dechet">Dechet</option>
              <option value="Mobilier">Mobilier</option>
              <option value="Vetement">Vetement</option>
            </select>
          </div>
        </form>
      </div>
    </section>
    <AnnonceList :annonces="filterAnnonce" />
  </main>
</template>

<script>
import AnnonceList from "../components/Annonce/AnnonceList"
//const apiURL = "http://127.0.0.1:8000/api/annonces";
import axios from 'axios';

export default {
  components: { AnnonceList},
  name: "Result",
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
          .get('annonces')
          .then((res) => {
            this.annonces = res.data['hydra:member'];
            console.log(res.data['hydra:member']);
          })
          .catch((err) => {
            console.log(err);
          });

    }

  },
  computed: {
    filterAnnonce() {
      let annonceAll = [...this.annonces];
      const searchGenre = this.genreFilter.length;
      const searchInput = this.search.length;

      if (searchGenre > 0) {
        const filterGenre = this.annonces.filter((annonce) => {
          return annonce.categorie.match(this.genreFilter);
        });
        annonceAll = filterGenre;
      }

      if (searchInput > 0) {
        const filterSearch = annonceAll.filter((annonce) => {
          return (
              annonce.title
                  .toLowerCase()
                  .match(this.search.toLowerCase()) ||
              annonce.categorie
                  .match(this.search.toLowerCase())
          );
        });

        annonceAll = filterSearch;
      }

      return annonceAll;

    }
  },


  created() {
    this.getAnnonce();
  }


};
</script>

<style scoped>
.search {
  background: url(../assets/img/background.jpg) no-repeat;
  background-size: cover;
  background-position: 50% 40%;
  width: 100%;
  padding: 65px 0;
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
</style>