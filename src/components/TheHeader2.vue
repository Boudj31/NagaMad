<template>
  <div class="header-bottom header">
    <div class="container">
      <nav class="site-nav">
        <ul class="menu2">
          <li class="menu2-item">
            <router-link to="/">Accueil</router-link>
          </li>
          <li class="menu2-item">
            <router-link to="/result">Annonce</router-link>
          </li>
          <li class="menu2-item">
            <router-link to="/contacts">Contacts</router-link>
          </li>
          <li class="menu2-item">
            <router-link to="/annonce/1">Qui-Sommes-Nous ?</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
name: "TheHeader2"
}
</script>

<style scoped>

/*==== Header Right ====*/
.site-header .header-bottom {
  background: var(--secondary);
  padding-top: .8rem;
  padding-bottom: .8rem;
}

.header{
  z-index: 1;
}

.menu2 {
  display: flex;
  align-items: center;
  color: var(--dark-light);
  height: 30px;
}

.menu2-item{
  margin: 5% 10% 5% 0;
}

.menu2 > .menu2-item a {
  text-align: center;
  position: relative;
  z-index: 1;
  font-family: NunitoLight;
  color: var(--beige);
}

.menu2 > .menu2-item > a,
.menu2 > .menu2-item > a:after,
.menu2 > .menu2-item > a:before {
  transition: all 2s;
}

.menu2 > .menu2-item > a:hover{
  color: var(--sombre);
  z-index: 1;
}

/*.menu-item > a.router-link-active {
  font-weight: 500;
  color: var(--dark);
  background-color: var(--primary);
  padding: 20px;
}*/

.menu2-item > a:after {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 0%;
  content: '.';
  color: transparent;
  background-color: var(--beige);
  height: 0;
}

.menu2-item > a:after {
  text-align: left;
  content: '.';
  margin: 0;
  opacity: 0;
}

.menu2-item > a:hover:after{
  z-index: -10;
  animation: fill 1s forwards;
  -webkit-animation: fill 1s forwards;
  -moz-animation: fill 1s forwards;
  opacity: 1;
}


.header{
  position: sticky;
  background: linear-gradient(-180deg, #743F35 0%, #8A4D42 100%);
  padding-top : 1%;
  height: 52px;
  box-shadow: 0 24px 31px rgba(0,0,0, .2);
}

@-webkit-keyframes fill {
  0% {
    width: 0%;
    height: 1px;
  }
  50% {
    width: 100%;
    height: 1px;
  }
  100% {
    width: 100%;
    height: 100%;
    background: var(--beige);
  }
}
</style>