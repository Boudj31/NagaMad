<template>
  <div>
  <!--
 <div class="article">

<article id="grid" class="annonce">

<img :src= "ann.poster" alt="Annonce" />
<div class="overlay">
  <h4>{{ ann.title }}</h4>
  <p>{{ ann.content}}</p>
  <div class="overlay-items">
    <div class="items-article items-width">
      <i class="fas fa-clipboard-list"></i>
      <strong>{{ ann.categorie }}</strong>
    </div>
    <div class="items-article items-width">
      <i class="fas fa-boxes"></i>
      <p>{{ ann.quantity }} Pièces en stock</p>
    </div>
  </div>
</div>

   </article>
   <div class="block container">
     <strong><i class="far fa-building"></i> {{ann.website}}</strong>
     <div class="block-column" v-if="isLogged">
       <address>
         <i class="fas fa-map-marker-alt"></i>
         <p>{{ ann.adress}}</p>
       </address>
       <div class="items-article">
         <i class="far fa-envelope"></i>
         <div class="link-item">
           <a :href="'mailto:'+ ann.mail">{{ ann.mail}}</a>
           <br>
           <a :href="ann.website" target="_blank">{{ ann.website }}</a>
         </div>
       </div>
       <div class="items-article">
         <i class="fas fa-phone-alt"></i><br />
         <a :href="'tel:'+ann.phone ">{{ ann.phone }}</a>
       </div>
     </div>
     <div class="alert" v-else>Veuillez vous connecter</div>
   </div>
   -->
    <h4>{{ ann.content }}</h4>
  </div>
</template>

<script>

export default {
  name: "AnnonceItem",
  props: ['ann'],
  data() {
    return {
      isLogged: true,
    };
  },
};
</script>

<style>
/* Article */
.annonce {
  display: flex;
  flex-flow: row wrap;
}

.annonce img {
  width: 50%;
  flex: 0 0 50%;
  height: 400px;
  object-fit: cover;
}

.overlay {
  flex: 1;
  padding: 20px 25px;
}

.overlay h4 {
  font-size: 50px;
  font-weight: 700;
  text-transform: uppercase;
}

.overlay > p {
  margin: 40px 0;
}

.overlay-items {
  display: flex;
  flex-flow: row wrap;
}

.items-width {
  width: calc(100% / 2);
}

address i,
.items-article i {
  font-size: 40px;
  margin-right: 15px;
}

address,
.items-article {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: 20px;
}

/* Information */
.block {
  display: flex;
  flex-direction: column;
  padding: 50px 0;
}

.block strong {
  text-transform: uppercase;
  text-align: center;
  font-size: 50px;
  font-weight: 700;
}

.block-column {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 60px 0;
}
</style>