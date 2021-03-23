<template>
  <div class="container row" style="display: flex; flex-direction: row">
    <!-- LISTE -->
      <div class="col-6">
        <List
          @mouse-over-brew="mouseOverBrew"
          @mouse-left-brew="mouseLeftBrew"
          :brews="brews"
        />
      </div>
      <div class="col-6">
        <Map
         @mouse-over-brew="mouseOverBrew"
          @mouse-left-brew="mouseLeftBrew" 
        :brews="brews" />
      </div>
  </div>
</template>

<script>
import axios from "axios";
import Map from "./Map";
import List from "./List";

export default {
  name: "Brew",
  components: { Map, List },
  data() {
    return {
      brews: [],
      iconSize: [],
      normalIcon: [30, 30],
      largeIcon: [66, 66],
    };
  },

  mounted() {
    axios.get("https://api.openbrewerydb.org/breweries").then((r) => {
      this.brews = r.data
        .filter((r) => r.state == "Arizona")
        .map((r) => {
          r.iconSize = this.normalIcon;
          r.active = false;
          return r;
        });
    });
  },

  methods: {
      toggleActive(o) {
      o.active = !o.active;
    },
    mouseOverBrew(index) {
      this.brews[index].iconSize = this.largeIcon;
    },
    mouseLeftBrew(index) {
      this.brews[index].iconSize = this.normalIcon;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.brew-list li:hover {
  background-color: darkgrey;
}

.container {
  margin-bottom: 10%;
}
</style>
