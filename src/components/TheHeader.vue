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
        <div class="header-right">
          <a href="/login">Connexion</a>
          <a href="/register" class="btn-signup">Inscription</a>
          <!-- <router-link :to="{name: 'login'}">Connexion</router-link> -->
          <!-- <router-link :to="{name: 'register'}" class="btn-signup">Inscription</router-link> -->
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <i class="fa fa-chevron-circle-down" id="menu-button" aria-hidden="true" @click="down = !down"></i>
      <div class="container">
        <nav class="site-nav">
          <ul v-if="down === true" class="menu">
            <li  class="menu-item">
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
    mode: String,
    font: String,
    switchTheme: { type: Function },
    switchFont: { type: Function }
  },

  data() {
    return {
      darkMode: false,
      limitPosition: 250,
      scrolled: false,
      lastPositon: 0,
      down: true,
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

    /* Mettre la topbar en fixed
    /* ---------------------------------------------------------- */
    menuScroll() {
      const siteHeader = document.querySelector('.header');
      const siteTopbar = document.querySelector('.header-bottom');
      const siteTopbar2 = document.querySelector('.header-top');

      if (window.scrollY > 105) {
        siteTopbar.style.position = "fixed";
        siteTopbar2.style.transform = "translateY(-105px)";
        siteHeader.style.position = "fixed";
        siteTopbar.style.zIndex = "10";
      } else {
        siteTopbar.style.position = "relative";
        siteTopbar2.style.transform = "translateY(0px)";
        siteTopbar.style.zIndex = "10";
        siteHeader.style.position = "relative";
      }
    },
    
    downsize(){
      console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
    },
  },
  
  created() {
    window.addEventListener("scroll", this.menuScroll);
  },

  destroyed() {
    window.addEventListener("scroll", this.menuScroll);
  },
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
  color: var(--white-hf);
  width: 100%;
  z-index: 10;
  transition: all 300ms ease-in-out;
}

.flex {
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.site-header .header-top {
  position: relative;
  background: var(--grisclair-hf);
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  transition: display .3s ease-in-out;
  z-index: 12;
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
  background-color: var(--sombre-hf);
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
  background-color: var(--white-hf);
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
  border-bottom: 10px solid var(--white-hf);
  border-left: 10px solid transparent;
}

/*==== Header Right ====*/
.header-right .btn-signup {
  background-color: var(--orange-hf);
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
  background-color: var(--orange-hover-hf);
}

#menu-button{
  display: none;
  transition-duration: .5s;
}

/*==== Header Right ====*/
.site-header .header-bottom {
  position: relative;
  width: 100%;
  background: var(--beige-hf);
  padding-top: .8rem;
  padding-bottom: .8rem;
  z-index: 10;
  transition: all .5s;
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
  color: var(--sombre-hf);
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
  background: var(--grisclair-hf);
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
  position: relative;
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

@media only screen and (max-width: 768px){
  .header-bottom .site-nav .menu{
    text-align: center;
    flex-direction: column;
    height: 80vh;
    width: 100%;
  }

  .header-top .flex {
    flex-direction: column;
  }

  .header-bottom .site-nav .menu li{
    margin-right: 0;
    width: 100%;
  }

  #menu-button{
    display: block;
    text-align: center;
    font-size: 30px;
  }

  #menu-button:after,
  #menu-button:visited{
    transform: rotate(180deg);
  }

  #menu-button:active,
  #menu-button:before{
    transform: rotate(-180deg);
  }

  .header-right{
   margin-top: -2%;
  }

  .site-logo strong{
    display: none;
  }

  .site-logo{
    margin-bottom: 5%;
  }

  .header {
    width: 100%;
  }

  .header-right a {
    font-size: 1em;
  }
}

</style>