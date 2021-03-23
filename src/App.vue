<template>
  <img class="avatar" :src="userInfo.avatar" />
  <h1>我的名字叫 {{ userInfo.name }}</h1>

  <button v-if="!loginStatus" @click="handleLogin">登录</button>
  <div v-else>
    <button @click="handleChange">更改身份</button>
    <button @click="handleLogout">退出</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'App',
  setup() {
    const store = useStore()
    const loginStatus = computed(() => store.getters.loginStatus)
    const userInfo = computed(() => store.getters.userInfo)

    // 登录
    const handleLogin = () => {
      store.dispatch('setLoginStatus', 1)
      store.dispatch('setUserInfo', {
        name: '小明',
        avatar: require('@/assets/logo.png')
      })
    }
    // 更改身份
    const handleChange = () => {
      store.dispatch('setUserInfo', {
        name: Math.random()
          .toString(16)
          .slice(2),
        avatar: require('@/assets/logo.png')
      })
    }
    // 退出
    const handleLogout = () => {
      store.dispatch('setLoginStatus', 0)
      store.dispatch('setUserInfo', {})
    }

    return {
      loginStatus,
      userInfo,
      handleLogout,
      handleLogin,
      handleChange
    }
  }
}
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
#app .avatar {
  width: 60px;
  border-radius: 50%;
}
#app button {
  width: 120px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  background-color: #409eff;
  color: #fff;
  border: 0;
  cursor: pointer;
  margin-right: 20px;
}
#app button:focus {
  border: 0;
  outline: 0;
}
</style>
