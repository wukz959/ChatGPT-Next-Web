<template>
  <div class="app">
    <div class="container">
      <h2 class="header">aqs锁原理</h2>
      <div class="content"> 如果盒子里只有一个元素，且该元素并没有占据全部空间，则盒子里将被视为>=2个元素，即被元素分隔开的剩余部分也将被视为元素。但实际移动只有元素，剩余空间不参与移动；如下图，盒子被划分为左边（图片）和右边（剩余部分）两个元素，即有两列，此时用justify-items: center；将不起作用，因为主轴被两个元素塞满了，得用将元素那列移动到中间。</div>
      <div class="footer">Posted on <span>2023-11-15</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 10
    }
  },
  methods: {
    load () {
    }
  }
}
</script>

<style lang="less" scoped>
.app {
  .container{
    height: 150px;
    background: #2c2635;
    opacity: 0.9;
    margin: 15px 0;
    padding: 4px 15px;
    border-radius: 8px;
    .header{
      color: #ffffff;
      margin: 8px 0 0 0;
    }
    .content{
      margin: 10px 0;
      padding: 0 10px 0 0;
      color: #888890;

      overflow: hidden;//多出的隐藏
      text-overflow: ellipsis;//多出部分用...代替
      display: -webkit-box;//定义为盒子模型显示
      -webkit-line-clamp: 2;//用来限制在一个块元素显示的文本的行数
      -webkit-box-orient: vertical;//从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
      word-break: keep-all;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .footer{
      color: #d2d2da;
      font-size: large;
    }
  }
}
</style>
