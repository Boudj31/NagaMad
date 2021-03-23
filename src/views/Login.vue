<template>
  <form @submit.prevent="handleSubmit">
    <div class="container">

      <img class="nuage" id="nuage1" src="../assets/img/login/Union_2.svg" >
      <img class="nuage" id="nuage2" src="../assets/img/login/Union_4.svg" >
      <img class="nuage" id="nuage3" src="../assets/img/login/Union_7.svg" >
      <img class="nuage" id="nuage4" src="../assets/img/login/Union_3.svg" >
      <img class="nuage" id="nuage5" src="../assets/img/login/Union_5.svg" >

      <div class="hautDePage">
          <img id="logo" src="../assets/logo.svg" alt="Logo" />
          <h1 class="titre"> Connexion </h1>
        </div>

    <div class="form">
      <label>Identifiant</label>
      <input type="text" placeholder="Enter Email" v-model="email">
      <a> Identifiant oublié ?</a>

      <label>Mot De Passe</label>
      <input type="password" placeholder="Enter Password" v-model="password">
      <a> Mot de passe oublié ?</a>

      <button type="submit" class="registerbtn">Login</button>
    </div>
    </div>

    <div class="container signin">
      <p class="regis"><router-link :to="{name: 'register'}">S'inscrire</router-link></p>

      <ul class="footer-form-list">
        <li>Nos Autres Services</li>
        <li> Conditions d'Utilisation </li>
        <li> Foire Aux Questions</li>
      </ul>
    </div>


  </form>
</template>

<script>
import axios from "axios";
const apiURL = "http://gestdech.com/api/users";

export default {
  name: "User",
  data() {
    return{
      email: '',
      password: '',
    }

  },
  methods: {

   async handleSubmit() {
      const data = {
        email: this.email,
        password: this.password
      };
    await axios.post(apiURL, data)
      .then(
          res => {
         console.log(res)
          }
      ).catch(
          err => {
            console.log(err)
          }
      )
    }
  }
}
</script>

<style scoped>

* {box-sizing: border-box}

form {
  background-color: #8A4D42;
  position: relative;
  height: 103%;
}

/* Haut de page */
#logo{
  width: 180px;
  height: auto;
  margin: 5% 2% 2% 2%;
}

h1 {
  font-size: 65px;
}

.titre{
  line-height: 72px;
  color: var(--beige);
}

.hautDePage{
  margin: -2% 0 2% 0;
  text-align: center;
}

label {
  font-family: NunitoLight;
  margin: 1%;
  font-size: 18px;
}

/* Formulaire */

.form{
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
}

.regis{
  padding-bottom: 2%;
}


/* Full-width input fields */
input[type=text], input[type=password] {
  text-align: center;
  width: 80%;
  padding: 10px;
  margin: 5px 0 22px 0;
  border-radius: 100px;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

.form > a {
  font-family: NunitoLight;
  font-size: 16px;
  margin-bottom: 2%;
  margin-left: 55%;
  text-decoration: underline;
}

/* Set a style for the submit/register button */
.registerbtn {
  background-color: #8A4D42;
  border-radius: 0px;
  color: white;
  padding: 15px 30px;
  margin: auto;
  border: none;
  cursor: pointer;
  width: 20%;
  opacity: 0.9;
  box-shadow:  0px 5px 7px rgba(0, 0, 0, .20);
}

.registerbtn:hover {
  opacity:1;
}

/* Add a blue text color to links */
a {
  color: var(--beige);
  text-decoration: underline;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  text-align: center;
  margin-top: 2%;
}

/*  Placement des nuages */
.nuage {
  position: absolute;
  width: 40%;
  height: auto;
}

#nuage1{
  left: -10%;
  top: 2%;
}

#nuage2{
  width: 60%;
  left: -20%;
  top: 35%;
}

#nuage3{
  width: 60%;
  top: 78%;
  left: 65%;
}

#nuage4{
  width: 60%;
  left: 75%;
}

#nuage5{
  width: 50%;
  left: 60%;
  top: -65%;
  z-index: 2;
}

/* "footer" */

.footer-form{
  z-index: 100;
  width: 100%;
  height: 10px;
}

.footer-form-list{
  position: absolute;
  display: flex;
  flex-direction: row;
  align-content: space-between;
  width: 100%;
  left: 5%;

}

.footer-form-list> li{
  padding-left: 10%;
  padding-top: 2%;
  font-family: NunitoLight;
}

</style>