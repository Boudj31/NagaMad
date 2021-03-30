<template>
  <div id="etape">
    <table>
      <thead>
      <tr>
          <th> <span class="titre etp"> 1. </span> Inscrivez-vous ou <br> connectez-vous.</th>
          <th> <span class="titre etp"> 2. </span> Recherchez ou <br> Postez votre annonce.</th>
          <th> <span class="titre etp"> 3. </span> Prenez Contact.</th>
          <th> <span class="titre etp"> 4. </span> Prenez ou <br> Donnez vos Déchets !</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td> <img src="../assets/img/test.svg" id="e1" class="svg" alt="test"></td>
        <td> <img src="../assets/img/e2.svg" id="e2" class="svg" alt="test"></td>
        <td> <img src="../assets/img/e3.svg" id="e3" class="svg" alt="test"></td>
        <td> <img src="../assets/img/e4.svg" id="e4" class="svg" alt="test"></td>
      </tr>
      </tbody>
    </table>

    <div class="txt">
    <h2 class="titre"> La bourse de déchets ? </h2>

    <p> Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit,
      sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>

      <button> En savoir plus </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Etapes",
}
</script>


<style scoped>

#etape {
  position: relative;
  text-align: center;
  margin-top: -20%;
}

#etape::before,
#etape::after {
  content: "";
  width: 500px;
  height: 46px;
  top: calc(25.6% - 50px);
  position: absolute;
  background-color: var(--sombre-wb);
}

#etape::before {
  right: -40px;
  -webkit-mask-image: radial-gradient(circle 25px at 100% 0, transparent 0, transparent 40px, black 11px);
  mask-image: radial-gradient(circle 25px at 100% 0, transparent 0, transparent 40px, black 11px);
  z-index: 0;
}

#etape::after {
  left: -39.5px;
  -webkit-mask-image: radial-gradient(circle 25px at 0 0, transparent 0, transparent 40px, black 11px);
  mask-image: radial-gradient(circle 25px at 0 0, transparent 0, transparent 40px, black 11px);
  z-index: 0;
}

/* Mise en place du tableau */

table {
  position: sticky;
  border-radius: 180px 180px 0px 0px;
  margin:0;
  width: 100%;
  text-align: center;
  padding: 0% 10% 10% 10%;
  background-color: var(--sombre-wb);
  z-index: 1;
}


/* Numéro des étapes */


th {
  font-family: NunitoExtraLight;
  color: var(--white-wb);
  width: 10%;
  font-size: 18px;
}

.dislexic th {
  font-family: 'Open-Dyslexic Roman', sans-serif !important;
}

.etp {
  color: var(--beige-wb);
  font-family: NunitoBold;
}

/* Format des images */

.svg{
  width: 145px;
  height: auto;
  margin: 15% 0 0 0;
}

#e2{
  width: 100px;
}

#e3 {
  width: 200px;
}

/* Bloc de texte */

.titre {
  font-size: 55px;
  line-height: 103px;
  text-transform: uppercase;
  display: block;
  text-align: center;
}

h2 {
  margin: 15% 0 5% 0;;
}

p {
  font-size: 20px;
  max-width: 75%;
  text-align: left;
  margin-left: 15%;
  color: var(--white-wb);
}

.txt{
  background-color: var(--sombre-wb);
  box-shadow: 1px 1px 44px 0px rgba(0,0,0,0.2);
  border-radius: 100px;
}

/* Boutton classique */

button {
  border: none;
  border-radius: 15px;
  background-color: var(--orange-wb);
  color: white;
  padding: 15px 30px;
  margin-top : 10%;
  margin-bottom: 10%;
}

@media screen and (max-width: 1000px){
  #e1{
    width: 90px;
  }

  #e2{
    width: 70px;
  }

  #e3 {
    width: 120px;
  }

  #e4 {
    width: 80px;
  }
}



/* Pour le responsive */

@media screen and (max-width: 768px){

/* Modification des étapes */

td{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 35%;
  padding-bottom: 10%;
}

th {
  width: 100%;
  padding-bottom: 10%;
}

tbody{
  padding-left: 10%;
}

table, th {
  padding-top: 10%;
  display: flex;
  flex-direction: row;
  align-content: space-between;
  align-items: center;
}

/* Taille des images */

  #e1{
    width: 90px;
  }

  #e2{
    width: 70px;
  }

  #e3 {
    width: 120px;
  }

  #e4 {
    width: 80px;
  }

}


@media screen and (max-width: 370px){


/* titre */

  h2 {
    font-size: 2em;
  }


/* Modification du tableau */

  th {
    width: 100%;
    display: flex;
    flex-direction: column;
  }


/* Modification du titre */

  .titre {
    font-size: 45px;
    line-height: 70px;
  }

  th,p {
    font-size: 15px;
  }

}


@media screen and (max-width: 300px){
  tbody {
    display: none;
  }
}
</style>