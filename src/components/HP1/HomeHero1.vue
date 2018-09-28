<style lang="scss">
.banner{
  position: relative;

   .home-hero-control-next{
        position: absolute;
        top: 200px;
        right:0px;
        width:41px;
        height:69px;
        cursor: pointer;
        // background:red;

        .ivu-icon{
          color: white;
          font-size: 40px;
          line-height: 69px;
        }
      }
      .home-hero-control-next:hover , .home-hero-control-prod:hover{
        background:rgba(0,0,0,.5);
      }
      .home-hero-control-prod{
        position: absolute;
        top: 200px;
        left:234px;
        width:41px;
        height:69px;
        cursor: pointer;

        .ivu-icon{
          color: white;
          font-size: 40px;
          line-height: 69px;
        }
      }

  .bannerImg{
    position: relative;
    height: 100%;
    // overflow: hidden;

    span{
      position: absolute;
      top:0px;
      left: 0px;
      }
    .active{
        transition: all 1s;
    }
  }

  .bannerBtn{
    // width: 200px;
    position: absolute;
    left: 88%;
    top: 420px;
    // margin-left: -100px;
    // bottom: 22px;
    text-align: center;

    li{
      // position: none;
      margin: 0 5px;
      // width: 20px;
      // height: 20px;
      // border-radius: 50%;
      float: left;
      // background: rgba(255,255,255,.3);

      a{
        display: block;
        margin: 0 5px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border:2px solid rgba(255,255,255,.3);
        margin: 3px;
        background: rgba(0,0,0,.4);
        transition: all 0.2s;

        .aBtn{
          transition: all .6s ease;
        }
      }
      a:hover{
        border-color: rgba(0,0,0,.4);
        background: rgba(255,255,255,.4);
      }
      .active1{
        border-color: rgba(0,0,0,.4);
        background: rgba(255,255,255,.4);
      }
    }
  }
}
</style>

<template>
  <div class="banner">
    <!-- 切换图片部分 -->
    <div class="bannerImg" >
      <transition-group tag="div">
        <span v-for="(v , i) in imgs" :key="i" :style="{opacity:(i+1) == n?'1':'0'}" class="active">
          <img :src="v" width="100%" height="100%">
        </span>
      </transition-group>
    </div>
    <!-- 切换的小按钮部分 -->
    <ul class="bannerBtn">
      <li v-for="num in 5" :key="num">
        <a href="javascript:;" :class="num === n ? 'active1' : ''" class="aBtn" @click="change(num)"></a>
      </li>
    </ul>

    <div class="home-hero-control-next" @click="HomeNext()">
      <Icon type="ios-arrow-forward" />
    </div>
    <div class="home-hero-control-prod" @click="HomeProd()">
      <Icon type="ios-arrow-back" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgs: [
        'https://i1.mifile.cn/a4/xmad_15373474221021_wfYMQ.jpg',
        'https://i1.mifile.cn/a4/xmad_15375484702231_Zobxf.jpg',
        'https://i1.mifile.cn/a4/xmad_15330248768001_ijRIJ.jpg',
        'https://i1.mifile.cn/a4/xmad_15338982677936_eQTJk.jpg',
        'https://i1.mifile.cn/a4/xmad_15375492594875_KjgDo.jpg'
      ],
      n: 1,
      bFlag: true, // 锁定
      timer1: '', // 这是bFlag定时器的数据
      timer2: '', // 这是自动播放定时器的数据
      timer3: ''// 这是打开浏览器时,初始运动定时器的数据
    }
  },
  methods: {
    next () {
      // 下一张
      // 为了避免连续点击,让bFlag运动结束后再变为TURE
      if (this.bFlag) {
        this.bFlag = false
        this.clearT() // 运动之前 清除所有的定时器
        this.n = this.n + 1 === 6 ? 1 : this.n + 1 // 下一张 如果是最后一张 就返回第一张
        // 调用timeout函数,延迟进入下一次轮播,以便可以切换
        this.timeout()
      }
    },
    clearT () {
      // 清楚所有的定时器
      clearTimeout(this.timer1)
      clearTimeout(this.timer2)
      clearTimeout(this.timer3)
    },
    timeout () {
      // 运动结束后设置bFlag为ture 并且3秒后调用next 进行下一次运动
      // 延时时间是1s
      this.timer2 = setTimeout(() => {
        this.bFlag = true
      }, 1000)
      this.timer1 = setTimeout(() => {
        this.next()
      }, 3000)
    },
    change (num) {
      // 点击按钮,切换到对应的图片 需要获取index
      if (this.bFlag) {
        this.bFlag = false
        this.clearT()
        this.n = num
        this.timeout()
      }
    },
    HomeNext () {
      console.log('next')
      if (this.bFlag) {
        this.bFlag = false
        this.clearT()
        this.n = this.n + 1 === 6 ? 1 : this.n + 1
        this.timeout()
      }
    },
    HomeProd () {
      console.log('prod')
      if (this.bFlag) {
        this.bFlag = false
        this.clearT()
        this.n = this.n - 1 === 0 ? 5 : this.n - 1
        this.timeout()
      }
    }
  },
  mounted () {
    this.timer3 = setTimeout(this.next, 3000)
  }
}
</script>
