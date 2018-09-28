<template>
  <div>
    <div class="stop" @mouseover="STOP">
      <transition-group name="flip-list" tag="ul">
      <li v-for="curImg in currImgs" v-bind:key="curImg">
        <img :src="curImg" width="100%" height="100%">
      </li>
    </transition-group>
    </div>

    <div class="home-hero-control-next" @click="PREV_NEXT('next')">
        <Icon type="ios-arrow-forward" />
    </div>
    <div class="home-hero-control-prod" @click="PREV_NEXT('prev')">
        <Icon type="ios-arrow-back" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currImgs: [],
      imgs: [
        'https://i1.mifile.cn/a4/xmad_15373474221021_wfYMQ.jpg',
        'https://i1.mifile.cn/a4/xmad_15375484702231_Zobxf.jpg',
        'https://i1.mifile.cn/a4/xmad_15330248768001_ijRIJ.jpg',
        'https://i1.mifile.cn/a4/xmad_15338982677936_eQTJk.jpg',
        'https://i1.mifile.cn/a4/xmad_15375492594875_KjgDo.jpg'
      ],
      index: 0
    }
  },
  mounted () {
    this.currImgs = [this.imgs[0]]
    this.startChange()
  },
  methods: {
    startChange: function () {
      let _this = this
      setInterval(function () {
        if (_this.index < _this.imgs.length - 1) {
          _this.index++
        } else {
          _this.index = 0
        }
        _this.currImgs.splice(0, 1, _this.imgs[_this.index])
      }, 3000)
    },
    STOP () {
      console.log('object')
      // clearInterval(this.startChange())
    }
  }
}
</script>
