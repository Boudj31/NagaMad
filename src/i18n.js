import VueI18n from 'vue-i18n';
import Vue from 'vue';

import fr from './assets/i18n/fr.json';
import en from './assets/i18n/en.json';
import es from './assets/i18n/es.json';


Vue.use(VueI18n);

const language =  new VueI18n({
    locale: localStorage.getItem('lang') || 'fr',
    messages: {
        fr: fr,
        en: en,
        es: es
    }
})

export default language;