<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default ({
  metaInfo: {
    title: 'Central American Countries',
    htmlAttrs: {
      lang: 'en-US'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Learn 5 things about each central american country' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  mounted() {
    document.title = 'Central American Countries'
  },
})
</script>
