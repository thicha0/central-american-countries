<template>
  <div id="app">
    <router-view/>
    <div id="footer">
      <router-link to="/">🗺️ Map</router-link>
      <a href="#">💾 Repository</a>
      <router-link to="/about">❓ About</router-link>
      Made with ❤️
    </div>
  </div>
</template>

<style>
body {
  background-color: #f2f7f5;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#footer {
  position: fixed;
  bottom: 2%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 100%;
}

#footer a {
  font-weight: bold;
  color: #001e1d;
  text-decoration: none;
  margin: 0 1%;
}

#footer a.router-link-exact-active {
  border-bottom: 1px solid #001e1d;
}
</style>
