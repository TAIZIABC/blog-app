<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import NavTab from './components/NavTab'
export default {
  name: 'App',
  components:{
	NavTab
  }
}
</script>

<style>
@import "./assets/reset.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
