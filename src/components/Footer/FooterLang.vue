<template>
  <div class="footer-top">
    <router-link to="/" class="site-logo">
      <img src="../../assets/logo.svg" alt="Logo" />
      <strong>{{ $t('web-title') }}</strong>
    </router-link>
    <div class="footer-lang">
      <!-- <div class="switch-lang">
        <span>Fr</span>
        <i class="fas fa-sort-down"></i>
      </div>
      <ul class="list-lang">
        <li class="lang" @click="switchLang(event)">En</li>
      </ul> -->
      <select v-model="lang" @change="switchLang($event)" class="switch-lang yellow">
        <option value="fr">Fr</option>
        <option value="en">En</option>
        <option value="es">Es</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
    name: 'FooterLang',
    data() {
      return {
        lang: localStorage.getItem('lang') || 'fr',
      }
    },
    methods: {
      switchLang(event) {
        localStorage.setItem("lang", event.target.value);
        window.location.reload();
      }
    },
};
</script>

<style>
.footer-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}

.footer-lang {
  position: relative;
  transition: all 0.3s ease-in-out;
}

.footer-lang:hover .list-lang {
  opacity: 1;
  -webkit-transform: translateY(0px);
  transform: translateY(0px);
  -webkit-transition: all 0.3s cubic-bezier(0.25, 1.15, 0.35, 1.15);
  transition: all 0.3s cubic-bezier(0.25, 1.15, 0.35, 1.15);
  visibility: visible;
}

.footer-lang:hover .switch-lang i {
  transform: rotate(-180deg);
}

.switch-lang {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  background: none transparent;
  border: 0 none;
  color: var(--dark);
  padding: 10px 15px;
}

.yellow {
  background-color: var(--yellow);
}

/* .list-lang {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 13px 0;
  background-color: var(--yellow);
  color: var(--dark);
  top: 72%;
  right: auto;
  opacity: 0;
  -webkit-transform: translateY(-20px);
  transform: translateY(-20px);
  -webkit-transition: all 0.3s cubic-bezier(0.25, 1.15, 0.35, 1.15);
  transition: all 0.3s cubic-bezier(0.25, 1.15, 0.35, 1.15);
  visibility: hidden;
  z-index: 12;
}

} */

@media screen and (max-width: 478px){
  .footer-top{
    justify-content: space-around;
  }
  }
</style>