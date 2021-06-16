<template>
  <div class="container">
    <h1 style="font-size: 40px">Cree une nouvelle anonce ici</h1> <br><br>

      <form class="form-control">
      <label>Titre</label><br>
      <input type="text" v-model="title"/><br>

      <label>Description</label><br>
      <input type="text" v-model="content"/><br>

    <label>Email</label><br>
       <input type="email" v-model="mail"/><br>

    <label>Téléphone</label><br>
       <input type="text" v-model="phone"/><br>

    <label>Site web</label><br>
       <input type="text" v-model="website"/><br>


        <label >Catégorie </label>
        <select name="" id="categorie" v-model="category">
          <option value="Categorie">-- Catégorie --</option>
          <option value="Tous">Tous</option>
          <option value="Meuble">Meuble</option>
          <option value="Materiaux">Matériaux de construction</option>
          <option value="Electronique">Electronique</option>
          <option value="Electrique">Electrique</option>
          <option value="Bureau">Bureau</option>
          <option value="Bois">Bois</option>
          <option value="Dechet">Dechet</option>
          <option value="Mobilier">Mobilier</option>
          <option value="Vetement">Vetement</option>
        </select><br>

        <label>Quantité</label><br>
        <input type="text" v-model="quantity"/><br>

        <label>Image</label><br>
        <input type="text" v-model="poster"/><br>

        <label>Adresse</label><br>
        <input type="text" v-model="adress"/><br>

      </form>

    <button  @click.prevent="createNewAnnonce" class="btn btn-success">Add Annonce</button>
  </div>


</template>

<script>
import axios from "axios";

export default {
name: "Create",
 data() {
  return {
    title: '',
    content: '',
    mail: '',
    phone: '',
    website: '',
    adress: '',
    category: '',
    quantity: '',
    poster: ''

  }
 } ,

  methods: {
   async createNewAnnonce() {
      let data = {
        title: this.title,
        content: this.content,
        phone: this.phone,
        website: this.website,
        mail: this.mail,
        adress: this.adress,
        categorie: this.category
      };
     const response = await axios.post("http://127.0.0.1:8000/api/annonces", data,);
     this.title = '';
     console.log(response);




    },

  },


}
</script>

<style scoped>

form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  margin-bottom: 90px;
}

.form-control {
  display: flex;
  width: 50%;
  margin-bottom: 20px;
}

form input {
  width: 60%;
  margin-right: 2%;
}

form input,
form select {
  padding: 13px 20px;
  border-radius: 37px;
  border: none;
}

.btn {
  border-radius: 13px;
  background-color: var(--orange);
  border: none;
  color: var(--white);
  padding: 15px 30px;
  font-size: 14px;
  margin-bottom: 90px;
}

</style>