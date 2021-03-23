<template>
  <div class="content">
    <div
      @mouseover="mouseOver(index)"
      @mouseleave="mouseLeave(index)"
      v-bind:key="index"
      v-for="(brew, index) in brews"
    >
      <ul>
        <li
          v-bind:class="{ active: brew.active }"
          v-on:click="toggleActive(brew)"
        >
          <div class="test">
          <img class="imgList" src="" width="100px" height="auto">

            <div>
          <h5>{{ brew.name }}</h5>
              <div class="brew-list test" v-if="brew.active == true">
                {{ brew.street }}, {{ brew.city }},<br> {{ brew.state }}
              </div>
              <button> Voir l'annonce </button>
            </div>
          </div>


        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    brews: Array,
  },
  data() {
    return {
    };
  },
  methods: {
      toggleActive(o) {
      o.active = !o.active;
    },
    mouseOver(index) {
      this.$emit("mouse-over-brew", index);
    },
    mouseLeave(index) {
      this.$emit("mouse-left-brew", index);
    },
  },
};
</script>
<style  scoped>
.brew-list {
  overflow-y: auto;
  margin-top: 10%;
  height: 8vh;
  font-family: NunitoLight;
  color: white;
  transition: all .5s;
  margin-left: 10%;
}

h5{
  font-size: 20px;
  margin-left: 5%;
  width: 100%;
}

.brew-list li:hover {
  background-color: darkgrey;
}

.content{
  overflow-y: auto;
  height: 600px;
}

ul {
  margin: 0 15% 15% 0;
}

.test{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.test > img{
  border-radius: 20px;
}

button{
  padding: 5%;
  border-radius: 5px;
  margin-left: 5%;
}

</style>
