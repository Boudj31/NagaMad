<template>
  <form @submit.prevent="handleSubmit">

    <img class="background" src="../assets/img/register/Soustraction_1.svg">

    <div class="container">
      <div class="hautDePage">
        <h1 class="titre"> Inscription <br> Particuliers</h1>
      <img id="logo" src="../assets/logo.svg" alt="Logo" />
      </div>

      <div class="form">
      <label>Fistname</label>
      <input type="text" placeholder="Enter Firstname" v-model="name">

   <!--  <label>Lastname</label>
      <input type="text" placeholder="Enter lastname" >
    -->
      <label>Email</label>
      <input type="text" placeholder="Enter Email" v-model="email">

      <label>Password</label>
      <input type="password" placeholder="Enter Password" v-model="password">

    <!--  <label>Repeat Password</label>
      <input type="password" placeholder="Repeat Password" >
      -->


      <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
      <button type="submit" class="registerbtn">S'inscrire</button>


    <div class="container signin">
      <p> Déjà Inscrit ? <router-link :to="{name: 'login'}">Se Connecter</router-link></p>
    </div>


        <ul class="footer-form-list">
          <li>Nos Autres Services</li>
          <li> Conditions d'Utilisation </li>
          <li> Foire Aux Questions</li>
        </ul>
      </div>

    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      name: '',
      email: '',
      password: '',
    }

  },
  methods: {
     async handleSubmit() {
      const data = {
        '_links': {
          'type': {
            'href': 'https://gestdech.com/rest/type/user/user'
          }
        },
        'name': [
          {
            'value': this.name
          }
        ],
        'mail': [
          {
            'value': this.email
          }
        ],
        'pass': [
          {
            'value': this.password
          }
        ]
      }

      const response = await axios.post('https://gestdech.com/user/register?_format=hal_json', data, {
        headers: {
          "Accept": 'application/hal+json',
          "Authorization": "Basic TUFEOmRhd2FuMzFA",
          "Content-Type": "application/hal+json",
          "X-CSRF-Token": "Qx9O-xm02Y6xsqnZRTKweN2LoUTTM42zlzsSw-LMI-g",
        },
     });
      //axios.defaults.withCredentials = true;
      console.log(JSON.stringify(response));
       this.$router.push('/login');
    }

  }
}
</script>

<style scoped>
* {box-sizing: border-box}


  form {
    background-color: #8A4D42;
    height: 100%;
    position: relative;
  }

  /* Add padding to containers */
  .container {
    padding: 0 0 0 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: space-around;
    position: relative;
    overflow: hidden;
  }

  .background {
    position: absolute;
    margin: 0;
    left: 43%;
    top: -20%;
    width: 900px;
    height: auto;
    z-index: 2;
  }

  #logo {
    width: 180px;
    height: auto;
    margin-top: 10%;
  }

  h1 {
    font-size: 72px;
  }

  .titre {
    line-height: 80px;
  }

  .hautDePage {
    margin: 20% 0 20% 0;
    text-align: center;
  }

  label {
    font-family: NunitoLight;
    margin: 1%;
  }

  .dislexic label {
    font-family: 'Open-Dyslexic Roman', sans-serif !important;
  }

  /* Full-width input fields */
  input[type=text], input[type=password] {
    width: 100%;
    padding: 8px;
    margin: 5px 0 10% 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
    border-radius: 100px;
    text-align: center;
  }

  input[type=text]:focus, input[type=password]:focus {
    background-color: #ddd;
    outline: none;
  }


  /* Set a style for the submit/register button */
  .registerbtn {
    background-color: #8A4D42;
    border-radius: 0px;
    color: white;
    padding: 15px 30px;
    margin-left: auto;
    margin-right: auto;
    border: none;
    cursor: pointer;
    width: 50%;
    opacity: 0.9;
    box-shadow: 0px 5px 7px rgba(0, 0, 0, .20);
  }

  .registerbtn:hover {
    opacity: 1;
  }

  /* Add a blue text color to links */
  a {
    color: var(--beige);
    text-decoration: underline;
  }

  /* Set a grey background color and center the text of the "sign in" section */
  .signin {
    width: 100%;
    text-align: center;
    margin-top: 2%;
    margin-left: 26%;
  }

  .form {
    margin-top: 12%;
    margin-left: 22%;
    display: flex;
    flex-direction: column;
    text-align: center;
    z-index: 3;
  }

  .footer-form-list {
    position: absolute;
    display: flex;
    flex-direction: row;
    align-content: space-between;
    width: 100%;
    left: -6%;
    top: 78%;

  }

  .footer-form-list > li {

    padding-left: 10%;
    padding-top: 2%;
    font-family: NunitoLight;
  }

@media screen and (max-width: 1025px)  {

  .background {
    left: 30%;
  }

  .form{
    margin-left: 10%;
  }


}

@media screen and (max-width: 980px){
  h1{
    font-size: 62px;
  }

  .form {
    margin-left: 14%;
  }

}

@media screen and (max-width: 880px) {

  .hautDePage{
    margin: 28% 0 20% 0;
  }

  .form {
    margin-top: 20%;
    margin-left: 10%;
  }

}

@media screen and (max-width: 768px){

  .container{
    flex-direction: column;
  }

  .background{
    transform: rotate(90deg);
    left: -30%;
    top: 16%;
    width: 152%;
  }

  .form {
    margin: -10% 5% 20% 5%;
  }

  .footer-form-list {
    top: 95%;
  }

}

@media screen and (max-width: 600px){
  .hautDePage {
    margin: 17% 0 20% 0;
  }
}

@media screen and (max-width: 450px){

  .titre {
    line-height: 61px;
  }

  h1 {
    font-size: 3em;
  }

  .background {
    left : -50%;
    top : 12%;
    width: 188%;
  }

}

</style>