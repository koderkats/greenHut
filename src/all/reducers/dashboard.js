import g from '../global'

const dashboard = function(state, action) {
  console.log(action.tab)
  return g.which(action.type, {
    'DASHBOARD_BRIDGE_HEIGHT': Object.assign({}, state, {
      bridgeHeight: state.bridgeHeight,
    }),
    'DASHBOARD_SELECT_TAB': Object.assign({}, state, {
      activeTab: action.tab,
    }),
  }, state);
}

export default dashboard