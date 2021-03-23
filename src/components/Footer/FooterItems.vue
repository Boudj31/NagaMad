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
      <div class="footer-title">Plus sur Naga</div>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
      </ul>
    </div>
    <div class="footer-column">
      <div class="footer-title">Nous contacter</div>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
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
}

.footer-column:first-child {
  width: 550px;
}

.footer-column p,
.footer-column ul {
  margin-top: 20px;
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
</style>