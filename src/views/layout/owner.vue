<template>
  <div class="app">
    <div class="container">
      <div class="main">
        <div class="openSource">
          <h2 class="openSide"><div>开源作品</div></h2>
          <div class="openZone">
            <div class="openTitle flexCenter"><div>iec104-protocol</div></div>
            <div class="openContent">
              “最简单的接入实现最高效的运行”。iec104-protocol基于net.Socket 实例实现双工流接口，对海量二进制数据进行语法解析与规则转换，让调用者专注于数据的使用，而不用考虑数据流的转换细节你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊。。
            </div>
            <div class="openFooter flexCenter">日期 - 落款</div>
          </div>
        </div>
        <BlogNotes></BlogNotes>
        <BlogNotes></BlogNotes>
        <BlogNotes></BlogNotes>
        <BlogNotes></BlogNotes>
        <BlogNotes></BlogNotes>
      </div>
    </div>
  </div>
</template>

<script>
import BlogNotes from '@/components/BlogNotes'
import { testReq } from '@/api/owner'
export default {
  name: 'Owner',
  async created () {
    const res = await testReq()
    console.log(res)
  },
  components: {
    BlogNotes
  }
}
</script>

<style lang="less" scoped>
  .app{
    .main{
      display: flex;
      flex-direction: column;
      padding: 3vh 18vw;
      border-radius: 2px;
      .openSource{
        height: 180px;
        background: #2c2635;
        display: flex;
        opacity: 0.9;
        border-radius: 2px;
        .openSide{
          color: #e3c8f9;
          width: 15%;
          padding: 7px 0px;
          font-weight: lighter;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin: 0 2 0 0;
        }
        .openSide div{
          width: 2em;
          text-align: center;
          border-right: 2px solid #36363a;
        }
        .openZone{
          display: flex;
          flex-direction: column;
          color: #ffffff;
          .openTitle{
            flex: 1;
            font-size: large;
            border-bottom: 1px solid #36363a;
          }
          .openContent{
            margin: 10px 0;
            color: #888890;
            overflow: hidden;//多出的隐藏
            text-overflow: ellipsis;//多出部分用...代替
            display: -webkit-box;//定义为盒子模型显示
            -webkit-line-clamp: 2;//用来限制在一个块元素显示的文本的行数
            -webkit-box-orient: vertical;//从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
            // word-break: keep-all;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .openFooter{
            flex: 1;
            color: #d2d2da;
            border-top: 1px solid #36363a;
          }
        }
      }
      .flexCenter{
        display: flex;
        align-items: center;
      }
    }
  }
</style>
