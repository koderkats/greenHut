import { types } from "./reducers";
export const useActions = (state, dispatch) => {

  function incrementCounter(newTech) {
    if (state.counter < 100) {
      console.log('counter less than 100');
    } else {
      dispatch({ type: types.INCREMENT_COUNTER, data: 'someData' });
    }
  }

  return {
    incrementCounter,
  };

};