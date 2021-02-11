<template>
  <div>
    <CentralAmericaSVG @countrySelected="showCountry" />
    <div v-if="this.countrySelected"> <!-- TODO change v-if -> css ? -->
      <h1>{{ capitalizedTitle }}</h1>
      <expand-component :items="items" width="90vw" height="80vh" />
    </div>
  </div>
</template>

<script>
import CentralAmericaSVG from "@/components/CentralAmericaSVG.vue";
import ExpandComponent from "@/components/Expand.vue";

import belize from "@/data/belize.json";
import costarica from "@/data/costarica.json";
import guatemala from "@/data/guatemala.json";
import honduras from "@/data/honduras.json";
import nicaragua from "@/data/nicaragua.json";
import panama from "@/data/panama.json";
import salvador from "@/data/salvador.json";

export default {
  name: "Home",
  components: {
    CentralAmericaSVG,
    ExpandComponent,
  },
  data() {
    return {
      countrySelected: null,
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
      switch (country) {
        case "belize":
          this.items = belize;
          break;
        case "costarica":
          this.items = costarica;
          break;
        case "guatemala":
          this.items = guatemala;
          break;
        case "honduras":
          this.items = honduras;
          break;
        case "nicaragua":
          this.items = nicaragua;
          break;
        case "panama":
          this.items = panama;
          break;
        case "salvador":
          this.items = salvador;
          break;
      }
      this.countrySelected = country;
    },
  },
};
</script>

<style scoped>
</style>