<template>
  <div>
    <CentralAmericaSVG @country-selected="showCountry" />
    <div v-if="title">
      <div id="countryTitle">
        <img
          :src="flag"
          :alt="'Flag of ' + title"
        >
        <h1>{{ title }}</h1>
      </div>
      <expand-component
        :items="items"
        width="90vw"
        height="80vh"
      />
    </div>
    <h1
      v-else
      style="display: none"
    >
      Map
    </h1>
  </div>
</template>

<script>
import CentralAmericaSVG from "@/components/CentralAmericaSVG.vue";
import ExpandComponent from "@/components/Expand.vue";
import * as dataFiles from "@/data/index.js";

export default {
  name: "CentralAmericaMap",
  components: {
    CentralAmericaSVG,
    ExpandComponent,
  },
  data () {
    return {
      title: null,
      items: null,
      flag: '',
      data: []
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
      if (!country) {
        this.title = null
        this.flag = ''
        this.items = null
        return
      }
      try {
        const data = dataFiles[country];
        if (!data) {
          throw new Error(`No data found for ${country}.`)
        }
        this.title = data.countryName
        this.flag = "https://flagsapi.com/" + data.countryCode.toUpperCase() + "/flat/64.png"
        this.items = data.data
      } catch(e) {
        console.error(e);
        this.title = null
        this.flag = ''
        this.items = null
      };
      this.countrySelected = country;
    },
  },
};
</script>
