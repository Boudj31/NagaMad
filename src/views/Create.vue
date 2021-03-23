<template>
  <div>
    Cree une nouvelle anonce ici <br><br>

      <form>
      <label>Titre</label><br>
      <input type="text" v-model="title"/><br>

      <label>Description</label><br>
      <input type="text" v-model="content"/>
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
    content: ''

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
            value: "new",
          },
        ],
        field_content: [
          {
            value: "new",
          },
        ],

      };
     const response = await axios.post("http://gestdech.com/entity/node?_format=json", data,
          {
            headers: {
              "Authorization": "Basic TUFEOmRhd2FuMzFA",
              "Content-Type": "application/hal+json",
              "X-CSRF-Token": "Qx9O-xm02Y6xsqnZRTKweN2LoUTTM42zlzsSw-LMI-g", // rest/session/token
            },
          }
      );
     console.log(response);



    },

  },


}
</script>

<style scoped>

</style>