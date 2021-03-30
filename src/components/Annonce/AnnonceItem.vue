<template>
  <div class="article">
    <article id="grid" class="annonce">
     <img :src= "ann.field_poster.url" alt="Annonce" />
      <div class="overlay">
        <h4>{{ ann.title[0].value }}</h4>
        <p>{{ ann.field_content[0].value }}</p>
        <div class="overlay-items">
          <div class="items-article items-width">
            <i class="fas fa-clipboard-list"></i>
            <strong>{{ ann.field_category[0].value }}</strong>
          </div>
          <div class="items-article items-width">
            <i class="fas fa-boxes"></i>
            <p>{{ ann.field_quantity[0].value }} Pièces en stock</p>
          </div>
        </div>
      </div>
    </article>
    <div class="block container">
      <strong><i class="far fa-building"></i> Raykon</strong>
      <div class="block-column" v-if="isLogged">
        <address>
          <i class="fas fa-map-marker-alt"></i>
          <p>{{ ann.field_adress[0].value }}</p>
        </address>
        <div class="items-article">
          <i class="far fa-envelope"></i>
          <div class="link-item">
            <a :href="'mailto:'+ ann.field_mail[0].value">{{ ann.field_mail[0].value }}</a>
            <br>
            <a :href="ann.field_website[0].value" target="_blank">{{ ann.field_website[0].value }}</a>
          </div>
        </div>
        <div class="items-article">
          <i class="fas fa-phone-alt"></i><br />
          <a :href="'tel:'+ann.field_phone[0].value ">{{ ann.field_phone[0].value }}</a>
        </div>
      </div>
      <div class="alert" v-else>Veuillez vous connecter</div>
    </div>
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