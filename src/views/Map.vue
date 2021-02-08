<template>
  <div>
    <h1>Countries of Central America</h1>
    <CentralAmericaSVG />
  </div>
</template>

<script>
import CentralAmericaSVG from '@/components/CentralAmericaSVG.vue'

export default {
  name: 'Home',
  components: {
    CentralAmericaSVG,
  },
  created () {
    var svg = document.getElementsByTagName('svg')[0]
    console.log(svg)
  },
}
</script>

<style scoped>

</style>