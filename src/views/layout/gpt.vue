<template>
  <div class="app">
    <div class="container">
      <el-main>
        <DialogBox></DialogBox>
        <DialogBox></DialogBox>
        <DialogBox></DialogBox>
        <DialogBox></DialogBox>
        <DialogBox></DialogBox>
      </el-main>
      <div class="footerDiv">
        <textarea placeholder="输入看看" class="textareaSty" maxlength=500 rows="3"></textarea>
        <div class="btnBox">
            0/500<el-button type="primary" icon="el-icon-thumb" size="medium" circle></el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DialogBox from '@/components/DialogBox'
export default {
  name: 'Gpt',
  components: {
    DialogBox
  }
}
</script>

<style lang="less" scoped>
#app {
  color: white;
  text-align: center;
  .container{
    position: fixed;
    width: 100% ;
    display: flex;
    flex-direction: column;
    .el-main{
      width: 50%;
      overflow: scroll;
      overflow-x: hidden;
      border-radius: 5px;
      padding: 0px;
      align-self: center;
      top: 0px;
      margin-top: 10px;
      height: 55vh;
    }
    .footerDiv{
      background-color: #1e1b25;
      border-radius: 5px;
      width: 50%;
      padding: 8px;
      align-self: center;
      margin: 30px 0 100px 0;
      bottom: 0px;
    }
    .textareaSty{
      width: 100%;
      border: none;
      outline: none;
      resize: none;
      min-height: 42px;
      max-height: 150px;
      background-color: #1e1b25;
    }
    .btnBox{
      border: 0px;
      height: 40px;
      color: #b5b5b5;
    }
    .btnBox .el-button{
      float: right;
      margin: 0px 20px 0 0;
      background: linear-gradient(-27deg,#9b3c99 0%,#8f53ea 76%);
      border: 0px;
    }
  }
}
</style>
