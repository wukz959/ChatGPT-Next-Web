<template>
  <div class="app">
    <div class="top">
      <div class="header">
        <el-avatar size="medium" :src="headImg"></el-avatar>
      </div>
      <div class="content">
        跟我说句话吧！
      </div>
    </div>
    <div class="bottom">
      <div>
        <i class="el-icon-thirdgood"></i>
        <i class="el-icon-thirdbad"></i>
      </div>
      <div class="copyDiv">
        <i class="el-icon-thirdcopy"></i>
      </div>
      <div class="refreshDiv">
        <span class="el-icon-refresh-right"></span>
        <span class="refreshWord">重新生成</span>
      </div>
    </div>
  </div>
</template>

<script>
import headImg from '@/assets/logo.png'
export default {
  data () {
    return {
      headImg: headImg
    }
  }
}
</script>

<style lang="less" scoped>
.app {
  display: flex;
  flex-direction: column;
  background-color: #1e1b25;
  border-radius: 8px;
  margin: 15px 0px;
  padding: 10px 5px;
  color: #f1f1f2;
  .top {
    display: flex;
    background-color: #1e1b25;
    .header {
      flex: 1;
      text-align: center;
      align-self: center;
    }
    .content {
      flex: 10;
    }
    .el-avatar {
      background: #1e1b25;
    }
  }
  .bottom {
    display: flex;
    justify-content: flex-end;
    .copyDiv::before{
      content: '';
      height: 50%;
      display: inline-block;
      border: 0.5px solid #dbdce7;
      margin: 0px 6px;
    }
    .copyDiv::after{
      content: '';
      height: 50%;
      display: inline-block;
      border: 0.5px solid #dbdce7;
      margin: 0px 6px;
    }
    .el-icon-thirdbad{
      margin:  0 0 0 10px;
    }
    .refreshWord{
      margin: 0 6px;
    }
  }
}
</style>
