import * as Types from './mutations-types'

export default {
  [Types.PREV_NEXT] (state, type) {
    let currentIndex = state.currentIndex
    let num = state.HomeHero.length
    if (type === 'prev') {
      currentIndex = (currentIndex - 1 + num) % num
    } else {
      currentIndex = (currentIndex + 1 + num) % num
    }
    state.currentIndex = currentIndex
  }
}
