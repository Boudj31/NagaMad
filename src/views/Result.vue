<template>
  <main>
    <section class="search">
      <div class="container">
        <h1>Faites votre recherche</h1>
        <Description />
        <form>
          <div class="form-control">
            <div class="form-group">
              <img class="form-icon icon-list" src="../assets/list.svg" alt="Icon list">
              <select name="" id="categorie" v-model="genreFilter">
                <option value="">-- Catégorie --</option>
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
            <div class="form-group">
              <img class="form-icon icon-search" src="../assets/search.svg" alt="Icon search">
              <input
                type="search"
                v-model="search"
                placeholder="Que recherchez-vous ?"
                aria-label="Search"
              />
              <!-- <div class="form-icon">
                <img src="../assets/search.svg" alt="Icon search">
              </div> -->
            </div>
          </div>
        </form>
      </div>
    </section>
    <AnnonceList :annonces="filterAnnonce" />
  </main>
</template>

<script>

import AnnonceList from "../components/Annonce/AnnonceList";
import Description from '../components/Annonce/Description.vue';
import axios from "axios";

const apiURL = "http://gestdech.com/api/annonces";


export default {
  components: { AnnonceList, Description },
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
        .get(apiURL)
        .then((res) => {
          this.annonces = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  //helloooo
  computed: {
    filterAnnonce() {
      let annonceAll = [...this.annonces];
      const searchGenre = this.genreFilter.length;
      const searchInput = this.search.length;

      if (searchGenre > 0) {
        const filterGenre = this.annonces.filter((annonce) => {
          return annonce.field_category[0].value.match(this.genreFilter);
        });
        annonceAll = filterGenre;
      }

      if (searchInput > 0) {
        const filterSearch = annonceAll.filter((annonce) => {
          return (
            annonce.title[0].value
              .toLowerCase()
              .match(this.search.toLowerCase()) ||
            annonce.field_category[0].value.match(this.search.toLowerCase())
          );
        });

        annonceAll = filterSearch;
      }

      return annonceAll;
    },
  },

  created() {
    this.getAnnonce();
  },
};
</script>

<style scoped>
.search {
  background: url(../assets/img/background.jpg) no-repeat;
  background-size: cover;
  background-position: 50% 40%;
  width: 100%;
  padding-top: 65px;
}

h1 {
  text-align: start;
  font-size: 50px;
}

/* Bloc de Formulaire */
form {
  background-color: var(--white-wb);
  border-radius: 0px;
  padding: 20px 50px;
  transform: translateY(50%);
  box-shadow: 0 1px 1px rgba(0,0,0,0.20), 
              0 -15px 0 -5px rgba(255, 255, 255, 0.86), 0 -16px 1px -5px rgba(0,0,0,0.20), 
              0 -32px 0 -12px rgba(255, 255, 255, 0.7), 0 -33px 1px -12px rgba(0,0,0,0.20);
}

.form-control {
  display: flex;
  flex-flow: row wrap;
}

.form-group {
  position: relative;
  width: 80%;
  flex: 0 0 80%;
}

.form-group:first-child {
  width: 20%;
  flex: 0 0 20%;
}

.form-icon {
  position: absolute;
  width: 24px;
  height: 24px;
  z-index: 1;
}

.icon-list {
  left: 7.5%;
  top: 30%;
}

.icon-search {
  left: 2.5%;
  top: 30%;
}

select,
input[type="search"] {
  border: 1px solid #bac3ce;
  outline: none;
  padding: 20px 0;
}

select {
  width: 100%;
  padding-left: 50px;
  /* border-radius: 10px 0 0 10px; */
  vertical-align: middle;
  background: var(--white) url("../assets/chevron-down-solid.svg") no-repeat right 8% center;
  background-size: 5%;
  appearance: none;
  transform: translateX(1px);
}

input[type="search"] {
  width: 100%;
  padding-left: 60px;
  /* border-radius: 0 10px 10px 0; */
  outline: none;
}

#voirAnnonce {
  padding: 1.5% 5% 1.5% 5%;
  font-family: NunitoRegular;
  font-size: 15px;
}

/* Responsive */
@media (max-width: 875px) {
  form {
    width: 84%;
  }
}

@media (max-width: 727px) {
  .form-control {
    flex-direction: column;
  }

  .form-group {
    width: 100% !important;
    flex: 0 0 100% !important;
  }

  select {
    transform: translateY(1px);
    background-size: 3%;
    background-position: right 3% center;
  }

  .icon-list {
   left: 2.5%;
  }

  .annonce-box .annonce-content {
    width: calc(100% - 100%);
  }

  .annonce-box .annonce-content p {
    width: 100%;
  }
}
</style>