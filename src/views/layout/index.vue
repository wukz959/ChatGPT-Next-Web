<template>
  <div id="app">
    <div class="menuBox" ref="menuRef">
      <el-menu
      class="menu"
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
      background-color="#29292e"
      text-color="#ffffff"
      active-text-color="#d097ff"
      router
    >
      <el-menu-item disable>
        <img src="@/assets/logo.png" class="headImg" alt="logo" />
        hello-enen
      </el-menu-item>
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/gpt">ChatGpt</el-menu-item>
        <el-menu-item index="/owner">个人博客</el-menu-item>
      </el-menu>
    </div>
    <router-view class="routerView" :style="{'padding-top': navBlock}" ref="routerRef"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '/home',
      navBlock: ''
    }
  },
  mounted () {
    this.activeIndex = this.$route.path
    // 先保留着看部署上去后移动端是否还会有问题
    // this.$nextTick(() => {
    //   console.log('trick begin')
    //   this.navBlock = this.$refs.menuRef.offsetHeight + 'px'
    //   console.log('trick end', 'the value is: ', this.navBlock)
    // })
    this.navBlock = this.$refs.menuRef.offsetHeight + 'px'
    console.log('not trick: ', this.navBlock)
  },
  methods: {
    handleSelect (key, keyPath) {
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  background: fixed no-repeat center/12% url('@/assets/background.png'),linear-gradient(to bottom right, rgba(30, 29, 67,0.8), rgba(43, 29, 99,0.3));
  border-radius: 4px;
  .routerView{
    position: relative;
    min-height: 100vh;
    background: fixed no-repeat center/12% url('@/assets/background.png'),linear-gradient(to bottom right, rgba(30, 29, 67,0.8), rgba(43, 29, 99,0.3));
  }
  .is-active {
    border-bottom-color: #d097ff;
  }
  .headImg {
    height: 50%;
  }
  .el-menu{
    border-radius: 4px 4px 0 0;
  }
  .menuBox {
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 1;
    opacity: 0.9;
  }

}
</style>
