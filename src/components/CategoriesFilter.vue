<template>
  <div class="main">
    <h2 class="titre">{{ $t("categorie.titre") }}</h2>
    <div class="grid">
      <div class="cat">
        <div class="title">{{ $t("categorie.plastique") }}</div>
        <div id="plas" class="flou plastique"></div>
      </div>
      <div class="cat">
        <div class="title">{{ $t("categorie.electrique") }}</div>
        <div id="elec" class="flou electrique"></div>
      </div>
      <div class="cat">
        <div class="title">{{ $t("categorie.recyclable") }}</div>
        <div id="recy" class="flou recyclage"></div>
      </div>
      <div class="cat">
        <div class="title">{{ $t("categorie.organique") }}</div>
        <div id="orga" class="flou organique"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesFilter",
};
</script>

<style scoped>
.main {
  text-align: center;
}

.grid {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
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
  z-index: 1;
  position: inherit;
}

.dislexic .cat > .title {
  font-family: "Open-Dyslexic Roman", sans-serif !important;
}

.title:hover,
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

.flou.plastique {
  background-image: url("../assets/img/cat/plastique.jpg") !important;
}

.flou.electrique {
  background-image: url("../assets/img/cat/plastique.jpg") !important;
}

.flou.recyclage {
  background-image: url("../assets/img/cat/plastique.jpg") !important;
}

.flou.organique {
  background-image: url("../assets/img/cat/plastique.jpg") !important;
}

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