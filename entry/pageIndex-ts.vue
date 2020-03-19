<template>
  <div class="index">
    <header class="header">
      <h1>页面导航 | Page navigation</h1>
    </header>
    <div class="tips">
      <h4>共有 {{ $pagesInfo.length }} 个页面</h4>
    </div>
    <div class="pageIndex">
      <div
        class="page"
        v-for="(page, index) in [...$pagesInfo]"
        :key="index"
        @click="$page.push({ name: page.name})"
      >
        <h2>{{page.title}}</h2>
        <p>name: {{page.name}}</p>
        <p>path: {{page.path}}</p>
        <p>
          htmlpath:
          <span class="links">{{page.htmlPath}}.html</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { VueAPICloud } from 'vue-apicloud-quickstart'

/**
 * 页面导航，仅用于 PC 浏览器端调试，构建打包时将会忽略该页面
 * Page navigation, only used for PC browser debugging, this page will be ignored when building packaging
 */

@VueAPICloud
@Component
export default class PageIndex extends Vue {}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #eeeeee;
}
.header {
  padding: 10px;
  color: #2c3e50;
  background-color: #41b883;
}
.header h1 {
  font-size: 18px;
}
.tips {
  padding-left: 10px;
  color: #2c3e50;
}
.pageIndex {
  padding: 10px;
  display: flex;
  flex-flow: row wrap;
}
.page {
  min-width: 20%;
  margin: 10px;
  padding: 10px;
  background-color: rgb(174, 188, 201);
  color: #2c3e50;
  transition: all 500ms;
}
.page:hover {
  cursor: pointer;
  background-color: #2c3e50;
  color: #eeeeee;
}
.page h2 {
  margin: 5px 0;
}
.page p {
  margin: 2px;
}
.links {
  color: #007acc;
}
@media screen and (max-width: 400px) {
  .page {
    width: 100%;
  }
}
</style>
