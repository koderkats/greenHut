import g from '../global'

const counter = function(state, action) {
  return g.which(action.type, {
    'COUNTER_DECREMENT': Object.assign({}, state, {
      count: state.count - 1,
    }),
    'COUNTER_INCREMENT': Object.assign({}, state, {
      count: state.count + 1,
    }),
  }, state);
}

export default counter