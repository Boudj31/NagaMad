import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import Login from "@/views/Login";
import Register from "@/views/Register";
import Annonce from './views/Annonce'
import Result from './views/Result';
import Create from "@/views/Create";
import Profil from "@/views/Profil";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', name: "home", component: Home, alias: '/home'},
        {path: '/login',  name: "login", component: Login},
        {path: '/result', name: "result", component: Result},
        {path: '/register', name: "register", component: Register},
        {path: '/new', name: "new", component: Create},
        {path: '/profil', name: "profil", component: Profil},
        {path: '/annonce/:idAnnonce', props: true,  name: 'annonce', component: Annonce},
    ]
})

export default router;