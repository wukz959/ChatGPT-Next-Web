<template>
  <div id="app">
    <el-container>
      <vue-danmaku
        v-model="danmus"
        style="height: 100px"
        :speeds="100"
        :channels="4"
        :loop="true"
        class="barrage"
        ref="barrageKit"
      ></vue-danmaku>
      <el-main>
        <h1>创意不止，有趣至上</h1>
        <h4>愿常青树长青，愿一切都有希望</h4>
      </el-main>
      <el-footer height="220px">
        <el-input placeholder="说你想说" class="inputBox">
          <el-button slot="append" class="sendBtn">发送</el-button>
        </el-input>
        <div class="barrageBox">
          <i v-if="barrageSwitch" class="el-icon-third086tanmuclose"  @click="switched"></i>
          <i v-else class="el-icon-third087tanmuopen closeSwitch"  @click="switched"></i>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import vueDanmaku from 'vue-danmaku'
export default {
  name: 'Home',
  data () {
    return {
      danmus: [
        'danmu1',
        'danmu2',
        'danmu3',
        '...',
        '123',
        'das',
        '你好啊',
        '123',
        '...特殊字符^*',
        '你好啊',
        'AbCdEfG',
        '5aB2cE1',
        '随机内容~!',
        '9pQwR2tU',
        '随机1234',
        '^#特~?字符2',
        '中文内容测试',
        'r@nd0mStr!ng',
        '7^T特s符X!e',
        '随机ABCD',
        '0123456789',
        '中文测试数据',
        '随机$$特符',
        '1aBc2D&3E',
        '随机内容123',
        '你好World',
        '漢字測試內容',
        '9pQw!RtU'],
      barrageSwitch: true
    }
  },
  created () {},
  methods: {
    switched () {
      if (this.barrageSwitch) {
        this.$refs.barrageKit.hide()
        this.$refs.barrageKit.pause()
      } else {
        this.$refs.barrageKit.show()
        this.$refs.barrageKit.play()
      }
      this.barrageSwitch = !this.barrageSwitch
    }
  },
  mounted () {},
  components: {
    vueDanmaku
  }
}
</script>

<style lang="less" scoped>
#app {
  color: black;
  text-align: center;
  .sendBtn{
    background: linear-gradient(-27deg,#9b3c99 0%,#8f53ea 76%);
    color: white;
    border: 0px;
    outline: 1px solid #8f53ea;
  }
  .inputBox{
    width: 300px;
    margin-top: 180px;
  }
  .barrage{
    margin-top: 2px;
  }
  .barrageBox i{
    font-size: 60px;
    color: rgb(64, 158, 255);
    margin-top: 40px;
    // position: absolute;
    // bottom: 10px;
    left: 0;
    right: 0;
  }
  .barrageBox .closeSwitch{
    color: gray;
  }
}
</style>
