export default function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers)
  return function combination(state = {}, action) {
    let changed = false
    const newState = {}
    reducerKeys.forEach(key => {
      const reducer = reducers[key]
      const prevState = state[key]
      const nextState = reducer(prevState, action)
      newState[key] = nextState
      changed = changed || nextState !== prevState
    })
    return changed ? newState : state
  }
}