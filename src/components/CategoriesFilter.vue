<template>
<div class="main">
  <h2 class="titre"> Quel type de déchet recherchez-vous ? </h2>
<div class="grid">
  <div  class="cat"><div class="title">Plastique</div><div id="plas" class="flou plastique"></div></div>
  <div  class="cat"><div class="title">électronique</div><div id="elec" class="flou electrique"></div></div>
  <div  class="cat"><div class="title">Recyclable</div><div id="recy" class="flou recyclage"></div></div>
  <div  class="cat"><div class="title">Organique</div><div id="orga" class="flou organique"></div></div>
</div>
</div>
</template>

<script>
export default {
name: "CategoriesFilter"
}
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
  z-index: 100;
  position: inherit;
}

.dislexic .cat > .title {
  font-family: 'Open-Dyslexic Roman', sans-serif !important;
}

.title:hover,
.flou:hover .title:hover{
  background-color: white;
  color: var(--orange);
}

.cat {
  grid-column: span 6;
}

.flou{
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
  z-index: 0;
}

.flou.plastique {
  background-image: url("../assets/img/cat/plastique.jpg") !important;
}

.flou.electrique {
  background-image: url("../assets/img/cat/electronique.jpg") !important;
}

.flou.recyclage {
  background-image: url("../assets/img/cat/electronique.jpg") !important;
}

.flou.organique {
  background-image: url("../assets/img/cat/electronique.jpg") !important;
}

.flou:hover{
  filter: blur(6px);
}

@media screen and (max-width: 990px) {
  p{
    font-size: 25px;
  }
}

@media screen and (max-width: 780px) {
  p{
    font-size: 15px;
  }
}

@media screen and (max-width: 575px) {
  .grid {
    display: block;
  }

  .cat{
    margin: 10px 0;
  }

  .grid > div {
    padding: 10%;
  }
}

@media screen and (max-width: 400px) {
  h2{
    font-size: 30px;
    line-height: 50px;
  }
}

</style>