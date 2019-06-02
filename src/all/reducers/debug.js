import g from '../global'

const debug = function(state, action) {
  return g.which(action.type, {
    'DEBUG_TOGGLE_MAXIMIZED': Object.assign({}, state, {
      isMaximized: !state.isMaximized,
    }),
  }, state);  
}

export default debug