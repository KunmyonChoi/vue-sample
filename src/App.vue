<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <HelloWorld msg="Hello Vue in CodeSandbox!"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import ABC from "./components/ABC";

ABC.setPI(3.15);

console.log(ABC.PI);

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
