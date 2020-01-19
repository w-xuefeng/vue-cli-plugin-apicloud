<template>
  <div class="app flex-column-center">
    <div class="app-adverting flex-column-center">
      <div class="app-adverting-cover flex-center">
        <div class="app-adverting-cover-va flex-center">
          <div class="common-cover app-adverting-cover-va-0"></div>
          <div class="common-cover app-adverting-cover-va-1"></div>
          <div class="common-cover app-adverting-cover-va-2"></div>
          <div class="common-cover app-adverting-cover-va-3"></div>
        </div>
        <div class="app-adverting-cover-q flex-center">
          <div class="common-cover app-adverting-cover-q-1"></div>
          <div class="common-cover app-adverting-cover-q-2"></div>
        </div>
      </div>
      <div class="app-adverting-text flex-center">
        <span class="app-adverting-text-vue">Vue</span>
        <span>与</span>
        <span class="app-adverting-text-apicloud">apicloud</span>
        <span>齐飞， web 共 原生一色！</span>
      </div>
    </div>
    <div class="app-logo flex-center">
      <img alt="app-logo" src="res/img/logo.png" height="80%" />
      <span class="app-logo-text">Vue-APICloud-Quickstart</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}
</style>
<style lang="scss" scoped>
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-column-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.common-cover {
  width: 20px;
  height: 150px;
  border-radius: 20px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  overflow: hidden;
}

.app-adverting {
  height: 90%;
  width: 100%;
  background-color: #ffffff;
}

.app-adverting-cover {
  width: 100%;
  height: 30vh;
  margin-left: 20px;
}

.app-adverting-cover-va {
  width: 50%;
  height: 100%;
}

.app-adverting-cover-va-0 {
  background-color: #42b983;
  transform: rotate(-25deg);
  margin-right: 40px;
}

.app-adverting-cover-va-1 {
  background-color: #42b983;
  transform: rotate(25deg);
}

.app-adverting-cover-va-2 {
  background-color: #95ba1f;
  transform: rotate(-25deg);
  margin-left: 40px;
}

.app-adverting-cover-va-3 {
  height: 80px;
  margin-left: -50px;
  background-color: #35495e;
  transform: rotate(-90deg);
}

.app-adverting-cover-q {
  width: 50%;
  height: 100%;
}

.app-adverting-cover-q-1 {
  left: 20px;
  width: 62px;
  height: 100px;
  background-color: transparent;
  border: 20px solid #2196f3;
}

.app-adverting-cover-q-2 {
  margin-top: 100px;
  margin-left: -30px;
  height: 90px;
  background-color: #2196f3;
  transform: rotate(-25deg);
}

.app-adverting-text {
  color: #2196f3;
  margin-top: 30px;
  transition: all 300ms;
}

.app-adverting-text-vue {
  color: #42b983;
  margin: 0 5px;
}

.app-adverting-text-apicloud {
  color: #95ba1f;
  margin: 0 5px;
}

.app-logo {
  height: 10%;
  width: 100%;
  background-color: #f6f6f6;
}

.app-logo-text {
  color: #0d8c79;
  margin-left: 10px;
  font-size: 18px;
}

@media screen and (min-width: 400px) {
  .app-adverting-text {
    font-size: 20px;
    transition: all 300ms;
  }
}

@media screen and (min-width: 500px) {
  .app-adverting-text {
    font-size: 26px;
    transition: all 300ms;
  }
}
</style>
