export default {
  TopBarNav (state) {
    return state.TopBarNav
  },
  HeaderNav (state) {
    return state.HeaderNav
  },
  KeyWordList (state) {
    return state.KeyWordList
  },
  HomeHero (state) {
    return state.HomeHero[state.currentIndex]
  },
  siteCategoryList (state) {
    return state.siteCategoryList
  },
  SiteListItem (state) {
    return state.SiteListItem1
  }
}
