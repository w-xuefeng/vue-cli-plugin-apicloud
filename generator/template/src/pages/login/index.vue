<template>
  <div class="login flex-column-center">
    <h1 class="login-title">Welcome VAQ</h1>
    <div class="login-form flex-column-center">
      <input class="login-form-input" type="text" placeholder="请输入用户名" v-model="user">
      <div class="login-form-tip">用户名:任意非空字符串</div>
      <input class="login-form-input" type="password" placeholder="请输入密码" v-model="password">
      <div class="login-form-tip">密码:123456</div>
      <div class="login-form-btn" @click="login">{{ loading ? '正在登录中...' : '登录' }}</div>
    </div>
  </div>
</template>

<script>
import { Base64 } from 'js-base64'

export default {
  name: 'login',
  data () {
    return {
      user: '',
      password: '',
      loading: false
    }
  },
  computed: {
    type () {
      if (typeof api !== 'undefined') {
        return [
          this.api.systemType,
          this.api.systemVersion,
          this.api.deviceName,
          this.api.deviceModel,
          this.api.connectionType
        ].join(' ')
      }
      return `PC ${navigator.userAgent}`
    }
  },
  methods: {
    initRequest () {
      const _this = this
      this.$req.setBaseUrl('https://api.wangxuefeng.com.cn/')
      this.$req.interceptor = function () {
        // 请求拦截器
        // 在发起请求前执行
        this.requestOptions.headers = {
          ...this.requestOptions.headers,
          'Authorization': Base64.encode(`${Math.random() * 1000}V${Math.floor(new Date().getTime() / 1000)}A${_this.user}Q`)
        }
        return true
        // 返回值觉得是否发起请求
        // 返回 true 继续发送请求
        // 返回 false 拦截请求，取消发送
      }
      this.$req.handleError = function (err) {
        // 公共错误处理
        console.log(err)
      }
    },
    saveUserInfo (userinfo) {
      this.$api.setStorage('userinfo', userinfo)
    },
    login () {
      if (this.loading) return
      if (!this.user.trim()) {
        this.$toast({ msg: '用户名不能为空', location: 'middle' })
        return
      }
      if (!this.password.trim()) {
        this.$toast({ msg: '密码不能为空', location: 'middle' })
        return
      }
      this.loading = true
      this.initRequest()
      this.$req
        .post(`vaq/?t=${Base64.encodeURI(this.type)}`, {
          username: this.user,
          password: this.password
        })
        .then(rs => {
          this.loading = false
          if (rs.status) {
            this.$toast({ msg: '登录成功' })
            this.saveUserInfo(rs.data)
            this.$page.push({ name: 'home' })
          } else {
            this.$toast({ msg: rs.msg })
          }
        })
        .catch(err => {
          this.loading = false
          console.log(err)
        })
    }
  },
  onReady () {
    this.$bindKeyBackExitApp()
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}
</style>
<style scoped>
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.flex-column-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: linear-gradient(45deg, #42b983, #2196f3);
}

.login-title {
  color: #ffffff;
}

.login-form {
  width: 90%;
  max-width: 300px;
  margin: 20px auto;
}

.login-form-input {
  outline: none;
  height: 30px;
  width: 100%;
  margin: 10px;
  border: none;
  background: transparent;
  color: #ffffff;
  border-bottom: 1px solid #ffffff;
}

.login-form-tip {
  width: 100%;
  text-align: left;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.65)
}

.login-form-btn {
  padding: 5px 0;
  height: 34px;
  width: 100%;
  line-height: 34px;
  text-align: center;
  border: 1px solid #ffffff;
  color: #ffffff;
  user-select: none;
  cursor: pointer;
  margin: 20px;
  border-radius: 34px;
}
</style>
