<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <FluidNewComponent/>
  <MyButton />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FluidNewComponent from './components/FluidNewComponent.vue';
import MyButton from './components/MyButton.ce.vue'

import { fluid } from './fluid';
export default {
  name: 'App',
  components: {
    HelloWorld,
    FluidNewComponent,
    MyButton
  }
}
let env = fluid.environments.external;
fluid.init(env);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
