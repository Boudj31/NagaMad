<template>
<div id="listA">
  <h3 id="titreIntroAnnonce" class="titre" >{{ $t('annonces.titre') }}</h3>

  <div class="mapList">
  <i :class="{'fa fa-globe':checked, 'fa fa-list':!checked} " aria-hidden="true" @click="checked = !checked"></i>
  <p v-if="checked"> Voir La carte </p>
  <p v-else> Voir la liste </p>
  </div>

  <div class="grille" v-for="(annonce, index) in annonces" :key="index">
    <h3 class="titleList"> • {{ annonce.title[0].value }} </h3>
    <img :src= "annonce.field_poster[0].url" class="imglist">

  <div v-if="checked === false">
    <Brew/>
  </div>

    <p class="Andesc"> {{ annonce.field_content[0].value }}
      <i class="fas fa-boxes iconA"></i> {{ annonce.field_quantity[0].value }} En stock
      <i class="fas fa-clipboard-list iconA"></i>
    </p>

    <span class="AnDate"> Posté le {{ annonce.created[0].value }} </span>
    <button class="BtnAnnonce">
      <router-link :to="'/annonce/'+ annonce.nid[0].value">En savoir plus</router-link>
    </button>
  </div>
  <hr>


</div>
</template>

<script>



import Brew from "../Map/Brew.vue"
export default {
  name: "HeaderAnnonce",
    components: {Brew},
  props: ['annonces', 'annonce'],

    data() {
    return {
      checked: true,
    };
  },

}

</script>

<style scoped>

/* Titre avant la liste */
#titreIntroAnnonce {
  text-align: center;
  margin: 10%;
}

/* Icone carte + texte */

.mapList {
  text-align: center;
  margin: 5%;
}

.mapList > i {
  font-size: 50px;
}
 .mapList > p {
   margin: 3%;
   font-size: 25px;
 }

 /* Liste + images */

.grille {
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
}

 /* Titre de l'annonce */
.titleList {
  margin: 5% 10% 5% 0;
  grid-column: span 12;
  font-size: 40px;
  color: white;
  text-transform: uppercase;
}

/* Description */

.Andesc {
  margin: 5% 0 0 10%;
  font-size: 20px;
  color: white;
  grid-column: span 10;
}

/* Icons */

.iconA{
  margin-top: 10%;
  grid-column: span 2;
  font-size: 35px;
}

.iconA:last-child{
  margin-left: 45%;
}

/* Date et auteur */

.AnDate {
  margin: 5% 0 5% 5%;
  grid-column: span 6;
  font-size: 20px;
}

/* Image Postée*/

.imglist{
  width: 250px;
  height: auto;
  grid-column: span 6;
}

.BtnAnnonce{
  grid-column: span 2;
  font-family: NunitoRegular;
  font-size: 15px;
  margin: 10%;
}

.dislexic .BtnAnnonce {
  font-family: 'Open-Dyslexic Roman', sans-serif !important;
}

hr{
  width: 50%;
  margin-top : 5%;
  margin-bottom: 5%;
  opacity: 10%;
}

@media only screen and (max-width: 768px){

  h3 {
    font-size: 3em;
    line-height: 1.5em;
  }

}

</style>