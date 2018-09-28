<template>
  <div>

    <!-- 开始闪购 -->
    <Layout style="background:rgba(0,0,0,0)">
      <div class="container">
        <div class="xm-flashPurchase">

          <!-- 上部控件 -->
          <div class="box-hd">
            <h2 class="title">
              小米闪购
            </h2>
            <div class="more">
              <div class="xm-controls">
                <a href="javascript:;" @click="back">
                  <Icon type="ios-arrow-back" />
                </a>
                <a href="javascript:;" @click="forward">
                  <Icon type="ios-arrow-forward" />
                </a>
                <!-- <a href=""></a> -->
              </div>
            </div>
          </div>

          <!-- 下部内容 -->
          <div class="box-bd">
            <div class="goods-list">

              <div class="xm-flashPurchase-countdown">
                <div class="rainbow">
                  <div class="time-title">
                    14:00场
                  </div>
                  <img src="https://i1.mifile.cn/f/i/2018/mihome/flashpurchase.png" style="margin:25px auto">
                  <div style="font-size:15px;color:rgba(0,0,0,.54)">
                    距离结束还有
                  </div>
                  <div class="countdown">
                    <div class="box">00</div>
                    <div class="dosh">:</div>
                    <div class="box">00</div>
                    <div class="dosh">:</div>
                    <div class="box">00</div>
                  </div>
                </div>

              </div>

              <div class="xm-carousel-wrapper">
                <ul class="xm-flashPurchase-list" ref="flashPurchase">
                  <li class="item-rainbow-item1">
                    <div class="content">
                      <a href="" class="thumb">
                        <img src="https://i8.mifile.cn/b2c-mimall-media/f761e7e5b93733377f433caf07767e80.jpg" alt="" width="160px" height="160px">
                      </a>
                      <h3 class="title">最生活毛巾•Air（10条装）白色</h3>
                      <p class= "desc">超值家庭装 轻柔速干</p>
                      <p class="price">
                        <span>69</span>
                        <span>元</span>
                        <del>169元</del>
                      </p>
                      <div class="flag">
                        立减100
                      </div>
                    </div>
                  </li>
                  <li class="item-rainbow-item2">
                    <div class="content">
                      <a href="" class="thumb">
                        <img src="https://i8.mifile.cn/a1/pms_1519379265.35855394.jpg" alt="" width="160px" height="160px">
                      </a>
                      <h3 class="title">TS太阳镜 旅行者款 米家定制 灰色</h3>
                      <p class= "desc">轻装上阵才够酷</p>
                      <p class="price">
                        <span>9.9</span>
                        <span>元</span>
                        <del>249元</del>
                      </p>
                    </div>
                  </li>
                  <li class="item-rainbow-item3">
                    <div class="content">
                      <a href="" class="thumb">
                        <img src="https://i8.mifile.cn/v1/a1/T1bXKjBQAT1RXrhCrK.jpg" alt="" width="160px" height="160px">
                      </a>
                      <h3 class="title">彩虹7号电池（10粒装）</h3>
                      <p class= "desc">无汞无镉 环保电池</p>
                      <p class="price">
                        <span>1</span>
                        <span>元</span>
                        <del>9.9元</del>
                      </p>
                      <div class="flag">
                        1元秒杀
                      </div>
                    </div>
                  </li>
                  <li class="item-rainbow-item4">
                    <div class="content">
                      <a href="" class="thumb">
                        <img src="https://i8.mifile.cn/a1/pms_1515404353.30152325.jpg" alt="" width="160px" height="160px">
                      </a>
                      <h3 class="title">小米移动电源2 (5000mAh版) 银色</h3>
                      <p class= "desc">锂聚合物电芯，轻巧便捷</p>
                      <p class="price">
                        <span>1</span>
                        <span>元</span>
                        <del>49元</del>
                      </p>
                      <div class="flag">
                        1元秒杀
                      </div>
                    </div>
                  </li>
                  <li class="item-rainbow-item5">
                    <div class="content">
                      <a href="" class="thumb">
                        <img src="https://i8.mifile.cn/a1/pms_1522045442.77884978.jpg" alt="" width="160px" height="160px">
                      </a>
                      <h3 class="title">小米蓝牙项圈耳机 灰色</h3>
                      <p class= "desc">时尚外观，挂在脖子上的好耳机</p>
                      <p class="price">
                        <span>278</span>
                        <span>元</span>
                        <del>299元</del>
                      </p>
                    </div>
                  </li>
                  <li class="item-rainbow-item6">
                    <div class="content">
                      <a href="" class="thumb">
                        <img src="https://i8.mifile.cn/v1/a1/761af25d-aebe-7568-dc6d-08e0690d69d2.png" alt="" width="160px" height="160px">
                      </a>
                      <h3 class="title">米家电水壶 白色</h3>
                      <p class= "desc">一杯水，是一家人的安心</p>
                      <p class="price">
                        <span>88</span>
                        <span>元</span>
                        <del>99元</del>
                      </p>
                    </div>
                  </li>
                  <li class="item-rainbow-item7">
                    <div class="content">
                      <a href="" class="thumb">
                        <img src="https://i8.mifile.cn/a1/pms_1515737497.85325115.jpg" alt="" width="160px" height="160px">
                      </a>
                      <h3 class="title">米家车载逆变器 白色</h3>
                      <p class= "desc">双USB充电口，国际组合插孔</p>
                      <p class="price">
                        <span>188</span>
                        <span>元</span>
                        <del>199元</del>
                      </p>
                    </div>
                  </li>
                  <li class="item-rainbow-item8">
                    <div class="content">
                      <a href="" class="thumb">
                        <img src="https://i8.mifile.cn/b2c-mimall-media/08644e206fefec1b6bade74f2d62caa7.jpg" alt="" width="160px" height="160px">
                      </a>
                      <h3 class="title">米兔积木矿山卡车 白色</h3>
                      <p class= "desc">小零件，拼接出大乐趣</p>
                      <p class="price">
                        <span>88</span>
                        <span>元</span>
                        <del>99元</del>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </Layout>
    <!-- 结束闪购 -->

    <Layout style="background:rgba(0,0,0,0)">
      <div class="container">
        <div class="home-banner-box-hero">
          <img src="https://i1.mifile.cn/a4/xmad_15283599920813_VWpSg.jpg" alt="" width="1226px">
        </div>
      </div>
    </Layout>
  </div>
</template>
<script>
import './HP2.scss'
export default {
  methods: {
    forward () {
      this.$refs.flashPurchase.style.marginLeft = '-992px'
    },
    back () {
      this.$refs.flashPurchase.style.marginLeft = '0px'
    }
  }
}
</script>
