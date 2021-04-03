<template>
  <div>
    <CentralAmericaSVG @countrySelected="showCountry" />
    <div v-if="this.title"> <!-- TODO change v-if -> css ? -->
      <div id="countryTitle">
        <img :src="flag" />
        <h1>{{ title }}</h1>
      </div>
      <expand-component :items="items" width="90vw" height="80vh" />
    </div>
  </div>
</template>

<script>
import CentralAmericaSVG from "@/components/CentralAmericaSVG.vue";
import ExpandComponent from "@/components/Expand.vue";

export default {
  name: "Home",
  components: {
    CentralAmericaSVG,
    ExpandComponent,
  },
  data() {
    return {
      title: null,
      items: null,
      flag: null,
    };
  },
  computed: {
    capitalizedTitle() {
      return (
        this.countrySelected[0].toUpperCase() +
        this.countrySelected.substring(1)
      );
    },
  },
  methods: {
    showCountry(country) {
      import("@/data/" + country + ".json").then(data => {
        this.title = data.default.countryName
        this.flag = "https://www.countryflags.io/" + data.default.countryCode + "/flat/64.png"
        this.items = data.default.data
      }).catch(() => {
        this.title = null
        this.flag = null
        this.items = null
      });
      this.countrySelected = country;
    },
  },
};
</script>

<style scoped>
</style>