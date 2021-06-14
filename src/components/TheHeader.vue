<template>
  <header :class="{'headroom--unpinned':scrolled}" v-on="handleScroll()" class="site-header headroom header">
    <div class="header-top">
      <div class="container flex">
        <router-link to="/" class="site-logo">
          <img src="../assets/logo.svg" alt="Logo" />
          <strong>Naga•Wasted</strong>
          <div class="header-settings">
            <div class="btn-settings">
              <i class="fas fa-cog"></i>
            </div>
            <ul class="list-switch">
              <li class="items">
                <span class="dyslexic">
                  <i class="fas fa-font" style="color: red;" v-if="font === 'dislexic'" @click="switchFont"></i>
                  <i class="fas fa-font" v-else @click="switchFont"></i>
                </span>
              </li>
              <li class="items">
                <span class="theme">
                  <i class="far fa-moon" v-if="mode === 'dark'" @click="switchTheme"></i>
                  <i class="fas fa-sun" v-else @click="switchTheme"></i>
                </span>
              </li>
            </ul>
          </div>
        </router-link>
        <div class="header-right" v-if="!user">

          <a href="/login">Connexion</a>
          <a href="/register" class="btn-signup">Inscription</a>
          <!-- <router-link :to="{name: 'login'}">Connexion</router-link> -->
          <!-- <router-link :to="{name: 'register'}" class="btn-signup">Inscription</router-link> -->
        </div>
        <div class="header-right" v-if="user">

          <a href="/login" @click="handleClick()">Déconnexion</a>
          <!-- <router-link :to="{name: 'login'}">Connexion</router-link> -->
          <!-- <router-link :to="{name: 'register'}" class="btn-signup">Inscription</router-link> -->
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="container">
        <nav class="site-nav">
          <ul class="menu">
            <li class="menu-item">
              <router-link to="/">Accueil</router-link>
            </li>
            <li class="menu-item">
              <router-link to="/result">Annonces</router-link>
            </li>
            <li class="menu-item">
              <router-link to="/contacts">Contacts</router-link>
            </li>
            <li class="menu-item">
              <router-link to="/annonce/1">Qui-Sommes-Nous ?</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  props: {
    user: null,
    mode: String,
    font: String,
    switchTheme: { type: Function },
    switchFont: { type: Function },
  },
  data() {
    return {
      darkMode: false,
      limitPosition: 250,
      scrolled: false,
      lastPositon: 0,
    }
  },

  methods: {
    handleScroll(){
      if(this.lastPositon < window.scrollY && this.limitPosition < window.scrollY){
        this.scrolled = true;
      }
      if(this.lastPositon > window.scrollY){
        this.scrolled = false;
      }
      this.lastPositon = window.scrollY;
    },

    handleClick() {
      localStorage.removeItem('http://gestdech.com/rest/session/token');
      this.$router.push('/');
    },

    created() {
      window.addEventListener("scroll", this.handleScroll).console.log(this.scrolled);
    },

    destroyed() {
      window.removeEventListener("scroll", this.handleScroll)
    },
  }
};
</script>

<style>

.site-header {
  grid-area: header;
  /* position: fixed; */
  /* top: 0;
  left: 0; */
  display: flex;
  flex-direction: column;
  color: var(--white);
  width: 100%;
  z-index: 10;
  transition: all 300ms ease-in-out;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.site-header .header-top {
  position: relative;
  background: var(--primary);
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

/*==== Header left ====*/
.site-logo {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.site-logo img {
  width: 100px;
  height: 60px;
  object-fit: contain;
  margin-right: 10px;
}

.site-logo strong {
  font-weight: 700;
  font-size: 30px;
  text-transform: uppercase;
}

.site-logo .header-settings {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}

.header-settings .btn-settings {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: var(--tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-settings:hover .list-switch {
  opacity: 1;
  -webkit-transform: translateY(0px);
  transform: translateY(0px);
  -webkit-transition: all 0.3s cubic-bezier(0.25, 1.15, 0.35, 1.15);
  transition: all 0.3s cubic-bezier(0.25, 1.15, 0.35, 1.15);
  visibility: visible;
}

.list-switch {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 105px;
  padding: 13px 0;
  font-size: 20px;
  background-color: var(--white);
  border-radius: 8px;
  color: var(--dark);
  top: 80%;
  right: auto;
  opacity: 0;
  -webkit-transform: translateY(-20px);
  transform: translateY(-20px);
  -webkit-transition: all 0.3s cubic-bezier(0.25, 1.15, 0.35, 1.15);
  transition: all 0.3s cubic-bezier(0.25, 1.15, 0.35, 1.15);
  visibility: hidden;
  z-index: 12;
}

.list-switch::before {
  content: "";
  position: absolute;
  display: inline-block;
  height: 0;
  width: 0;
  right: auto;
  top: -20%;
  border-right: 10px solid transparent;
  border-bottom: 10px solid var(--white);
  border-left: 10px solid transparent;
}

/*==== Header Right ====*/
.header-right .btn-signup {
  background-color: var(--yellow);
  padding: 10px 30px;
  margin-left: 120px;
  border-radius: 10px;
  transition: all .3s ease-in;
  font-family: NunitoRegular;
}

.header-right {
  font-family: NunitoLight;
}

.header-right .btn-signup:hover {
  background-color: var(--yellow-hover);
}

/*==== Header Right ====*/
.site-header .header-bottom {
  background: var(--secondary);
  padding-top: .8rem;
  padding-bottom: .8rem;
}

.menu {
  display: flex;
  align-items: center;
  color: var(--dark-light);
  height: 30px;
}

.menu > .menu-item {
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 1%;
  font-family: NunitoLight;
  color: var(--sombre);
  margin: 5% 10% 5% 0;
}

.menu > .menu-item,
.menu > .menu-item:after,
.menu > .menu-item:before {
  transition: all .5s;
}

.menu > .menu-item:hover {
  color: white;
}

/*.menu-item > a.router-link-active {
  font-weight: 500;
  color: var(--dark);
  background-color: var(--primary);
  padding: 20px;
}*/

.menu-item:after {
  display: block;
  position: absolute;
  border-radius: 0;
  top: -36%;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: 1px;
  content: '.';
  color: transparent;
  background: var(--grisclair);
  opacity: 0;
  z-index: -1;
  padding: 15px;
}

.menu-item:hover:after{
  opacity: 1;
  visibility: visible;
  height: 100%;
}

.header{
  position: sticky;
}

.headroom{
  will-change: transform;
  transition: transform 200ms linear;
}

.headroom--pinned{
  transform: translateY(0%);
}

.headroom--unpinned{
  transform: translateY(-100%);
}

.dislexic .header-right .btn-signup,
.dislexic .header-right,
.dislexic .menu > .menu-item {
  font-family: 'Open-Dyslexic Roman', sans-serif !important;
}

</style>