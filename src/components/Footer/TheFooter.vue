<template>
  <footer class="footer">
    <div class="container">
      <Footer-lang />
      <Footer-items />
      <div class="footer-credits">
        Made with ❤️ from Rachid, Nadjila, Haydal and Ansaka
      </div>
    </div>
  </footer>
</template>

<script>
import FooterItems from './FooterItems.vue';
import FooterLang from './FooterLang.vue';
export default {
  components: { FooterLang, FooterItems },
  name: "TheFooter",
  data() {
    return {};
  },
};
</script>

<style>
.footer {
  grid-area: footer;
  background-color: var(--footer);
  padding: 40px 0;
}

.footer-credits {
  margin-top: 40px;
  text-align: center;
}
</style>