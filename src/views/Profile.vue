<template>
<main v-if="user">
  <div class="pic-profile">
    <div class="name">
    <i class="fa fa-building" aria-hidden="true"></i>
    <h1 class="titre"> {{ user.username }} </h1>
    </div>
  </div>
  <button>
    <router-link :to="'/new'">Nouvelle annonce</router-link>
  </button>
  <div class="coor">
    <ul>
      <li> <i class="fa fa-phone" aria-hidden="true"></i> {{ user.phone }}  </li>
      <li> <i class="fa fa-envelope" aria-hidden="true"></i> {{ user.email }} </li>
      <li> <i class="fa fa-location-arrow" aria-hidden="true"></i> 5 rue de blala <br> 000000 Nullepart </li>
    </ul>
  </div>

  <h2 class="titre"> Toutes les annonces </h2>

  <div v-for="(ann, i) in user.annonces" :key="i" class="annonces">
    <div class="card-annonce">
      <img src="../assets/img/cat/plastique.jpg">
      <h3> {{ ann.title }}</h3>
      <p> {{ ann.content }}</p>
      <p> {{ ann.quantity }}</p>
      <button>
        <router-link :to="'/annonce/'+ ann.id">En savoir plus</router-link>
       <!-- <router-link :to="{name: 'annonce' + '/' + ann.id, params: { annonceID: ann.id}}">En savoir plus</router-link> -->
      </button>
    </div>
<!--
    <div class="card-annonce">
      <img src="../assets/img/cat/plastique.jpg">
      <h3> Titre annnonce</h3>
      <p> Description</p>
      <p> Stock</p>
    </div>

    <div class="card-annonce">
      <img src="../assets/img/cat/plastique.jpg">
      <h3> Titre annnonce</h3>
      <p> Description</p>
      <p> Stock</p>
    </div>

    <div class="card-annonce">
      <img src="../assets/img/cat/plastique.jpg">
      <h3> Titre annnonce</h3>
      <p> Description</p>
      <p> Stock</p>
    </div>
    -->

  </div>

</main>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Profile",
  data() {
    return {
      fistname: '',
      lastname: ''
    }
  },
  computed: {
    ...mapGetters(['user'])
  }

}
</script>

<style scoped>

.pic-profile, .coor{
  text-align: center;
}

.pic-profile{
  background: url("../assets/img/profile/buildings.jpg") center no-repeat fixed;
  background-size: cover;
  height: 25vh;
  padding-top: 10%;
}

.name {
  padding: 5% 5% 5% 5%;
  background: #1A1A1A;
  border-radius: 100vh;
  width: 20%;
  margin: auto;
}

.pic-profile .name i {
  padding-top: 2%;
  display: block;
  font-size: 5em;
}

.coor{
  margin-top: 10%;
}

.coor ul {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  width: 100%;
}

.coor ul li {
  font-size: 1.1em;
  font-weight: 300;
}


.coor ul li i {
  font-size: 2em;
  display: block;
  margin-bottom: 10%;
}

.annonces{
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
}

.card-annonce{
  padding: 10% 0 10% 0;
  grid-column: span 6;
  grid-row: span 3;
  text-align: center;
  box-shadow: 0px 0px 44px 0px rgba(0,0,0,0.5) inset;
}

.annonces .card-annonce img{
  clip-path: circle(40%);
  width: 160px;
  height: auto;
}




</style>