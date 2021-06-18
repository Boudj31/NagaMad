<template>

<div class="main">
  <h2 class="titre"> Nos catégories </h2>
<div class="grid">
  <div class="cat"> <div class="title" @mouseover="flou=false" @mouseleave="flou=true" >{{ $t('categorie.mobilier') }}</div> <div id="mobilier" :class="{'flou':flou,'flou flouter':!flou}"> </div> </div>
  <div class="cat"> <div class="title" @mouseover="flou=false" @mouseleave="flou=true">{{ $t('categorie.construction') }}</div><div id="construction" :class="{'flou':flou,'flou flouter':!flou}"></div></div>
  <div class="cat"> <div class="title" @mouseover="flou=false" @mouseleave="flou=true">{{ $t('categorie.electronique') }}</div><div id="electro" :class="{'flou':flou,'flou flouter':!flou}"></div></div>
  <div class="cat"> <div class="title" @mouseover="flou=false" @mouseleave="flou=true">{{ $t('categorie.electrique') }}</div><div id="elec" :class="{'flou':flou,'flou flouter':!flou}"></div></div>
  <div class="cat"> <div class="title" @mouseover="flou=false" @mouseleave="flou=true">{{ $t('categorie.bureau') }}</div><div id="bureau" :class="{'flou':flou,'flou flouter':!flou}"></div></div>
  <div class="cat"> <div class="title" @mouseover="flou=false" @mouseleave="flou=true">{{ $t('categorie.bois') }}</div><div id="bois" :class="{'flou':flou,'flou flouter':!flou}"></div></div>
  <div class="cat"> <div class="title" @mouseover="flou=false" @mouseleave="flou=true">{{ $t('categorie.dechets') }}</div><div id="dechet" :class="{'flou':flou,'flou flouter':!flou}"></div></div>
  <div class="cat"> <div class="title" @mouseover="flou=false" @mouseleave="flou=true">{{ $t('categorie.vetements') }}</div><div id="vetement" :class="{'flou':flou,'flou flouter':!flou}"></div></div>

</div>
</div>

</template>

<script>
export default {

name: "CategoriesFilter",

  data() {
  return{
   flou: false,
  }
  },
}
</script>

<style scoped>
.main {
  text-align: center;
}

.grid {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
}

.grid > div {
  color: white;
  font-size: 4vw;
  padding: 80px;
  text-align: center;
  position: relative;
}

.cat > .title {
  text-transform: uppercase;
  font-family: NunitoBold;
  font-size: 37px;
  padding: 10%;
  border: solid 1px white;
  transition: background-color 1s;

  z-index: 100;
  background-color: rgba(26,26,26, .3);

  z-index: 1;

  position: inherit;
}

.dislexic .cat > .title {
  font-family: "Open-Dyslexic Roman", sans-serif !important;
}

.title:hover,

.flou:hover .title:hover{
  background-color: rgba(242,190,121,.7);
  color: var(--white-hf);
}

.flou:hover .title:hover {
  background-color: white;
  color: var(--orange-wb);

}

.cat {
  grid-column: span 6;
}

.flou {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-blend-mode: lighten;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  transition: filter 1s;
}

.flouter{
  filter: blur(6px);
}

#mobilier{background-image: url("../assets/img/cat/mobilier.jpg") !important;}
#construction {background-image: url("../assets/img/cat/construction.jpg") !important;}
#elec{background-image: url("../assets/img/cat/electrique.jpg") !important;}
#electro{background-image: url("../assets/img/cat/electronique.jpg") !important;}
#bureau{background-image: url("../assets/img/cat/bureau.jpg") !important;}
#bois{background-image: url("../assets/img/cat/bois.jpg") !important;}
#dechet{background-image: url("../assets/img/cat/dechets.jpg") !important;}
#vetement{background-image: url("../assets/img/cat/vetements.jpg") !important;}


.flou:hover {
  filter: blur(6px);
}

@media screen and (max-width: 990px) {
  p {
    font-size: 25px;
  }

  .cat > .title {
    font-size: 1em;
  }
}

@media screen and (max-width: 780px) {
  .titre {
    font-size: 3em;
  }

  p {
    font-size: 15px;
  }

  .cat > .title {
    font-size: 0.6em;
  }
}

@media screen and (max-width: 575px) {
  .grid {
    display: block;
  }

  .cat {
    margin: 10px 0;
  }

  .grid > div {
    padding: 10%;
  }
}

@media screen and (max-width: 400px) {
  .cat > .title {
    font-size: 20px;
  }
}
</style>