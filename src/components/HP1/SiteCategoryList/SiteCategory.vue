<template>
  <div class="SiteCategory" >
    <ul class="site-category-list">
      <li v-for="(value , index ) in tab" :key="index" @mouseover="change(index)" @mouseout="out" >
        <a  href="javascript:;"  class="title">
          {{value.name}}
          <Icon type="ios-arrow-forward" />
        </a>
      </li>
    </ul>
    <component :is="who" v-show="isShow" @mouseover="cShow"></component>
  </div>
</template>
<script>
import Comp1 from './Comp/Comp1'
import Comp2 from './Comp/Comp2'
import Comp3 from './Comp/Comp3'
import Comp4 from './Comp/Comp4'
import Comp5 from './Comp/Comp5'
import Comp6 from './Comp/Comp6'
import Comp7 from './Comp/Comp7'
import Comp8 from './Comp/Comp8'
import Comp9 from './Comp/Comp9'
import Comp10 from './Comp/Comp10'
import './SiteCategory.scss'
export default {
  components: {
    'com1': Comp1,
    'com2': Comp2,
    'com3': Comp3,
    'com4': Comp4,
    'com5': Comp5,
    'com6': Comp6,
    'com7': Comp7,
    'com8': Comp8,
    'com9': Comp9,
    'com10': Comp10
  },
  data () {
    return {
      isShow: true,
      active: [false, false, false, false, false, false, false, false, false, false],
      who: '',
      tab: [
        {
          'name': '手机 电话卡',
          'fnc': 'com1'
        },
        {
          name: '电视 盒子',
          'fnc': 'com2'
        },
        {
          name: '笔记本 平板',
          'fnc': 'com3'
        },
        {
          name: '家电 插线板',
          'fnc': 'com4'
        },
        {
          name: '出行 穿戴',
          'fnc': 'com5'
        },
        {
          name: '智能 路由器',
          'fnc': 'com6'
        },
        {
          name: '电源 配件',
          'fnc': 'com7'
        },
        {
          name: '健康 儿童',
          'fnc': 'com8'
        },
        {
          name: '耳机 音响',
          'fnc': 'com9'
        },
        {
          name: '生活 钱包',
          'fnc': 'com10'
        }
      ]
    }
  },
  methods: {
    cShow () {
      this.isShow = true
    },
    change (x) {
      for (var i = 0; i < this.active.length; i++) {
        this.active[i] = false
        this.active[x] = true
        this.who = this.tab[x].fnc
      }
      // console.log(this.active)
      // console.log(this.who)
      this.$set(this.active, 10, 0)
      // console.log(x)
    },
    out () {
      this.who = ''
    }
  }
}
</script>
