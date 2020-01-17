<template>
  <div>
    首页
  </div>
</template>

<script>
export default {
  name: "homeIndex",
  apiEvent: {
    keyback() {
      this.api.toast({
        msg: "按了返回键",
        duration: 2000,
        location: "bottom"
      })
    }
  }
};
</script>

<style lang="scss" scoped></style>
