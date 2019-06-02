import g from '../global'

const components = function(state, action) {
  console.log(state)
  return g.which(action.type, {
    'WINDOW_RESIZE': Object.assign({}, state, {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      dashboardContentHeight:window.innerHeight - document.querySelector(`.AppHeader`).clientHeight - document.querySelector(`.DashboardBridge`).clientHeight,
      dashbardBridgeHeight:document.querySelector(`.DashboardBridge`).clientHeight,
      appHeaderHeight:document.querySelector(`.AppHeader`).clientHeight,	
    }),
  }, state);
}

export default components