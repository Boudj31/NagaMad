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
import AnnonceList from "../components/Annonce/AnnonceList"
import Description from '../components/Annonce/Description.vue';
import axios from "axios";

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
    },
  },

  created() {
    this.getAnnonce();
  },
};
</script>

<style scoped>
.search {
  background: url(../assets/img/annonces/arbre.jpg) no-repeat;
  background-size: cover;
  background-position: 50% 40%;
  width: 100%;
  padding-top: 65px;
}

h1 {
  text-align: start;
  font-size: 50px;
  text-align: center;
  margin-bottom: 10%;
}

/* Bloc de Formulaire */
form {
  background-color: var(--sombre-wb);
  border-radius: 100px;
  padding: 2%;
  padding: 20px 50px;
  transform: translateY(50%);
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
  vertical-align: middle;
  background: var(--sombre-wb) url("../assets/chevron-down-solid.svg") no-repeat right 8% center;
  background-size: 5%;
  appearance: none;
  transform: translateX(1px);
  color: var(--white-wb);
  border-radius: 100px 0 0 100px;
}

input[type="search"] {
  width: 100%;
  padding-left: 60px;
  border-radius: 0 100px 100px 0;
  outline: none;
  background: var(--sombre-wb);
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
    border-radius: 25px 25px 0 0;
    border-bottom: none;
  }

  input[type="search"] {
    border-radius: 0 0 25px 25px;
    border-top: none;
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