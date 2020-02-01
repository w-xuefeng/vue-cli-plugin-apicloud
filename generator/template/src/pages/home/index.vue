<template>
  <div class="home" @click="proxyClick">
    <img alt="Vue logo" src="res/img/logo.png" width="50%" />
    <HelloWorld msg="Welcome to Your Vue.js App with APICloud" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    proxyClick (event) {
      const { target } = event
      if (target.tagName === 'A') {
        event.preventDefault()
        this.$page.open(this.$n2p('web'), {
          name: `web-window-${target.href}`,
          pageParam: {
            name: `web-frame-${target.href}`,
            url: target.href
          }
        })
      }
    }
  },
  onReady () {
    this.$bindKeyBackExitApp()
  }
}
</script>

<style lang="scss">
.home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  img {
    max-width: 300px;
  }
}
</style>
