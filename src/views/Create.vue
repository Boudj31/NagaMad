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
    category: ''

  }
 } ,

  methods: {
   async createNewAnnonce() {
      let data = {

        _links: {
          type: {
            href: "http://gestdech.com/rest/type/node/annonce",
          },
        },
        type : [
          {
            target_id : "annonce"
          }
        ],
        title: [
          {
            value: this.title,
          },
        ],
        field_content: [
          {
            value: this.content,
          },
        ],
        field_phone: [
            {
          value: this.phone,
            },
        ],
        field_mail: [
          {
            value: this.mail,
          },
        ],
        field_website: [
          {
            value: this.website,
          },
        ],

      };
     const response = await axios.post("http://gestdech.com/node?_format=hal_json", data,
          {
            headers: {
              "Authorization": "Basic TUFEOmRhd2FuMzFA",
              "Content-Type": "application/hal+json",
              "X-CSRF-Token": "Qx9O-xm02Y6xsqnZRTKweN2LoUTTM42zlzsSw-LMI-g", // rest/session/token
            },
          }
      );
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