<template>
  <div class="top-header">
    <!-- 顶部导航 -->
    <Layout>
      <a href="https://www.mi.com/a/h/7095.html?client_id=180100041086&masid=17490.0435">
        <Header class="site-bn-bar">
        </Header>
      </a>
      <Footer>
        <div class="container">

          <div class="topbar-nav">
            <a :href="item.href" v-for="item in TopBarNav" :key="item.id">
              <span class="topbar-nav-name">{{item.name}}</span>
              <span class = "sep">|</span>
            </a>
          </div>

          <!-- 购物车模块 -->
          <div class="topbar-cart" @mouseover="show" @mouseout="noShow">
            <a class="cart-mini" style="font-size:12px" :class="isShow? 'show' : '' " >
              <Icon type="ios-cart" />
              购物车
              <span class="cart-mini-num">(0)</span>
            </a>
            <div class="cart-menu" v-show="isShow">
              <div style="margin:30px 20px 20px;text-align:center;font-size:12px">
                购物车中还没有商品,赶紧选购把!
              </div>
            </div>
          </div>
          <!-- 登录注册模块 -->
          <div class="topbar-info">
            <a href="" class="link">登录</a>
            <span class="sep"></span>
            <a href="" class="link">注册</a>
            <span class="sep"></span>
            <a href="" class="link">消息通知</a>
          </div>
        </div>
      </Footer>
    </Layout>

    <!-- 网页导航和轮播图 -->
    <Layout class="site-header">
      <!-- 网页导航 -->
      <Header>
        <div class="container">
          <!-- 网页图标 -->
          <div class="header-logo">
            <a href="https://www.mi.com/index.html" class="logo"></a>
          </div>
          <div class="doole">
            <a href="https://www.mi.com/a/h/7095.html?client_id=180100041086&masid=17490.0435" class="doole-logo"></a>
          </div>

          <!-- 网页导航列表 -->
          <div class="header-nav">
            <ul class="nav-list" >
              <li class="nav-item" v-for="(value , index) in HeaderNav" :key="index"  :class="`list-item-${index}`"   @mouseover="menuShow(index)" @mouseout="noMenuShow">
                <a class="link">
                  {{value.name}}
                </a>
              </li>
              <li class="nav-item">
                <a href="https://www.mi.com/service/" class="link">
                  服务
                </a>
              </li>
              <li class="nav-item">
                <a href="http://www.xiaomi.cn/" class="link">
                  社区
                </a>
              </li>
            </ul>
          </div>

          <!-- 网页头部搜索 -->
          <div class="header-search">
            <form class="search-form">
              <label for="search" style="display:none !important">
                站内搜索
              </label>
              <input class="search-text" type="search" @focus="keyShow" @blur="nokeyShow" v-model="search" >
              <input class="search-btn"  type="submit" value="">
              <Icon type="ios-search"  />
              <div class="search-hot-words" v-show="isHotShow" style="transition:display .2s">
               <a href="https://www.mi.com/mi8/">小米8</a>
               <a href="https://www.mi.com/mi8/">小米MIX 2S</a>
              </div>
              <div class="keyword-list" v-show="iskeyshow" >
                <ul class="result-list">
                  <li>
                    <a href="">
                      <span class="keyword">
                        {{search}}
                      </span>
                    </a>
                  </li>
                  <li v-for="value in KeyWordList" :key="value.id" >
                    <a :href="value.href">
                      <span class="keyword"> {{value.name}} </span>
                      <span class="result">{{value.result}}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>

          <div class="header-nav-menu" v-show="isHeaderNav" @mouseover="menuShoww" @mouseout="noMenuShow">
              <!-- <div class="container"></div> -->
          </div>

        </div>
      </Header>

      <!-- 轮播图 -->
      <Content>
        <div class="container">
          <div class="home-hero">
            <home-hero1></home-hero1>
          </div>
          <!-- <div class="site-category">
            <ul class="site-category-list">
              <li v-for="(value , index ) in siteCategoryList" :key="index" @mouseover="category(index)">
                <a href="" class="title" :class="`${index}`">
                  {{value.name}}
                  <Icon type="ios-arrow-forward" />
                </a>
              </li>
            </ul>
          </div> -->
          <site-category></site-category>
        </div>
      </Content>

      <Footer>
        <div class="container">
          <div class="home-hero-sub">
            <Row>
              <Col span="5" class="span4">
                <Row style="height:50%">
                  <Col span="8">选购手机</Col>
                  <Col span="8">企业团购</Col>
                  <Col span="8">F码通道</Col>
                </Row>
                <Row style="height:50%">
                  <Col span="8" class="col-8">不限量卡</Col>
                  <Col span="8" class="col-8">以旧换新</Col>
                  <Col span="8" class="col-8">话费充值</Col>
                </Row>
              </Col>
              <Col span="16" class="span16" >
                <Row style="height:100%" type="flex" justify="space-between">
                  <Col span="7" style="background:yellow">
                    <img src="https://i1.mifile.cn/a4/xmad_15357321762296_Bpfsv.jpg" width="100%" height="100%">
                  </Col>
                  <Col span="7" style="background:pink">
                    <img src="https://i1.mifile.cn/a4/xmad_15350224111785_ASnBL.jpg" width="100%" height="100%">
                  </Col>
                  <Col span="7" style="background:green">
                    <img src="https://i1.mifile.cn/a4/df7c6d47-c09f-49d1-9a9f-df0d2294bec8" width="100%" height="100%">
                  </Col>
                </Row>
              </Col>
            </Row>

          </div>
        </div>
      </Footer>
    </Layout>
  </div>
</template>

<script>
import SiteCategory from './SiteCategoryList/SiteCategory'
import HomeHero1 from './HomeHero1'
import HomeHero from './HomeHero'
import {mapGetters, mapMutations} from 'vuex'
import './HomePage.scss'
export default {
  data () {
    return {
      search: '',
      isShow: false,
      iskeyshow: false,
      isHotShow: true,
      isHeaderNav: false
    }
  },
  components: {
    HomeHero,
    HomeHero1,
    SiteCategory
  },
  computed: {
    ...mapGetters(['TopBarNav', 'HeaderNav', 'KeyWordList', 'HomeHero', 'siteCategoryList', 'SiteListItem'])
  },
  methods: {
    ...mapMutations(['PREV_NEXT', 'START_CHANGE', 'TEST']),
    category (i) {
      console.log(i)
    },
    show () {
      this.isShow = true
    },
    noShow () {
      this.isShow = false
    },
    keyShow () {
      this.iskeyshow = true
      this.isHotShow = false
    },
    nokeyShow () {
      this.iskeyshow = false
      this.isHotShow = true
    },
    menuShow (i) {
      // const node = document.querySelector(`.list-item-${i}`)
      console.log(i)
      this.isHeaderNav = true
    },
    menuShoww () {
      this.isHeaderNav = true
    },
    noMenuShow () {
      this.isHeaderNav = false
    }
  }
}
</script>
