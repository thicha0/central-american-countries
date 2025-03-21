<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head';

// Set meta tags and title dynamically
useHead({
  title: 'Central American Countries',
  htmlAttrs: {
    lang: 'en-US',
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'description', content: 'Learn 5 things about each Central American country' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
});
</script>
