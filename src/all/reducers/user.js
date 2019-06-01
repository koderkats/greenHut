import g from '../global'

const user = function(state, action) {
  return g.which(action.type, {
    'USER_ID': Object.assign({}, state, {
      count: state.id,
    }),
    'USER_ALIAS': Object.assign({}, state, {
      count: state.alias,
    }),
  }, state);
}

export default user