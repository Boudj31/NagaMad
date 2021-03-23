<template>
      <!-- <h2>Center is {{ currentCenter }} , zoom is {{ currentZoom }}</h2> -->
     <div class="container">
      <l-map
        @update:zoom="zoomUpdate"
        @update:center="centerUpdate"
        :zoom="zoom"
        :center="center"
        style="height: 600px; width: 700px"
      >
        <l-tile-layer :url="url" :attribution="attribution" />

        <!-- Create HTML icon (divIcon) by providing content inside the l-icon tag -->
    
        <l-marker
          @mouseover="mouseOver(index)"
          @mouseleave="mouseLeave(index)"
          v-bind:key="index"
          v-for="(brew, index) in brews"
          :lat-lng="[brew.latitude, brew.longitude]"
        >
          <l-icon :icon-size="brew.iconSize" :icon-url="icon"> </l-icon>
          <l-popup>
              <h5>{{brew.name}}</h5>
              <span> {{ brew.state }}, {{brew.city}} </span>
          </l-popup>
        </l-marker>
      </l-map>
     </div>
</template>

<script>
import livres from "../../assets/livres.png";

import { LMap, LTileLayer, LMarker, LIcon, LPopup } from "vue2-leaflet";
import { latLng } from "leaflet";

export default {
  name: "Map",
  props: {
    brews: Array,
  },
  components: {
    LPopup,
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
  },
  data() {
    return {
      checked: "",
      zoom: 6,
      center: latLng(35.219246, -111.622295),
      currentCenter: latLng(35.219246, -111.622295),
      currentZoom: 6,
      withPopup: latLng(35.219246, -111.622295),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      icon: livres,
      iconSize: [15, 15],
    };
  },
  computed: {
    /* category() {
            if brew.category = meuble {
                return 'meuble.png'
            }
        }  */
  },
  methods: {
    mouseOver(index) {
      this.$emit("mouse-over-brew", index);
    },
    mouseLeave(index) {
      this.$emit("mouse-left-brew", index);
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },

    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
  },
};
</script>

<style>
</style>
