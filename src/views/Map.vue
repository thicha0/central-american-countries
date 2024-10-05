<template>
  <div>
    <CentralAmericaSVG @countrySelected="showCountry" />
    <div v-if="title">
      <div id="countryTitle">
        <img :src="flag" :alt="'Flag of ' + title" />
        <h1>{{ title }}</h1>
      </div>
      <expand-component :items="items" width="90vw" height="80vh" />
    </div>
    <h1 v-else style="display: none">
      Map
    </h1>
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
    async showCountry(country) {
      if (!country) {
        return
      }
      try {
        const data = await import(/* @vite-ignore */"@/data/" + country + ".json")
        this.title = data.default.countryName
        this.flag = "https://flagsapi.com/" + data.default.countryCode.toUpperCase() + "/flat/64.png"
        this.items = data.default.data
      } catch(e) {
        console.log(e)
        this.title = null
        this.flag = ''
        this.items = null
      };
      this.countrySelected = country;
    },
  },
};
</script>
