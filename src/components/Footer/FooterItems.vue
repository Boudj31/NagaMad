<template>
  <div class="footer-columns">
    <div class="footer-column">
      <div class="footer-title">Notre bourse des déchets</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ducimus
        sequi quaerat voluptate labore tenetur, tempore enim placeat officiis
        harum vero quis, mollitia odio! Dolor ipsa itaque aspernatur nemo esse.
      </p>
    </div>

    <div class="footer-column">
      <div class="footer-title"> Liens </div>
      <ul>
      <li> Accueil </li>
      <li> Annonces </li>
      <li> Nous Contacter </li>
      </ul>

    </div>

    <div class="footer-column">
      <div class="footer-title"> Compte </div>
      <ul>
        <li> Se Connecter </li>
        <li> S'inscrire </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterItems",
};
</script>

<style>
.footer-columns {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-column:first-child {
  width: 45%;
}

.footer-column:last-child,
.footer-column:nth-child(2)
{
  width: 25%;
}

.footer-column p,
.footer-column ul {
  margin-top: 15%;
}

.footer-column ul li {
  margin-bottom: 10px;
}

.footer-title {
  background-color: #f2be79;
  color: #705838;
  font-weight: 700;
  text-align: center;
  padding: 20px 0;
  width: 100%;
}

@media screen and (max-width: 478px){

  .footer-columns{
    flex-direction: column;
    align-items: center;
  }

  .footer-column:first-child,
  .footer-column:nth-child(2),
  .footer-column:last-child{
    width: 80%;
  }

}
</style>