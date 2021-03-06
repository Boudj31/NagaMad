<template>
  <div id="app" :class="[font, mode]">
    <The-header v-if="urlHeader" :mode="mode" :font="font" :switchTheme="switchTheme" :switchFont="switchFont"  />
    <TheHeader2 v-else></TheHeader2>
    <div class="content">
      <Router-view></Router-view>
    </div>
    <The-footer v-if="urlHeader"></The-footer>
  </div>
</template>

<script>
import "../public/scss/style.css";
import TheFooter from "./components/Footer/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
import TheHeader2 from "@/components/TheHeader2";
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  name: "App",
  components: {
    TheHeader2,
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      urlHeader: true,
      mode: 'dark',
      font: '',
    }
  },

  methods: {
    urlDisplay() {
      const currentUrl = window.location.pathname;
      if (currentUrl === '/login' || currentUrl === '/register') {
        return  this.urlHeader = false;
      }
      return this.urlHeader = true;
    },
    switchTheme(event) { // Fonction darkMode
      event.preventDefault();
      if (this.mode === 'dark') {
        this.mode = 'light';
        localStorage.setItem("currentTheme", JSON.stringify(this.mode));
      } else {
        this.mode = 'dark';
        localStorage.setItem("currentTheme", JSON.stringify(this.mode));
      }
    },
    switchFont(event) { // Fonction Open Dyslexic
      event.preventDefault();
      if (this.font === 'dislexic') {
        this.font = '';
        localStorage.setItem("currentFont", JSON.stringify(this.font));
      } else {
        this.font = 'dislexic';
        localStorage.setItem("currentFont", JSON.stringify(this.font));
      }
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  async created() {
    //user
    const response = await axios.get('users' + '/' + localStorage.getItem('userId'));
    //console.log(response.data)
    this.$store.dispatch('user', response.data);

    //mode night
    this.urlDisplay();
    this.mode = JSON.parse(localStorage.getItem("currentTheme"));
    this.font = JSON.parse(localStorage.getItem("currentFont"));

  },

};
</script>

<style>

/* Nunito */
@font-face {
  font-family: "NunitoExtraLight";
  src: url("../public/assets/font/Nunito/NunitoSans-ExtraLight.ttf") format('truetype');
}

@font-face {
  font-family: "NunitoLight";
  src: url("../public/assets/font/Nunito/NunitoSans-Light.ttf") format('truetype');
}

@font-face {
  font-family: "NunitoRegular";
  src: url("../public/assets/font/Nunito/NunitoSans-Regular.ttf") format('truetype');
}

@font-face {
  font-family: "NunitoBold";
  src: url("../public/assets/font/Nunito/NunitoSans-Bold.ttf") format('truetype');
}

@font-face {
  font-family: "NunitoBlack";
  src: url("../public/assets/font/Nunito/NunitoSans-Black.ttf") format('truetype');
}

/* Ubuntu */
@font-face {
  font-family: "Ubuntu";
  src: url("../public/assets/font/Ubuntu/Ubuntu-Bold.ttf") format('truetype');
}

/* Open Dyslexic */
@font-face {
  font-family: 'Open-Dyslexic Roman';
  font-style: normal;
  font-weight: normal;
  src: local("Open-Dyslexic Roman"), url("../public/assets/font/Dyslexic/open-dyslexic.woff") format("woff");
}

.titre {
  font-size: 55px;
  line-height: 103px;
  text-transform: uppercase;
  display: block;
}

.main {
  background-color: var(--sombre);
}

h1{
  color: white;
  text-align: center;
  display: block;
}

h2 {
  color: var(--beige);
  width: 100%;
  margin: 10% 0 10% 0;
  text-align: center;
}

p {
  font-family: NunitoExtraLight;
}

#app {
  /* Couleur du site */
 --grisfonce-wb : #70665A;
 --grisclair-wb: #BDAC97;
 --beige-wb : #F0DBC0;
 --marron-wb : #705838;
 --orange-wb : #F2BE79;
 --sombre-wb : #1a1a1a;
 --white-wb: #FFF;

/* Couleur Header & Footer */
--white-hf: #FFF;
--grisclair-hf: #BDAC97;
--beige-hf: #F0DBC0;
--orange-hf: #F2BE79;
--orange-hover-hf: #D1A366;
--sombre-hf : #1a1a1a;


/* Image Home */
--background-home: url(/img/background.jpg);

font-family: NunitoBlack, NunitoBold, NunitoRegular, NunitoLight, NunitoExtraLight, Ubuntu;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
font-family: "Ubuntu", sans-serif;
background-color: var(--sombre-wb);
color: var(--secondary);
overflow: hidden;
min-height: 100vh;
display: grid;
grid:
  "header" auto
  "content" 1fr
  "footer" auto /
  auto;
}

.light {
  /* Couleur du site */
  --beige-wb : #F2BE79 !important;
  --sombre-wb : #FFF !important;
  --white-wb: #1A1A1A !important;

  --background-home: url(/img/background-ligth.jpg);
}

.light .titre {
  color: var(--orange-wb) !important;
}

.dislexic,
.dislexic p,
.dislexic button {
  font-family: 'Open-Dyslexic Roman', sans-serif !important;
}

.content {
  grid-area: content;
  /* margin-top: 154px; */
}

button {
  border: none;
  border-radius: 15px;
  background-color: var(--orange-hf);
  color: white;
  padding: 1%;
  margin: 5%;
}

/* Responsive */
@media only screen and (max-width: 1098px) {
  .container {
    max-width: 900px;
  }
}

@media only screen and (max-width: 900px) {
  .container {
    max-width: 800px;
  }
}

@media only screen and (max-width: 768px) {
  .container {
    max-width: 600px;
  }
}

@media only screen and (max-width: 668px) {
  .container {
    max-width: 500px;
  }
}

@media only screen and (max-width: 505px) {
  .container {
    max-width: 450px;
  }
}

@media only screen and (max-width: 450px) {
  .container {
    max-width: 400px;
  }
}
</style>
