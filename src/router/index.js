import Vue from 'vue'
import Router from 'vue-router'
// import text from '@/components/text'
import HP1 from '@/components/HP1/HP1'
import HP2 from '@/components/HP2/HP2'
import HP3 from '@/components/HP3/HP3'
Vue.use(Router)

const routes = [
  {
    path: '/',
    components: {

      HP1: HP1,
      HP2: HP2,
      HP3: HP3
    }
  }
]

export default new Router({
  routes
})
